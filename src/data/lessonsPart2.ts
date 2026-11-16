import { Lesson } from '../types';

export const LESSONS_PART_2: Lesson[] = [
  {
    id: 'L13',
    number: 13,
    moduleId: 4,
    title: 'Quan sát cấu trúc chữ cái',
    duration: '15 phút',
    level: 'Trung cấp nhập môn',
    intro:
      'Chúc mừng thầy đã bước sang Học phần 4! Từ đây, những nét rời rạc thầy luyện ở Học phần 3 sẽ bắt đầu kết hợp thành chữ cái tiếng Việt. Trước khi đặt bút viết một chữ hoàn chỉnh, ta cần tập nhìn "khung tỷ lệ" của con chữ.',
    objectives: [
      'Nhận diện được 3 vùng chiều cao của chữ cái thường (vùng giữa, phần nhô lên trên, phần kéo xuống dưới).',
      'Thấy được mối liên hệ giữa chữ cái Quốc ngữ và các nét đơn đã học (dọc, ngang, cong, chấm).',
      'Không còn viết chữ bị quá to nhỏ thất thường trên cùng một hàng.',
    ],
    toolsNeeded: [
      '1 cây bút lông phù hợp (kiêm hào hoặc lang hào), hũ nước sạch, vải ô mễ',
    ],
    explanation: [
      'Một chữ cái tiếng Việt thực chất chỉ là sự lắp ghép của 2 đến 3 nét cơ bản mà thầy vừa luyện xong: ví dụ chữ "a" gồm một nét cong kín (giống chữ o) ghép với một nét thẳng móc; chữ "t" gồm một nét dọc, một nét móc nhẹ và một nét ngang ngắn.',
      'Điểm dễ khiến chữ viết bằng bút lông trông rối là các chữ đứng cạnh nhau có kích thước không đều: chữ "o" bỗng to gấp đôi chữ "a", hoặc phần thân cao của chữ "h" lại ngắn ngang chữ "n".',
      'Để khắc phục ngay từ đầu, thầy hãy hình dung trên mặt vải ô mễ có 3 tầng cao độ nhẹ nhàng: tầng giữa chứa thân chữ (như a, o, e, n, m), tầng trên dành cho nét vươn lên (như b, d, h, k, l) và tầng dưới dành cho chân kéo xuống (như g, p, q, y).',
    ],
    steps: [
      {
        title: 'Bước 1: Chia ô vuông tưởng tượng trên vải',
        detail:
          'Nhìn một khoảng chiều cao khoảng 4–5 cm trên mặt vải ô mễ như một ô vuông nhỏ cho phần thân chữ chính.',
        why: 'Có khung ước lượng bằng mắt giúp thầy giữ chiều cao chữ đồng đều mà không cần kẻ thước.',
      },
      {
        title: 'Bước 2: Tách thử 3 chữ mẫu ra thành từng nét',
        detail:
          'Trước khi viết liền mạch, thử viết rời từng bộ phận của chữ "a", chữ "h", chữ "g" đặt cạnh nhau để thấy cấu trúc lắp ghép của chúng.',
        why: 'Khi thấy chữ cái chỉ gồm những nét quen thuộc, tâm lý e ngại viết chữ sẽ biến mất ngay.',
      },
      {
        title: 'Bước 3: Ghép thử chậm rãi',
        detail:
          'Viết hoàn chỉnh chữ "a", "h", "g" kích thước cao khoảng 4–6 cm trên vải ô mễ, dừng nhẹ ở điểm chuyển giữa các nét.',
        why: 'Kích thước vừa phải giúp đầu bút lông có đủ không gian xoay trở mà không bị chật chội.',
      },
    ],
    exampleNote:
      'Gợi ý trực quan: Thầy có thể viết chữ "o" làm chuẩn kích thước giữa dòng trước, rồi viết tiếp "a", "c", "e" với chiều cao thân bằng đúng chữ "o" đó.',
    commonMistakes: [
      {
        mistake: 'Cố viết chữ nhỏ xíu như cỡ chữ viết bằng bút bi (chỉ cao 0,5–1 cm).',
        fix: 'Đầu bút lông rộng 0,7–0,9 cm cần không gian lớn hơn; hãy viết cỡ chữ tối thiểu 3–5 cm ở giai đoạn mới tập.',
      },
      {
        mistake: 'Viết liền một lèo không dừng nghỉ khiến chỗ ghép nét bị dính bết.',
        fix: 'Thả lỏng và nhấc bút giữa các nét tách rời giống như cách xếp từng mảnh ghép.',
      },
    ],
    exercise:
      'Thầy chọn 4 chữ cái quen thuộc (ví dụ: o, a, h, g), dùng nước sạch viết mỗi chữ 3 lần trên vải ô mễ với kích thước thân chữ đồng đều nhau.',
    checklist: [
      'Tôi nhận ra các nét đơn bên trong từng chữ cái.',
      'Kích thước thân các chữ cái tương đối đồng đều nhau.',
      'Chữ viết đủ thoáng, không bị đặc kín vì viết quá nhỏ.',
    ],
    visualAid: 'letter-structure',
  },
  {
    id: 'L14',
    number: 14,
    moduleId: 4,
    title: 'Luyện nhóm chữ có nét cong',
    duration: '18 phút',
    level: 'Trung cấp nhập môn',
    intro:
      'Nhóm chữ nét cong (như o, c, e, a, d, đ, q, g, s) mang lại vẻ uyển chuyển rất riêng cho chữ Quốc ngữ. Hôm nay thầy sẽ thực hành nhóm chữ này trên nền kỹ thuật thanh – đậm đã học ở Bài 11.',
    objectives: [
      'Viết được nhóm chữ tròn và cong mềm mại: o, c, e, a, d, đ.',
      'Ứng dụng nhịp "bên trái đậm – bên phải thanh" hợp lý để chữ có độ nổi khối.',
      'Giữ được khoảng hở bên trong bụng chữ (lòng chữ) thoáng, không bị bít kín.',
    ],
    toolsNeeded: [
      '1 cây bút lông, hũ nước sạch, vải tập nước ô mễ',
    ],
    explanation: [
      'Khi viết nhóm chữ có bụng cong như "c, o, a, d", điều đẹp nhất không chỉ là đường nét bên ngoài mà còn là khoảng không gian trắng nằm lọt thỏm bên trong bụng chữ. Nếu nét bút ấn quá dày, khoảng trống bên trong bị bít hẹp lại khiến con chữ trông nặng nề.',
      'Thầy hãy thử áp dụng quy luật: phần lưng cong bên trái (đi từ trên xuống dưới) nhấn nhẹ bụng bút cho đậm hơn một chút; khi vòng qua đáy đi ngược lên phía bên phải thì nhấc nhẹ tay cho nét thanh lại.',
      'Riêng với chữ "e" và chữ "s", vì đường cong có đoạn uốn nhỏ hoặc đổi chiều liên tục, thầy đi thật chậm và nhấc nhẹ đầu bút ở đoạn vòng hẹp để tránh bị lem vào giữa chữ.',
    ],
    steps: [
      {
        title: 'Bước 1: Luyện bộ ba "o – c – e"',
        detail:
          'Viết chữ "o" tròn đầy trước, sau đó mở cửa bên phải để thành chữ "c", rồi thêm nét ngang xiên nhẹ bắt từ giữa bụng vòng lên thành chữ "e".',
        why: 'Ba chữ này dùng chung một chuyển động cong bên trái, luyện nối tiếp sẽ rất nhanh quen tay.',
      },
      {
        title: 'Bước 2: Mở rộng sang "a – d – đ"',
        detail:
          'Viết phần bụng tròn trước (như chữ o hơi nghiêng nhẹ), nhấc bút đặt nét thẳng đứng chạm mép phải tạo thành chữ "a", hoặc kéo cao lên trên thành chữ "d", rồi thêm nét gạch ngang ngắn cho chữ "đ".',
        why: 'Tách phần bụng tròn và phần thân thẳng giúp hai bộ phận cân đối, không bị xô lệch.',
      },
      {
        title: 'Bước 3: Chú ý điểm kết thúc nhẹ nhàng',
        detail:
          'Ở cuối nét cong chữ "c" hoặc "e", hơi thu nhẹ đầu bút vào trong hoặc thả lơi tự nhiên thay vì khựng cứng.',
        why: 'Tạo cảm giác nét chữ còn ngân nhẹ, mềm mại hơn.',
      },
    ],
    exampleNote:
      'Ví dụ chữ "đ": Nét gạch ngang trên thân chữ "đ" nên dùng nét ngang ngắn, thanh mảnh hơn một chút so với thân dọc chính để không lấn át tổng thể chữ.',
    commonMistakes: [
      {
        mistake: 'Lòng chữ "e" hoặc "a" bị bít chặt vì đầu bút ấn quá sâu.',
        fix: 'Dùng cây bút gọn hơn (như kiêm hào) hoặc chỉ dùng khoảng 1/3–1/2 đầu lông khi viết vòng nhỏ.',
      },
      {
        mistake: 'Chữ "o" và chữ "a" bị nghiêng ngả mỗi chữ một hướng.',
        fix: 'Giữ trục lưng các chữ cùng thẳng đứng hoặc cùng hơi nghiêng nhẹ về một hướng thống nhất.',
      },
    ],
    exercise:
      'Thầy thực hành viết trên vải ô mễ mỗi chữ 1 hàng: o, c, e, a, d, đ. Chú ý giữ khoảng trống bên trong bụng chữ luôn rõ ràng.',
    checklist: [
      'Khoảng trống bên trong bụng chữ o, e, a thoáng và dễ nhìn.',
      'Nét lưng cong bên trái có độ đậm nhỉnh hơn nét phụ bên phải.',
      'Nét gạch ngang của chữ đ cân đối, không quá dài hay quá dày.',
    ],
    visualAid: 'curved-letters',
  },
  {
    id: 'L15',
    number: 15,
    moduleId: 4,
    title: 'Luyện nhóm chữ có nét thẳng',
    duration: '18 phút',
    level: 'Trung cấp nhập môn',
    intro:
      'Nếu nhóm chữ cong mang lại sự mềm mại, thì nhóm chữ thẳng như i, t, l, h, k, n, m, u, v, y tạo nên bộ khung vững vàng, nhịp nhàng cho câu chữ. Hôm nay thầy sẽ tập giữ cho các chân chữ đứng đều và có điểm nhấn tự nhiên.',
    objectives: [
      'Viết vững nhóm chữ có trục thẳng và nét móc: i, t, l, u, n, m, h.',
      'Giữ cho các chân song song (như 2 chân chữ n, 3 chân chữ m) cách đều nhau.',
      'Biết cách tạo điểm đầu nét và cuối nét có lực, không bị rời rạc.',
    ],
    toolsNeeded: [
      '1 cây bút lông, hũ nước sạch, vải tập nước ô mễ',
    ],
    explanation: [
      'Trong chữ "n" hay chữ "m", thử thách lớn nhất là khoảng cách giữa các chân dọc. Nếu hai chân đầu quá sát còn chân thứ ba lại hở xa, chữ sẽ trông bị mất thăng bằng.',
      'Mẹo nhỏ là giữ nhịp điệu giống nhau cho mỗi vòm: kéo thẳng xuống đậm -> nhấc nhẹ ở chân -> đưa nét nối mảnh vòng lên đỉnh vòm -> kéo thẳng xuống đậm cho chân tiếp theo.',
      'Với chữ cao như "l, h, k", thầy đừng kéo thẳng đứng đơ cứng như cây gậy mà giữ thẳng trục, tạo điểm tựa nhẹ ở đỉnh đầu nét và độ mở nhẹ ở chân đá lên để chữ vẫn có độ mềm của bút lông.',
    ],
    steps: [
      {
        title: 'Bước 1: Tập bộ "i – t – l"',
        detail:
          'Viết chữ "i" ngắn có móc nhẹ ở chân và dấu chấm tròn phía trên. Nâng chiều cao lên một chút và thêm gạch ngang thành "t". Kéo cao thoáng hơn nữa thành "l".',
        why: 'Làm quen với 3 cấp độ chiều cao trên cùng một dáng trục thẳng.',
      },
      {
        title: 'Bước 2: Luyện nhịp chân chữ "u – n – m"',
        detail:
          'Đi chậm theo nhịp thanh – đậm đã học ở Bài 11: lên thanh, xuống đậm. Đếm thầm 2 nhịp cho "n" và 3 nhịp đều cho "m".',
        why: 'Nhịp đếm đều đặn tự nhiên giúp khoảng cách giữa các chân chữ bằng nhau.',
      },
      {
        title: 'Bước 3: Thử chữ có nét khuyết hoặc thân cao như "h – y"',
        detail:
          'Chữ "h" có thể viết giản dị bằng một thân dọc vững rồi ghép nhịp vòm chữ "n" ở bên phải — rất dễ kiểm soát cho người mới.',
        why: 'Cách viết tách nét đơn giản giúp chữ vừa hiện đại, vừa dễ đọc và không bị rối nét vòng.',
      },
    ],
    exampleNote:
      'Trong thư pháp chữ Quốc ngữ hiện đại, thầy không nhất thiết phải thắt vòng nét khuyết trên của chữ "l" hay "h" giống mẫu vở ô ly tiểu học nếu thấy khó; một nét dọc hơi uốn nhẹ đầu cũng rất trang nhã và dễ đọc.',
    commonMistakes: [
      {
        mistake: 'Các chân chữ "m" xiêu vẹo chụm vào nhau hoặc xòe ra như chân bàn.',
        fix: 'Nhìn vào khoảng hở bên dưới mỗi vòm để điều chỉnh cho các khe hở rộng gần bằng nhau.',
      },
      {
        mistake: 'Chấm chữ "i" hoặc gạch ngang chữ "t" đặt quá xa thân chữ.',
        fix: 'Đặt dấu chấm cách đỉnh chữ "i" khoảng nửa bề rộng thân nét, giữ sự gắn kết.',
      },
    ],
    exercise:
      'Thầy thực hành viết trên vải ô mễ mỗi chữ 1 hàng: i, t, l, u, n, m, h. Tự kiểm tra bằng mắt xem các nét dọc có song song tương đối với nhau không.',
    checklist: [
      'Các nét dọc trong cùng một chữ (như n, m) đứng khá song song.',
      'Nhịp lên thanh – xuống đậm thể hiện rõ ở các vòm chữ u, n, m.',
      'Chiều cao của t, l, h phân biệt rõ với nhóm chữ thấp i, u, n.',
    ],
    visualAid: 'straight-letters',
  },
  {
    id: 'L16',
    number: 16,
    moduleId: 4,
    title: 'Dấu tiếng Việt và độ dễ đọc',
    duration: '20 phút',
    level: 'Trung cấp nhập môn',
    intro:
      'Điểm làm nên bản sắc duy nhất của thư pháp Việt chính là hệ thống dấu mũ (â, ê, ô, ă, ơ, ư) và 5 dấu thanh (sắc, huyền, hỏi, ngã, nặng). Một bức thư pháp có nét đẹp đến đâu nhưng đặt dấu thiếu rõ ràng hoặc bị hiểu nhầm thành dấu khác sẽ làm giảm giá trị biểu đạt.',
    objectives: [
      'Viết được rõ ràng từng loại dấu phụ và dấu thanh bằng bút lông.',
      'Biết cách chọn kích thước và vị trí đặt dấu để không đụng vào thân chữ chính.',
      'Ưu tiên hàng đầu: giữ nguyên độ dễ đọc và chính xác của tiếng Việt.',
    ],
    toolsNeeded: [
      '1 cây bút lông (thầy có thể thử cây kiêm hào cỡ 0,7 cm để cảm nhận việc chấm dấu gọn hơn), hũ nước sạch, vải ô mễ',
    ],
    explanation: [
      'Khi viết bằng bút bi, dấu thanh rất nhỏ. Nhưng khi chuyển sang bút lông có đầu chóp mềm, nếu thầy giữ nguyên độ nhấn như viết thân chữ, dấu sắc hay dấu ngã sẽ to ngang ngửa chữ "o", làm cả từ trông nặng nề và rối mắt.',
      'Nguyên tắc vàng khi viết dấu tiếng Việt bằng bút lông là: chỉ dùng phần chóp nhọn (1/4 đến 1/3 đầu lông), viết gọn, nhẹ, dứt khoát và chừa một khoảng thở nhỏ giữa thân chữ với dấu.',
      'Với những chữ có "dấu chồng dấu" (như "ế", "ồ", "ậ", "ữ"), hãy hạ nhẹ dấu mũ xuống sát đầu chữ một chút để nhường khoảng không phía trên cho dấu thanh đứng thoải mái, tránh bị chạm mép vào dòng trên.',
    ],
    steps: [
      {
        title: 'Bước 1: Luyện bộ dấu mũ (ˆ, ˘, ̛)',
        detail:
          'Dấu mũ của â, ê, ô gồm hai nét ngắn chụm góc nhẹ (không cần nhọn hoắt quá cứng). Dấu trăng của ă là một nét cong ngửa gọn. Dấu móc của ơ, ư là một nét cong nhỏ gắn khẽ ở góc phải phía trên chữ.',
        why: 'Mỗi dấu phụ chỉ cần 1–2 chuyển động cực ngắn của chóp bút là đủ rõ ràng.',
      },
      {
        title: 'Bước 2: Luyện 5 dấu thanh tách biệt',
        detail:
          'Dấu huyền: nét chấm dài xiên từ trên-trái xuống dưới-phải. Dấu sắc: từ trên-phải kéo xuống dưới-trái, thu gọn. Dấu hỏi: nét móc cong nhỏ mở sang trái. Dấu ngã: nét lượn sóng mềm nằm ngang. Dấu nặng: nét chấm tròn gọn dưới đáy chữ.',
        why: 'Luyện riêng từng dấu giúp thầy tránh nhầm lẫn hướng nghiêng hoặc làm dấu hỏi trông giống dấu sắc.',
      },
      {
        title: 'Bước 3: Ghép thử chữ có "dấu kép"',
        detail:
          'Viết thử các chữ: "ế", "ổ", "ữ", "ạ", "ậ". Quan sát khoảng cách giữa mặt chữ, dấu mũ và dấu thanh.',
        why: 'Đây là phép thử thực tế nhất cho khả năng tiết chế đầu bút của thầy.',
      },
    ],
    exampleNote:
      'Ví dụ chữ "Tâm" và chữ "Học": Chữ "Tâm" có dấu mũ trên chữ â nhỏ gọn, nằm cân đối chính giữa chữ â; chữ "Học" có dấu nặng chấm tròn gọn ngay bên dưới đáy chữ o, cách một khe hở bằng khoảng 1/3 độ dày nét.',
    commonMistakes: [
      {
        mistake: 'Viết dấu ngã hoặc dấu hỏi quá to bằng cả cái mũ đội trùm lên chữ.',
        fix: 'Chỉ chạm nhẹ chóp bút để viết dấu thanh; kích thước dấu thanh chỉ nên bằng khoảng 1/4 đến 1/3 kích thước chữ cái.',
      },
      {
        mistake: 'Đặt dấu sắc/huyền lệch tít sang một bên chữ cái khác.',
        fix: 'Luôn xác định nguyên âm chính mang dấu trước khi hạ bút chấm dấu.',
      },
    ],
    exercise:
      'Thầy viết trên vải ô mễ các từ đơn đầy đủ dấu: "Bình", "An", "Nhẫn", "Tĩnh", "Học", "Đức". Sau đó lùi ra nhìn xem dấu nào còn to quá hoặc sát thân chữ quá để viết lại lượt thứ hai.',
    checklist: [
      'Các dấu phụ và dấu thanh dễ phân biệt bằng mắt thường.',
      'Kích thước dấu nhỏ gọn, thanh thoát hơn nét thân chữ.',
      'Không có chữ nào bị dính liền dấu vào thân chữ.',
    ],
    visualAid: 'diacritics',
  },
  {
    id: 'L17',
    number: 17,
    moduleId: 4,
    title: 'Ghép chữ thành từ ngắn',
    duration: '20 phút',
    level: 'Trung cấp nhập môn',
    intro:
      'Khép lại Học phần 4, hôm nay thầy sẽ nối các chữ cái và dấu thanh lại thành những từ hoàn chỉnh có 2–3 chữ (như "An yên", "Tâm an", "Tri ân", "Chữ Tâm"). Đây là bước chuẩn bị trực tiếp trước khi thầy chạm tay vào nghiên mực thật.',
    objectives: [
      'Biết cách giữ khoảng cách đều giữa các chữ cái trong cùng một tiếng (chữ).',
      'Biết cách phân biệt khoảng cách "giữa chữ với chữ trong một tiếng" và "khoảng cách giữa hai tiếng".',
      'Giữ được một từ viết ra đi trên cùng một đường cơ sở tương đối ngay ngắn.',
    ],
    toolsNeeded: [
      '1 cây bút lông, hũ nước sạch, vải tập nước ô mễ',
    ],
    explanation: [
      'Khi mới ghép các chữ cái lại thành một từ (ví dụ chữ "Yên"), lỗi phổ biến nhất là các chữ cái đứng cách nhau rời rạc như đang giận dỗi, hoặc ngược lại đè sát lên nhau mất khoảng thở.',
      'Trong một tiếng, các chữ cái cần đứng gần nhau thành một khối đoàn kết — khoảng hở giữa hai chữ cái cạnh nhau thường chỉ bằng khoảng 1/2 đến 1 lần bề rộng nét chữ, và thầy có thể nối nét hoặc đặt sát khít hài hòa mà không nhất thiết phải nối dây rườm rà nếu chưa quen.',
      'Ngược lại, khoảng cách giữa hai tiếng (ví dụ giữa "An" và "Yên") phải rộng rõ ràng (thường gần bằng bề rộng của một chữ "o") để người đọc nhìn lướt qua là tách nghĩa được ngay.',
    ],
    steps: [
      {
        title: 'Bước 1: Viết 1 tiếng rời có 3–4 chữ cái',
        detail:
          'Chọn một tiếng ngắn như "Tâm", "An", "Phúc", "Đức". Viết chữ cái đầu tiên hơi lớn hoặc vững một chút, các chữ cái sau đứng sát gọn bên cạnh, rồi mới đặt dấu ở bước cuối cùng.',
        why: 'Viết hết thân chữ của một tiếng rồi mới bỏ dấu giúp thầy căn chính xác vị trí cân đối nhất của dấu trên tổng thể tiếng đó.',
      },
      {
        title: 'Bước 2: Ghép cụm 2 tiếng đứng ngang hoặc đứng dọc',
        detail:
          'Thử viết cụm "An yên" trên một hàng ngang, sau đó thử viết lại theo hàng dọc ("An" ở trên, "Yên" ở dưới).',
        why: 'Làm quen với cả hai cách xếp chữ ngang và dọc sẽ rất có ích khi thầy thiết kế bố cục tác phẩm ở Học phần 5–6.',
      },
      {
        title: 'Bước 3: Đọc lại bằng mắt ở khoảng cách một sải tay',
        detail:
          'Ngồi thẳng lưng, nhìn lướt qua cụm từ vừa viết trong 2 giây. Xem chữ có đọc được ngay không, có chữ nào bị trôi lệch lên xuống bất thường không.',
        why: 'Góc nhìn của người thưởng thức luôn ở khoảng cách xa hơn lúc mình cúi sát bàn viết.',
      },
    ],
    exampleNote:
      'Mẹo nhỏ: Nếu viết theo hàng dọc, thầy có thể viết chữ phía trên hơi gọn hơn một chút hoặc căn tâm trục dọc thẳng từ trên xuống dưới để hai chữ không bị xô lệch sang trái – phải.',
    commonMistakes: [
      {
        mistake: 'Khoảng cách giữa các chữ cái trong cùng một tiếng rộng bằng khoảng cách giữa hai tiếng.',
        fix: 'Thu hẹp khe hở giữa các chữ cái trong cùng một tiếng lại, xem chúng như một khối thống nhất.',
      },
      {
        mistake: 'Chữ cuối dòng bị chạy dốc xuống hoặc bay vút lên cao.',
        fix: 'Ước lượng một đường thẳng ngang (hoặc dọc) mờ trong tâm trí và thường xuyên liếc lại chữ đầu tiên làm mốc.',
      },
    ],
    exercise:
      'Thầy chọn 3 cụm từ 2 tiếng mà mình yêu thích (gợi ý: "An yên", "Tĩnh tâm", "Tri ân"), luyện viết mỗi cụm 3 lần bằng nước trên vải ô mễ — thử cả chiều ngang lẫn chiều dọc.',
    checklist: [
      'Các chữ cái trong cùng một tiếng gắn kết gọn gàng, không rời rạc.',
      'Khoảng cách tách biệt giữa các tiếng đủ rõ để đọc mượt mà.',
      'Dấu thanh được đặt sau cùng và nằm cân đối trên cụm chữ.',
    ],
    visualAid: 'word-spacing',
  },
  {
    id: 'L18',
    number: 18,
    moduleId: 5,
    title: 'Làm quen với mực tàu đóng chai',
    duration: '15 phút',
    level: 'Trung cấp',
    intro:
      'Chào mừng thầy đến với thế giới của mực thật! Sau 17 bài làm chủ cây bút với nước sạch, hôm nay thầy sẽ mở chai mực tàu 100 ml và thực hiện những nét mực đầu tiên trên giấy. Hãy nhớ cất tấm vải tập nước ô mễ đi trước khi mở chai mực nhé.',
    objectives: [
      'Biết cách rót mực đóng chai ra nghiên an toàn, không vấy bẩn bàn.',
      'Hiểu vì sao không nhúng bút trực tiếp vào miệng chai mực và không đổ mực thừa ngược lại chai.',
      'Làm quen với cảm giác bút chấm mực thật trên giấy (khác với nước trên vải).',
    ],
    toolsNeeded: [
      'Mực tàu đóng chai (100 ml)',
      'Nghiên mực (7,5 × 7,5 cm) dùng làm khay đựng mực',
      'Thảm lót giấy (39,8 × 27,9 cm)',
      'Giấy tập viết mực phù hợp (ví dụ giấy dó, giấy xuyến chỉ mỏng hoặc giấy tập chuyên dụng; có thể thử trước trên giấy nháp thấm mực tốt)',
      '1 cây bút lông, gác bút sứ thanh hoa, hũ sứ đựng nước để rửa bút cuối buổi',
    ],
    explanation: [
      'Mực tàu đóng chai là loại mực nước pha sẵn rất tiện lợi: chỉ cần rót ra một lượng nhỏ là dùng được ngay, màu đen sâu và đều. Tuy nhiên, mực tàu có keo kết dính và muội than rất mịn, nếu bám vào quần áo hay vải tập nước thì gần như không giặt sạch được.',
      'Một lưu ý quan trọng: Thầy KHÔNG nên cắm thẳng cây bút vào miệng chai mực. Lý do là miệng chai hẹp dễ làm quẹt gãy lông bút, thân cán bị dính mực lem ra tay, và nước ẩm còn sót trên bút có thể làm loãng hỏng cả chai mực 100 ml.',
      'Thay vào đó, ta luôn rót khoảng 1–2 thìa nhỏ mực vào phần lòng sâu (ao nghiên) của nghiên mực 7,5 × 7,5 cm. Dùng hết bao nhiêu rót thêm bấy nhiêu. Nếu cuối buổi còn dư một ít mực trên nghiên, hãy dùng khăn giấy thấm bỏ và rửa nghiên bằng nước sạch, tuyệt đối không đổ ngược lại vào chai.',
    ],
    steps: [
      {
        title: 'Bước 1: Dọn sạch vải nước và trải giấy lên thảm lót',
        detail:
          'Cuộn cất tấm vải tập nước ô mễ xa khỏi khu vực bàn. Trải thảm lót (39,8 × 27,9 cm) ở giữa bàn và đặt tờ giấy luyện tập lên trên.',
        why: 'Bảo vệ tuyệt đối tấm vải ô mễ và mặt bàn khỏi các giọt mực vô tình rơi xuống.',
      },
      {
        title: 'Bước 2: Lắc nhẹ chai và rót lượng mực vừa đủ',
        detail:
          'Lắc nhẹ chai mực vài cái cho đều lắng. Mở nắp, nghiêng nhẹ miệng chai rót một lượng mực nhỏ (chỉ ngập khoảng nửa lòng sâu của nghiên 7,5 × 7,5 cm), rồi đậy kín nắp chai ngay lập tức.',
        why: 'Đậy nắp ngay tránh tình trạng quên tay gạt trúng làm đổ cả chai mực.',
      },
      {
        title: 'Bước 3: Làm ẩm bút bằng nước trước khi thấm mực',
        detail:
          'Nhúng sơ đầu bút vào hũ nước sạch, thấm bớt nước trên khăn giấy cho đầu lông hơi ẩm mềm, sau đó mới chấm 2/3 đầu lông vào mực trong nghiên và gạt nhẹ ở thành nghiên.',
        why: 'Nếu dùng bút khô cong chấm thẳng vào mực đặc, mực sẽ bám chặt vào gốc lông rất khó rửa sạch sau này; làm ẩm bằng nước trước giúp sợi lông mềm và dễ xả mực.',
      },
      {
        title: 'Bước 4: Kéo thử vài nét cơ bản trên giấy',
        detail:
          'Kéo chậm vài nét ngang, dọc và vòng tròn trên giấy. Cảm nhận sự khác biệt về độ ma sát giữa giấy với mực so với vải ô mễ với nước.',
        why: 'Giấy thấm mực nhanh hơn vải nước, nên thầy cần quan sát tốc độ loang của mực ngay khi đầu bút chạm xuống.',
      },
    ],
    exampleNote:
      'Sau khi tập xong, nhớ mang bút đi rửa ngay dưới vòi nước mát nhẹ (xuôi theo chiều lông) cho đến khi bóp nhẹ gốc lông thấy nước chảy ra trong vắt mới thôi.',
    commonMistakes: [
      {
        mistake: 'Rót mực đầy tràn nghiên khiến lúc gạt bút mực văng ra ngoài.',
        fix: 'Chỉ rót mực khoảng 1/3 đến 1/2 độ sâu của ao nghiên.',
      },
      {
        mistake: 'Quên rửa bút sau khi tập mực, để qua ngày hôm sau đầu bút khô cứng như đá.',
        fix: 'Luôn rửa sạch bút và rửa nghiên ngay khi kết thúc buổi viết.',
      },
    ],
    exercise:
      'Thầy thực hành rót mực đúng chuẩn, làm ẩm bút và viết 1 trang giấy đầu tiên gồm các nét thẳng, nét cong và 2–3 chữ cái đơn giản để làm quen với cảm giác mực trên giấy.',
    checklist: [
      'Vải tập nước ô mễ đã được cất gọn xa khu vực mực.',
      'Tôi đã làm ẩm bút bằng nước sạch trước khi chấm mực.',
      'Tôi đã rửa sạch cả bút và nghiên mực ngay sau khi tập xong.',
    ],
    visualAid: 'bottled-ink',
  },
  {
    id: 'L19',
    number: 19,
    moduleId: 5,
    title: 'Mài thỏi mực trên nghiên',
    duration: '18 phút',
    level: 'Trung cấp',
    intro:
      'Bên cạnh chai mực tiện lợi, trong bộ quà tặng của thầy còn có thỏi mực Kim Bất Hoán và chiếc nghiên đá 7,5 × 7,5 cm. Mài mực không chỉ để tạo ra thứ mực êm mượt mà còn là 5 phút tĩnh tâm tuyệt vời trước mỗi buổi viết.',
    objectives: [
      'Biết cách căn lượng nước vừa phải trên nghiên để mài thỏi mực Kim Bất Hoán.',
      'Thực hiện được tư thế cầm thỏi mực thẳng đứng và động tác xoay tròn nhẹ đều.',
      'Biết cách bảo quản thỏi mực khô ráo sau khi mài để không bị nứt.',
    ],
    toolsNeeded: [
      'Thỏi mực Kim Bất Hoán',
      'Nghiên mực (7,5 × 7,5 cm)',
      'Hũ sứ đựng nước sạch và một chiếc thìa nhỏ (hoặc nhỏ giọt bằng đầu bút sạch)',
      'Khăn giấy khô thấm đầu thỏi mực sau khi xong',
    ],
    explanation: [
      'Thỏi mực được ép từ muội than mịn và keo tự nhiên thành khối rắn. Khi ta nhỏ chút nước lên mặt đá hơi nhám của nghiên và xoay nhẹ thỏi mực, lớp đá mịn sẽ mài các hạt muội hòa tan đều vào nước.',
      'Nhiều người mới mài mực hay mắc lỗi: đổ quá nhiều nước ngay từ đầu khiến mài mãi mực vẫn xám nhạt như nước lã, hoặc ấn thỏi mực quá mạnh tay làm mặt mực vỡ vụn và xước nghiên.',
      'Bí quyết rất đơn giản: "Ít nước, cầm thẳng, xoay chậm, lực nhẹ". Chỉ cần một lượng nước cỡ 1/2 đến 1 thìa cà phê (vài giọt đầy), mài thong thả khoảng 3–5 phút là đủ cho một buổi tập ngắn.',
    ],
    steps: [
      {
        title: 'Bước 1: Nhỏ một ít nước sạch lên phần mặt bằng của nghiên',
        detail:
          'Dùng đầu bút sạch nhúng nước hoặc thìa nhỏ đưa khoảng 8–10 giọt nước vào phần lòng nghiên 7,5 × 7,5 cm.',
        why: 'Ít nước giúp mực nhanh sánh đen; nếu thiếu có thể nhỏ thêm 2–3 giọt nữa rất dễ dàng.',
      },
      {
        title: 'Bước 2: Cầm thỏi mực thẳng đứng và xoay vòng tròn nhẹ',
        detail:
          'Cầm thỏi mực Kim Bất Hoán thẳng đứng vuông góc với mặt nghiên. Xoay theo vòng tròn nhỏ đều đặn (thuận hoặc ngược chiều kim đồng hồ đều được), lực ấn vừa phải như đang xoa nhẹ.',
        why: 'Cầm thẳng giúp đáy thỏi mực mòn phẳng đều, không bị vát chéo nhọn hoắt như đầu đục.',
      },
      {
        title: 'Bước 3: Kiểm tra độ sánh của mực và gạt vào ao nghiên',
        detail:
          'Khi thấy nước mực đen bóng, hơi sánh nhẹ (thử chấm một chấm lên góc giấy nháp thấy đen rõ mà không nhòe nước xám xung quanh), gạt nhẹ đáy thỏi mực vào thành nghiên.',
        why: 'Tránh lãng phí giọt mực bám ở đáy thỏi mực.',
      },
      {
        title: 'Bước 4: Thấm khô ngay đầu thỏi mực',
        detail:
          'Dùng khăn giấy khô thấm sạch phần nước mực còn ướt ở đầu thỏi mực Kim Bất Hoán rồi đặt nằm ngang ở chỗ khô thoáng.',
        why: 'Nếu để thỏi mực ướt sũng hoặc dựng chân trong vũng nước trên nghiên, lớp keo sẽ hút ẩm gây nứt nẻ thỏi mực.',
      },
    ],
    exampleNote:
      'Ghi chú thực tế: Nghiên 7,5 × 7,5 cm có kích thước nhỏ gọn rất tiện mài lượng mực vừa đủ viết 1–2 tờ giấy nhỏ. Vì mặt nghiên nhỏ, thầy chỉ cần xoay các vòng tròn nhỏ gọn bên trong lòng nghiên với nhịp thật chậm rãi.',
    commonMistakes: [
      {
        mistake: 'Cầm nghiêng thỏi mực làm mòn vát một cạnh.',
        fix: 'Luôn giữ thỏi mực gần như thẳng đứng 90 độ với mặt nghiên.',
      },
      {
        mistake: 'Cắm thỏi mực dựng đứng ngay trong vũng mực khi đang viết.',
        fix: 'Mài xong phải thấm khô đầu thỏi mực và đặt riêng ra ngoài ngay.',
      },
    ],
    exercise:
      'Thầy thực hành mài thỏi mực Kim Bất Hoán trên chiếc nghiên 7,5 × 7,5 cm trong 3–4 phút, thử chấm viết vài chữ đơn lên giấy nháp và thấm khô thỏi mực đúng cách sau khi xong.',
    checklist: [
      'Tôi giữ được thỏi mực thẳng đứng khi mài, không bị vát lệch.',
      'Nước mực đạt màu đen đều, không quá loãng.',
      'Đầu thỏi mực được thấm khô sạch sẽ ngay sau khi mài xong.',
    ],
    visualAid: 'ink-grinding',
  },
  {
    id: 'L20',
    number: 20,
    moduleId: 5,
    title: 'Kiểm soát lượng mực và độ ẩm',
    duration: '18 phút',
    level: 'Trung cấp',
    intro:
      'Đây là bài học giúp thầy giải quyết vấn đề phổ biến nhất khi mới viết trên giấy thật: nét chữ lúc thì loang nhòe to tướng, lúc sau lại khô khốc xơ xác chỉ sau vài nét.',
    objectives: [
      'Nhận biết được lượng mực – ẩm lý tưởng trên đầu lông bút trước khi đặt xuống giấy.',
      'Biết cách "gạt bớt mực thừa" ở mép nghiên và dùng giấy thấm điều tiết.',
      'Hiểu hiện tượng "khô mực tự nhiên" (phi bạch) so với thiếu mực ngoài ý muốn.',
    ],
    toolsNeeded: [
      'Bút lang hào và kiêm hào, nghiên mực có mực (mực chai hoặc mực mài)',
      'Giấy nháp thấm mực, thảm lót, gác bút, khăn giấy thấm',
    ],
    explanation: [
      'Khác với vải ô mễ có bề mặt ổn định, giấy viết thư pháp thường có độ hút nước cao. Nếu đầu bút ngậm đầy ứ mực rồi chạm thẳng xuống giấy, mực sẽ ồ ạt chảy ra tạo thành một đốm loang tròn (hay gọi là bị "nở hoa" / nhòe mực).',
      'Ngược lại, nếu chỉ chấm nhẹ mỗi phần chóp bút, viết được nửa chữ là đầu lông khô cạn, nét bị rách.',
      'Kỹ thuật lấy mực đúng gồm 2 thao tác: chấm khoảng 2/3 đầu lông vào mực để bụng bút có dự trữ mực vừa đủ -> kéo nhẹ và xoay tròn đầu bút lên phần mặt dốc hoặc mép nghiên để gạt hết mực thừa đọng bên ngoài và tụ lại chóp nhọn. Nếu vẫn thấy hơi ướt, chạm khẽ 1 giây vào tờ giấy nháp bên cạnh rồi mới đặt lên giấy chính.',
    ],
    steps: [
      {
        title: 'Bước 1: Thử nghiệm 3 mức độ ẩm trên giấy nháp',
        detail:
          'Lần 1: chấm mực xong đặt thẳng xuống giấy (quan sát độ loang). Lần 2: chấm mực rồi gạt nhẹ 2 bên thành nghiên (quan sát mép nét gọn hơn). Lần 3: chấm mực, gạt nghiên và chạm nhẹ 1 giây lên giấy thấm trước khi viết.',
        why: 'Tự mắt thấy sự khác biệt của 3 mức độ ẩm giúp thầy nhanh chóng chỉnh tay theo từng loại giấy.',
      },
      {
        title: 'Bước 2: Cảm nhận độ "no mực vừa đủ"',
        detail:
          'Đầu bút đạt chuẩn khi các sợi lông chụm nhọn tự nhiên, bề mặt lông bóng nhẹ nhưng không có giọt mực treo lơ lửng ở đầu chóp.',
        why: 'Giữ được 1–2 chữ tròn nét liên tục trước khi cần chấm lại mực.',
      },
      {
        title: 'Bước 3: Thử tạo sắc độ đậm – nhạt bằng nước',
        detail:
          'Sau khi chấm mực, thử chạm nhẹ chóp bút vào nước sạch trong hũ rồi viết một chữ trên giấy nháp. Thầy sẽ thấy nét mực chuyển từ đen thẫm sang xám khói rất dịu mắt.',
        why: 'Giúp thầy hiểu cách nước và mực hòa quyện để tạo chiều sâu sắc độ nếu muốn thử sáng tạo.',
      },
    ],
    exampleNote:
      'Mẹo: Luôn để sẵn 1 tờ giấy nháp nhỏ ở bên cạnh tờ giấy viết chính. Trước khi viết một chữ quan trọng trong tác phẩm, chạm thử 1 nét nhỏ lên giấy nháp để kiểm tra xem mực có bị thừa hay không.',
    commonMistakes: [
      {
        mistake: 'Chấm mực quá ít chỉ ở 3–4 mm đầu chóp, dẫn đến viết nửa chữ đã hết mực phải chấm giữa chừng.',
        fix: 'Nhúng mực khoảng 1/2 đến 2/3 chiều dài lông để bụng bút giữ mực, rồi gạt bớt phần dư ở thành nghiên.',
      },
      {
        mistake: 'Dừng đầu bút quá lâu tại một điểm trên giấy thấm hút mạnh.',
        fix: 'Ở bước khởi bút hoặc thu bút trên giấy, thời gian dừng chỉ cần khoảng 0,3–0,5 giây là đủ, tránh giữ lâu làm mực loang rộng.',
      },
    ],
    exercise:
      'Thầy viết trên giấy nháp một chuỗi 5 chữ "An" liên tiếp: thử điều chỉnh thao tác gạt nghiên sao cho cả 5 chữ có độ sắc nét tương đương nhau, không bị nhòe ở chữ đầu và không bị khô rách ở chữ cuối.',
    checklist: [
      'Tôi luôn gạt bớt mực thừa trên thành nghiên trước khi đưa bút sang giấy.',
      'Chữ viết trên giấy không bị đọng vũng hay loang mép mất kiểm soát.',
      'Tôi biết dùng tờ giấy nháp kiểm tra độ ẩm trước khi viết chữ chính.',
    ],
    visualAid: 'moisture-control',
  },
  {
    id: 'L21',
    number: 21,
    moduleId: 5,
    title: 'Bố cục một câu thư pháp',
    duration: '20 phút',
    level: 'Trung cấp',
    intro:
      'Viết đẹp từng chữ đơn lẻ mới chỉ là nửa chặng đường. Điều khiến một bức thư pháp trông trang nhã, có hồn nằm ở bố cục: cách thầy sắp xếp chữ chính, chữ phụ, khoảng trắng xung quanh và vị trí đặt tên người viết.',
    objectives: [
      'Hiểu nguyên tắc "chừa biên" (lề giấy) và giữ khoảng thở trên trang giấy.',
      'Nắm được 3 kiểu bố cục phổ biến, an toàn và đẹp mắt cho người mới bắt đầu.',
      'Biết cách phân cấp kích thước giữa câu chính (đại tự) và dòng phụ / tên người viết (lạc khoản).',
    ],
    toolsNeeded: [
      'Giấy nháp khổ A4 hoặc khổ vuông/chữ nhật bất kỳ, một cây bút chì nhỏ để phác khung nháp',
      'Thước kẻ nhẹ (chỉ để hình dung lề khi học bố cục) hoặc gấp nhẹ mép giấy',
    ],
    explanation: [
      'Lỗi bố cục hay gặp nhất ở người mới là viết chữ quá to choán hết từ mép trên xuống sát mép dưới, không chừa lề trắng xung quanh. Trong thư pháp, khoảng giấy trống (lưu bạch) cũng quan trọng ngang ngửa nét mực đen — khoảng trống giúp mắt người xem được nghỉ ngơi và làm nổi bật câu chữ.',
      'Một tỷ lệ dễ nhớ cho người mới: vùng viết chữ chỉ nên chiếm khoảng 60%–70% diện tích bên trong tờ giấy, chừa lại viền trắng xung quanh ít nhất 3–5 cm ở cả bốn phía (đặc biệt phía trên và phía dưới cần thoáng).',
      'Ba bố cục dễ áp dụng nhất là: (1) Bố cục trung tâm 1–2 chữ lớn (ví dụ "An", "Nhẫn", "Tâm an"); (2) Bố cục 2 cột dọc đối xứng hoặc so le nhẹ (cho câu 4–6 chữ); (3) Bố cục hàng ngang trang nhã kèm dòng phụ nhỏ bên dưới.',
    ],
    steps: [
      {
        title: 'Bước 1: Chừa lề 4 phía trước khi định vị chữ',
        detail:
          'Nhìn tờ giấy và tưởng tượng một khung chữ nhật nằm gọn bên trong, cách bốn mép giấy một khoảng đều đặn (lề dưới và lề trên nên rộng rãi).',
        why: 'Khung lề thoáng khiến tác phẩm trông giống một bức tranh có khung viền tự nhiên, rất dễ đóng khung treo sau này.',
      },
      {
        title: 'Bước 2: Phân biệt "Chữ chính" và "Lạc khoản"',
        detail:
          'Câu thư pháp chính viết bằng cây bút lớn hơn (như lang hào) hoặc lực đậm rõ. Dòng chữ phụ nhỏ hơn (ví dụ ghi ngày tháng, câu giải nghĩa ngắn hoặc tên "Thúc Đương") viết gọn ở góc trống còn lại bằng cây bút nhỏ hơn (như kiêm hào).',
        why: 'Sự chênh lệch lớn – nhỏ giữa chữ chính và dòng phụ tạo nên nhịp điệu thị giác có trọng tâm.',
      },
      {
        title: 'Bước 3: Vẽ sơ đồ phác thảo bằng bút chì lên giấy nháp',
        detail:
          'Khoanh các hình tròn/chữ nhật tượng trưng cho vị trí từng chữ của một câu 4 chữ (ví dụ: "Vạn sự tùy duyên" hoặc "Tâm tĩnh trí minh") theo 2 phương án: hàng dọc và hàng ngang.',
        why: 'Phác thảo nhanh bằng bút chì mất chưa tới 2 phút nhưng giúp thầy tránh hỏng một tờ giấy quý vì lỡ thiếu chỗ cho chữ cuối.',
      },
    ],
    exampleNote:
      'Ví dụ bố cục câu 4 chữ "Tĩnh tâm minh trí": Có thể xếp thành 2 cột dọc: cột phải viết "Tĩnh tâm" hơi cao hơn một chút; cột trái viết "Minh trí" hơi thấp xuống một chút để tạo thế so le hài hòa, góc dưới bên trái viết dòng nhỏ năm và tên.',
    commonMistakes: [
      {
        mistake: 'Viết chữ đầu to quá khiến chữ cuối cùng bị dồn sát rạt xuống mép giấy.',
        fix: 'Luôn chia nhẩm tổng số chữ vào khung tưởng tượng hoặc gấp nhẹ làm dấu nếp mờ trước khi hạ bút.',
      },
      {
        mistake: 'Dòng tên người viết (lạc khoản) to ngang bằng chữ chính, tranh mất sự chú ý.',
        fix: 'Dòng lạc khoản chỉ nên có kích thước bằng khoảng 1/4 đến 1/3 chữ chính.',
      },
    ],
    exercise:
      'Thầy lấy 1 tờ giấy nháp, phác thảo bằng bút chì 3 sơ đồ bố cục khác nhau cho cùng một câu ngắn 2–4 chữ (1 kiểu đại tự 1 chữ, 1 kiểu 2 cột dọc, 1 kiểu hàng ngang).',
    checklist: [
      'Các phác thảo đều chừa lề giấy thoáng cả 4 phía.',
      'Phân biệt rõ kích thước giữa phần chữ chính và phần chữ phụ.',
      'Khoảng cách giữa các dòng và các chữ nhìn cân bằng trên trang giấy.',
    ],
    visualAid: 'layout-balance',
  },
  {
    id: 'L22',
    number: 22,
    moduleId: 5,
    title: 'Viết câu ngắn bằng mực',
    duration: '25 phút',
    level: 'Trung cấp',
    intro:
      'Đã đến lúc thầy kết hợp toàn bộ kỹ năng cầm bút, luyện nét, viết chữ Quốc ngữ, điều tiết mực và sắp xếp bố cục để viết hoàn chỉnh một câu ngắn bằng mực thật trên giấy!',
    objectives: [
      'Thực hiện trọn vẹn quy trình viết một câu 2–4 chữ bằng mực tàu trên giấy.',
      'Giữ được sự đồng nhất về độ đậm – nhạt của mực trong suốt cả câu.',
      'Hoàn thành ít nhất 2–3 bản viết để tự so sánh và rút kinh nghiệm.',
    ],
    toolsNeeded: [
      'Thảm lót giấy, giấy tập viết mực phù hợp',
      'Bút lang hào và bút kiêm hào',
      'Nghiên mực với mực tàu chai hoặc thỏi mực Kim Bất Hoán đã mài',
      'Hũ nước sạch, gác bút sứ thanh hoa, giấy nháp thử mực',
    ],
    explanation: [
      'Khi viết một câu hoàn chỉnh bằng mực thật, tâm lý thường hồi hộp ở chữ cuối cùng vì sợ hỏng cả tờ giấy. Bí quyết giúp thầy giữ bình tĩnh là: chuẩn bị sẵn 3–4 tờ giấy giống nhau thay vì chỉ 1 tờ duy nhất.',
      'Khi viết, cứ mỗi 1 hoặc 2 chữ thầy có thể chấm thêm mực một lần nếu thấy đầu bút bắt đầu khô, nhớ gạt nhẹ ở thành nghiên để lượng mực tương đồng với chữ đầu. Đừng cố ráng viết hết cả câu chỉ với một lần chấm mực nếu đầu bút đã bắt đầu thiếu mực ngoài ý muốn.',
      'Sau khi viết xong phần chữ chính, đợi vài giây cho mực ráo bớt rồi mới đổi sang cây bút nhỏ (hoặc chỉ dùng chóp nhọn) viết dòng tên nhỏ ở góc phù hợp.',
    ],
    steps: [
      {
        title: 'Bước 1: Chuẩn bị mực và viết thử 1 chữ trên giấy nháp',
        detail:
          'Rót mực hoặc mài mực vừa đủ, nhúng ẩm bút, chấm mực gạt nghiên và viết thử một chữ trong câu ra giấy nháp để căn cỡ chữ và độ ẩm.',
        why: 'Giúp ổn định nhịp thở và lượng mực trong đầu bút trước khi chạm vào tờ giấy chính.',
      },
      {
        title: 'Bước 2: Viết câu chính theo bố cục đã chọn',
        detail:
          'Đặt tờ giấy chính lên thảm lót. Viết chậm từng chữ theo bố cục đã định ở Bài 21 (gợi ý câu dễ viết: "Bình an", "Tĩnh tâm", hoặc "Vạn sự bình an").',
        why: 'Đi chậm và dứt khoát từng chữ giúp hạn chế sai sót chính tả hoặc quên dấu.',
      },
      {
        title: 'Bước 3: Chấm dấu thanh và hoàn tất chữ phụ',
        detail:
          'Kiểm tra kỹ lại tất cả dấu mũ, dấu thanh của câu vừa viết. Sau đó viết thêm một dòng lạc khoản ngắn thật gọn nếu còn khoảng trống đẹp.',
        why: 'Tránh trường hợp viết xong tác phẩm rất ưng ý nhưng lại thiếu một dấu hỏi hoặc dấu nặng.',
      },
      {
        title: 'Bước 4: Phơi khô mực và ngắm nhìn tổng thể',
        detail:
          'Đặt tờ giấy ra góc bàn phẳng cho mực khô tự nhiên trong 5–10 phút (không gấp vội khi mực còn ướt). Rửa sạch bút và nghiên.',
        why: 'Mực ướt rất dễ in lem sang mặt sau nếu gập giấy sớm.',
      },
    ],
    exampleNote:
      'Đừng vứt bỏ tờ viết đầu tiên dù có một chữ chưa ưng! Giữ lại cả 3 bản viết để đặt cạnh nhau, thầy sẽ thấy bản thứ 2 và thứ 3 tiến bộ rõ rệt chỉ trong vòng 20 phút.',
    commonMistakes: [
      {
        mistake: 'Chấm lại mực giữa chừng nhưng quên gạt mép nghiên làm chữ sau đậm và to bất thường hơn chữ trước.',
        fix: 'Mỗi lần chấm lại mực đều thực hiện đúng một nhịp gạt nhẹ thành nghiên và chấm thử 1 tích tắc lên giấy nháp.',
      },
      {
        mistake: 'Chạm cổ tay vào chữ vừa viết ướt khi chuyển sang viết chữ bên dưới hoặc bên cạnh.',
        fix: 'Viết từ trên xuống dưới; nếu viết ngang thì từ trái sang phải, nếu viết cột dọc thì ưu tiên từ cột phải sang cột trái (hoặc nhấc cao cổ tay tránh đè lên mực ướt).',
      },
    ],
    exercise:
      'Thầy viết hoàn chỉnh ít nhất 2 phiên bản của một câu 2–4 chữ bằng mực trên giấy, chụp ảnh bản ưng ý nhất lưu vào "Góc lưu bài thực hành" trên website.',
    checklist: [
      'Tôi đã chuẩn bị đủ giấy thử và kiểm tra mực trước khi viết bản chính.',
      'Toàn bộ câu chữ đầy đủ dấu tiếng Việt chính xác.',
      'Bút và nghiên đã được rửa sạch sẽ ngay sau khi hoàn thành.',
    ],
    visualAid: 'short-sentence',
  },
  {
    id: 'L23',
    number: 23,
    moduleId: 6,
    title: 'Chọn thông điệp và chủ đề',
    duration: '15 phút',
    level: 'Thực hành',
    intro:
      'Chào mừng thầy đến với Học phần cuối cùng — nơi thầy tự tay thực hiện tác phẩm thư pháp đầu tay của mình! Một bức thư pháp đáng nhớ nhất luôn bắt đầu từ một câu chữ mà chính người viết thấy rung động và muốn ngắm nhìn mỗi ngày.',
    objectives: [
      'Lựa chọn được một câu chữ hoặc thông điệp thực sự có ý nghĩa cá nhân cho tác phẩm đầu tay.',
      'Đánh giá độ dài câu chữ phù hợp với khả năng hiện tại (ưu tiên ngắn gọn, sâu sắc).',
      'Xác định được tâm trạng và sắc thái mong muốn cho bức viết (trang nghiêm hay nhẹ nhàng, thư thái).',
    ],
    toolsNeeded: [
      'Sổ tay nhỏ hoặc mục Nhật ký trên website, bút ghi chú',
    ],
    explanation: [
      'Với tác phẩm đầu tay, sai lầm hay gặp là chọn một bài thơ quá dài 20–30 chữ. Viết một bài quá dài khi mới tập rất dễ dẫn đến mệt mỏi ở nửa cuối và dễ sai sót ở những chữ nhỏ.',
      'Một từ đơn giàu ý nghĩa (như "An", "Tĩnh", "Nhẫn", "Đức"), một cụm 2–4 chữ ("An nhiên", "Tĩnh tâm", "Vạn sự khởi đầu", "Tri ân"), hoặc một câu ngắn 5–7 chữ ("Vạn sự khởi đầu từ một nét bút", "Học ăn học nói, học gói học mở") sẽ là lựa chọn vừa sức và rất trang trọng.',
      'Thầy hãy tự hỏi: "Mình muốn treo hoặc đặt bức thư pháp này ở đâu — trên bàn làm việc, kệ sách hay tặng người thân? Và mỗi lần nhìn thấy câu chữ này, mình muốn nhận được nhắc nhở gì?"',
    ],
    steps: [
      {
        title: 'Bước 1: Liệt kê 3 câu chữ thầy yêu thích nhất',
        detail:
          'Viết xuống 3 gợi ý theo 3 độ dài: 1 chữ đơn, 1 cụm 2–4 chữ, và 1 câu ngắn 5–7 chữ.',
        why: 'Có vài phương án đối chiếu giúp thầy chọn được câu dễ viết nhất mà vẫn giữ trọn ý nghĩa.',
      },
      {
        title: 'Bước 2: Kiểm tra từng chữ cái trong câu chọn',
        detail:
          'Xem trong câu đó có chữ cái nào hoặc dấu kép nào thầy hay viết bị vấp không, và thử luyện lại riêng chữ đó 5 phút trên vải nước ô mễ.',
        why: 'Chuẩn bị kỹ những chữ "khó tính" trước sẽ khiến lúc vào tác phẩm trơn tru hơn nhiều.',
      },
      {
        title: 'Bước 3: Chốt thông điệp chính và dòng phụ (nếu có)',
        detail:
          'Quyết định câu chữ chính và dự kiến dòng chữ nhỏ ghi chú (ví dụ: năm viết và tên thầy Thúc Đương).',
        why: 'Rõ ràng từ đầu giúp bước phác thảo bố cục ở Bài 24 diễn ra nhanh gọn.',
      },
    ],
    exampleNote:
      'Gợi ý dành riêng cho thầy: Một vài thông điệp ngắn rất hợp không gian thư phòng nhà giáo: "Tĩnh" (1 chữ), "An nhiên" (2 chữ), "Gieo mầm tri thức" (4 chữ), hoặc "Vạn sự khởi đầu từ một nét bút" (câu chủ đề của NÉT MỰC).',
    commonMistakes: [
      {
        mistake: 'Chọn câu quá dài hoặc nhiều từ lặp vần sát nhau khiến bố cục bị rối.',
        fix: 'Ưu tiên câu 1–5 chữ cho tác phẩm đầu tay để mỗi con chữ đều được chăm chút trọn vẹn.',
      },
      {
        mistake: 'Chọn theo trào lưu mà bản thân không thực sự thấy gần gũi.',
        fix: 'Hãy chọn chính câu chữ mà khi đọc thầm lên, thầy thấy lòng mình nhẹ đi một nhịp.',
      },
    ],
    exercise:
      'Thầy chốt 1 câu chữ cho tác phẩm đầu tay và ghi lại câu đó kèm lý do lựa chọn vào mục "Nhật ký luyện tập" trong trang Hành trình của thầy.',
    checklist: [
      'Tôi đã chọn được một thông điệp có ý nghĩa riêng cho tác phẩm đầu tay.',
      'Độ dài câu chữ vừa sức để thể hiện chỉn chu trên khổ giấy hiện có.',
      'Tôi đã kiểm tra kỹ chính tả và dấu thanh của toàn bộ câu.',
    ],
    visualAid: 'theme-selection',
  },
  {
    id: 'L24',
    number: 24,
    moduleId: 6,
    title: 'Phác thảo và hoàn thiện bố cục',
    duration: '20 phút',
    level: 'Thực hành',
    intro:
      'Trước khi viết lên tờ giấy đẹp cuối cùng, người viết thư pháp nào cũng cần bước phác thảo để cân đo từng milimet khoảng trống. Hôm nay thầy sẽ thiết kế bản nháp hoàn chỉnh cho tác phẩm đầu tay.',
    objectives: [
      'Đo và chọn được kích thước khổ giấy phù hợp cho câu chữ đã chọn ở Bài 23.',
      'Hoàn thành một bản phác thảo thật (tỷ lệ 1:1) để căn khoảng cách, độ lớn chữ chính và chữ phụ.',
      'Xác định vị trí dự kiến đặt dấu triện hoặc chữ ký tên tác giả.',
    ],
    toolsNeeded: [
      'Giấy nháp có kích thước bằng hoặc gần bằng tờ giấy chính dự kiến làm tác phẩm',
      'Thảm lót giấy, bút lang hào, bút kiêm hào, nghiên mực, mực tàu',
    ],
    explanation: [
      'Phác thảo không có nghĩa là vẽ đồ lại bằng bút chì lên giấy chính rồi tô mực đè lên — vì nét chì sẽ lộ bên dưới mực rất mất tự nhiên. Thay vào đó, ta viết thử hoàn chỉnh lên một tờ giấy nháp có cùng kích thước với giấy chính.',
      'Qua bản nháp tỷ lệ 1:1 này, thầy sẽ nhìn thấy ngay những điều mà phác thảo nhỏ không thấy được: chữ thứ ba có đang bị chạm vào chữ thứ hai không, khoảng lề dưới có bị hụt quá không, và dòng tên "Thúc Đương" đặt ở góc dưới bên trái hay bên phải thì cân bằng hơn.',
      'Nếu có thể, thầy hãy thử chỉnh lại bản nháp 2 lần đến khi ngắm bản nháp thấy thật thuận mắt rồi mới bước sang Bài 25.',
    ],
    steps: [
      {
        title: 'Bước 1: Thử viết bản nháp tỷ lệ 1:1 đầu tiên',
        detail:
          'Dùng mực và giấy nháp có cùng khổ với tờ tác phẩm, viết toàn bộ câu chữ chính và dòng chữ phụ như lúc làm thật.',
        why: 'Thấy rõ được cảm giác kích thước thực tế trên mặt bàn.',
      },
      {
        title: 'Bước 2: Đặt bản nháp lên tường hoặc tựa ghế ngắm từ xa',
        detail:
          'Đứng lùi lại khoảng 1,5–2 mét nhìn bản nháp. Tự hỏi 3 câu: Chữ chính có nằm đúng vùng trọng tâm mắt nhìn không? Khoảng trắng 4 phía có cân xứng không? Chữ nào đang hơi nhỏ hoặc hơi lệch hàng?',
        why: 'Khoảng cách 2 mét loại bỏ việc soi tiểu tiết và giúp thầy nhìn ra tổng thể bố cục cực kỳ chính xác.',
      },
      {
        title: 'Bước 3: Chỉnh sửa tinh gọn ở bản nháp thứ hai',
        detail:
          'Sửa lại những điểm vừa nhận ra (ví dụ: dịch dòng chính lên cao 2 cm, viết tên tác giả gọn hơn một chút). Giữ bản nháp thứ hai này ngay bên cạnh bàn để làm mẫu tham chiếu cho Bài 25.',
        why: 'Có một bản mẫu của chính mình ngay bên cạnh giúp tâm lý rất vững vàng khi viết bản chính thức.',
      },
    ],
    exampleNote:
      'Mẹo căn lề không cần kẻ chì lên giấy chính: Thầy có thể đặt bản nháp hoặc một tờ giấy có kẻ khung đậm lót NGAY BÊN DƯỚI tờ giấy chính mỏng (như giấy dó hoặc giấy xuyến mỏng); ánh sáng sẽ giúp thấy mờ đường căn lề mà không làm bẩn mặt giấy chính.',
    commonMistakes: [
      {
        mistake: 'Dùng bút chì kẻ khung trực tiếp lên mặt giấy tác phẩm rồi tẩy gôm.',
        fix: 'Gôm tẩy làm xù thớ giấy mỏng, khiến mực bị loang nhòe ở chỗ vừa tẩy. Luôn lót giấy kẻ ô ở dưới hoặc căn mắt từ bản nháp bên cạnh.',
      },
      {
        mistake: 'Đặt dòng tên tác giả quá sát mép góc dưới khiến bức tranh trông như sắp rơi chữ ra ngoài.',
        fix: 'Lạc khoản cũng phải nằm gọn bên trong vùng lề an toàn giống như chữ chính.',
      },
    ],
    exercise:
      'Thầy hoàn thiện 1 bản phác thảo tỷ lệ 1:1 bằng mực thật cho tác phẩm của mình, đánh dấu các điểm cần điều chỉnh (lề, cỡ chữ, vị trí tên) để sẵn sàng cho Bài 25.',
    checklist: [
      'Tôi đã có một bản nháp tỷ lệ 1:1 hoàn chỉnh đặt bên cạnh làm chuẩn.',
      'Khoảng lề trên, dưới, trái, phải đã hài hòa khi nhìn từ xa.',
      'Vị trí dòng chữ phụ và tên người viết đã được chốt rõ ràng.',
    ],
    visualAid: 'draft-sketch',
  },
  {
    id: 'L25',
    number: 25,
    moduleId: 6,
    title: 'Thực hiện tác phẩm đầu tay',
    duration: '30 phút',
    level: 'Thực hành',
    intro:
      'Khoảnh khắc đáng mong đợi nhất đã đến. Không cần vội vàng, không cần căng thẳng — thầy hãy pha một tách trà ấm hoặc hít một hơi thật sâu, ngắm bản phác thảo bên cạnh rồi đặt nét mực đầu tiên cho tác phẩm thư pháp đầu tay của riêng mình.',
    objectives: [
      'Hoàn thành bức thư pháp đầu tay trọn vẹn từ chữ chính, dấu thanh đến dòng lạc khoản.',
      'Giữ được tâm thế thư thái, tận hưởng trọn vẹn quá trình từng nét mực hiện lên trên giấy.',
      'Chăm sóc và để tác phẩm khô phẳng phiu hoàn toàn.',
    ],
    toolsNeeded: [
      'Tờ giấy đẹp chuẩn bị cho tác phẩm chính (đặt trên thảm lót 39,8 × 27,9 cm)',
      'Bản nháp đã hoàn thiện ở Bài 24 đặt bên cạnh tham khảo',
      'Bút lang hào, bút kiêm hào đã làm ẩm nhẹ',
      'Nghiên mực (mực mài Kim Bất Hoán hoặc mực tàu chai), hũ nước sạch, gác bút, giấy nháp thử mực',
    ],
    explanation: [
      'Điều quan trọng nhất khi viết bản chính thức không phải là cố gắng gồng tay viết cho "hoàn hảo không tì vết". Ngược lại, nét chữ đẹp nhất thường xuất hiện khi người viết thả lỏng, tin vào đôi tay mình đã luyện qua 24 bài vừa rồi.',
      'Nếu lỡ có một nét hơi run một chút hoặc mực hơi đậm hơn dự tính một chút — đừng vội vứt bỏ ngay lập tức. Hãy hoàn thành hết toàn bộ bức viết rồi đứng ra xa ngắm tổng thể. Đôi khi một chút mộc mạc tự nhiên chính là nét duyên riêng của tác phẩm đầu tay.',
      'Nếu thầy muốn viết thêm 2–3 bản để chọn ra bản ưng ý nhất, điều đó hoàn toàn bình thường; nhiều người viết thư pháp viết 5–10 tờ mới chọn 1 tờ làm kỷ niệm.',
    ],
    steps: [
      {
        title: 'Bước 1: Chuẩn bị tâm thế và kiểm tra mực lần cuối',
        detail:
          'Mài mực hoặc rót mực tươi vào nghiên. Thử 2 nét lên giấy nháp để chắc chắn đầu bút ẩm vừa đủ và chóp lông tụ nhọn.',
        why: 'Đảm bảo ngay nét đầu tiên hạ xuống tờ giấy chính đã đạt độ đen và độ gọn mong muốn.',
      },
      {
        title: 'Bước 2: Viết phần câu chữ chính',
        detail:
          'Đặt tờ giấy chính ngay ngắn trên thảm lót. Nhìn lướt qua bản nháp bên cạnh để định hình vị trí chữ đầu tiên rồi chậm rãi đặt bút viết từng chữ, giữ nhịp thở đều và lực tay nhẹ nhàng.',
        why: 'Hơi thở đều giúp chuyển động vai và cánh tay liền mạch.',
      },
      {
        title: 'Bước 3: Bổ sung dấu tiếng Việt và dòng lạc khoản',
        detail:
          'Kiểm tra từng dấu thanh. Sau đó dùng cây bút gọn hơn (như kiêm hào) viết nhẹ dòng chữ nhỏ ghi tên thầy và năm tháng thực hiện vào khoảng trống đã định.',
        why: 'Dòng lạc khoản đánh dấu cột mốc thời gian đáng quý cho tác phẩm đầu tiên.',
      },
      {
        title: 'Bước 4: Phơi khô phẳng và cất rửa dụng cụ',
        detail:
          'Đặt tác phẩm trên mặt bàn sạch, phẳng để mực khô hoàn toàn (ít nhất 15 phút). Trong lúc chờ đợi, thầy rửa sạch hai cây bút, nghiên mực và hũ nước.',
        why: 'Chăm chút trọn vẹn cả tác phẩm lẫn bộ dụng cụ là kết thúc đẹp nhất cho một buổi sáng tác.',
      },
    ],
    exampleNote:
      'Gợi ý nhỏ: Khi tác phẩm đã khô hẳn, thầy có thể dùng điện thoại chụp lại một bức ảnh thật ngay ngắn dưới ánh sáng tự nhiên ban ngày để lưu vào "Bộ sưu tập tác phẩm" trong website.',
    commonMistakes: [
      {
        mistake: 'Nín thở khi viết chữ cuối cùng làm tay bị run.',
        fix: 'Thở ra nhẹ nhàng trong lúc kéo những nét dài.',
      },
      {
        mistake: 'Cố sửa đè nhiều lần lên một nét bị thiếu mực trên giấy chính.',
        fix: 'Thư pháp rất kỵ việc tô đi tô lại nhiều lớp mực đè lên nhau; nếu nét thiếu một chút nhỏ hãy giữ vẻ tự nhiên, hoặc viết lại một tờ mới hoàn toàn.',
      },
    ],
    exercise:
      'Thầy thực hiện tác phẩm thư pháp đầu tay hoàn chỉnh trên giấy, đợi khô hoàn toàn và tải ảnh tác phẩm lên mục "Góc lưu bài thực hành" (chọn phân loại là "Tác phẩm") để lưu giữ vĩnh viễn trên trình duyệt này.',
    checklist: [
      'Tôi đã hoàn thành trọn vẹn tác phẩm đầu tay với đầy đủ chữ chính và dòng ghi tên.',
      'Tác phẩm đã được để khô hoàn toàn trước khi di chuyển.',
      'Toàn bộ bút, nghiên và thỏi mực đã được vệ sinh, bảo quản đúng cách.',
    ],
    visualAid: 'final-artwork',
  },
  {
    id: 'L26',
    number: 26,
    moduleId: 6,
    title: 'Tự đánh giá và lưu giữ tác phẩm',
    duration: '15 phút',
    level: 'Tổng kết',
    intro:
      'Xin chúc mừng thầy Thúc Đương đã đi trọn 26 bài học! Bài học cuối cùng này không có thêm bài tập kỹ thuật mới, mà là khoảng thời gian lắng lại để thầy tự nhìn nhận thành quả đầu tiên, lưu giữ kỷ niệm và mở ra chặng đường luyện viết lâu dài về sau.',
    objectives: [
      'Biết cách tự nhận xét tác phẩm của bản thân một cách khách quan và bao dung.',
      'Lưu giữ hình ảnh tác phẩm và ghi lại dấu mốc cảm nhận sau hành trình 6 học phần.',
      'Xác định thói quen duy trì niềm vui cầm bút nhẹ nhàng mỗi tuần.',
    ],
    toolsNeeded: [
      'Tác phẩm đầu tay thầy vừa hoàn thành ở Bài 25',
      'Website NÉT MỰC — trang "Hành trình của thầy"',
    ],
    explanation: [
      'Khi nhìn lại tác phẩm đầu tay, thay vì chỉ tìm kiếm những chỗ còn chưa đều, thầy hãy thử tự khen ngợi bản thân ở 3 điểm: sự kiên nhẫn đã ngồi vào bàn, cảm giác tự tin hơn nhiều so với ngày đầu tiên chưa biết cầm bút, và tinh thần dám hoàn thành trọn vẹn một bức viết của riêng mình.',
      'Trong nghệ thuật viết chữ, bức tác phẩm đầu tiên bao giờ cũng mang một giá trị kỷ niệm đặc biệt mà vài năm sau nhìn lại thầy sẽ mỉm cười trân trọng — dù lúc đó tay nghề của thầy đã tiến xa hơn rất nhiều.',
      'Tất cả dữ liệu tiến độ, hình ảnh thầy tải lên và ghi chú nhật ký trên website NÉT MỰC hiện được lưu trực tiếp ngay trên trình duyệt máy này (LocalStorage) như một cuốn sổ tay cá nhân. Thầy có thể quay lại Phòng luyện tập hay Thư viện kiến thức bất cứ lúc nào để ôn lại nét bút.',
    ],
    steps: [
      {
        title: 'Bước 1: Ngắm tác phẩm theo 3 tiêu chí nhẹ nhàng',
        detail:
          'Kiểm tra độ rõ ràng của chữ và dấu; cảm nhận sự cân đối của khoảng trống xung quanh; và nhận ra nét chữ nào thầy thích nhất trong bức viết.',
        why: 'Biết rõ điểm mạnh giúp thầy giữ hứng thú, biết điểm còn lấn cấn giúp thầy có mục tiêu nhẹ nhàng cho những lần viết sau.',
      },
      {
        title: 'Bước 2: Lưu trữ ảnh và bảo quản bản giấy thật',
        detail:
          'Bản giấy thật có thể kẹp phẳng giữa hai tờ giấy bìa sạch hoặc đóng khung đơn giản đặt ở góc đọc sách. Bản ảnh số hãy tải lên Bộ sưu tập trong "Hành trình của thầy".',
        why: 'Tránh bị ẩm mốc hoặc quăn mép theo thời gian.',
      },
      {
        title: 'Bước 3: Viết trang nhật ký tổng kết hành trình',
        detail:
          'Mở trang "Hành trình của thầy", ghi lại cảm xúc khi cầm trên tay bức thư pháp đầu tiên do chính mình viết.',
        why: 'Một món quà nhỏ, một hành trình dài — lời tự sự hôm nay sẽ là dấu mốc rất đẹp.',
      },
    ],
    exampleNote:
      'Gợi ý tiếp nối sau khóa học: Mỗi tuần 1–2 lần, chỉ cần trải tấm vải ô mễ ra luyện lại 10 phút với nước sạch, hoặc viết một câu châm ngôn ngắn tặng bạn bè nhân dịp đặc biệt — thầy sẽ thấy cây bút lông trở thành người bạn đồng hành vô cùng thân thiết.',
    commonMistakes: [
      {
        mistake: 'So sánh tác phẩm đầu tay của mình với những bức thư pháp của các nghệ nhân đã viết hàng chục năm.',
        fix: 'Hãy chỉ so sánh thầy của ngày hôm nay với thầy của ngày đầu tiên mở Bài 1.',
      },
      {
        mistake: 'Hoàn thành xong rồi cất hẳn bộ bút vào ngăn kéo suốt nhiều tháng không đụng tới.',
        fix: 'Đặt bộ dụng cụ ở nơi dễ nhìn thấy trên bàn; mỗi tuần dành 15 phút viết với vải nước ô mễ là đủ giữ tay luôn mềm mại.',
      },
    ],
    exercise:
      'Thầy hoàn thành bài đánh dấu cuối cùng (L26), kiểm tra lại tỷ lệ 100% tiến độ ở trang "Hành trình của thầy" và viết một dòng lưu bút khép lại chặng đầu tiên.',
    checklist: [
      'Tôi đã tự đánh giá tác phẩm đầu tay với tâm thế trân trọng.',
      'Tác phẩm đã được lưu lại cẩn thận cả bản giấy lẫn ảnh kỷ niệm.',
      'Tôi đã sẵn sàng duy trì thói quen luyện bút thư giãn lâu dài.',
    ],
    visualAid: 'seal-archive',
  },
];
