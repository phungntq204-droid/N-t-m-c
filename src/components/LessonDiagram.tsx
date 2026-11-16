import { VisualAidType } from '../types';

interface LessonDiagramProps {
  type: VisualAidType;
}

export function LessonDiagram({ type }: LessonDiagramProps) {
  const renderSchematic = () => {
    switch (type) {
      case 'desk-setup':
        return (
          <svg viewBox="0 0 420 220" className="w-full h-auto" aria-label="Sơ đồ bố trí bàn tập nước">
            {/* Thảm lót */}
            <rect x="40" y="30" width="240" height="160" rx="6" fill="#EBE1D1" stroke="#76644E" strokeWidth="1.2" />
            <text x="52" y="48" fontSize="10" fill="#76644E">Thảm lót giấy (39,8 × 27,9 cm)</text>
            {/* Vải ô mễ */}
            <rect x="65" y="65" width="190" height="105" rx="3" fill="#3B352D" />
            <text x="160" y="122" fontSize="11" fill="#F4EBDD" textAnchor="middle">Vải tập nước ô mễ (vùng viết)</text>
            {/* Hũ nước */}
            <circle cx="340" cy="70" r="24" fill="#FFFCF6" stroke="#76644E" strokeWidth="1.5" />
            <circle cx="340" cy="70" r="16" fill="#E6EEF2" stroke="#76644E" strokeWidth="0.8" />
            <text x="340" y="108" fontSize="10" fill="#29251F" textAnchor="middle">Hũ nước sạch</text>
            {/* Gác bút */}
            <rect x="308" y="138" width="64" height="18" rx="4" fill="#FFFCF6" stroke="#76644E" strokeWidth="1.2" />
            <line x1="295" y1="147" x2="385" y2="147" stroke="#9F392F" strokeWidth="3" strokeLinecap="round" />
            <text x="340" y="172" fontSize="10" fill="#29251F" textAnchor="middle">Gác bút thanh hoa</text>
          </svg>
        );

      case 'brush-anatomy':
        return (
          <svg viewBox="0 0 420 180" className="w-full h-auto" aria-label="Sơ đồ cấu tạo đầu bút lông">
            {/* Cán tre */}
            <rect x="30" y="80" width="190" height="18" rx="4" fill="#C9A87C" stroke="#76644E" strokeWidth="1.2" />
            <line x1="90" y1="80" x2="90" y2="98" stroke="#76644E" strokeWidth="1" />
            <line x1="150" y1="80" x2="150" y2="98" stroke="#76644E" strokeWidth="1" />
            <text x="125" y="118" fontSize="10" fill="#76644E" textAnchor="middle">Cán tre (cầm vào khoảng 1/3 dưới)</text>
            {/* Đầu lông */}
            <path d="M 220 79 Q 280 68 355 89 Q 280 110 220 99 Z" fill="#4A3B2C" />
            {/* Nhãn chú thích */}
            <line x1="230" y1="75" x2="230" y2="42" stroke="#9F392F" strokeWidth="1" strokeDasharray="3 2" />
            <text x="230" y="36" fontSize="10" fill="#29251F" textAnchor="middle">Gốc bút (Khẩu kính)</text>

            <line x1="280" y1="74" x2="280" y2="42" stroke="#9F392F" strokeWidth="1" strokeDasharray="3 2" />
            <text x="280" y="56" fontSize="10" fill="#29251F" textAnchor="middle">Bụng bút (giữ nước)</text>

            <line x1="355" y1="89" x2="355" y2="128" stroke="#9F392F" strokeWidth="1" strokeDasharray="3 2" />
            <text x="350" y="142" fontSize="10" fill="#9F392F" fontWeight="600" textAnchor="middle">Chóp nhọn (Bút phong)</text>

            {/* Xuất phong brace */}
            <line x1="220" y1="154" x2="355" y2="154" stroke="#76644E" strokeWidth="1" />
            <text x="287" y="168" fontSize="10" fill="#76644E" textAnchor="middle">Chiều dài lộ lông (Xuất phong)</text>
          </svg>
        );

      case 'grip-posture':
        return (
          <svg viewBox="0 0 420 200" className="w-full h-auto" aria-label="Sơ đồ góc dựng thẳng thân bút">
            {/* Mặt bàn */}
            <line x1="40" y1="160" x2="380" y2="160" stroke="#76644E" strokeWidth="1.5" />
            <text x="360" y="176" fontSize="10" fill="#76644E" textAnchor="end">Mặt vải / mặt giấy</text>

            {/* Bút đứng thẳng (Đúng) */}
            <rect x="122" y="30" width="12" height="90" rx="2" fill="#C9A87C" stroke="#29251F" strokeWidth="1.2" />
            <path d="M 122 120 Q 120 142 128 160 Q 136 142 134 120 Z" fill="#29251F" />
            {/* Góc vuông */}
            <path d="M 128 145 L 143 145 L 143 160" fill="none" stroke="#9F392F" strokeWidth="1.2" />
            <text x="128" y="20" fontSize="10.5" fill="#29251F" fontWeight="600" textAnchor="middle">Dựng thẳng gần 90°</text>
            <text x="128" y="182" fontSize="10" fill="#9F392F" textAnchor="middle">Chóp đi giữa nét, xoay đều mọi hướng</text>

            {/* Bút nghiêng như bút bi (Tránh) */}
            <g transform="rotate(42 295 160)">
              <rect x="289" y="35" width="12" height="90" rx="2" fill="#E3D7C5" stroke="#76644E" strokeWidth="1" />
              <path d="M 289 125 Q 287 145 295 160 Q 303 145 301 125 Z" fill="#76644E" />
            </g>
            <text x="315" y="45" fontSize="10" fill="#76644E" textAnchor="middle">Nghiêng quá sát (kiểu bút bi)</text>
            <text x="315" y="182" fontSize="10" fill="#76644E" textAnchor="middle">Bụng bút dễ quét lệch một bên</text>
          </svg>
        );

      case 'pressure-speed':
      case 'thin-thick':
        return (
          <svg viewBox="0 0 420 190" className="w-full h-auto" aria-label="Minh họa độ nhấn tạo nét mảnh và nét rộng">
            {/* Nét 1: Chạm chóp */}
            <line x1="60" y1="45" x2="340" y2="45" stroke="#29251F" strokeWidth="2.2" strokeLinecap="round" />
            <text x="60" y="33" fontSize="10" fill="#76644E">1. Chỉ chạm chóp nhọn (nét thanh / mảnh)</text>

            {/* Nét 2: Ấn vừa */}
            <line x1="60" y1="92" x2="340" y2="92" stroke="#29251F" strokeWidth="8" strokeLinecap="round" />
            <text x="60" y="76" fontSize="10" fill="#76644E">2. Hạ tay ấn khoảng 1/2 đầu lông (nét vừa)</text>

            {/* Nét 3: Chuyển thanh -> đậm -> thanh */}
            <path
              d="M 60 148 C 115 147, 155 136, 200 136 C 245 136, 285 147, 340 148 C 285 151, 245 160, 200 160 C 155 160, 115 151, 60 148 Z"
              fill="#29251F"
            />
            <text x="60" y="124" fontSize="10" fill="#9F392F" fontWeight="600">
              3. Chuyển độ nhấn từ từ: Nhẹ → Ấn giữa → Nhấc nhẹ cuối
            </text>
          </svg>
        );

      case 'dot-strokes':
        return (
          <svg viewBox="0 0 420 175" className="w-full h-auto" aria-label="Minh họa 3 nhịp nét chấm">
            {/* Nhịp 1 */}
            <circle cx="85" cy="80" r="4" fill="#9F392F" />
            <text x="85" y="125" fontSize="10" fill="#29251F" textAnchor="middle">Nhịp 1: Chạm nhẹ</text>
            {/* Nhịp 2 */}
            <path d="M 190 66 Q 212 72 216 92 Q 200 96 190 66 Z" fill="#29251F" />
            <line x1="186" y1="62" x2="212" y2="88" stroke="#9F392F" strokeWidth="1" strokeDasharray="3 2" />
            <text x="205" y="125" fontSize="10" fill="#29251F" textAnchor="middle">Nhịp 2: Trượt nhấn nhẹ</text>
            {/* Nhịp 3 */}
            <path d="M 312 62 C 325 65, 342 82, 338 96 C 328 100, 314 84, 312 62 Z" fill="#29251F" />
            <path d="M 334 92 L 324 80" stroke="#F4EBDD" strokeWidth="1.4" markerEnd="url(#arrow)" />
            <text x="328" y="125" fontSize="10" fill="#29251F" textAnchor="middle">Nhịp 3: Thu gọn & nhấc</text>
          </svg>
        );

      case 'straight-strokes':
      case 'line-curve':
        return (
          <svg viewBox="0 0 420 185" className="w-full h-auto" aria-label="Minh họa khởi bút và thu bút cho nét thẳng">
            {/* Nét ngang */}
            <path d="M 55 58 C 60 52, 68 53, 75 54 L 335 49 C 345 48, 352 54, 348 61 C 342 64, 332 62, 325 61 L 70 65 C 60 66, 53 63, 55 58 Z" fill="#29251F" />
            <circle cx="62" cy="59" r="3" fill="#9F392F" />
            <circle cx="342" cy="55" r="3" fill="#9F392F" />
            <text x="62" y="34" fontSize="10" fill="#9F392F">1. Đặt tựa nhẹ</text>
            <text x="200" y="34" fontSize="10" fill="#76644E" textAnchor="middle">2. Kéo đều, hơi nâng nhẹ 2–3°</text>
            <text x="342" y="34" fontSize="10" fill="#9F392F" textAnchor="end">3. Dừng nhẹ thu bút</text>

            {/* Đường lượn sóng */}
            <path
              d="M 55 130 C 90 95, 130 95, 165 130 C 200 165, 240 165, 275 130 C 310 95, 340 100, 360 125"
              fill="none"
              stroke="#29251F"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <text x="55" y="168" fontSize="10" fill="#76644E">
              Lượn sóng liên hoàn: giữ thân bút đứng, không xoắn cổ tay ở đỉnh sóng
            </text>
          </svg>
        );

      case 'turning-strokes':
        return (
          <svg viewBox="0 0 420 185" className="w-full h-auto" aria-label="Minh họa vòng tròn O và điểm nhấc nhẹ ở khúc cua">
            {/* Chữ O */}
            <ellipse cx="120" cy="92" rx="46" ry="54" fill="none" stroke="#29251F" strokeWidth="7" />
            <circle cx="152" cy="52" r="4.5" fill="#9F392F" />
            <text x="166" y="45" fontSize="10" fill="#9F392F">Bắt đầu & khép vòng (~2 giờ)</text>
            <text x="120" y="168" fontSize="10" fill="#76644E" textAnchor="middle">Giảm lực dần khi về gần điểm xuất phát</text>

            {/* Chữ U khúc cua */}
            <path d="M 275 45 L 275 112 C 275 142, 335 142, 335 112 L 335 45" fill="none" stroke="#29251F" strokeWidth="7" strokeLinecap="round" />
            <circle cx="305" cy="135" r="4.5" fill="#9F392F" />
            <text x="305" y="168" fontSize="10" fill="#9F392F" textAnchor="middle">Hơi nhấc nhẹ ở đáy cua để không tách lông</text>
          </svg>
        );

      case 'letter-structure':
      case 'curved-letters':
      case 'straight-letters':
      case 'diacritics':
      case 'word-spacing':
        return (
          <svg viewBox="0 0 420 190" className="w-full h-auto" aria-label="Sơ đồ 3 tầng chiều cao chữ cái tiếng Việt và khoảng cách dấu">
            {/* 4 đường gióng tầng chữ */}
            <line x1="35" y1="38" x2="385" y2="38" stroke="#D9CBB7" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="35" y1="78" x2="385" y2="78" stroke="#D9CBB7" strokeWidth="1" />
            <line x1="35" y1="128" x2="385" y2="128" stroke="#D9CBB7" strokeWidth="1" />
            <line x1="35" y1="164" x2="385" y2="164" stroke="#D9CBB7" strokeWidth="1" strokeDasharray="4 3" />

            <text x="40" y="32" fontSize="9.5" fill="#76644E">Vùng dấu thanh & nét vươn lên (h, l, t, ế)</text>
            <text x="40" y="106" fontSize="9.5" fill="#76644E">Thân giữa</text>
            <text x="40" y="156" fontSize="9.5" fill="#76644E">Vùng nét kéo xuống (g, y, p, dấu nặng)</text>

            {/* Chữ minh họa */}
            <text x="165" y="124" fontFamily="Playfair Display, Georgia, serif" fontSize="64" fill="#29251F">
              An yên
            </text>
            {/* Đánh dấu khoảng cách giữa 2 tiếng */}
            <line x1="252" y1="138" x2="275" y2="138" stroke="#9F392F" strokeWidth="2" />
            <text x="263" y="153" fontSize="9.5" fill="#9F392F" textAnchor="middle">Khoảng thở giữa hai tiếng</text>
          </svg>
        );

      case 'ink-grinding':
      case 'bottled-ink':
      case 'moisture-control':
        return (
          <svg viewBox="0 0 420 185" className="w-full h-auto" aria-label="Sơ đồ nghiên mực 7,5 x 7,5 cm và cách mài mực">
            {/* Nghiên vuông */}
            <rect x="60" y="30" width="130" height="130" rx="6" fill="#3B352D" stroke="#29251F" strokeWidth="1.5" />
            {/* Ao nghiên */}
            <rect x="76" y="42" width="98" height="28" rx="6" fill="#1F1C18" />
            <text x="125" y="60" fontSize="9.5" fill="#F4EBDD" textAnchor="middle">Ao nghiên (chứa mực)</text>
            {/* Đường nghiên */}
            <rect x="76" y="76" width="98" height="70" rx="3" fill="#4D453B" />
            <path d="M 105 110 A 18 18 0 1 1 142 110 A 18 18 0 1 1 105 110" fill="none" stroke="#D9CBB7" strokeWidth="1.2" strokeDasharray="4 2" />
            <text x="125" y="138" fontSize="9.5" fill="#F4EBDD" textAnchor="middle">Xoay tròn nhẹ khi mài</text>

            {/* Chú thích bên phải */}
            <text x="220" y="55" fontSize="11" fontWeight="600" fill="#29251F">Lưu ý điều tiết mực & nghiên:</text>
            <text x="220" y="78" fontSize="10.5" fill="#76644E">• Chỉ nhỏ 8–10 giọt nước lúc đầu</text>
            <text x="220" y="98" fontSize="10.5" fill="#76644E">• Giữ thỏi mực Kim Bất Hoán thẳng 90°</text>
            <text x="220" y="118" fontSize="10.5" fill="#76644E">• Gạt mực thừa ở mép dốc đường nghiên</text>
            <text x="220" y="138" fontSize="10.5" fill="#9F392F">• Thấm khô đầu thỏi mực ngay sau khi mài</text>
          </svg>
        );

      case 'layout-balance':
      case 'short-sentence':
      case 'theme-selection':
      case 'draft-sketch':
      case 'final-artwork':
      case 'seal-archive':
        return (
          <svg viewBox="0 0 420 190" className="w-full h-auto" aria-label="Ba gợi ý bố cục tác phẩm cân đối">
            {/* Bố cục 1: Đại tự trung tâm */}
            <rect x="30" y="25" width="105" height="135" fill="#FFFCF6" stroke="#76644E" strokeWidth="1" />
            <rect x="44" y="42" width="77" height="100" fill="none" stroke="#D9CBB7" strokeDasharray="3 2" />
            <text x="82" y="96" fontFamily="Playfair Display, Georgia, serif" fontSize="26" fill="#29251F" textAnchor="middle">An</text>
            <text x="108" y="130" fontSize="8" fill="#76644E" textAnchor="end">Thúc Đương</text>
            <rect x="97" y="134" width="11" height="11" fill="#9F392F" />
            <text x="82" y="176" fontSize="9.5" fill="#76644E" textAnchor="middle">1. Trung tâm 1 chữ</text>

            {/* Bố cục 2: Hai cột so le */}
            <rect x="158" y="25" width="105" height="135" fill="#FFFCF6" stroke="#76644E" strokeWidth="1" />
            <text x="224" y="72" fontFamily="Playfair Display, Georgia, serif" fontSize="15" fill="#29251F" textAnchor="middle">Tĩnh</text>
            <text x="224" y="94" fontFamily="Playfair Display, Georgia, serif" fontSize="15" fill="#29251F" textAnchor="middle">tâm</text>
            <text x="194" y="98" fontFamily="Playfair Display, Georgia, serif" fontSize="15" fill="#29251F" textAnchor="middle">Minh</text>
            <text x="194" y="120" fontFamily="Playfair Display, Georgia, serif" fontSize="15" fill="#29251F" textAnchor="middle">trí</text>
            <rect x="170" y="132" width="9" height="9" fill="#9F392F" />
            <text x="210" y="176" fontSize="9.5" fill="#76644E" textAnchor="middle">2. Cột dọc so le</text>

            {/* Bố cục 3: Hàng ngang */}
            <rect x="286" y="25" width="105" height="135" fill="#FFFCF6" stroke="#76644E" strokeWidth="1" />
            <text x="338" y="88" fontFamily="Playfair Display, Georgia, serif" fontSize="16" fill="#29251F" textAnchor="middle">An nhiên</text>
            <text x="338" y="108" fontSize="8.5" fill="#76644E" textAnchor="middle">Lạc khoản & ngày viết</text>
            <rect x="333" y="116" width="10" height="10" fill="#9F392F" />
            <text x="338" y="176" fontSize="9.5" fill="#76644E" textAnchor="middle">3. Hàng ngang thoáng</text>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 420 160" className="w-full h-auto" aria-label="Tinh thần luyện viết thư pháp Việt">
            <rect x="40" y="24" width="340" height="112" rx="4" fill="#FFFCF6" stroke="#D9CBB7" strokeWidth="1" />
            <text x="210" y="75" fontFamily="Playfair Display, Georgia, serif" fontSize="22" fontStyle="italic" fill="#29251F" textAnchor="middle">
              “Vạn sự khởi đầu từ một nét bút.”
            </text>
            <text x="210" y="106" fontSize="11" fill="#76644E" textAnchor="middle">
              Chậm rãi · Quan sát · Kiên nhẫn với từng chuyển động nhỏ
            </text>
          </svg>
        );
    }
  };

  return (
    <figure className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-4 sm:p-5">
      <div className="bg-[#F4EBDD]/55 rounded border border-[#D9CBB7]/70 p-3">
        {renderSchematic()}
      </div>
      <figcaption className="mt-2.5 text-xs text-[#76644E] italic">
        Sơ đồ minh họa gợi ý thao tác cho người mới bắt đầu — thầy có thể điều chỉnh linh hoạt theo cảm nhận thực tế trên bộ dụng cụ của mình.
      </figcaption>
    </figure>
  );
}
