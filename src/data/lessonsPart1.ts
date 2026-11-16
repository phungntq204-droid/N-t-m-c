import { Lesson, Module } from '../types';

export const MODULES: Module[] = [
  {
    id: 1,
    code: '01',
    title: 'Khởi đầu với thư pháp Việt',
    goal: 'Làm quen với tinh thần thư pháp, công cụ và không gian luyện tập.',
    description:
      'Bước đầu tìm hiểu bản chất của thư pháp chữ Quốc ngữ, nhận diện trọn bộ dụng cụ thầy đang có và sắp xếp một góc bàn viết yên tĩnh, thuận tay.',
  },
  {
    id: 2,
    code: '02',
    title: 'Làm quen với cây bút',
    goal: 'Tập cầm bút, quan sát đầu lông và điều khiển chuyển động trước khi dùng mực.',
    description:
      'Thử nghiệm hai cây bút lông với nước sạch trên vải tập ô mễ, học cách thả lỏng bàn tay, điều chỉnh lực nhấn và giữ thăng bằng cho đầu bút.',
  },
  {
    id: 3,
    code: '03',
    title: 'Khám phá nét bút',
    goal: 'Luyện chấm, ngang, dọc, cong và chuyển hướng bằng bài tập quan sát.',
    description:
      'Thực hành các nét nền tảng như nét chấm, nét thẳng, nét cong và sự chuyển tiếp thanh – đậm bằng tốc độ chậm rãi và sự quan sát tinh tế.',
  },
  {
    id: 4,
    code: '04',
    title: 'Làm quen với chữ Quốc ngữ',
    goal: 'Chuyển từ nét rời sang chữ cái, từ ngắn và dấu tiếng Việt.',
    description:
      'Sắp xếp cấu trúc chữ cái tiếng Việt bằng bút lông, luyện nhóm chữ cong – thẳng, đặt dấu thanh hài hòa và nối chữ thành từ ngắn dễ đọc.',
  },
  {
    id: 5,
    code: '05',
    title: 'Mực tàu và bố cục',
    goal: 'Làm quen với mực, nghiên, giấy và tổ chức một câu thư pháp.',
    description:
      'Chuyển từ vải nước sang giấy và mực thật: hiểu cách dùng mực đóng chai, tự mài thỏi mực trên nghiên, tiết chế độ ẩm và dàn trang một câu chữ.',
  },
  {
    id: 6,
    code: '06',
    title: 'Tác phẩm đầu tay',
    goal: 'Lên ý tưởng, hoàn thiện tác phẩm và lưu giữ dấu mốc đầu tiên.',
    description:
      'Chọn câu chữ mang ý nghĩa riêng, phác thảo bố cục, hoàn thành bức thư pháp đầu tiên trên giấy và tự chiêm nghiệm hành trình đã qua.',
  },
];

export const LESSONS_PART_1: Lesson[] = [
  {
    id: 'L1',
    number: 1,
    moduleId: 1,
    title: 'Thư pháp Việt là gì?',
    duration: '10 phút',
    level: 'Nhập môn',
    intro:
      'Chào mừng thầy đến với bài học đầu tiên. Trước khi cầm bút lên viết, chúng ta cùng dành ít phút trò chuyện nhẹ nhàng để hiểu thư pháp Việt là gì và vì sao mình không cần vội vàng phải viết cho thật đẹp ngay từ hôm nay.',
    objectives: [
      'Hiểu được tinh thần cốt lõi của thư pháp chữ Quốc ngữ dành cho người mới bắt đầu.',
      'Phân biệt giữa việc "viết chữ thông thường bằng bút bi" và "viết bằng bút lông mềm".',
      'Xây dựng tâm thế thoải mái, chậm rãi, lấy niềm vui quan sát làm trọng tâm.',
    ],
    toolsNeeded: [
      'Chưa cần dùng mực hay nước trong bài này.',
      'Một góc bàn yên tĩnh và tâm thế thư giãn.',
    ],
    explanation: [
      'Thư pháp Việt (thư pháp chữ Quốc ngữ) là cách dùng cây bút lông mềm và mực tàu — vốn quen thuộc trong truyền thống viết chữ Á Đông — để thể hiện các chữ cái tiếng Việt có dấu.',
      'Khác với bút bi hay bút máy có ngòi cứng cố định độ dày nét, đầu bút lông được bó từ nhiều sợi lông mềm. Chỉ cần thầy ấn nhẹ tay, nét sẽ mở rộng ra; nhấc nhẹ lên, nét sẽ thu mảnh lại. Chính sự thay đổi tinh tế này tạo nên nhịp điệu và cảm xúc cho con chữ.',
      'Lưu ý nhỏ về lộ trình này: các bài học thầy sắp đọc được biên soạn theo hướng gợi ý thực hành cho người mới bắt đầu, mượn một số nguyên tắc điều khiển bút lông Á Đông để làm quen với chữ Quốc ngữ. Không có một "khuôn mẫu duy nhất" nào bắt buộc thầy phải rập khuôn theo.',
    ],
    steps: [
      {
        title: 'Bước 1: Ngồi xuống và hít thở chậm',
        detail:
          'Thầy hãy ngồi ngay ngắn trên ghế, hai chân đặt thoải mái xuống sàn, vai thả lỏng tự nhiên.',
        why: 'Khi vai hoặc cổ tay căng cứng, nét bút lông rất dễ bị run và gãy khúc ngoài ý muốn.',
      },
      {
        title: 'Bước 2: Nhìn tổng quan 6 chặng đường',
        detail:
          'Thầy không học viết nguyên một câu ngay trong tuần đầu. Thầy sẽ đi từ làm quen dụng cụ, thử bút với nước, luyện từng nét đơn rồi mới ghép chữ và dùng mực.',
        why: 'Chia nhỏ từng bước giúp tay và mắt làm quen dần với độ mềm của lông bút mà không bị ngợp.',
      },
      {
        title: 'Bước 3: Chạm nhẹ vào bộ dụng cụ',
        detail:
          'Thầy có thể mở hộp dụng cụ ra, ngắm nhìn từng món đồ và đọc qua tên gọi của chúng trong bài học tiếp theo.',
        why: 'Sự quen thuộc và yêu thích món đồ mình cầm sẽ giúp mỗi buổi luyện tập trở thành khoảng thời gian thư giãn.',
      },
    ],
    exampleNote:
      'Ví dụ: Cùng là chữ "Tâm", khi viết bằng bút bi nét chữ đều tăm tắp. Khi viết bằng bút lông, phần mở đầu có thể đậm vững, phần uốn cong mềm mại hơn và nét kéo dài kết thúc nhẹ nhàng như một hơi thở ra.',
    commonMistakes: [
      {
        mistake: 'Tự tạo áp lực phải viết đẹp như nghệ nhân ngay trong buổi đầu.',
        fix: 'Xem vài tuần đầu tiên như thời gian "làm bạn với cây bút", ưu tiên cảm giác êm ái hơn là hình dáng hoàn hảo.',
      },
      {
        mistake: 'Nghĩ rằng viết chữ thường ngày chưa đẹp thì không học thư pháp được.',
        fix: 'Viết bút lông là một kỹ năng vận động hoàn toàn khác bút bi; bất kỳ ai kiên nhẫn đều có thể bắt đầu từ con số không.',
      },
    ],
    exercise:
      'Thầy hãy viết một dòng ghi chú ngắn vào mục "Hành trình của thầy" ngay trên website này: điều gì khiến thầy muốn thử cầm bút lông, hoặc một câu chữ ngắn thầy mong muốn tự tay viết được vào cuối khóa.',
    checklist: [
      'Tôi đã hiểu sự khác nhau cơ bản giữa đầu ngòi cứng và đầu bút lông mềm.',
      'Tôi sẵn sàng bắt đầu bằng nước sạch trước khi chạm đến mực tàu.',
      'Tôi đã đặt ra một kỳ vọng nhẹ nhàng cho bản thân trong những buổi đầu.',
    ],
    visualAid: 'spirit',
  },
  {
    id: 'L2',
    number: 2,
    moduleId: 1,
    title: 'Nhận diện bộ văn phòng tứ bảo',
    duration: '12 phút',
    level: 'Nhập môn',
    intro:
      'Trong truyền thống thư họa Á Đông, bốn món đồ cơ bản trên bàn viết — Bút, Mực, Giấy, Nghiên — thường được gọi chung là "Văn phòng tứ bảo". Hôm nay thầy sẽ cùng gọi tên chính xác từng món đồ trong bộ quà tặng của riêng mình.',
    objectives: [
      'Nhận diện đủ 9 món dụng cụ thực tế đang có trên bàn của thầy.',
      'Phân biệt rõ nhóm đồ dùng để tập với nước sạch và nhóm đồ dùng khi viết mực thật.',
      'Biết công dụng riêng của từng món để không dùng nhầm lẫn.',
    ],
    toolsNeeded: [
      'Toàn bộ 9 món trong bộ dụng cụ thư pháp của thầy.',
    ],
    explanation: [
      'Bốn yếu tố trung tâm gồm: Bút (hai cây bút lông: bút lang hào và bút kiêm hào), Mực (lọ mực tàu 100 ml và thỏi mực Kim Bất Hoán), Nghiên (nghiên mực vuông 7,5 × 7,5 cm), và Bề mặt viết (vải tập viết bằng nước ô mễ 20 × 75 cm cho giai đoạn đầu; giấy phù hợp khi viết mực).',
      'Bên cạnh bốn món chính, bộ dụng cụ của thầy còn có những trợ thủ rất thiết thực: Thảm lót giấy (39,8 × 27,9 cm) giúp mặt bàn êm và thấm mực thừa; Hũ sứ đựng nước đa năng để nhúng nước hoặc rửa bút; Gác bút sứ thanh hoa (5,3 × 1,5 × 3,5 cm) để đặt bút không bị lăn bẩn bàn.',
      'Một phân biệt tối quan trọng: Vải tập viết bằng nước ô mễ CHỈ dùng với nước sạch. Tuyệt đối không chấm mực tàu viết lên tấm vải này vì mực sẽ bám chết, làm mất khả năng tái sử dụng của vải.',
    ],
    steps: [
      {
        title: 'Bước 1: Chia dụng cụ thành hai nhóm rõ ràng',
        detail:
          'Nhóm tập nước gồm: vải ô mễ, hũ sứ đựng nước sạch, gác bút và hai cây bút. Nhóm viết mực gồm: mực chai, thỏi mực, nghiên mực, thảm lót và giấy.',
        why: 'Tách riêng ngay từ đầu giúp thầy giữ cho vải tập nước luôn sạch sẽ và không làm dây mực ngoài ý muốn.',
      },
      {
        title: 'Bước 2: Đặt hai cây bút cạnh nhau để quan sát',
        detail:
          'Cây bút lang hào dài tổng thể 22,2 cm (phần đầu lông lộ ra – gọi là xuất phong – dài 3,5 cm, đường kính gốc lông – khẩu kính – 0,9 cm). Cây bút kiêm hào dài 21,5 cm (xuất phong 3,2 cm, khẩu kính 0,7 cm).',
        why: 'Nhận biết kích thước giúp thầy nhớ cây nào lớn hơn, cây nào thon gọn hơn trước khi đem đi thử nước ở Bài 4.',
      },
      {
        title: 'Bước 3: Cất nhóm mực sang một góc hộp',
        detail:
          'Trong 4 học phần đầu tiên, thầy chưa cần mở nắp chai mực hay mài thỏi mực. Hãy cất chúng gọn gàng để dành cho Học phần 5.',
        why: 'Tập trung hoàn toàn vào cảm giác tay và nét chữ với nước giúp bàn học sạch tinh tươm, không lo vấy bẩn.',
      },
    ],
    exampleNote:
      'Ví dụ nhận diện nhanh: "Xuất phong" đơn giản là chiều dài phần lông bút nhô ra khỏi cán. "Khẩu kính" là độ rộng tròn ngay chỗ chân lông tiếp xúc với cán bút.',
    commonMistakes: [
      {
        mistake: 'Thấy vải tập nước tối màu nên tưởng có thể viết thử bằng mực tàu lên đó.',
        fix: 'Vải ô mễ hoạt động nhờ nước làm sẫm màu lớp sợi đặc biệt rồi tự bay hơi khô lại. Luôn chỉ dùng nước máy sạch cho tấm vải này.',
      },
      {
        mistake: 'Đặt bút còn ướt trực tiếp lên mặt bàn gỗ hoặc lên trang giấy.',
        fix: 'Luôn gác thân bút lên gác bút sứ thanh hoa sao cho đầu lông hơi nhô ra ngoài khoảng không.',
      },
    ],
    exercise:
      'Thầy hãy mở trang "Thư viện" -> tab "Bộ dụng cụ của thầy" trên website để đối chiếu từng món đồ thật trên bàn với bảng thông số và lưu ý bảo quản.',
    checklist: [
      'Tôi đã kiểm tra đủ 9 món dụng cụ trong bộ quà tặng.',
      'Tôi phân biệt được hai cây bút lang hào và kiêm hào qua kích thước.',
      'Tôi ghi nhớ nguyên tắc: Vải ô mễ chỉ dùng với nước sạch, không dùng mực.',
    ],
    visualAid: 'four-treasures',
  },
  {
    id: 'L3',
    number: 3,
    moduleId: 1,
    title: 'Chuẩn bị góc luyện viết',
    duration: '8 phút',
    level: 'Nhập môn',
    intro:
      'Một góc bàn gọn gàng sẽ tự nhiên mời gọi thầy ngồi vào luyện viết mỗi ngày mà không thấy ngại ngần bày biện. Bài này hướng dẫn cách sắp xếp đồ dùng khoa học cho người thuận tay phải (và điều chỉnh tương ứng nếu thuận tay trái).',
    objectives: [
      'Biết cách trải thảm lót và vải tập nước phẳng phiu, không bị cộm tay.',
      'Sắp xếp vị trí hũ nước và gác bút sao cho tay không quệt phải khi di chuyển.',
      'Tạo ánh sáng vừa đủ để nhìn rõ độ bóng của nét nước trên mặt vải.',
    ],
    toolsNeeded: [
      'Thảm lót giấy (39,8 × 27,9 cm)',
      'Vải tập viết bằng nước ô mễ (20 × 75 cm)',
      'Hũ sứ đựng nước đa năng',
      'Gác bút sứ thanh hoa',
    ],
    explanation: [
      'Nhiều người mới học hay bỏ qua bước kê bàn, dẫn đến việc tay đang viết thì quệt trúng hũ nước hoặc ánh sáng chiếu ngược khiến không nhìn rõ nét nước vừa đi qua.',
      'Khi đặt thảm lót bên dưới vải tập nước (hoặc giấy sau này), mặt thảm êm sẽ giúp đầu lông bút có độ bám nhẹ, giảm cảm giác trơn tuột trên mặt bàn gỗ hay kính.',
      'Nếu thầy thuận tay phải, mọi dụng cụ chứa nước (hũ nước, gác bút) nên nằm ở phía trên bên phải vùng viết. Nhờ vậy khi đưa bút từ vùng viết sang lấy nước, cổ tay đi theo một cung ngắn mà không băng ngang qua những nét chữ vừa viết xong.',
    ],
    steps: [
      {
        title: 'Bước 1: Trải thảm lót và vải tập nước',
        detail:
          'Đặt thảm lót ngang trước mặt. Trải một đoạn vừa đủ của tấm vải ô mễ (20 × 75 cm) lên trên phần thảm lót; phần vải chưa dùng có thể cuộn tròn nhẹ ở bên trái.',
        why: 'Giữ bề mặt viết luôn phẳng và chỉ mở khoảng 25–30 cm trước mặt để tầm mắt bao quát gọn gàng.',
      },
      {
        title: 'Bước 2: Đặt hũ nước và gác bút ở góc an toàn',
        detail:
          'Rót nước sạch vào khoảng 2/3 hũ sứ, đặt ở góc trên bên phải (hoặc trên bên trái nếu thầy thuận tay trái). Đặt gác bút sứ ngay cạnh hũ nước.',
        why: 'Nếu đặt hũ nước quá sát mép bàn hoặc ở dưới thấp, khuỷu tay rất dễ va làm đổ nước.',
      },
      {
        title: 'Bước 3: Điều chỉnh hướng ánh sáng',
        detail:
          'Nên để ánh sáng tự nhiên hoặc đèn bàn chiếu xiên từ phía trước hoặc bên trái (với người thuận tay phải).',
        why: 'Ánh sáng chiếu xiên giúp mặt nước ướt trên vải phản chiếu ánh sáng nhẹ, nhìn cực kỳ rõ độ mảnh – dày của nét.',
      },
    ],
    exampleNote:
      'Ví dụ bố trí chuẩn cho người thuận tay phải: Chính giữa trước ngực là vải ô mễ trên thảm lót; góc trên bên phải là gác bút thanh hoa và hũ nước sứ; bên trái để một chiếc khăn giấy nhỏ thấm nước thừa.',
    commonMistakes: [
      {
        mistake: 'Rót nước đầy tràn miệng hũ sứ.',
        fix: 'Chỉ rót khoảng 2/3 hũ để khi nhúng bút hoặc lỡ chạm tay vào thân hũ, nước không sánh ra bàn.',
      },
      {
        mistake: 'Đặt bàn viết quá cao khiến vai phải nhô lên khi cầm bút.',
        fix: 'Điều chỉnh ghế sao cho khi gập khuỷu tay khoảng 90 độ, cẳng tay gần như song song với mặt bàn.',
      },
    ],
    exercise:
      'Thầy hãy sắp xếp thử toàn bộ góc tập nước theo 3 bước trên ngay trên bàn làm việc của mình, ngồi thử vào vị trí và giơ tay mô phỏng chuyển động qua lại giữa vùng viết và hũ nước.',
    checklist: [
      'Thảm lót và vải tập nước nằm phẳng, không bị gấp nếp dưới tay viết.',
      'Hũ nước và gác bút nằm ở vị trí thuận tiện, không vướng khuỷu tay.',
      'Ánh sáng giúp nhìn rõ bề mặt vải ô mễ.',
    ],
    visualAid: 'desk-setup',
  },
  {
    id: 'L4',
    number: 4,
    moduleId: 2,
    title: 'Quan sát đầu bút và thử với nước',
    duration: '12 phút',
    level: 'Cơ bản',
    intro:
      'Bút mới mua thường có một lớp keo nhẹ bọc quanh đầu lông để giữ dáng nhọn khi vận chuyển. Trước khi tập bất kỳ nét nào, chúng ta cần đánh thức đầu bút bằng nước sạch và tự tay cảm nhận sự khác biệt giữa hai cây bút lang hào và kiêm hào.',
    objectives: [
      'Biết cách "khai bút" (rửa sạch lớp hồ bảo quản) cho bút mới mà không làm gãy lông.',
      'Quan sát cấu tạo 3 phần của đầu bút: nhọn đầu (bút phong), bụng bút và gốc bút.',
      'Trực tiếp thử cả hai cây bút với nước để tự nhận biết độ mềm, độ đàn hồi và lượng nước giữ được.',
    ],
    toolsNeeded: [
      'Bút lang hào (22,2 cm; xuất phong 3,5 cm; khẩu kính 0,9 cm)',
      'Bút kiêm hào (21,5 cm; xuất phong 3,2 cm; khẩu kính 0,7 cm)',
      'Hũ sứ đựng nước sạch và vải ô mễ',
    ],
    explanation: [
      'Cây bút mới thường cứng đơ như que nhựa ở phần đầu lông vì nhà sản xuất quét một lớp hồ thực vật giữ dáng. Thầy tuyệt đối không dùng ngón tay bẻ hoặc tách mạnh đầu lông khi còn khô vì sẽ làm gãy ngang các sợi lông tự nhiên.',
      'Thay vào đó, mình ngâm nhẹ đầu bút trong nước sạch ở nhiệt độ thường để lớp hồ tan ra tự nhiên.',
      'Lưu ý chuyên môn quan trọng: thay vì nghe mô tả suông rằng cây nào cứng hay mềm, thầy hãy tự tay nhúng từng cây bút vào nước và kéo thử vài đường trên vải ô mễ. Qua cảm nhận trực tiếp, thầy sẽ biết cây nào nảy lại nhanh hơn (đàn hồi tốt), cây nào chứa nhiều nước hơn và cây nào hợp với tay mình nhất trong giai đoạn đầu.',
    ],
    steps: [
      {
        title: 'Bước 1: Làm mềm đầu bút mới bằng nước sạch',
        detail:
          'Nhúng khoảng 2/3 phần lông bút vào nước sạch trong hũ sứ (tránh ngập sâu lên tới cán tre). Đợi khoảng 1–2 phút rồi day nhẹ đầu lông vào thành hũ cho lớp keo tan hết.',
        why: 'Ngâm ngập cả phần cán có thể làm nước ngấm vào keo gắn lông với cán tre, lâu ngày dễ rụng lông.',
      },
      {
        title: 'Bước 2: Vuốt gọn đầu bút tạo dáng nhọn',
        detail:
          'Kéo nhẹ đầu lông qua mép hũ sứ hoặc chạm lên khăn giấy thấm bớt nước thừa, xoay nhẹ thân bút để các sợi lông chụm lại thành một chóp nhọn đều.',
        why: 'Đầu lông chụm gọn (tụ phong) giúp nét bút có điểm khởi đầu sắc gọn thay vì bị tòe như chổi.',
      },
      {
        title: 'Bước 3: Thử nghiệm song song Lang hào và Kiêm hào',
        detail:
          'Lần lượt dùng từng cây bút kéo một đường thẳng và một vòng tròn nhẹ trên vải ô mễ. Quan sát xem sau khi nhấn xuống rồi nhấc lên, đầu lông cây nào bật thẳng lại nhanh hơn và cây nào ngậm nhiều nước hơn.',
        why: 'Mỗi lô bút thủ công có độ đàn hồi hơi khác nhau; tự mình thử bằng nước là cách chính xác nhất để làm chủ dụng cụ.',
      },
    ],
    exampleNote:
      'Ghi chú quan sát gợi ý: Cây có khẩu kính 0,9 cm (lang hào) thường cho diện tích tiếp xúc rộng hơn, còn cây 0,7 cm (kiêm hào) gọn hơn khi viết chữ cỡ vừa. Thầy hãy tự kiểm chứng lại cảm giác này trên tay mình nhé.',
    commonMistakes: [
      {
        mistake: 'Dùng nước nóng để ngâm bút cho nhanh mềm.',
        fix: 'Chỉ dùng nước mát hoặc nước ấm nhẹ tự nhiên; nước nóng làm hỏng lớp keo cố định gốc lông bên trong cán bút.',
      },
      {
        mistake: 'Bóp mạnh hoặc bẻ ngược đầu bút khô trước khi nhúng nước.',
        fix: 'Luôn để nước tự làm tan lớp hồ bảo quản.',
      },
    ],
    exercise:
      'Thầy hãy khai bút cho cả hai cây lang hào và kiêm hào bằng nước sạch, thử kéo 5 nét ngẫu nhiên bằng mỗi cây trên vải ô mễ và chọn ra 1 cây thầy thấy dễ điều khiển nhất để dùng cho các bài luyện cơ bản tiếp theo.',
    checklist: [
      'Cả hai đầu bút đã mềm hoàn toàn và không còn dính hồ cứng.',
      'Tôi đã giữ được mực nước vừa phải, không để nước nhỏ giọt tong tỏng xuống vải.',
      'Tôi đã tự tay cảm nhận được sự khác nhau giữa cây lang hào và kiêm hào.',
    ],
    visualAid: 'brush-anatomy',
  },
  {
    id: 'L5',
    number: 5,
    moduleId: 2,
    title: 'Cách cầm bút và thả lỏng bàn tay',
    duration: '15 phút',
    level: 'Cơ bản',
    intro:
      'Rất nhiều người mới cầm bút lông theo thói quen cầm bút bi — tức là nghiêng hẳn cán bút về phía sau và kẹp sát đầu ngón tay xuống gần ngòi. Hôm nay thầy sẽ làm quen với tư thế cầm bút dựng thẳng, giúp ngòi lông có thể xoay chuyển linh hoạt về mọi hướng.',
    objectives: [
      'Cầm được bút ở tư thế thẳng đứng (hoặc gần thẳng đứng) thoải mái, không gồng.',
      'Phân biệt vị trí đặt ngón cái, ngón trỏ, ngón giữa và hai ngón áp út – út.',
      'Biết cách nhấc nhẹ hoặc kê cổ tay tự nhiên tùy theo kích thước nét viết.',
    ],
    toolsNeeded: [
      '1 cây bút lông thầy vừa chọn ở Bài 4',
      'Vải tập nước ô mễ, hũ nước và thảm lót',
    ],
    explanation: [
      'Khi cầm bút bi, ngòi bút cứng nằm nghiêng một góc 45 độ vì mình chỉ kéo nét nhỏ bằng đầu ngón tay. Nhưng với bút lông mềm, nếu nghiêng quá nhiều, bụng bút sẽ quét ngang một bên, làm nét chữ bên dày bên xước rất khó kiểm soát.',
      'Cách cầm phổ biến và dễ làm quen cho người mới là kiểu cầm dựng thẳng thân bút (gần vuông góc với mặt bàn), vị trí các ngón tay nắm vào khoảng 1/3 thân cán tính từ đầu lông lên.',
      'Nguyên tắc hình dung dễ nhớ là "lòng bàn tay rỗng như đang ôm nhẹ một quả trứng nhỏ". Nếu các ngón tay bóp chặt cán bút đến trắng đầu ngón tay, lực không truyền xuống đầu bút êm ái được.',
    ],
    steps: [
      {
        title: 'Bước 1: Đặt điểm tựa của ngón cái và ngón trỏ',
        detail:
          'Dựng thẳng cây bút. Đặt đốt đầu ngón cái đỡ vào mặt trong thân bút, ngón trỏ đặt hơi cao hơn ở mặt ngoài, tạo thành một vòng tròn mở nhẹ.',
        why: 'Hai ngón này giữ trục thẳng của cây bút không bị đổ nghiêng.',
      },
      {
        title: 'Bước 2: Bổ sung lực đỡ từ ba ngón còn lại',
        detail:
          'Ngón giữa móc nhẹ vào mặt ngoài thân bút để giữ cân bằng; ngón áp út và ngón út tựa nhẹ phía sau hoặc hơi cong tự nhiên vào trong lòng bàn tay.',
        why: 'Sự phối hợp nhẹ nhàng của 5 ngón tay giúp thầy điều khiển bút di chuyển cả tiến, lùi, sang trái hay sang phải đều mượt.',
      },
      {
        title: 'Bước 3: Thử nhấc cổ tay nhẹ khỏi mặt bàn',
        detail:
          'Với những nét ngắn hoặc chữ nhỏ, thầy có thể đặt nhẹ cạnh cổ tay lên bàn cho đỡ mỏi. Khi kéo nét dài, thử nhấc cổ tay lên cách mặt vải khoảng 1–2 cm và di chuyển bằng cả cẳng tay.',
        why: 'Di chuyển bằng cẳng tay thay vì chỉ bẻ khớp cổ tay giúp đường nét dài không bị cong hình cánh cung ngoài ý muốn.',
      },
    ],
    exampleNote:
      'Mẹo kiểm tra độ thả lỏng: Nếu có ai đó nhẹ nhàng rút cây bút từ phía trên đỉnh cán khi thầy đang cầm, cây bút có thể trượt nhẹ ra được chứ không bị siết cứng.',
    commonMistakes: [
      {
        mistake: 'Cầm bút quá sát đầu lông (sát phần cổ cán), dẫn đến tầm nhìn bị tay che khuất.',
        fix: 'Dịch tay lên cao một chút, khoảng cách từ đầu lông đến ngón tay giữ bút vào tầm 6–8 cm.',
      },
      {
        mistake: 'Gồng cứng ngón trỏ ấn thẳng lên cán bút.',
        fix: 'Cứ mỗi 2 phút tập, đặt bút lên gác bút thanh hoa, thả lỏng bàn tay và vẩy nhẹ cổ tay 5 giây.',
      },
    ],
    exercise:
      'Thầy nhúng nước sạch vào bút, dựng thẳng thân bút và đi chậm 10 đường zíc-zắc ngang mặt vải ô mễ mà không xoay nghiêng cổ tay, tập trung cảm nhận lòng bàn tay rỗng và vai thả lỏng.',
    checklist: [
      'Thân bút đứng khá thẳng so với mặt bàn khi đặt đầu lông xuống vải.',
      'Lòng bàn tay có khoảng trống tự nhiên, các ngón không bóp siết.',
      'Cổ tay và vai không bị đau mỏi sau 5 phút cầm bút.',
    ],
    visualAid: 'grip-posture',
  },
  {
    id: 'L6',
    number: 6,
    moduleId: 2,
    title: 'Luyện lực tay và tốc độ',
    duration: '15 phút',
    level: 'Cơ bản',
    intro:
      'Độ mảnh và độ rộng của nét chữ thư pháp phần lớn không đến từ việc thay đổi cây bút, mà đến từ độ sâu thầy ấn đầu lông xuống mặt vải (lực tay) và nhịp độ thầy kéo bút đi (tốc độ).',
    objectives: [
      'Quan sát trực tiếp sự thay đổi độ rộng nét khi tăng – giảm độ ấn của đầu lông.',
      'Cảm nhận sự khác nhau giữa đi bút chậm đều và đi bút quá nhanh.',
      'Kiểm soát được 3 mức độ ấn cơ bản: chạm chóp (nhẹ), ấn nửa lông (vừa), ấn sâu (đậm).',
    ],
    toolsNeeded: [
      '1 cây bút lông, hũ nước sạch, vải tập nước ô mễ',
    ],
    explanation: [
      'Đầu bút lông có hình chóp nhọn. Khi chỉ phần chóp nhọn chạm mặt vải, bề mặt tiếp xúc rất nhỏ nên tạo ra nét mảnh. Khi thầy hạ thấp tay một chút để phần bụng lông tì xuống mặt vải, bề mặt tiếp xúc mở rộng, tạo ra nét to và đậm.',
      'Vì sao tốc độ lại quan trọng? Ở người mới học, đi bút quá nhanh khiến sợi lông không kịp xòe hoặc thu lại theo ý muốn, dẫn đến nét bị xơ (gọi vui là nét bị "rách") hoặc trượt ra ngoài.',
      'Đi bút chậm rãi như đang đếm thầm "1… 2… 3…" giúp não bộ kịp quan sát phản hồi của đầu lông trên từng milimet vải.',
    ],
    steps: [
      {
        title: 'Bước 1: Bài tập 3 mức chạm của đầu bút',
        detail:
          'Trước tiên, thầy đặt đầu bút thật nhẹ lên mặt vải tập nước sao cho chỉ có chóp nhọn chạm vào vải, kéo một đường ngang dài 10 cm. Đường thứ hai, hạ tay sâu hơn một chút (khoảng 1/2 đầu lông chạm vải) và kéo song song. Đường thứ ba, hạ sâu thêm chút nữa (khoảng 2/3 đầu lông chạm vải).',
        why: 'Đặt 3 đường nét song song ngay cạnh nhau giúp mắt thầy nhìn rõ biên độ mảnh – vừa – rộng mà cây bút đang cầm có thể tạo ra.',
      },
      {
        title: 'Bước 2: Chuyển độ nhấn liên tục trên một đường thẳng',
        detail:
          'Kéo một đường ngang chậm rãi: bắt đầu bằng chạm nhẹ, đến giữa đường thì từ từ hạ thấp tay xuống một chút cho nét nở rộng ra, rồi ở 1/3 cuối lại từ từ nhấc nhẹ lên.',
        why: 'Đây chính là nguyên lý cơ bản nhất để về sau tạo nét thanh, nét đậm mềm mại mà không bị gãy khúc.',
      },
      {
        title: 'Bước 3: Thử nghiệm tốc độ chậm vs nhanh',
        detail:
          'Kéo một nét dài trong 4 giây, sau đó kéo một nét tương tự trong 1 giây. So sánh mép nét và độ đều của lượng nước để lại trên vải.',
        why: 'Thầy sẽ nhận ra tốc độ vừa chậm vừa đều giúp mép nét tròn trịa và no nước hơn hẳn.',
      },
    ],
    exampleNote:
      'Hãy tưởng tượng đầu bút đang đi dạo trên một con đường phẳng, không phải đang chạy đua. Mỗi lần hạ thấp hay nhấc lên chỉ dịch chuyển khoảng 2–3 milimet theo chiều dọc.',
    commonMistakes: [
      {
        mistake: 'Ấn bẹp hẳn phần gốc lông (chỗ sát cán tre) xuống mặt vải.',
        fix: 'Chỉ nên ấn tối đa khoảng 2/3 chiều dài đầu lông; ấn lút gốc sẽ làm đầu lông bị bẻ gập, khó thu nhọn trở lại.',
      },
      {
        mistake: 'Thay đổi lực ấn quá đột ngột làm nét đang mảnh bỗng phình to cục bộ.',
        fix: 'Thực hiện việc hạ tay và nhấc tay thật từ từ trong lúc vẫn giữ chuyển động đi ngang đều đặn.',
      },
    ],
    exercise:
      'Trên một mặt vải ô mễ, thầy hãy vẽ 5 hàng nét "hạt lúa" nối tiếp nhau: nhẹ ở đầu, phình nhẹ ở giữa rồi thu mảnh ở cuối, mỗi nét mất khoảng 3–4 giây để hoàn thành.',
    checklist: [
      'Tôi tạo được ít nhất 3 độ rộng nét khác nhau từ cùng một cây bút.',
      'Tôi phân biệt được khi nào chỉ dùng chóp bút và khi nào dùng bụng bút.',
      'Tôi duy trì được tốc độ đi bút chậm rãi mà không bị run tay.',
    ],
    visualAid: 'pressure-speed',
  },
  {
    id: 'L7',
    number: 7,
    moduleId: 2,
    title: 'Luyện đường thẳng và đường cong',
    duration: '15 phút',
    level: 'Cơ bản',
    intro:
      'Sau khi biết cách cầm bút và chỉnh lực ấn, hôm nay thầy sẽ luyện hai chuyển động hình học sơ khai nhất: đi thẳng giữ trục và lượn cong không xoắn lông.',
    objectives: [
      'Giữ cho chóp bút đi đúng ở giữa lòng nét vẽ khi kéo đường thẳng.',
      'Biết cách chuyển hướng đường cong êm ái mà không làm lông bút bị vặn xoắn.',
      'Hoàn thành bài tập đường thẳng song song và đường lượn sóng liên tục.',
    ],
    toolsNeeded: [
      '1 cây bút lông, hũ nước sạch, vải tập nước ô mễ',
    ],
    explanation: [
      'Trong luyện bút lông, có một khái niệm rất dễ hiểu gọi là "giữ đầu bút đi chính giữa nét" (thường gọi là trung phong). Nếu thầy tưởng tượng nét mực như một con đường, thì chóp nhọn của bút phải luôn nằm ở vạch giữa con đường đó chứ không lệch sang mép trái hay mép phải.',
      'Khi vẽ đường cong, nếu thầy không khẽ xoay hoặc chuyển hướng cổ tay/cánh tay theo đường cong, chóp bút sẽ bị kéo lê lệch sang một bên, khiến một mép nét rất sắc còn mép kia bị răng cưa.',
      'Tuy nhiên, đừng quá căng thẳng vì kỹ thuật này sẽ thấm dần qua nhiều buổi luyện. Ở bài này, thầy chỉ cần chú ý giữ thân bút đứng thẳng là đã tự nhiên đi gần chính giữa nét rồi.',
    ],
    steps: [
      {
        title: 'Bước 1: Kéo 5 đường thẳng đứng và 5 đường thẳng ngang',
        detail:
          'Giữ thân bút dựng thẳng, dùng chuyển động của cả cẳng tay kéo những đường thẳng dài khoảng 12–15 cm, giữ khoảng cách giữa các đường đều nhau.',
        why: 'Rèn sự ổn định của cánh tay và tập cho mắt ước lượng khoảng cách đều trên mặt vải.',
      },
      {
        title: 'Bước 2: Luyện đường lượn sóng liên hoàn',
        detail:
          'Từ mép trái vải, đưa bút đi lên xuống thành các làn sóng tròn đều như hình chữ S nối dài nhau, không nhấc bút giữa chừng.',
        why: 'Giúp tay làm quen với việc đổi hướng mượt mà liên tục mà không bị khựng lại ở đỉnh sóng.',
      },
      {
        title: 'Bước 3: Quan sát dáng đầu lông sau khi kết thúc đường cong',
        detail:
          'Sau khi hoàn thành một dải lượn sóng, nhấc bút lên và nhìn xem đầu lông có đang bị xoắn vặn hay tòe sang một bên không.',
        why: 'Nếu đầu lông vẫn gọn nhẹ, nghĩa là thầy đã giữ bút rất cân bằng suốt quá trình đi nét cong.',
      },
    ],
    exampleNote:
      'Thầy cũng có thể mở mục "Phòng luyện tập" ngay trên website để vẽ thử trực tiếp mô phỏng đường thẳng và đường cong với khung kẻ mờ gợi ý trước hoặc sau khi tập trên vải thật.',
    commonMistakes: [
      {
        mistake: 'Đường thẳng bị cong vòng xuống ở đoạn cuối.',
        fix: 'Đừng chỉ bẻ cổ tay; hãy để cả khuỷu tay và cẳng tay trượt nhẹ theo hướng nét.',
      },
      {
        mistake: 'Khi uốn cong, đầu bút bị gấp gập tại chỗ rẽ.',
        fix: 'Hơi nhấc nhẹ lực tay lên một chút xíu ngay tại đỉnh vòng cua để giảm ma sát, rồi mới thả tay trở lại.',
      },
    ],
    exercise:
      'Thầy thực hiện 2 lượt vải ô mễ: một lượt toàn đường thẳng ngang – dọc song song cách đều nhau 2 cm, một lượt toàn đường lượn sóng nối liền từ trái sang phải.',
    checklist: [
      'Các đường thẳng tương đối song song và không bị gãy khúc giữa chừng.',
      'Đường lượn sóng tròn đều, không bị nhọn góc ở đỉnh sóng.',
      'Đầu lông bút không bị xoắn vặn sau khi đi nét cong.',
    ],
    visualAid: 'line-curve',
  },
  {
    id: 'L8',
    number: 8,
    moduleId: 3,
    title: 'Nét chấm và nét ngắn',
    duration: '12 phút',
    level: 'Cơ bản',
    intro:
      'Bước sang Học phần 3, thầy bắt đầu ghép những chuyển động đã tập thành các nét cụ thể. Nét chấm tưởng chừng nhỏ bé nhất nhưng lại có mặt ở khắp nơi trong chữ Quốc ngữ: dấu chấm câu, dấu chấm trên chữ i, chữ j, và những điểm nhấn nhỏ đầu nét.',
    objectives: [
      'Thực hiện được 3 bước tạo một nét chấm có đầu tròn – thân đầy – đuôi gọn.',
      'Phân biệt được nét chấm tròn và nét chấm giọt nước (như dấu sắc, dấu huyền ngắn).',
      'Kiểm soát được điểm dừng và cách thu bút sạch sẽ không bị vẩy mực.',
    ],
    toolsNeeded: [
      '1 cây bút lông, hũ nước sạch, vải tập nước ô mễ',
    ],
    explanation: [
      'Nếu thầy chấm đầu bút xuống mặt vải theo chiều thẳng đứng rồi nhấc thẳng lên, vết tạo thành thường tròn dẹt hoặc hơi bẹt cạnh. Trong thư pháp, một nét chấm sinh động giống như hạt nước nhỏ rơi xuống nghiêng nhẹ.',
      'Thao tác gồm 3 nhịp nhỏ nối tiếp: chạm nhẹ bằng chóp bút theo hướng xiên khoảng 45 độ (nhịp 1: hạ bút) -> ấn nhẹ xuống một chút cho nở bụng giọt nước (nhịp 2: nhấn) -> hơi thu nhẹ ngược vào trong rồi nhấc lên (nhịp 3: thu bút).',
      'Khi tập nhuần nhuyễn 3 nhịp này, các dấu chấm trên chữ "i", dấu phẩy hay dấu huyền, dấu sắc sau này sẽ trông rất gọn gàng và có sức sống.',
    ],
    steps: [
      {
        title: 'Bước 1: Tập nhịp "Chạm – Nhấn – Thu"',
        detail:
          'Hướng đầu bút xiên nhẹ về góc trên bên trái, chạm chóp bút vào vải, trượt ngắn 2–3 mm xuống góc dưới bên phải đồng thời ấn nhẹ bụng bút, rồi nhấc lên.',
        why: 'Chuyển động trượt ngắn tạo ra độ thuôn tự nhiên như giọt sương, tránh cảm giác cộc lốc.',
      },
      {
        title: 'Bước 2: Luyện nét chấm tròn',
        detail:
          'Chạm chóp bút xuống, xoay nhẹ một vòng tròn siêu nhỏ tại chỗ như đang chấm dấu trên chữ "i" rồi nhấc thẳng lên.',
        why: 'Cho thầy thêm một lựa chọn hình dáng dấu chấm mềm mại khi viết các chữ cái tròn.',
      },
      {
        title: 'Bước 3: Ghép chuỗi 3 nét ngắn có nhịp điệu',
        detail:
          'Viết 3 nét chấm ngắn cạnh nhau với kích thước lớn dần hoặc hướng nghiêng nhẹ khác nhau.',
        why: 'Rèn mắt nhìn sự cân đối giữa những chi tiết nhỏ trên trang giấy.',
      },
    ],
    exampleNote:
      'Nhịp đếm thầm trong đầu khi viết 1 nét chấm: "Chạm (1) – Ấn nhẹ (2) – Nhấc gọn (3)". Toàn bộ quá trình chỉ kéo dài khoảng 1,5 giây nhưng rất rõ ràng từng nhịp.',
    commonMistakes: [
      {
        mistake: 'Vẩy mạnh đầu bút khi nhấc lên làm tạo thành đuôi nhọn tua rua.',
        fix: 'Trước khi nhấc bút hẳn khỏi vải, hãy dừng lại một phần giây rồi nhấc thẳng lên nhẹ nhàng.',
      },
      {
        mistake: 'Chấm quá mạnh làm dấu chấm to lấn át cả thân chữ.',
        fix: 'Kiểm soát độ ấn chỉ khoảng 1/3 phần lông bút.',
      },
    ],
    exercise:
      'Thầy lấp đầy một mặt vải ô mễ bằng các hàng nét chấm giọt nước (nghiêng trái sang phải, nghiêng phải sang trái) và nét chấm tròn đều đặn.',
    checklist: [
      'Nét chấm có hình dáng gọn gàng, không bị tòe mép hoặc vẩy đuôi xơ.',
      'Tôi cảm nhận được rõ 3 nhịp Chạm – Nhấn – Thu.',
      'Kích thước các nét chấm trong cùng một hàng tương đối đồng đều.',
    ],
    visualAid: 'dot-strokes',
  },
  {
    id: 'L9',
    number: 9,
    moduleId: 3,
    title: 'Nét ngang, nét dọc và nét xiên',
    duration: '15 phút',
    level: 'Cơ bản',
    intro:
      'Nét ngang, nét dọc và nét xiên là bộ khung xương của rất nhiều chữ cái tiếng Việt như T, H, L, E, A, V, N, M. Nắm chắc ba nét thẳng này sẽ giúp con chữ của thầy đứng vững vàng và ngay ngắn.',
    objectives: [
      'Biết cách "vào nét" (khởi bút) và "kết nét" (thu bút) gọn gàng cho đường thẳng.',
      'Giữ được nét ngang hơi thoáng, nét dọc thẳng đứng không bị đổ nghiêng.',
      'Điều khiển được nét xiên chéo từ trên xuống trái (phẩy) và từ trên xuống phải (mác).',
    ],
    toolsNeeded: [
      '1 cây bút lông, hũ nước sạch, vải tập nước ô mễ',
    ],
    explanation: [
      'Một đường thẳng viết bằng bút lông trông vững chãi hơn hẳn đường kẻ thước nhờ hai đầu nét có điểm tựa nhẹ. Khi đặt bút bắt đầu một nét ngang từ trái sang phải, thầy đừng kéo vọt đi ngay mà đặt nhẹ đầu bút xuống một chút để tạo điểm khởi đầu chắc chắn, sau đó mới kéo đều sang phải và hơi nhấn nhẹ rồi nhấc lên ở cuối nét.',
      'Với nét dọc từ trên xuống dưới (như thân chữ l, t, h), nếu mắt thầy nhìn vào phần thân bút đang che khuất phía dưới, đường dọc dễ bị xiêu. Hãy tập nhìn thẳng về điểm đích dự kiến ở phía dưới để kéo bút thẳng về hướng đó.',
      'Còn hai nét xiên (trên-phải xuống dưới-trái như nét chữ A; và trên-trái xuống dưới-phải) thường dùng nhiều ở các chữ cái in hoa hoặc chữ có chân vát.',
    ],
    steps: [
      {
        title: 'Bước 1: Luyện nét ngang có điểm dừng hai đầu',
        detail:
          'Đặt chóp bút chạm nhẹ, nhấn nhẹ một nhịp tại chỗ, kéo đều sang phải theo đường ngang, đến cuối hơi nhấn nhẹ lại rồi mới nhấc bút lên.',
        why: 'Giúp hai đầu nét ngang tròn trịa, không bị nhọn hoắt hay vát xéo thiếu lực.',
      },
      {
        title: 'Bước 2: Luyện nét dọc vững vàng',
        detail:
          'Đặt bút ở phía trên, định sẵn điểm dừng bằng mắt ở phía dưới, kéo một đường thẳng xuống bằng chuyển động hạ cánh tay.',
        why: 'Hạ cả cánh tay giúp đường dọc thẳng tắp hơn nhiều so với việc co các ngón tay lại.',
      },
      {
        title: 'Bước 3: Luyện cặp nét xiên đối xứng (hình chữ V ngược / hình mái nhà)',
        detail:
          'Kéo một nét xiên từ đỉnh xuống góc trái, nhấc bút, quay lại đỉnh kéo nét xiên thứ hai xuống góc phải.',
        why: 'Đây chính là bài tập tiền đề trực tiếp để viết chữ A, M, N, V, X, Y.',
      },
    ],
    exampleNote:
      'Mẹo giữ nét ngang không bị chúi xuống: Khi kéo ngang từ trái sang phải, hãy hơi có ý thức nâng nhẹ hướng đi lên khoảng 2–3 độ. Cảm giác mắt thường sẽ thấy nét ngang rất cân bằng và tươi tắn.',
    commonMistakes: [
      {
        mistake: 'Đầu nét bị nhọn và đuôi nét bị vung vẩy vì kéo bút khi bút còn chưa chạm ổn định.',
        fix: 'Tạo thói quen dừng 0,5 giây ở điểm bắt đầu và 0,5 giây ở điểm kết thúc trước khi nhấc bút.',
      },
      {
        mistake: 'Nét dọc bị cong sang phải ở đoạn giữa.',
        fix: 'Kiểm tra lại xem cổ tay có đang tì chặt xuống bàn làm bán kính xoay bị cong hay không; thử nhấc nhẹ cổ tay.',
      },
    ],
    exercise:
      'Thầy thực hành viết trên vải ô mễ: 5 nét ngang song song, 5 nét dọc đứng ngay ngắn và 5 cặp nét xiên chữ V ngược ghép đỉnh.',
    checklist: [
      'Hai đầu nét ngang và nét dọc trông tròn gọn, không bị xước lông.',
      'Nét dọc đứng thẳng tương đối, không bị nghiêng hẳn sang một bên.',
      'Hai nét xiên gặp nhau gọn gàng tại đỉnh.',
    ],
    visualAid: 'straight-strokes',
  },
  {
    id: 'L10',
    number: 10,
    moduleId: 3,
    title: 'Nét cong, vòng và chuyển hướng',
    duration: '15 phút',
    level: 'Cơ bản',
    intro:
      'Chữ Quốc ngữ có tỷ lệ nét cong rất cao: từ chữ o, c, e, s cho đến bụng của chữ a, d, b, p, g. Hôm nay thầy sẽ làm quen với kỹ thuật đi vòng tròn khép kín và các điểm chuyển hướng mềm mại.',
    objectives: [
      'Vẽ được nét cong chữ C và vòng tròn chữ O khép kín mượt mà.',
      'Thực hiện được chuyển hướng chữ U và móc cong ở cuối nét (như chữ u, n, m).',
      'Biết cách "nhấc nhẹ ở khúc cua" để lông bút không bị xoắn thành nút.',
    ],
    toolsNeeded: [
      '1 cây bút lông, hũ nước sạch, vải tập nước ô mễ',
    ],
    explanation: [
      'Thử thách lớn nhất của người mới khi viết chữ "o" bằng bút lông là chỗ nối khép vòng thường bị hở hoặc chồng lên nhau một cục mực to. Bí quyết nằm ở việc đi theo vòng ngược chiều kim đồng hồ (bắt đầu từ vị trí 1 giờ hoặc 2 giờ trên mặt đồng hồ), giữ lực đều và khi về gần điểm xuất phát thì giảm lực dần để nối khớp nhẹ nhàng.',
      'Khi chuyển hướng (ví dụ từ nét dọc chữ "u" vòng cong sang phải để đi lên), nếu giữ nguyên lực ấn mạnh khi đổi hướng, các sợi lông bị bẻ ngang sẽ rẽ ra làm đôi (tách lông). Thầy hãy hơi nhấc đầu bút lên một xíu ngay ở đáy khúc cua rồi mới lượn lên.',
      'Một cách tự nhiên khác: sau khi hoàn thành một nét cong phức tạp, đừng ngại đặt nhẹ đầu bút lên mép hũ nước hoặc khăn giấy để vuốt lại dáng chóp nhọn trước khi viết nét mới.',
    ],
    steps: [
      {
        title: 'Bước 1: Tập vòng cong chữ C mở',
        detail:
          'Bắt đầu từ vị trí 2 giờ, đưa bút vòng lên 12 giờ rồi lượn sang trái xuống 6 giờ và dừng ở 4 giờ. Giữ tốc độ đều từ đầu đến cuối.',
        why: 'Làm chủ nửa vòng cong bên trái là chìa khóa cho hầu hết các chữ tròn trong tiếng Việt.',
      },
      {
        title: 'Bước 2: Khép kín thành vòng tròn chữ O',
        detail:
          'Tiếp tục đường cong chữ C đi vòng lên lại vị trí 2 giờ. Khi còn cách điểm đầu khoảng 1 cm, giảm dần lực ấn cho nét hơi mảnh lại rồi chạm khẽ vào điểm đầu.',
        why: 'Giảm lực ở đoạn khép vòng giúp mối nối trông thanh thoát, không bị dày cộm.',
      },
      {
        title: 'Bước 3: Tập nét móc cong (chữ U và chữ J)',
        detail:
          'Kéo thẳng xuống, đến đáy thì nhấc nhẹ lực tay lên một chút để uốn vòng qua phải, rồi kéo nhẹ lên trên.',
        why: 'Giữ cho đáy chữ U tròn đầy mà lông bút vẫn đi thẳng thớm.',
      },
    ],
    exampleNote:
      'Ví dụ thực tế: Thầy thử viết 1 chữ O không nhấc bút khi cua, và 1 chữ O có nhấc nhẹ lực ở đoạn chuyển hướng dưới đáy (vị trí 6 giờ). Thầy sẽ thấy mép dưới của chữ thứ hai mịn màng hơn hẳn.',
    commonMistakes: [
      {
        mistake: 'Vòng tròn bị méo thành hình bầu dục dẹt hoặc hình tam giác.',
        fix: 'Đưa mắt nhìn bao quát khung hình vuông tưởng tượng chứa vòng tròn trước khi hạ bút.',
      },
      {
        mistake: 'Lông bút bị xoắn và tách đôi sau khi viết xong chữ O.',
        fix: 'Kiểm tra xem cổ tay có vặn xoắn cán bút trong lúc vẽ vòng tròn không; hãy giữ nguyên mặt cán bút hướng về phía trước và đưa cả cánh tay theo quỹ đạo tròn.',
      },
    ],
    exercise:
      'Thầy thực hành viết 1 hàng nét chữ C, 1 hàng vòng tròn O khép kín, và 1 hàng nét móc chữ U nối tiếp trên vải ô mễ.',
    checklist: [
      'Mối nối của vòng tròn O khép gọn gàng, không bị chồng cục to.',
      'Khúc cua đáy chữ U mềm mại, không bị gãy góc nhọn.',
      'Sau khi viết xong, đầu lông bút vẫn còn tụ lại khá gọn.',
    ],
    visualAid: 'turning-strokes',
  },
  {
    id: 'L11',
    number: 11,
    moduleId: 3,
    title: 'Nét thanh và nét đậm',
    duration: '18 phút',
    level: 'Cơ bản',
    intro:
      'Đây là bài học tạo nên vẻ duyên dáng đặc trưng của thư pháp Việt: sự hòa quyện giữa nét đi lên nhẹ nhàng (nét thanh) và nét kéo xuống vững chãi (nét đậm).',
    objectives: [
      'Hiểu quy luật tự nhiên của lực tay: đi xuống thường đậm hơn, đi lên thường thanh hơn.',
      'Thực hiện được nét chuyển tiếp mượt mà giữa đậm và thanh mà không bị khựng.',
      'Tập viết các đường vòng hình số 8 hoặc dải lượn thanh – đậm liên hoàn.',
    ],
    toolsNeeded: [
      '1 cây bút lông, hũ nước sạch, vải tập nước ô mễ',
    ],
    explanation: [
      'Vì sao trong viết chữ đẹp truyền thống lẫn hiện đại, nét kéo xuống thường đậm còn nét đưa lên thường thanh? Vì theo cấu trúc tự nhiên của bàn tay và sợi lông bút: khi kéo bút xuống về phía mình, lực tựa tay tự nhiên nhấn nhẹ xuống giúp đầu lông mở rộng; còn khi đẩy ngược lên trên, nếu nhấn mạnh đầu lông sẽ bị xù ngược lại, nên ta buộc phải nhấc nhẹ đầu bút lướt trên bề mặt vải.',
      'Không cần cố tạo sự tương phản quá gắt như nét đậm to gấp 5 lần nét thanh. Với người mới, tỷ lệ nét đậm rộng gấp 2 đến 2,5 lần nét thanh là đã rất hài hòa và dễ kiểm soát.',
      'Trước tiên, thầy đặt đầu bút nhẹ nhàng lên mặt vải tập nước. Thử di chuyển bút thật chậm để quan sát đường nét tạo ra. Sau đó, thầy có thể thử thay đổi lực tay một cách nhẹ nhàng. Quan sát sự khác nhau giữa nét mảnh và nét rộng. Không cần cố tạo nét đẹp ngay trong lần đầu tiên.',
    ],
    steps: [
      {
        title: 'Bước 1: Tập cặp nét lên thanh – xuống đậm rời nhau',
        detail:
          'Đưa một nét xiên nhẹ từ dưới lên trên chỉ dùng chóp bút (nét thanh). Sau đó đặt bút ở đỉnh, nhấn nhẹ bụng bút kéo thẳng hoặc xiên xuống (nét đậm).',
        why: 'Tách riêng hai chiều chuyển động giúp cơ tay nhớ rõ cảm giác "lên nhẹ – xuống đằm".',
      },
      {
        title: 'Bước 2: Nối liền thành nhịp chữ N hoặc hình sóng núi',
        detail:
          'Đi lên nhẹ -> đến đỉnh hơi dừng 0,2 giây rồi nhấn nhẹ kéo xuống đậm -> đến đáy nhấc nhẹ tay chuyển sang đi lên thanh tiếp theo.',
        why: 'Đây chính là nhịp điệu cốt lõi để viết chuỗi các chữ có chân nối nhau như n, m, u, i.',
      },
      {
        title: 'Bước 3: Luyện vòng xoắn thanh – đậm (hình chữ O có thanh đậm)',
        detail:
          'Viết chữ O bắt đầu từ 2 giờ: nửa bên trái kéo xuống nhấn đậm dần ở vị trí 9 giờ, sau đó nhấc nhẹ dần qua 6 giờ để phần nửa bên phải đi lên thanh mảnh khép vòng.',
        why: 'Chữ O có một bên đậm và một bên thanh trông có chiều sâu nổi khối hơn hẳn một vòng tròn đều nét.',
      },
    ],
    exampleNote:
      'Cách kiểm tra nhanh: Thầy hãy nhìn từ xa khoảng 1 mét vào dải nét vừa viết trên vải ô mễ. Nếu mắt thấy rõ nhịp "mảnh – dày – mảnh – dày" đều đặn như nhịp thở là thầy đã làm rất đúng.',
    commonMistakes: [
      {
        mistake: 'Đẩy bút đi lên nhưng vẫn nhấn mạnh đầu lông xuống vải.',
        fix: 'Mỗi khi chiều bút hướng lên trên hoặc sang phải nhấc cao, chủ động nâng nhẹ cổ tay lên 2–3 mm để chỉ còn chóp bút chạm vải.',
      },
      {
        mistake: 'Chỗ chuyển từ đậm sang thanh bị gãy gập như bậc thang.',
        fix: 'Đừng nhấc tay đột ngột; hãy vừa kéo qua khúc cua dưới đáy vừa nâng tay lên từ từ trong 1–2 cm.',
      },
    ],
    exercise:
      'Thầy thực hành 2 lượt vải ô mễ: một lượt vẽ chuỗi nhịp sóng lên thanh – xuống đậm liên tục, một lượt vẽ 6 chữ O có nửa trái đậm và nửa phải thanh.',
    checklist: [
      'Nét đưa lên mảnh nhẹ và không bị xù lông.',
      'Nét kéo xuống đậm hơn rõ rệt và tròn cạnh.',
      'Sự chuyển tiếp giữa đoạn thanh và đoạn đậm khá êm ở các khúc cua.',
    ],
    visualAid: 'thin-thick',
  },
  {
    id: 'L12',
    number: 12,
    moduleId: 3,
    title: 'Tổng hợp nét trong một buổi luyện',
    duration: '20 phút',
    level: 'Cơ bản',
    intro:
      'Khép lại Học phần 3, hôm nay thầy sẽ kết nối tất cả các nét đơn lẻ đã học — chấm, ngang, dọc, xiên, cong, thanh và đậm — vào trong một bài tập tổng hợp nhịp nhàng khoảng 20 phút, giống như một bài khởi động chuẩn cho mỗi buổi ngồi bàn viết sau này.',
    objectives: [
      'Xây dựng được trình tự luyện tay 15–20 phút khoa học trước khi viết chữ.',
      'Kiểm tra lại độ ổn định của tư thế ngồi, cách cầm bút và hơi thở.',
      'Đánh giá xem cây bút nào (lang hào hay kiêm hào) hợp tay nhất sau 3 học phần.',
    ],
    toolsNeeded: [
      'Cả 2 cây bút để đối chiếu lại nếu muốn, hũ nước sạch, vải tập nước ô mễ, gác bút, thảm lót',
    ],
    explanation: [
      'Giống như người chơi đàn cần chạy ngón trước khi vào bản nhạc, khi ngồi vào bàn thư pháp thầy chỉ cần dành 5–10 phút khởi động với các nét cơ bản trước khi viết chữ cái hay câu dài. Việc này giúp bàn tay hết lạnh, hơi thở chậm lại và đầu bút ngậm đủ ẩm đồng đều.',
      'Ở bài tổng hợp này, thầy hãy chú ý đến khoảng thời gian nước bay hơi trên vải ô mễ: khi thầy viết đến nửa cuối tấm vải, những nét ở đầu tấm vải bắt đầu khô dần và mờ đi. Điều đó mang lại một cảm giác rất thiền: không cần lo lắng chuyện giữ lại nét hỏng, thầy hoàn toàn tự do làm mới trang viết.',
    ],
    steps: [
      {
        title: 'Bước 1: 3 phút ổn định tư thế và khai ẩm đầu bút',
        detail:
          'Ngồi thẳng, thả lỏng vai. Nhúng bút vào nước sạch, vuốt gọn đầu lông ở mép hũ sứ.',
        why: 'Đảm bảo nước thấm đều vào lõi lông mà không bị dư đọng thành giọt.',
      },
      {
        title: 'Bước 2: 7 phút đi các nét thẳng và chấm',
        detail:
          'Viết 1 hàng nét chấm giọt nước, 1 hàng nét ngang dừng hai đầu, 1 hàng nét dọc thẳng và 1 hàng nét xiên.',
        why: 'Đánh thức cảm giác trục thẳng và điểm tựa khởi bút – thu bút.',
      },
      {
        title: 'Bước 3: 8 phút đi nét cong và thanh – đậm',
        detail:
          'Viết 1 hàng vòng tròn O thanh – đậm, 1 hàng móc chữ U, và 1 hàng dải lượn sóng liên hoàn.',
        why: 'Làm mềm cổ tay và luyện độ nhạy khi tăng giảm lực nhấn.',
      },
      {
        title: 'Bước 4: Rửa nhẹ và gác bút kết thúc buổi tập',
        detail:
          'Nhúng sạch lại bằng nước trong hũ (với tập nước thì nước đã sạch sẵn), vuốt nhọn đầu lông và đặt ngang trên gác bút sứ thanh hoa hoặc treo móc lên cho ráo.',
        why: 'Giữ thói quen chăm sóc dụng cụ ngay từ giai đoạn tập nước sẽ giúp việc bảo quản bút mực sau này trở nên tự nhiên.',
      },
    ],
    exampleNote:
      'Thầy có thể dùng ngay Phòng luyện tập trên website để lưu lại một bản vẽ tổng hợp bằng nét số hóa, hoặc chụp ảnh mặt vải ô mễ lúc nét nước còn đang rõ để lưu vào Góc thực hành làm kỷ niệm.',
    commonMistakes: [
      {
        mistake: 'Tập quá lâu một mạch 1–2 tiếng khiến cổ tay mỏi và viết ẩu về cuối.',
        fix: 'Mỗi buổi 15–25 phút tập trung là lý tưởng nhất; thà đều đặn 3 buổi mỗi tuần còn hơn dồn một buổi quá dài.',
      },
      {
        mistake: 'Để đầu bút tì trực tiếp xuống đáy hũ nước khi nghỉ tay.',
        fix: 'Khi nghỉ dù chỉ 1 phút, luôn nhấc bút đặt lên gác bút thanh hoa.',
      },
    ],
    exercise:
      'Thầy thực hiện trọn vẹn chu trình 4 bước của một buổi luyện chuẩn trên vải ô mễ, sau đó ghi vài dòng cảm nhận về sự thay đổi của bàn tay so với Bài 1 vào Nhật ký học tập.',
    checklist: [
      'Tôi đã thực hiện đủ 6 nhóm nét cơ bản trong một buổi luyện.',
      'Tôi biết cách vuốt gọn đầu bút và gác bút đúng cách khi nghỉ.',
      'Tôi cảm thấy tự tin và thoải mái hơn hẳn khi cầm cây bút lông.',
    ],
    visualAid: 'session-flow',
  },
];
