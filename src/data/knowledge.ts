import { KnowledgeTopic } from '../types';

export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  {
    id: 'tim-hieu-but-long',
    number: '01',
    title: 'Tìm hiểu về bút lông',
    summary:
      'Cấu tạo cơ bản của cây bút lông, ý nghĩa của xuất phong và khẩu kính, cùng cách đánh thức đầu bút mới bằng nước sạch.',
    sections: [
      {
        heading: 'Cấu tạo 3 phần của đầu lông bút',
        body: 'Khi nhìn kỹ phần lông của cây bút, thầy có thể hình dung nó gồm 3 vùng: Đầu nhọn ngoài cùng (bút phong) dùng để tạo nét mảnh và điểm khởi bút; Phần thân phình nhẹ ở giữa (bụng bút) dùng để giữ nước/mực và tạo nét đậm khi ấn tay; Phần sát cán (gốc bút) giữ độ đứng vững cho cả bó lông.',
      },
      {
        heading: 'Hiểu hai thông số thực tế: Xuất phong và Khẩu kính',
        body: 'Trên thông số cây bút, "xuất phong" là chiều dài phần lông lộ ra tính từ miệng cán đến chóp nhọn; "khẩu kính" là đường kính tròn của bó lông ngay tại miệng cán. Chiều dài xuất phong ảnh hưởng tới độ linh hoạt của nét dài, còn khẩu kính quyết định độ rộng tối đa mà nét có thể nở ra.',
      },
      {
        heading: 'Khai bút lần đầu (rửa hồ bảo quản)',
        body: 'Bút mới luôn có lớp hồ keo giữ dáng cứng. Tuyệt đối không dùng ngón tay bẻ gãy lớp keo này khi bút còn khô. Hãy ngâm khoảng 2/3 đầu lông vào nước sạch ở nhiệt độ thường từ 1–2 phút cho keo tan mềm tự nhiên rồi vuốt nhẹ lên mép hũ.',
      },
    ],
    practicalTip:
      'Luôn để nước ở nhiệt độ phòng khi rửa hoặc ngâm bút; nước nóng làm tan keo cố định bên trong cán tre khiến bút bị rụng lông.',
  },
  {
    id: 'phan-biet-cac-loai-but',
    number: '02',
    title: 'Phân biệt các loại bút trong bộ dụng cụ',
    summary:
      'Đối chiếu hai cây bút thực tế của thầy (Lang hào 22,2 cm và Kiêm hào 21,5 cm) và phương pháp tự thử nghiệm bằng nước.',
    sections: [
      {
        heading: 'Hai cây bút thực tế thầy đang sở hữu',
        body: 'Bộ quà tặng chuẩn bị cho thầy gồm 2 cây: Bút lang hào (tổng dài 22,2 cm; xuất phong 3,5 cm; khẩu kính 0,9 cm) và Bút kiêm hào (tổng dài 21,5 cm; xuất phong 3,2 cm; khẩu kính 0,7 cm). Cây lang hào có đầu lông lớn và dài hơn một chút so với cây kiêm hào.',
      },
      {
        heading: 'Vì sao cần tự thử bằng nước thay vì đoán trước?',
        body: 'Trong sản xuất thủ công, độ pha trộn sợi lông và độ nảy của từng cây bút có thể chênh lệch tinh tế. Thay vì suy đoán cứng nhắc rằng cây này "chắc chắn cứng" hay cây kia "chắc chắn mềm", cách đáng tin cậy nhất là nhúng từng cây vào nước sạch và kéo thử 5 nét trên vải ô mễ ở Bài 4.',
      },
      {
        heading: 'Gợi ý phân vai khi thực hành',
        body: 'Sau khi tự thử với nước, thầy thường sẽ thấy cây lớn hơn (khẩu kính 0,9 cm) thuận tiện cho chữ chính cỡ vừa – lớn hoặc luyện lực tay; còn cây thon hơn (khẩu kính 0,7 cm) gọn gàng khi viết chữ nhỏ, dấu tiếng Việt hoặc dòng tên tác giả.',
      },
    ],
    practicalTip:
      'Thử kéo một vòng tròn rồi nhấc bút lên trên vải ô mễ: quan sát xem đầu lông cây nào bật thẳng chóp nhanh hơn và cây nào giữ được nhiều nước hơn.',
  },
  {
    id: 'muc-tau-dong-chai',
    number: '03',
    title: 'Tìm hiểu mực tàu đóng chai',
    summary:
      'Cách sử dụng an toàn chai mực 100 ml: rót lượng vừa đủ, bảo quản chống bay hơi và giữ sạch chai mực lâu dài.',
    sections: [
      {
        heading: 'Ưu điểm của mực đóng chai cho người mới',
        body: 'Chai mực 100 ml đã được pha chế sẵn ở độ sánh ổn định, màu đen sâu và đồng nhất, giúp thầy vào thẳng bài tập viết giấy mà không mất thời gian căn lượng nước mài mực.',
      },
      {
        heading: 'Hai nguyên tắc giữ chai mực luôn bền',
        body: 'Thứ nhất: Không nhúng trực tiếp cây bút vào cổ chai, luôn rót một lượng nhỏ (1–2 thìa cà phê) ra nghiên mực hoặc chén nhỏ. Thứ hai: Mực thừa đã rót ra nghiên nếu không viết hết trong buổi đó hãy lau bỏ chứ đừng đổ ngược lại vào chai, vì bụi giấy và nước từ bút sẽ làm hỏng chất lượng cả chai mực.',
      },
    ],
    practicalTip:
      'Đậy chặt nắp chai ngay sau khi rót xong mực ra nghiên để tránh sơ ý va tay làm đổ và tránh mực bị đặc quánh do bay hơi.',
  },
  {
    id: 'cach-mai-thoi-muc',
    number: '04',
    title: 'Cách mài thỏi mực',
    summary:
      'Hướng dẫn chi tiết cách mài thỏi mực Kim Bất Hoán cùng nước sạch: lượng nước, góc cầm, tốc độ xoay và bảo quản chống nứt.',
    sections: [
      {
        heading: 'Ít nước trước, thêm sau',
        body: 'Chỉ nên nhỏ một lượng nước vừa phải (khoảng nửa thìa cà phê hoặc 8–10 giọt) lên mặt nghiên 7,5 × 7,5 cm. Nếu đổ quá nhiều nước ngay từ đầu, thầy sẽ phải mài rất lâu mực mới đủ độ đen.',
      },
      {
        heading: 'Cầm thẳng đứng và xoay nhẹ',
        body: 'Giữ thỏi mực Kim Bất Hoán vuông góc với mặt đá nghiên để đáy thỏi mòn phẳng đều. Di chuyển theo những vòng tròn nhỏ nhẹ nhàng trong 3–5 phút. Ấn quá mạnh không giúp mực đen nhanh hơn mà chỉ làm hạt mực thô và nhanh mỏi tay.',
      },
      {
        heading: 'Giữ thỏi mực khô ráo sau khi mài',
        body: 'Mài xong, luôn dùng khăn giấy khô thấm sạch phần nước mực ở đầu thỏi mực rồi đặt ở nơi thoáng khô. Tuyệt đối không cắm dựng thỏi mực ngâm trong vũng mực vì độ ẩm sẽ làm nứt thân mực.',
      },
    ],
    practicalTip:
      'Thử chấm 1 nét nhỏ lên giấy nháp: nếu thấy màu đen rõ và viền xung quanh không bị loang quầng nước xám rộng là mực mài đã đạt.',
  },
  {
    id: 'cach-su-dung-nghien-muc',
    number: '05',
    title: 'Cách sử dụng nghiên mực',
    summary:
      'Phân biệt hai vùng chức năng trên chiếc nghiên vuông 7,5 × 7,5 cm và cách vệ sinh giữ độ nhám tự nhiên.',
    sections: [
      {
        heading: 'Hai khu vực trên mặt nghiên',
        body: 'Chiếc nghiên đá dù nhỏ vẫn có phần mặt phẳng hơi dốc (gọi là đường nghiên – nơi ma sát mài thỏi mực và nơi gạt gọn đầu bút) và phần hõm sâu ở một đầu (gọi là ao nghiên – nơi chứa mực lỏng).',
      },
      {
        heading: 'Vai trò của nghiên ngay cả khi dùng mực chai',
        body: 'Ngay cả khi dùng mực đóng chai, đổ mực ra nghiên vẫn tốt hơn dùng chén nhựa trơn vì phần mặt dốc nhám nhẹ của nghiên giúp thầy xoay và gạt đều lượng mực bám trên lông bút rất êm tay.',
      },
      {
        heading: 'Vệ sinh đúng cách',
        body: 'Rửa nghiên ngay cuối buổi tập bằng nước sạch và tay hoặc miếng bọt biển mềm. Không dùng miếng cọ kim loại hay hóa chất tẩy rửa mạnh để tránh làm xước mất bề mặt đá mịn.',
      },
    ],
    practicalTip:
      'Đặt nghiên cố định trên một góc thảm hoặc miếng lót nhỏ để nghiên không bị trượt xê dịch mỗi khi thầy xoay bút gạt mực.',
  },
  {
    id: 'cach-bao-quan-but-long',
    number: '06',
    title: 'Cách bảo quản bút lông',
    summary:
      'Quy trình làm ẩm trước khi viết, rửa sạch gốc lông sau khi dùng mực và cách phơi treo giúp bút bền nhiều năm.',
    sections: [
      {
        heading: 'Làm ẩm trước – rửa sạch ngay sau',
        body: 'Trước khi chấm mực tàu, luôn nhúng đầu bút qua nước sạch rồi thấm ráo ẩm. Nước sạch thấm sẵn vào lõi lông tạo thành lớp đệm giúp hạt mực không bám chết vào tận gốc cán bút, nhờ vậy lúc rửa lại dễ dàng gấp nhiều lần.',
      },
      {
        heading: 'Rửa xuôi theo chiều lông',
        body: 'Xả dưới vòi nước chảy nhẹ xuôi từ cán xuống chóp bút (hoặc rửa qua 2–3 lần nước trong chậu nhỏ), dùng ngón tay bóp thật nhẹ ở gốc lông cho đến khi không còn chút màu đen nào chảy ra. Không giật hay vặn xoắn đầu lông.',
      },
      {
        heading: 'Vuốt nhọn và treo chúc đầu xuống',
        body: 'Sau khi rửa sạch, dùng khăn giấy thấm ráo bớt nước, vuốt gọn đầu bút thành chóp nhọn tự nhiên rồi dùng vòng dây ở đuôi cán treo bút chúc đầu lông xuống dưới cho khô thoáng. Nếu dựng đứng đầu lông hướng lên trời khi còn ướt, nước mực sót lại có thể chảy ngược vào cán gây mục keo.',
      },
    ],
    practicalTip:
      'Chỉ đậy nắp nhựa bảo vệ đầu bút (nếu có) khi đầu bút đã khô hẳn; đậy nắp khi bút còn ướt sẽ khiến lông bút bị ẩm mốc.',
  },
  {
    id: 'cach-ve-sinh-dung-cu',
    number: '07',
    title: 'Cách vệ sinh dụng cụ',
    summary:
      'Chăm sóc đúng cách cho vải tập nước ô mễ, thảm lót, hũ sứ và gác bút thanh hoa.',
    sections: [
      {
        heading: 'Vải tập viết bằng nước ô mễ',
        body: 'Chỉ vệ sinh bằng cách để khô tự nhiên sau khi viết bằng nước sạch. Nếu bám bụi nhẹ có thể dùng khăn ẩm sạch chấm nhẹ không chà xát. Không giặt máy, không vò và không dùng xà phòng vì sẽ làm hỏng lớp phủ đặc biệt trên mặt vải.',
      },
      {
        heading: 'Thảm lót giấy và đồ sứ',
        body: 'Hũ sứ đựng nước và gác bút thanh hoa cần tráng rửa bằng nước sạch ngay sau mỗi buổi dùng mực để vết mực không đóng cặn ố men sứ. Thảm lót giấy giữ khô, chỉ phủi bụi hoặc thấm nhẹ nếu dính giọt mực.',
      },
    ],
    practicalTip:
      'Dành ra 3 phút cuối mỗi buổi học để dọn bàn theo thứ tự: Gác bút -> Rửa bút & nghiên -> Đổ nước đục -> Lau khô thỏi mực -> Để vải khô rồi mới cuộn lại.',
  },
  {
    id: 'lua-chon-giay-luyen-viet',
    number: '08',
    title: 'Cách lựa chọn giấy luyện viết',
    summary:
      'Phân biệt vải tập nước với các loại giấy viết mực: độ thấm hút, độ nhẵn và cách thử giấy trước khi viết tác phẩm.',
    sections: [
      {
        heading: 'Phân biệt rõ giai đoạn nước và giai đoạn giấy mực',
        body: 'Vải tập nước ô mễ chỉ dùng với nước sạch để luyện cảm giác tay không tốn giấy. Khi chuyển sang Học phần 5 dùng mực thật, thầy cần chuyển sang viết trên giấy.',
      },
      {
        heading: 'Đặc tính giấy cho người mới',
        body: 'Giấy viết thư pháp phổ biến thường có độ xốp thấm mực nhất định (như giấy xuyến chỉ bán sinh thục, giấy dó, hoặc giấy tập luyện kẻ ô sẵn). Nếu giấy quá trơn bóng như giấy in văn phòng thông thường, mực sẽ trượt và lâu khô, cảm giác bút kém bám; nếu giấy quá thấm (như giấy vệ sinh hay giấy bản thô), mực sẽ loang nhòe rất nhanh.',
      },
      {
        heading: 'Cách thử một tờ giấy mới mua',
        body: 'Trước khi mua nhiều hoặc viết tác phẩm, hãy thử kéo 1 nét nhanh và chấm giữ bút 1 giây ở một góc giấy: loại giấy "bán thục" (thấm vừa phải, không loang quá nhanh) thường dễ kiểm soát nhất cho người mới bắt đầu.',
      },
    ],
    practicalTip:
      'Luôn lót thảm lót giấy (39,8 × 27,9 cm) bên dưới các loại giấy mỏng để mực không thấm bẩn xuống mặt bàn và để đầu bút có độ êm tốt nhất.',
  },
  {
    id: 'loi-thuong-gap-khi-moi-tap',
    number: '09',
    title: 'Những lỗi thường gặp khi mới tập viết',
    summary:
      'Tổng hợp các tình huống bối rối nhất của người mới (run tay, tách lông, nhòe mực, quên dấu) và cách gỡ rối nhẹ nhàng.',
    sections: [
      {
        heading: '1. Nét bút bị run hoặc gãy khúc',
        body: 'Thường do thầy cầm bút quá chặt hoặc chỉ di chuyển bằng khớp ngón tay trong khi nín thở. Cách khắc phục: thả lỏng vai, giữ lòng bàn tay rỗng, thở ra êm khi kéo nét dài và di chuyển cả cẳng tay.',
      },
      {
        heading: '2. Đầu lông bị chẻ làm đôi (tách lông)',
        body: 'Thường xảy ra khi ấn quá sâu sát gốc cán, khi viết quá khô mực, hoặc khi xoay đổi hướng nét cong mà không nhấc nhẹ tay ở khúc cua. Cách khắc phục: chạm nhẹ đầu bút lên mép hũ nước/nghiên xoay nhẹ để thu chóp nhọn lại.',
      },
      {
        heading: '3. Mực bị loang nhòe trên giấy',
        body: 'Do đầu lông ngậm quá nhiều mực thừa hoặc dừng đầu bút tại một chỗ quá lâu. Cách khắc phục: luôn gạt bớt mực ở thành nghiên và thử chạm 1 tích tắc lên giấy nháp trước khi viết.',
      },
      {
        heading: '4. Chữ bị mất cân đối hoặc dấu tiếng Việt quá to',
        body: 'Chưa quen tách kích thước giữa thân chữ và dấu phụ. Cách khắc phục: luôn viết hết thân chữ của một tiếng trước rồi mới nhấc nhẹ chóp bút đặt dấu bằng 1/4–1/3 độ lớn thân chữ.',
      },
    ],
    practicalTip:
      'Không có lỗi nào là vô ích; mỗi lần nét mực bị nhòe hay lệch hướng chính là lúc đôi tay đang học thêm một giới hạn mới về độ ẩm và lực ấn.',
  },
];
