import { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { KNOWLEDGE_TOPICS } from '../data/knowledge';
import { TOOLS } from '../data/tools';
import { SafeImage } from '../components/SafeImage';

interface LibraryPageProps {
  initialTab?: 'knowledge' | 'tools';
  onOpenLesson: (lessonId: string) => void;
}

export function LibraryPage({
  initialTab = 'tools',
  onOpenLesson,
}: LibraryPageProps) {
  const [activeTab, setActiveTab] = useState<'knowledge' | 'tools'>(initialTab);
  const [selectedTopicId, setSelectedTopicId] = useState<string>(KNOWLEDGE_TOPICS[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = KNOWLEDGE_TOPICS.filter((topic) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      topic.title.toLowerCase().includes(q) ||
      topic.summary.toLowerCase().includes(q) ||
      topic.sections.some(
        (s) =>
          s.heading.toLowerCase().includes(q) ||
          s.body.toLowerCase().includes(q)
      )
    );
  });

  const activeTopic =
    filteredTopics.find((t) => t.id === selectedTopicId) ??
    filteredTopics[0] ??
    KNOWLEDGE_TOPICS[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header & Tab Switcher */}
      <header className="space-y-5 border-b border-[#D9CBB7] pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium tracking-wider text-[#9F392F] uppercase">
              Tra cứu & Bộ dụng cụ thực tế
            </p>
            <h1 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#29251F]">
              {activeTab === 'tools'
                ? 'Bộ dụng cụ thư pháp của thầy'
                : 'Thư viện kiến thức nhập môn'}
            </h1>
            <p className="text-sm sm:text-base text-[#76644E] max-w-2xl">
              {activeTab === 'tools'
                ? '9 món dụng cụ thực tế trong hộp quà tặng của thầy Thúc Đương, kèm hướng dẫn sử dụng, bảo quản và bài học tương ứng.'
                : '9 chuyên đề tra cứu nhanh giải thích rõ ràng bằng ngôn ngữ đời thường, đi kèm mẹo xử lý thực tế cho người mới.'}
            </p>
          </div>

          <div className="inline-flex items-center gap-1 p-1 bg-[#FFFCF6] border border-[#D9CBB7] rounded-md self-start shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'tools'
                  ? 'bg-[#9F392F] text-[#FFFCF6]'
                  : 'text-[#76644E] hover:text-[#29251F]'
              }`}
            >
              Bộ dụng cụ (9 món)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('knowledge')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'knowledge'
                  ? 'bg-[#9F392F] text-[#FFFCF6]'
                  : 'text-[#76644E] hover:text-[#29251F]'
              }`}
            >
              Thư viện kiến thức (9 chủ đề)
            </button>
          </div>
        </div>
      </header>

      {/* Tab 1: Bộ dụng cụ của thầy (9 real items) */}
      {activeTab === 'tools' && (
        <div className="space-y-8">
          {/* Crucial Safety & Epistemic Notice */}
          <div className="bg-[#FFFCF6] border border-[#9F392F]/40 rounded-lg p-5 sm:p-6 space-y-2">
            <h2 className="font-serif-display text-lg font-semibold text-[#9F392F]">
              Hai nguyên tắc quan trọng trước khi sử dụng bộ dụng cụ
            </h2>
            <ul className="space-y-1.5 text-sm text-[#29251F]/90 leading-relaxed">
              <li>
                <strong>1. Thử hai cây bút bằng nước trước:</strong> Website không suy đoán cứng nhắc tính chất của bút lang hào và bút kiêm hào. Trước khi chấm mực, thầy hãy thử cả hai cây bằng nước sạch trên vải ô mễ (Bài L4) để tự quan sát độ mềm, độ đàn hồi và khả năng giữ nước thực tế.
              </li>
              <li>
                <strong>2. Phân biệt bề mặt tập nước và bề mặt viết mực:</strong> Vải tập viết bằng nước ô mễ (20 × 75 cm) chỉ dùng với nước sạch, tuyệt đối không dùng mực tàu. Khi chuyển sang mực ở Học phần 5, thầy sử dụng giấy viết phù hợp lót trên thảm lót giấy.
              </li>
            </ul>
          </div>

          {/* 9 Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((tool, index) => (
              <article
                key={tool.id}
                className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] w-full bg-[#EBE1D1] border-b border-[#D9CBB7] overflow-hidden">
                  <SafeImage
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="text-xs text-[#9F392F] font-semibold tabular-nums">
                        Dụng cụ 0{index + 1}
                      </div>
                      <h3 className="font-serif-display text-xl font-semibold text-[#29251F]">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-[#76644E] tabular-nums">{tool.specs}</p>
                    </div>

                    <div className="space-y-2.5 text-sm text-[#29251F]/90 leading-relaxed pt-2 border-t border-[#D9CBB7]/60">
                      <p>
                        <strong className="font-semibold text-[#29251F]">Công dụng: </strong>
                        {tool.purpose}
                      </p>
                      <p>
                        <strong className="font-semibold text-[#29251F]">Cách dùng cơ bản: </strong>
                        {tool.basicUsage}
                      </p>
                      <p>
                        <strong className="font-semibold text-[#29251F]">Vệ sinh & bảo quản: </strong>
                        {tool.careAndStorage}
                      </p>
                    </div>

                    {tool.specialNote && (
                      <div className="bg-[#F4EBDD] border border-[#D9CBB7] rounded p-3 text-xs text-[#9F392F] leading-relaxed">
                        {tool.specialNote}
                      </div>
                    )}
                  </div>

                  {/* Used in lessons */}
                  <div className="pt-3 border-t border-[#D9CBB7]/70 space-y-2">
                    <span className="block text-xs font-medium text-[#76644E]">
                      Sử dụng trong các bài học:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tool.usedInLessons.slice(0, 6).map((lid) => (
                        <button
                          key={lid}
                          type="button"
                          onClick={() => onOpenLesson(lid)}
                          className="px-2 py-0.5 text-xs font-medium bg-[#F4EBDD] hover:bg-[#9F392F] hover:text-[#FFFCF6] text-[#29251F] border border-[#D9CBB7] rounded transition-colors cursor-pointer tabular-nums"
                        >
                          {lid}
                        </button>
                      ))}
                      {tool.usedInLessons.length > 6 && (
                        <button
                          type="button"
                          onClick={() => onOpenLesson(tool.usedInLessons[6])}
                          className="px-2 py-0.5 text-xs text-[#76644E] hover:text-[#9F392F] cursor-pointer tabular-nums"
                        >
                          +{tool.usedInLessons.length - 6} bài khác
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Thư viện kiến thức (9 Topics) */}
      {activeTab === 'knowledge' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Index & Search (4 cols) */}
          <aside className="lg:col-span-4 bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-5 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-[#76644E] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm nhanh chủ đề (bút, mực, giấy...)"
                aria-label="Tìm kiếm trong thư viện kiến thức"
                className="w-full pl-9 pr-3 py-2 text-sm bg-[#F4EBDD]/50 border border-[#D9CBB7] rounded-md text-[#29251F] placeholder:text-[#76644E]/70 focus:outline-none focus:border-[#9F392F]"
              />
            </div>

            <nav aria-label="Danh mục thư viện kiến thức" className="space-y-1">
              {filteredTopics.length === 0 ? (
                <p className="text-sm text-[#76644E] py-4 text-center">
                  Không tìm thấy chuyên đề phù hợp với từ khóa “{searchQuery}”.
                </p>
              ) : (
                filteredTopics.map((topic) => {
                  const isActive = topic.id === activeTopic.id;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopicId(topic.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-md text-sm transition-colors cursor-pointer flex items-start gap-2.5 ${
                        isActive
                          ? 'bg-[#F4EBDD] text-[#9F392F] font-semibold'
                          : 'text-[#29251F] hover:bg-[#F4EBDD]/50'
                      }`}
                    >
                      <span className="tabular-nums text-xs mt-0.5 text-[#76644E]">
                        {topic.number}.
                      </span>
                      <span>{topic.title}</span>
                    </button>
                  );
                })
              )}
            </nav>
          </aside>

          {/* Right Reading Canvas (8 cols) */}
          <article className="lg:col-span-8 bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 sm:p-8 space-y-6">
            <div className="space-y-2 border-b border-[#D9CBB7]/70 pb-5">
              <div className="text-xs font-semibold text-[#9F392F] tracking-wide uppercase tabular-nums">
                Chuyên đề {activeTopic.number} / 09
              </div>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#29251F]">
                {activeTopic.title}
              </h2>
              <p className="text-sm sm:text-base text-[#76644E] leading-relaxed">
                {activeTopic.summary}
              </p>
            </div>

            <div className="space-y-6 max-w-prose">
              {activeTopic.sections.map((section, idx) => (
                <section key={idx} className="space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-[#29251F]">
                    {section.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-[#29251F]/90 leading-relaxed">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <div className="bg-[#F4EBDD] border border-[#D9CBB7] rounded-lg p-5 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#9F392F]">
                Mẹo thực hành nhanh
              </p>
              <p className="text-sm text-[#29251F] leading-relaxed">
                {activeTopic.practicalTip}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveTab('tools')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#9F392F] hover:text-[#852D24] cursor-pointer"
              >
                <span>Đối chiếu với bộ dụng cụ thực tế của thầy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
