# NÉT MỰC — Thư pháp Việt

Website tự học thư pháp Việt dành tặng thầy Thúc Đương, thiết kế theo phong cách **Giao Thoa Cổ Kim** trên nền tảng React + Vite + TypeScript + Tailwind CSS.

## Chạy dự án trên máy cá nhân

```bash
npm install
npm run dev
```

Mở trình duyệt tại địa chỉ `http://localhost:3000`.

## Kiểm tra mã nguồn & Đóng gói triển khai

```bash
npm run lint
npm run build
```

Thư mục `dist/` sau khi chạy `npm run build` có thể triển khai trực tiếp lên các nền tảng tĩnh (Vercel, Netlify, Cloudflare Pages...).

## Cấu trúc chỉnh sửa nội dung nhanh

- `src/data/lessonsPart1.ts` & `src/data/lessonsPart2.ts`: Nội dung chi tiết của 6 học phần và 26 bài học (L1–L26).
- `src/data/tools.ts`: Thông tin chi tiết 9 món dụng cụ thực tế của thầy.
- `src/data/knowledge.ts`: 9 chuyên đề tra cứu trong Thư viện kiến thức.
- `src/utils/storage.ts`: Quản lý lưu trữ cục bộ trên trình duyệt (`LocalStorage`) cho tiến độ bài học, bảng tự đánh giá, ảnh thực hành và nhật ký luyện tập.
