import { useEffect, useRef, useState } from 'react';
import {
  Download,
  Eraser,
  ImagePlus,
  Save,
  Trash2,
  X,
} from 'lucide-react';
import { PracticeUpload, StrokeTemplateId } from '../types';
import { compressImageFile, formatVietnameseDate } from '../utils/storage';

interface PracticeRoomPageProps {
  uploads: PracticeUpload[];
  onAddUpload: (upload: PracticeUpload) => void;
  onDeleteUpload: (id: string) => void;
  onNotify: (text: string, type?: 'success' | 'error') => void;
}

const STROKE_TEMPLATES: {
  id: StrokeTemplateId;
  label: string;
  hint: string;
}[] = [
  {
    id: 'straight',
    label: 'Đường thẳng',
    hint: 'Giữ thân bút đứng thẳng, kéo chậm đều từ đầu đến cuối đường dẫn mờ.',
  },
  {
    id: 'curve',
    label: 'Đường cong',
    hint: 'Đưa cả cẳng tay theo đường uốn sóng êm ái, tránh gãy góc ở đỉnh sóng.',
  },
  {
    id: 'circle',
    label: 'Vòng tròn',
    hint: 'Bắt đầu từ vị trí ~2 giờ, đi ngược chiều kim đồng hồ và giảm lực nhẹ khi khép vòng.',
  },
  {
    id: 'dot',
    label: 'Nét chấm',
    hint: 'Chạm nhẹ chóp bút -> trượt ngắn ấn nhẹ -> dừng 0,2 giây rồi nhấc gọn.',
  },
  {
    id: 'horizontal',
    label: 'Nét ngang',
    hint: 'Dừng nhẹ ở điểm khởi đầu, kéo ngang hơi nâng 2–3° và thu nhẹ ở điểm cuối.',
  },
  {
    id: 'vertical',
    label: 'Nét dọc',
    hint: 'Nhìn trước điểm đích bên dưới rồi hạ cánh tay kéo thẳng xuống vững vàng.',
  },
  {
    id: 'thin-thick',
    label: 'Thanh & đậm',
    hint: 'Di chuyển chậm khi ấn xuống tạo nét rộng, tăng tốc nhẹ nhàng hoặc nhấc tay để tạo nét mảnh.',
  },
  {
    id: 'free',
    label: 'Tự do',
    hint: 'Bảng trống để thầy tự do thử nghiệm viết chữ cái hoặc câu ngắn.',
  },
];

const PRACTICE_REMINDERS = [
  'Học chậm, quan sát kỹ.',
  'Không cần viết đẹp ngay từ lần đầu.',
  'Ưu tiên sự thoải mái và kiểm soát chuyển động.',
  'Luyện bằng nước trước khi chuyển sang mực.',
  'Kiên nhẫn với từng nét bút.',
];

export function PracticeRoomPage({
  uploads,
  onAddUpload,
  onDeleteUpload,
  onNotify,
}: PracticeRoomPageProps) {
  const [template, setTemplate] = useState<StrokeTemplateId>('straight');
  const [surfaceMode, setSurfaceMode] = useState<'water-cloth' | 'ink-paper'>('water-cloth');
  const [brushSize, setBrushSize] = useState<number>(18);
  const [hasDrawn, setHasDrawn] = useState(false);

  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState<'practice' | 'artwork'>('practice');
  const [isUploading, setIsUploading] = useState(false);
  const [previewItem, setPreviewItem] = useState<PracticeUpload | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number; time: number; width: number } | null>(
    null
  );

  const activeTemplate = STROKE_TEMPLATES.find((t) => t.id === template) ?? STROKE_TEMPLATES[0];

  // Clear and initialize drawing canvas when switching surface mode
  const resetCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  useEffect(() => {
    resetCanvas();
  }, [surfaceMode]);

  const getPointerPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);
    const pos = getPointerPos(e);
    const now = performance.now();
    const initialWidth = brushSize * 0.72;

    isDrawingRef.current = true;
    lastPointRef.current = { x: pos.x, y: pos.y, time: now, width: initialWidth };
    setHasDrawn(true);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = surfaceMode === 'water-cloth' ? '#171513' : '#24201B';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, initialWidth / 2, 0, Math.PI * 2);
    ctx.fill();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !lastPointRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pos = getPointerPos(e);
    const now = performance.now();
    const prev = lastPointRef.current;

    const dx = pos.x - prev.x;
    const dy = pos.y - prev.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 1.5) return;

    const dt = Math.max(1, now - prev.time);
    const velocity = dist / dt; // px per ms

    // Simulate brush dynamics: slower strokes hold more ink/pressure -> wider; faster strokes -> thinner
    const pressureFactor =
      e.pressure && e.pressure > 0 && e.pressure !== 0.5 ? e.pressure * 1.4 : 1;
    const targetWidth = Math.max(
      brushSize * 0.28,
      Math.min(brushSize * 1.35, (brushSize * 1.15 - velocity * 5.2) * pressureFactor)
    );
    const smoothWidth = prev.width * 0.65 + targetWidth * 0.35;

    ctx.strokeStyle = surfaceMode === 'water-cloth' ? '#171513' : '#24201B';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = smoothWidth;

    ctx.beginPath();
    ctx.moveTo(prev.x, prev.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    lastPointRef.current = { x: pos.x, y: pos.y, time: now, width: smoothWidth };
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas && canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }
    isDrawingRef.current = false;
    lastPointRef.current = null;
  };

  // Export canvas combined with paper/cloth backdrop + guide lines if desired
  const buildCompositeCanvas = (includeGuides: boolean) => {
    const drawingCanvas = canvasRef.current;
    if (!drawingCanvas) return null;

    const out = document.createElement('canvas');
    out.width = drawingCanvas.width;
    out.height = drawingCanvas.height;
    const ctx = out.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = surfaceMode === 'water-cloth' ? '#403B34' : '#FFFCF6';
    ctx.fillRect(0, 0, out.width, out.height);

    if (includeGuides) {
      ctx.strokeStyle =
        surfaceMode === 'water-cloth' ? 'rgba(244,235,221,0.16)' : 'rgba(118,100,78,0.18)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(0, out.height / 2);
      ctx.lineTo(out.width, out.height / 2);
      ctx.moveTo(out.width / 2, 0);
      ctx.lineTo(out.width / 2, out.height);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    ctx.drawImage(drawingCanvas, 0, 0);
    return out;
  };

  const handleSaveCanvasToGallery = () => {
    if (!hasDrawn) {
      onNotify('Thầy hãy thử viết vài nét lên bảng trước khi lưu nhé.', 'error');
      return;
    }
    const out = buildCompositeCanvas(false);
    if (!out) return;
    const dataUrl = out.toDataURL('image/jpeg', 0.88);
    const newItem: PracticeUpload = {
      id: `practice-${Date.now()}`,
      title: `Luyện ${activeTemplate.label.toLowerCase()}`,
      dataUrl,
      createdAt: new Date().toISOString(),
      category: 'practice',
      note:
        surfaceMode === 'water-cloth'
          ? 'Thực hành trên bảng mô phỏng vải nước ô mễ'
          : 'Thực hành trên bảng mô phỏng giấy mực',
    };
    onAddUpload(newItem);
    onNotify('Đã lưu bài luyện nét vào Góc lưu bài thực hành.');
  };

  const handleDownloadWorksheet = () => {
    const out = buildCompositeCanvas(true);
    if (!out) return;
    const link = document.createElement('a');
    link.download = `net-muc-luyen-${template}.png`;
    link.href = out.toDataURL('image/png');
    link.click();
    onNotify('Đã tải xuống tờ luyện tập dưới dạng ảnh PNG.');
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      onNotify('Vui lòng chọn tệp hình ảnh (JPG, PNG, WEBP).', 'error');
      return;
    }

    setIsUploading(true);
    try {
      const compressedDataUrl = await compressImageFile(file);
      const cleanName =
        uploadTitle.trim() ||
        file.name.replace(/\.[^/.]+$/, '') ||
        'Bài luyện tập';

      const newItem: PracticeUpload = {
        id: `upload-${Date.now()}`,
        title: cleanName,
        dataUrl: compressedDataUrl,
        createdAt: new Date().toISOString(),
        category: uploadCategory,
      };
      onAddUpload(newItem);
      setUploadTitle('');
      onNotify('Đã tải ảnh bài thực hành lên thành công.');
    } catch {
      onNotify('Không thể xử lý ảnh này. Thầy vui lòng thử ảnh khác.', 'error');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Faint SVG template overlay matched to selected stroke exercise
  const renderGuideOverlay = () => {
    const strokeColor =
      surfaceMode === 'water-cloth' ? 'rgba(244,235,221,0.28)' : 'rgba(118,100,78,0.28)';
    const gridColor =
      surfaceMode === 'water-cloth' ? 'rgba(244,235,221,0.12)' : 'rgba(217,203,183,0.65)';

    return (
      <svg
        viewBox="0 0 800 420"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        preserveAspectRatio="none"
      >
        {/* Soft reference grid */}
        <line x1="0" y1="210" x2="800" y2="210" stroke={gridColor} strokeWidth="1" strokeDasharray="6 6" />
        <line x1="400" y1="0" x2="400" y2="420" stroke={gridColor} strokeWidth="1" strokeDasharray="6 6" />
        <rect x="24" y="24" width="752" height="372" fill="none" stroke={gridColor} strokeWidth="1" />

        {template === 'straight' && (
          <g stroke={strokeColor} strokeWidth="3" strokeDasharray="8 8" fill="none">
            <line x1="80" y1="105" x2="720" y2="105" />
            <line x1="80" y1="210" x2="720" y2="210" />
            <line x1="80" y1="315" x2="720" y2="315" />
          </g>
        )}

        {template === 'curve' && (
          <g stroke={strokeColor} strokeWidth="3" strokeDasharray="8 8" fill="none">
            <path d="M 80 150 C 160 70, 240 70, 320 150 C 400 230, 480 230, 560 150 C 640 70, 690 95, 720 140" />
            <path d="M 80 290 C 160 210, 240 210, 320 290 C 400 370, 480 370, 560 290 C 640 210, 690 235, 720 280" />
          </g>
        )}

        {template === 'circle' && (
          <g stroke={strokeColor} strokeWidth="3" strokeDasharray="8 8" fill="none">
            <circle cx="200" cy="210" r="85" />
            <circle cx="400" cy="210" r="85" />
            <circle cx="600" cy="210" r="85" />
          </g>
        )}

        {template === 'dot' && (
          <g fill={strokeColor}>
            {[160, 280, 400, 520, 640].map((x) => (
              <g key={x}>
                <path d={`M ${x - 14} 115 C ${x + 4} 120, ${x + 22} 142, ${x + 16} 162 C ${x + 4} 166, ${x - 12} 145, ${x - 14} 115 Z`} />
                <circle cx={x} cy="285" r="14" />
              </g>
            ))}
          </g>
        )}

        {template === 'horizontal' && (
          <g stroke={strokeColor} strokeWidth="6" strokeLinecap="round" fill="none">
            <line x1="110" y1="110" x2="690" y2="100" />
            <line x1="110" y1="210" x2="690" y2="200" />
            <line x1="110" y1="310" x2="690" y2="300" />
          </g>
        )}

        {template === 'vertical' && (
          <g stroke={strokeColor} strokeWidth="6" strokeLinecap="round" fill="none">
            {[160, 280, 400, 520, 640].map((x) => (
              <line key={x} x1={x} y1="75" x2={x} y2="345" />
            ))}
          </g>
        )}

        {template === 'thin-thick' && (
          <g fill={strokeColor}>
            <path d="M 100 135 C 210 132, 310 108, 400 108 C 490 108, 590 132, 700 135 C 590 140, 490 162, 400 162 C 310 162, 210 140, 100 135 Z" />
            <path
              d="M 120 315 L 220 225 L 320 315 L 420 225 L 520 315 L 620 225 L 700 305"
              fill="none"
              stroke={strokeColor}
              strokeWidth="4"
              strokeDasharray="8 6"
            />
          </g>
        )}
      </svg>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-3 border-b border-[#D9CBB7] pb-6">
        <p className="text-xs font-medium tracking-wider text-[#9F392F] uppercase">
          Phòng luyện tập
        </p>
        <h1 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#29251F]">
          Bàn luyện thư pháp trực quan
        </h1>
        <p className="text-sm sm:text-base text-[#76644E] max-w-2xl">
          Thầy có thể khởi động cảm giác đường nét ngay trên bảng vẽ mô phỏng bên dưới bằng chuột hoặc cảm ứng tay, tải phiếu kẻ mờ về tập trên giấy, và lưu lại ảnh các trang viết thật của mình.
        </p>
      </header>

      {/* Section 1: Two-Zone Interactive Practice Desk */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left/Top Stage: Interactive Canvas (8 cols) */}
        <div className="lg:col-span-8 bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-4 sm:p-5 space-y-4">
          {/* Stroke Template Selector */}
          <div className="flex flex-wrap items-center gap-1.5">
            {STROKE_TEMPLATES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTemplate(item.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  template === item.id
                    ? 'bg-[#9F392F] text-[#FFFCF6]'
                    : 'bg-[#F4EBDD] text-[#29251F] hover:bg-[#EBE1D1]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Instruction bar for active stroke */}
          <div className="text-xs sm:text-sm text-[#76644E] bg-[#F4EBDD]/60 px-3.5 py-2.5 rounded border border-[#D9CBB7]/70">
            <strong className="text-[#29251F] font-medium">Gợi ý {activeTemplate.label}: </strong>
            {activeTemplate.hint}
          </div>

          {/* Drawing Surface */}
          <div
            className={`relative w-full aspect-[800/420] rounded-md overflow-hidden border touch-none select-none ${
              surfaceMode === 'water-cloth'
                ? 'bg-[#403B34] border-[#29251F]'
                : 'bg-[#FFFCF6] border-[#D9CBB7]'
            }`}
          >
            {renderGuideOverlay()}
            <canvas
              ref={canvasRef}
              width={800}
              height={420}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="relative z-10 w-full h-full cursor-crosshair block"
            />
          </div>

          {/* Canvas Bottom Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={resetCanvas}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-[#F4EBDD] hover:bg-[#EBE1D1] text-[#29251F] border border-[#D9CBB7] rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <Eraser className="w-3.5 h-3.5" />
                <span>{surfaceMode === 'water-cloth' ? 'Làm khô vải' : 'Xóa trang'}</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadWorksheet}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-[#FFFCF6] hover:bg-[#F4EBDD] text-[#29251F] border border-[#D9CBB7] rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tải phiếu luyện (PNG)</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleSaveCanvasToGallery}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-[#9F392F] hover:bg-[#852D24] text-[#FFFCF6] rounded-md transition-colors cursor-pointer whitespace-nowrap"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Lưu vào góc thực hành</span>
            </button>
          </div>
        </div>

        {/* Right Deck: Surface & Brush Controls + Practice Reminders (4 cols) */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-5 space-y-5">
            <h2 className="font-serif-display text-lg font-semibold text-[#29251F]">
              Tùy chỉnh bàn luyện
            </h2>

            {/* Surface Toggle */}
            <div className="space-y-2">
              <span className="block text-xs font-medium text-[#76644E]">
                Bề mặt mô phỏng
              </span>
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#F4EBDD] border border-[#D9CBB7] rounded-md">
                <button
                  type="button"
                  onClick={() => setSurfaceMode('water-cloth')}
                  className={`px-2.5 py-2 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                    surfaceMode === 'water-cloth'
                      ? 'bg-[#FFFCF6] text-[#29251F] shadow-xs'
                      : 'text-[#76644E] hover:text-[#29251F]'
                  }`}
                >
                  Vải nước ô mễ
                </button>
                <button
                  type="button"
                  onClick={() => setSurfaceMode('ink-paper')}
                  className={`px-2.5 py-2 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                    surfaceMode === 'ink-paper'
                      ? 'bg-[#FFFCF6] text-[#29251F] shadow-xs'
                      : 'text-[#76644E] hover:text-[#29251F]'
                  }`}
                >
                  Giấy & mực tàu
                </button>
              </div>
            </div>

            {/* Brush Width Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor="brush-size-range" className="font-medium text-[#76644E]">
                  Cỡ đầu bút mô phỏng
                </label>
                <span className="font-semibold text-[#29251F] tabular-nums">
                  {brushSize} px
                </span>
              </div>
              <input
                id="brush-size-range"
                type="range"
                min={8}
                max={34}
                step={2}
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="w-full accent-[#9F392F] cursor-pointer"
              />
              <p className="text-[11px] text-[#76644E]">
                Mẹo: Kéo chậm để tạo nét đầy đặn; kéo nhanh hơn một chút nét sẽ thu mảnh lại.
              </p>
            </div>
          </div>

          {/* Gentle Practice Reminders */}
          <div className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-5 space-y-3">
            <h2 className="font-serif-display text-lg font-semibold text-[#29251F]">
              Lời nhắc nhẹ khi luyện tập
            </h2>
            <ul className="space-y-2 text-sm text-[#29251F]/90">
              {PRACTICE_REMINDERS.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#9F392F] font-semibold tabular-nums">
                    {idx + 1}.
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* Section 2: Upload & Archive Real Practice Photos */}
      <section className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D9CBB7]/70 pb-5">
          <div className="space-y-1.5">
            <h2 className="font-serif-display text-2xl font-semibold text-[#29251F]">
              Góc lưu bài thực hành & tác phẩm
            </h2>
            <p className="text-sm text-[#76644E] max-w-2xl">
              Chụp ảnh trang vải nước hoặc tờ giấy viết thật từ điện thoại, máy tính và tải lên đây để lưu lại hành trình tiến bộ của thầy (dữ liệu được lưu trực tiếp trên trình duyệt này).
            </p>
          </div>
          <span className="text-xs text-[#76644E] tabular-nums shrink-0">
            Đã lưu {uploads.length} hình ảnh
          </span>
        </div>

        {/* Upload Form */}
        <div className="bg-[#F4EBDD]/60 border border-[#D9CBB7] rounded-lg p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-5 space-y-1.5">
            <label htmlFor="upload-title" className="block text-xs font-medium text-[#29251F]">
              Tên bài viết hoặc ghi chú ngắn
            </label>
            <input
              id="upload-title"
              type="text"
              value={uploadTitle}
              onChange={(e) => setUploadTitle(e.target.value)}
              placeholder="Ví dụ: Luyện nét ngang lần 1, Chữ An yên..."
              className="w-full px-3 py-2 text-sm bg-[#FFFCF6] border border-[#D9CBB7] rounded-md text-[#29251F] placeholder:text-[#76644E]/60 focus:outline-none focus:border-[#9F392F]"
            />
          </div>

          <div className="md:col-span-4 space-y-1.5">
            <span className="block text-xs font-medium text-[#29251F]">Phân loại lưu trữ</span>
            <div className="grid grid-cols-2 gap-1 p-1 bg-[#FFFCF6] border border-[#D9CBB7] rounded-md">
              <button
                type="button"
                onClick={() => setUploadCategory('practice')}
                className={`py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  uploadCategory === 'practice'
                    ? 'bg-[#29251F] text-[#FFFCF6]'
                    : 'text-[#76644E] hover:text-[#29251F]'
                }`}
              >
                Bài luyện tập
              </button>
              <button
                type="button"
                onClick={() => setUploadCategory('artwork')}
                className={`py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  uploadCategory === 'artwork'
                    ? 'bg-[#9F392F] text-[#FFFCF6]'
                    : 'text-[#76644E] hover:text-[#29251F]'
                }`}
              >
                Tác phẩm
              </button>
            </div>
          </div>

          <div className="md:col-span-3">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="practice-file-input"
            />
            <label
              htmlFor="practice-file-input"
              className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-[#9F392F] hover:bg-[#852D24] text-[#FFFCF6] rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                isUploading ? 'opacity-60 pointer-events-none' : ''
              }`}
            >
              <ImagePlus className="w-4 h-4" />
              <span>{isUploading ? 'Đang xử lý...' : 'Chọn ảnh tải lên'}</span>
            </label>
          </div>
        </div>

        {/* Saved Gallery Grid */}
        {uploads.length === 0 ? (
          <div className="py-10 text-center space-y-2 border border-dashed border-[#D9CBB7] rounded-lg">
            <p className="font-serif-display text-lg text-[#29251F]">
              Chưa có ảnh thực hành nào được lưu
            </p>
            <p className="text-sm text-[#76644E] max-w-md mx-auto">
              Thầy có thể nhấn “Lưu vào góc thực hành” từ bảng luyện nét phía trên hoặc tải ảnh chụp bài viết từ máy tính, điện thoại.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {uploads.map((item) => (
              <article
                key={item.id}
                className="bg-[#F4EBDD]/45 border border-[#D9CBB7] rounded-lg overflow-hidden flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setPreviewItem(item)}
                  className="aspect-[4/3] w-full overflow-hidden bg-[#EBE1D1] cursor-pointer group"
                >
                  <img
                    src={item.dataUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                  />
                </button>

                <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2 text-xs text-[#76644E]">
                      <span
                        className={
                          item.category === 'artwork'
                            ? 'text-[#9F392F] font-semibold'
                            : 'text-[#76644E]'
                        }
                      >
                        {item.category === 'artwork' ? 'Tác phẩm' : 'Bài luyện'}
                      </span>
                      <span className="tabular-nums">
                        {formatVietnameseDate(item.createdAt)}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-[#29251F] line-clamp-1">
                      {item.title}
                    </h3>
                    {item.note && (
                      <p className="text-xs text-[#76644E] line-clamp-1">{item.note}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#D9CBB7]/70">
                    <button
                      type="button"
                      onClick={() => setPreviewItem(item)}
                      className="text-xs font-medium text-[#29251F] hover:text-[#9F392F] cursor-pointer"
                    >
                      Xem ảnh lớn
                    </button>
                    <button
                      type="button"
                      onClick={() => onDeleteUpload(item.id)}
                      aria-label={`Xóa ảnh ${item.title}`}
                      className="inline-flex items-center gap-1 text-xs text-[#76644E] hover:text-[#9F392F] cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Xóa</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal for Viewing Uploaded Image */}
      {previewItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={previewItem.title}
          className="fixed inset-0 z-50 bg-[#29251F]/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setPreviewItem(null)}
        >
          <div
            className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg max-w-3xl w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 border-b border-[#D9CBB7] flex items-center justify-between gap-4">
              <div>
                <h3 className="font-serif-display text-lg font-semibold text-[#29251F]">
                  {previewItem.title}
                </h3>
                <p className="text-xs text-[#76644E] tabular-nums">
                  {previewItem.category === 'artwork' ? 'Tác phẩm' : 'Bài luyện'} · Ngày lưu:{' '}
                  {formatVietnameseDate(previewItem.createdAt)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewItem(null)}
                aria-label="Đóng xem ảnh"
                className="p-1.5 text-[#76644E] hover:text-[#29251F] rounded cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-[#F4EBDD] flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={previewItem.dataUrl}
                alt={previewItem.title}
                className="max-w-full max-h-[68vh] object-contain rounded border border-[#D9CBB7]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
