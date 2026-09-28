# Tài Liệu Đặc Tả Nghiệp Vụ & Quy Định Kỹ Thuật Toàn Diện
# Hệ Thống Đặt Vé Xem Phim Di Động "PhimBook" (iOS & Android)

**Mã tài liệu:** `PB-BRD-FSD-2026-V1.2`  
**Phiên bản:** `1.2.0 (Master Release)`  
**Trạng thái:** Đã phê duyệt đặc tả nghiệp vụ & chuẩn hóa kỹ thuật  
**Ngôn ngữ & Thị trường:** Tiếng Việt (`vi-VN`)  
**Đơn vị tiền tệ:** Việt Nam Đồng (`VND`)  
**Múi giờ chuẩn:** `GMT+7` (`Asia/Ho_Chi_Minh`)  
**Đối tượng sử dụng:** Product Owner, UI/UX Designer, Mobile Developer (React Native / Flutter / iOS / Android), Backend Engineer, QA/QC.

---

## MỤC LỤC

1. [PHẦN I: QUY ĐỊNH CHUNG & CHUẨN HÓA HỆ THỐNG](#phần-i-quy-định-chung--chuẩn-hóa-hệ-thống)
   - [1.1. Chuẩn Bản Địa Hóa (Localization, Currency, DateTime)](#11-chuẩn-bản-địa-hóa-localization-currency-datetime)
   - [1.2. Chuẩn Quy Ước Mã Định Danh Thực Thể (Entity ID Prefixing)](#12-chuẩn-quy-ước-mã-định-danh-thực-thể-entity-id-prefixing)
   - [1.3. Chuẩn Giao Tiếp Dữ Liệu & Envelope Response (API Contract)](#13-chuẩn-giao-tiếp-dữ-liệu--envelope-response-api-contract)
   - [1.4. Quy Định Tính Bất Biến & Chống Trùng Lặp (Idempotency Key)](#14-quy-định-tính-bất-biến--chống-trùng-lặp-idempotency-key)
   - [1.5. Quy Định Bảo Mật Thông Tin & Che Mờ Dữ Liệu (PII Masking)](#15-quy-định-bảo-mật-thông-tin--che-mờ-dữ-liệu-pii-masking)
   - [1.6. Quy Định Thời Gian Thực & Thời Hạn Sống (TTL & Cache Policies)](#16-quy-định-thời-gian-thực--thời-hạn-sống-ttl--cache-policies)
   - [1.7. Chuẩn Thiết Kế Xác Thực & Phân Quyền (Auth & RBAC Specification)](#17-chuẩn-thiết-kế-xác-thực--phân-quyền-auth--rbac-specification)
2. [PHẦN II: HỆ THỐNG MÃ LỖI CHUẨN HÓA TOÀN DIỆN (ERROR MATRIX)](#phần-ii-hệ-thống-mã-lỗi-chuẩn-hóa-toàn-diện-error-matrix)
   - [2.1. Cấu Trúc Đối Tượng Lỗi Chuẩn (Standardized Error Schema)](#21-cấu-trúc-đối-tượng-lỗi-chuẩn-standardized-error-schema)
   - [2.2. Danh Mục Mã Lỗi Nghiệp Vụ Chi Tiết (Từng Phân Hệ)](#22-danh-mục-mã-lỗi-nghiệp-vụ-chi-tiết-từng-phân-hệ)
   - [2.3. Quy Định Phản Hồi Giao Diện UI Khi Xảy Ra Lỗi (UX Recovery)](#23-quy-định-phản-hồi-giao-diện-ui-khi-xảy-ra-lỗi-ux-recovery)
3. [PHẦN III: TỔNG QUAN HỆ THỐNG & CÁC BÊN LIÊN QUAN](#phần-iii-tổng-quan-hệ-thống--các-bên-liên-quan)
   - [3.1. Phạm vi & Mục tiêu](#31-phạm-vi--mục-tiêu)
   - [3.2. Ma Trận Vai Trò Người Dùng & Phân Quyền Truy Cập (Roles & RBAC Matrix)](#32-ma-trận-vai-trò-người-dùng--phân-quyền-truy-cập-roles--rbac-matrix)
4. [PHẦN IV: HÀNH TRÌNH NGƯỜI DÙNG & MÁY TRẠNG THÁI (STATE MACHINES)](#phần-iv-hành-trình-người-dùng--máy-trạng-thái-state-machines)
5. [PHẦN V: ĐẶC TẢ NGHIỆP VỤ CHI TIẾT 11 MÀN HÌNH](#phần-v-đặc-tả-nghiệp-vụ-chi-tiết-11-màn-hình)
6. [PHẦN VI: CÁC QUY TẮC NGHIỆP VỤ CỐT LÕI (CORE BUSINESS RULES)](#phần-vi-các-quy-tắc-nghiệp-vụ-cốt-lõi-core-business-rules)
   - [6.8. Quy Tắc Xác Thực, Bảo Mật Phiên & Phân Quyền Truy Cập](#68-quy-tắc-xác-thực-bảo-mật-phiên--phân-quyền-truy-cập)
7. [PHẦN VII: THIẾT KẾ CƠ SỞ DỮ LIỆU ĐẦY ĐỦ (DBML SCRIPT CHO DBDIAGRAM.IO)](#phần-vii-thiết-kế-cơ-sở-dữ-liệu-đầy-đủ-dbml-script-cho-dbdiagramio)

---

## PHẦN I: QUY ĐỊNH CHUNG & CHUẨN HÓA HỆ THỐNG

### 1.1. Chuẩn Bản Địa Hóa (Localization, Currency, DateTime)

1. **Ngôn ngữ giao diện & Nội dung:**
   - 100% văn bản giao diện (UI Copy), thông báo hệ thống, tooltip, dialog và nhãn điều hướng phải bằng **Tiếng Việt có dấu chuẩn phong cách hiện đại**.
   - Tên phim nước ngoài: Luôn hiển thị song song **Tên Tiếng Việt chính thức** (dòng lớn) và **Tên gốc Tiếng Anh** (dòng phụ mờ).
   - Nhãn phân loại độ tuổi phim theo quy định của Cục Điện Ảnh Việt Nam:
     - `P`: Phim được phép phổ biến đến người xem ở mọi độ tuổi.
     - `K`: Phim được phép phổ biến đến người xem dưới 13 tuổi với điều kiện xem cùng cha, mẹ hoặc người giám hộ.
     - `T13` (C13): Cấm khán giả dưới 13 tuổi.
     - `T16` (C16): Cấm khán giả dưới 16 tuổi.
     - `T18` (C18): Cấm khán giả dưới 18 tuổi.
     - `C`: Phim không được phép phổ biến.
2. **Đơn vị tiền tệ (Currency):**
   - Đơn vị: `VND` (Việt Nam Đồng). Ký hiệu hiển thị: `đ`.
   - Quy chuẩn hiển thị: Dùng dấu chấm (`.`) phân cách hàng nghìn, không sử dụng số thập phân (ví dụ: `115.000đ`, `1.250.000đ`).
   - Định dạng trong Payload Backend: Số nguyên dương (Integer / Long) tính theo đơn vị Đồng (ví dụ: `115000`). Tuyệt đối không lưu dạng chuỗi hay số thực float.
3. **Quy chuẩn Ngày và Giờ (DateTime):**
   - Múi giờ gốc: `Asia/Ho_Chi_Minh` (GMT+7, UTC+7).
   - Hiển thị trên màn hình:
     - Suất chiếu: `HH:mm - Thứ [X], DD/MM/YYYY` (Ví dụ: `19:45 - Thứ 7, 24/05/2026`).
     - Tương đối (Relative Time): "Hôm nay", "Ngày mai", "15 phút nữa".
   - Định dạng trao đổi API: Chuẩn ISO 8601 UTC mở rộng (ví dụ: `2026-05-24T12:45:00.000Z`).

---

### 1.2. Chuẩn Quy Ước Mã Định Danh Thực Thể (Entity ID Prefixing)

Để đảm bảo tính nhất quán trong log trace, webhook, đối soát tài chính và hỗ trợ khách hàng, mọi mã định danh nghiệp vụ trong hệ thống PhimBook bắt buộc áp dụng tiền tố chuẩn sau:

| Thực Thể | Tiền Tố (Prefix) | Cấu Trúc / Quy Tắc Tạo Mã | Ví Dụ Minh Họa | Ghi Chú |
|:---|:---|:---|:---|:---|
| **Đơn hàng** | `PB-ORD-` | `PB-ORD-{YYYYMMDD}-{6 Ký Tự Ngẫu Nhiên}` | `PB-ORD-20260524-9K8L2M` | Dùng để tra cứu thanh toán |
| **Mã Đặt Vé** | `PB-` | `PB-{6 Chữ Số / Chữ Hoa}` | `PB-982145` | Mã rút gọn hiển thị cho khách xem |
| **Vé Điện Tử** | `PB-TKT-` | `PB-TKT-{UUIDv4 rút gọn}` | `PB-TKT-A7F90E1B` | Định danh vé đơn lẻ cho từng ghế |
| **Người Dùng** | `PB-USR-` | `PB-USR-{ID tự tăng / Hash}` | `PB-USR-882190` | Tài khoản thành viên |
| **Cụm Rạp** | `CIN-` | `CIN-{HÃNG}-{MÃ CHI NHÁNH}` | `CIN-CGV-DONGKHOI` | Đồng bộ với chuỗi rạp đối tác |
| **Phòng Chiếu** | `HALL-` | `HALL-{RẠP}-{SỐ PHÒNG}` | `HALL-CGVDK-04` | Phòng chiếu vật lý |
| **Suất Chiếu** | `SHW-` | `SHW-{YYYYMMDD}-{ID}` | `SHW-20260524-4412` | Lịch chiếu cụ thể |
| **Combo Bắp Nước** | `CMB-` | `CMB-{TÊN COMBO}` | `CMB-COUPLE-01` | Định danh món ăn/đồ uống |
| **Voucher Giảm Giá**| `VCH-` | `VCH-{MÃ CODE}` | `VCH-PHIMBOOK50K` | Mã khuyến mãi người dùng nhập |
| **Giao Dịch Ví/Cổng**| `TXN-` | `TXN-{CỔNG}-{MÃ GIAO DỊCH}` | `TXN-MOMO-991204812` | Mã đối soát cổng thanh toán |

---

### 1.3. Chuẩn Giao Tiếp Dữ Liệu & Envelope Response (API Contract)

Toàn bộ API giữa Mobile App (Client) và PhimBook Backend bắt buộc tuân thủ chuẩn **JSON Response Envelope** thống nhất:

#### Phản hồi Thành Công (HTTP 200 / 201)
```json
{
  "success": true,
  "data": {
    "order_id": "PB-ORD-20260524-9K8L2M",
    "booking_code": "PB-982145",
    "status": "HOLDING_SEATS",
    "hold_expires_at": "2026-05-24T12:55:00.000Z",
    "total_amount": 230000
  },
  "meta": {
    "timestamp": "2026-05-24T12:45:00.000Z",
    "request_id": "req-98fbc1-8841-4c"
  }
}
```

#### Phản hồi Thất Bại (HTTP 4xx / 5xx)
```json
{
  "success": false,
  "error": {
    "code": "SEAT_ORPHAN_SINGLE",
    "message": "Không thể để trống 1 ghế đơn lẻ ở vị trí A1. Vui lòng chọn ghế liền kề hoặc cách ra ít nhất 2 ghế.",
    "category": "BOOKING_SEAT_ERROR",
    "http_status": 422,
    "action_hint": "SHOW_HAPTIC_ALERT",
    "details": {
      "row": "A",
      "orphan_seat_number": 1,
      "suggested_seats": ["A1", "A2"]
    }
  },
  "meta": {
    "timestamp": "2026-05-24T12:45:00.000Z",
    "request_id": "req-98fbc1-8841-4c"
  }
}
```

---

### 1.4. Quy Định Tính Bất Biến & Chống Trùng Lặp (Idempotency Key)

1. Mọi request làm thay đổi trạng thái nhạy cảm (Khóa ghế, Trừ tiền ví, Áp dụng mã Voucher, Khởi tạo giao dịch thanh toán) **bắt buộc phải truyền Header:**
   ```http
   Idempotency-Key: {UUIDv4 sinh từ thiết bị client}
   ```
2. Nếu mạng bị ngắt quãng và client retry request cùng `Idempotency-Key`:
   - Backend kiểm tra trong Redis cache (thời hạn 120 giây).
   - Nếu key đã được xử lý thành công trước đó: Trả về kết quả đã cache mà **không thực hiện khóa ghế lần hai hay trừ tiền trùng lặp**.

---

### 1.5. Quy Định Bảo Mật Thông Tin & Che Mờ Dữ Liệu (PII Masking)

1. **Che mờ thông tin cá nhân (Data Masking):**
   - Số điện thoại người dùng hiển thị trên màn hình xác nhận: Chỉ hiện 3 số đầu và 3 số cuối (ví dụ: `090****888`).
   - Địa chỉ Email: Che mờ tên hòm thư (ví dụ: `n***@gmail.com`).
2. **Quy định chia sẻ vé xem phim (Ticket Sharing Privacy):**
   - Khi người dùng bấm nút *"Chia sẻ vé cho bạn bè"*, ảnh vé sinh ra để share qua mạng xã hội (Zalo, Messenger) **bắt buộc phải ẩn**:
     - Giá tiền vé và tổng thanh toán.
     - Số điện thoại và Email của người mua.
     - Chỉ giữ lại: Tên phim, Rạp, Phòng chiếu, Suất chiếu, Số ghế và Mã QR vào rạp.
3. **Mã hóa truyền tải:**
   - 100% lưu lượng mạng phải chạy qua TLS 1.3 / HTTPS.
   - Tuyệt đối không lưu trữ thông tin thẻ tín dụng (CVV, Số thẻ đầy đủ) trên thiết bị hoặc server PhimBook. Quá trình thanh toán thẻ ủy quyền hoàn toàn qua Tokenization của cổng thanh toán đạt chứng chỉ PCI-DSS Level 1.

---

### 1.6. Quy Định Thời Gian Thực & Thời Hạn Sống (TTL & Cache Policies)

| Dữ Liệu / Tác Vụ | Thời Gian Sống (TTL) | Cơ Chế Quản Lý | Hành Động Khi Hết Hạn |
|:---|:---|:---|:---|
| **Giữ chỗ ghế (Seat Hold Lock)** | **10 phút (600 giây)** | Redis Key Expiration | Giải phóng ghế về trạng thái `Còn trống`, hủy phiên đơn hàng |
| **Mã QR Động Check-in (Dynamic QR)**| **60 giây** | Client TOTP & JWT Expiration | Tự động sinh mã QR mới; mã cũ bị vô hiệu hóa tại đầu đọc rạp |
| **Mã OTP Đăng nhập (SMS/Zalo)** | **120 giây (2 phút)** | Redis Rate Limit | Mã OTP hết hiệu lực, cho phép bấm "Gửi lại mã mới" |
| **Cache Danh sách Lịch chiếu** | **300 giây (5 phút)** | Redis Cache + Invalidation | Tự động làm mới từ API rạp khi có thay đổi suất |
| **Đếm ngược vào rạp** | **Đến đúng giờ chiếu** | Client Timer + Push Alert | Đổi nhãn vé từ `Chưa vào rạp` -> `Đang chiếu` / `Đã kết thúc` |

---

### 1.7. Chuẩn Thiết Kế Xác Thực & Phân Quyền (Auth & RBAC Specification)

#### 1. Phương Thức Xác Thực (Authentication Channels)
- **Đăng nhập Số điện thoại không mật khẩu (Passwordless Phone OTP):**
  - Kênh gửi mã: Zalo Notification Service (ZNS) ưu tiên hàng đầu (tối ưu chi phí & tốc độ < 3s), dự phòng SMS Brandname `PHIMBOOK`.
  - Quy chuẩn mã OTP: 6 chữ số ngẫu nhiên, mã hóa một chiều (HMAC/Bcrypt) trước khi lưu vào DB/Redis, thời hạn TTL 120 giây, giới hạn tối đa 5 lần thử sai.
- **Đăng nhập Mạng xã hội (Social OAuth2):**
  - Hỗ trợ Google Identity Services và Apple ID ("Sign in with Apple" bắt buộc đối với ứng dụng iOS có đăng nhập social).
  - Tự động liên kết tài khoản dựa trên Email hoặc Số điện thoại xác thực.
- **Xác thực Mật khẩu (Credentials Auth):**
  - Áp dụng cho tài khoản Quản trị hệ thống (Admin), Quản lý cụm rạp (Cinema Manager) và Nhân viên soát vé (Ticket Staff).
  - Mật khẩu mã hóa bằng thuật toán `Argon2id` hoặc `Bcrypt (cost factor = 12)`. Bắt buộc tối thiểu 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt.
- **Chế độ Khách vãng lai (Guest Checkout / Shadow Account):**
  - Người dùng không bắt buộc tạo mật khẩu để mua vé. Hệ thống tự động tạo `Shadow User` với cờ `is_guest: true`.
  - Khi người dùng chính thức đăng ký tài khoản bằng số điện thoại đó sau này, toàn bộ lịch sử vé của Shadow User được liên kết tự động.

#### 2. Quản Lý Phiên Đăng Nhập & Token (Session & Token Lifecycle)
- **Cặp Token (Dual-token Architecture):**
  - **Access Token (JWT):** Thời hạn sống ngắn (**15 phút**). Payload chứa: `sub` (User ID), `role`, `session_id`, `is_guest`.
  - **Refresh Token (Opaque Token / UUIDv4):** Thời hạn sống dài (**30 ngày** đối với Mobile App, **7 ngày** đối với Web Admin). Lưu vết trong bảng `user_sessions`.
- **Cơ chế Thu hồi Phiên (Session Invalidation & Rotation):**
  - Mỗi lần cấp lại Access Token mới, Refresh Token được xoay vòng (Token Rotation) nhằm phát hiện và ngăn chặn hành vi đánh cắp token.
  - Hỗ trợ tính năng xem danh sách thiết bị đang đăng nhập và "Đăng xuất khỏi tất cả các thiết bị khác".

#### 3. Mô Hình Phân Quyền Truy Cập (Role-Based Access Control - RBAC)
Hệ thống PhimBook chuẩn hóa 5 cấp bậc vai trò:
1. `SUPER_ADMIN`: Quản trị viên tối cao toàn bộ hệ sinh thái PhimBook.
2. `CINEMA_MANAGER`: Quản lý cụm rạp đối tác (chỉ thao tác trên cụm rạp được phân công phụ trách).
3. `TICKET_STAFF`: Nhân viên soát vé và nhân viên quầy bắp nước tại rạp.
4. `CUSTOMER`: Thành viên PhimBook chính thức.
5. `GUEST`: Khách hàng vãng lai chưa đăng ký.

---

## PHẦN II: HỆ THỐNG MÃ LỖI CHUẨN HÓA TOÀN DIỆN (ERROR MATRIX)

### 2.1. Cấu Trúc Đối Tượng Lỗi Chuẩn (Standardized Error Schema)
Toàn bộ mã lỗi trong PhimBook được chia thành 10 nhóm phân hệ với tiền tố định danh riêng biệt:

- `AUTH_`: Phân hệ Xác thực & Tài khoản
- `MOVIE_`: Phân hệ Dữ liệu Phim & Rạp
- `SHOW_`: Phân hệ Lịch chiếu & Phòng chiếu
- `SEAT_`: Phân hệ Sơ đồ ghế & Khóa ghế thời gian thực
- `ORDER_`: Phân hệ Quản lý Đơn hàng & Session
- `COMBO_`: Phân hệ Bắp nước & Tiện ích đi kèm
- `PROMO_`: Phân hệ Voucher & Khuyến mãi
- `PAYMENT_`: Phân hệ Cổng thanh toán & Đối soát
- `TICKET_`: Phân hệ Vé điện tử & Check-in QR
- `AI_`: Phân hệ Trợ lý Thông minh PhimBook AI
- `SYS_`: Phân hệ Hệ thống & Tích hợp POS Bên thứ ba

---

### 2.2. Danh Mục Mã Lỗi Nghiệp Vụ Chi Tiết (Từng Phân Hệ)

#### 1. Phân Hệ Xác Thực & Tài Khoản (AUTH)
| Mã Lỗi (Code) | HTTP Status | Thông Báo Tiếng Việt Hiển Thị Cho Người Dùng | Nguyên Nhân Kỹ Thuật | Hướng Xử Lý Của Client |
|:---|:---:|:---|:---|:---|
| `AUTH_PHONE_INVALID` | 400 | Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam gồm 10 chữ số. | Regex kiểm tra SĐT không khớp định dạng đầu số VN (03, 05, 07, 08, 09) | Viền đỏ ô input, focus lại trường SĐT |
| `AUTH_OTP_EXPIRED` | 410 | Mã xác thực OTP đã hết hạn (quá 2 phút). Vui lòng yêu cầu gửi lại mã mới. | Key OTP trong Redis đã hết thời hạn TTL 120s | Hiện nút "Gửi lại mã OTP" |
| `AUTH_OTP_INCORRECT` | 400 | Mã OTP không chính xác. Bạn còn {X} lần thử. | Giá trị OTP client gửi không khớp với mã trong hệ thống | Xóa 6 ô OTP, rung nhẹ máy, hiện số lần còn lại |
| `AUTH_OTP_MAX_ATTEMPTS` | 429 | Bạn đã nhập sai OTP quá 5 lần. Vui lòng thử lại sau 15 phút. | Vượt quá ngưỡng bảo mật Rate Limit thử OTP | Khóa tạm thời nút xác nhận trong 15 phút |
| `AUTH_TOKEN_EXPIRED` | 401 | Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại để tiếp tục. | JWT Access Token hết hạn | Gọi refresh token ngầm, nếu fail thì hiện modal đăng nhập nhanh |
| `AUTH_UNAUTHORIZED` | 401 | Bạn cần đăng nhập để thực hiện chức năng này. | Request thiếu Header Authorization | Mở Bottom Sheet đăng nhập không mật khẩu |

#### 2. Phân Hệ Sơ Đồ Ghế & Khóa Ghế Thời Gian Thực (SEAT)
| Mã Lỗi (Code) | HTTP Status | Thông Báo Tiếng Việt Hiển Thị Cho Người Dùng | Nguyên Nhân Kỹ Thuật | Hướng Xử Lý Của Client |
|:---|:---:|:---|:---|:---|
| `SEAT_ALREADY_LOCKED` | 409 | Ghế {SeatName} vừa có người giữ. Vui lòng chọn vị trí khác nhé! | Tranh chấp đồng thời (Race condition), người khác đã lock ghế trước vài mili-giây | Haptic rung, đổi màu ghế đó sang xám mờ (`Đang giữ`) |
| `SEAT_ALREADY_SOLD` | 409 | Ghế {SeatName} đã được bán. Sơ đồ ghế đang được làm mới. | Ghế đã có trạng thái `SOLD` trên hệ thống POS rạp | Tự động làm mới lại toàn bộ sơ đồ ghế |
| `SEAT_ORPHAN_SINGLE` | 422 | Không thể để trống 1 ghế đơn lẻ ở vị trí {SeatName}. Vui lòng chọn ghế sát cạnh hoặc cách ra từ 2 ghế. | Vi phạm luật Orphan Seat Prevention (để lại 1 ghế trống đơn độc) | Rung Haptic phản hồi, không cho thêm ghế vào danh sách chọn |
| `SEAT_SWEETBOX_ODD` | 422 | Ghế đôi Sweetbox bắt buộc phải chọn theo cặp 2 ghế liền nhau. | Người dùng chỉ chọn 1 nửa ghế đôi | Tự động chọn luôn ghế đôi còn lại đi kèm |
| `SEAT_MAX_LIMIT_REACHED`| 422 | Bạn chỉ được chọn tối đa 8 ghế trong một lần đặt vé. | Tổng số ghế chọn trong giỏ hàng > 8 | Hiển thị Toast cảnh báo, chặn chọn thêm |
| `SEAT_SELECTION_EMPTY`| 400 | Vui lòng chọn ít nhất 1 ghế để tiếp tục. | Bấm nút "Tiếp tục" khi chưa chọn ghế nào | Focus vào bản đồ ghế, nhấp nháy hướng dẫn |

#### 3. Phân Hệ Lịch Chiếu & Suất Chiếu (SHOW)
| Mã Lỗi (Code) | HTTP Status | Thông Báo Tiếng Việt Hiển Thị Cho Người Dùng | Nguyên Nhân Kỹ Thuật | Hướng Xử Lý Của Client |
|:---|:---:|:---|:---|:---|
| `SHOW_ALREADY_STARTED`| 400 | Suất chiếu này đã bắt đầu chiếu. Vui lòng chọn suất chiếu kế tiếp. | Giờ hiện tại > Giờ bắt đầu suất chiếu (Start_Time) | Vô hiệu hóa chip suất chiếu đó, gợi ý suất kế tiếp |
| `SHOW_SOLD_OUT` | 409 | Rất tiếc, suất chiếu này đã hết sạch vé. | Tỷ lệ lấp đầy phòng chiếu = 100% | Đổi nhãn chip sang màu đỏ "Cháy vé", vô hiệu hóa click |
| `SHOW_CANCELLED_BY_CINEMA`| 410| Suất chiếu này đã bị rạp hủy bỏ do sự cố kỹ thuật. | Rạp phát thông báo dừng suất chiếu trên POS | Đưa người dùng về màn hình chi tiết phim, tải lại lịch |

#### 4. Phân Hệ Quản Lý Đơn Hàng & Giữ Chỗ (ORDER)
| Mã Lỗi (Code) | HTTP Status | Thông Báo Tiếng Việt Hiển Thị Cho Người Dùng | Nguyên Nhân Kỹ Thuật | Hướng Xử Lý Của Client |
|:---|:---:|:---|:---|:---|
| `ORDER_HOLD_TIMEOUT` | 410 | Đã hết 10 phút giữ ghế. Ghế của bạn đã được giải phóng để nhường cho khách khác. | Khóa Redis của đơn hàng hết hạn TTL 600s | Hiện Popup thông báo, nút "Chọn lại ghế" đưa về Màn 5 |
| `ORDER_NOT_FOUND` | 404 | Không tìm thấy thông tin đơn hàng này trong hệ thống. | Order ID không tồn tại hoặc đã bị xóa | Đưa người dùng về Trang chủ |
| `ORDER_ALREADY_PAID` | 400 | Đơn hàng này đã được thanh toán thành công trước đó. | Cố gắng thanh toán lại đơn hàng đã có trạng thái `PAID` | Điều hướng thẳng sang Màn hình Chi tiết vé (Màn 8) |

#### 5. Phân Hệ Voucher & Khuyến Mãi (PROMO)
| Mã Lỗi (Code) | HTTP Status | Thông Báo Tiếng Việt Hiển Thị Cho Người Dùng | Nguyên Nhân Kỹ Thuật | Hướng Xử Lý Của Client |
|:---|:---:|:---|:---|:---|
| `PROMO_CODE_NOT_FOUND`| 404 | Mã khuyến mãi không tồn tại. Vui lòng kiểm tra lại ký tự. | Không tìm thấy mã trong bảng khuyến mãi | Viền đỏ ô nhập voucher, xóa nút áp dụng |
| `PROMO_EXPIRED` | 400 | Mã khuyến mãi này đã hết hạn sử dụng. | Ngày giờ hiện tại > Ngày hết hạn voucher | Báo lỗi dưới ô nhập |
| `PROMO_OUT_OF_BUDGET`| 400 | Mã khuyến mãi đã hết lượt sử dụng trong ngày. | Số lượt sử dụng thực tế đạt hạn mức tối đa của chiến dịch | Thông báo người dùng chọn mã khuyến mãi khác |
| `PROMO_MIN_SPEND_NOT_MET`| 422| Đơn hàng chưa đạt giá trị tối thiểu {MinSpend}đ để áp dụng voucher này. | Tổng tiền đơn hàng < Ngưỡng yêu cầu của Voucher | Hiển thị số tiền còn thiếu để được giảm giá |
| `PROMO_CINEMA_MISMATCH`| 422 | Voucher này chỉ áp dụng cho cụm rạp {CinemaName}. | Rạp đang đặt vé không nằm trong danh sách đối tác của voucher | Báo rõ tên rạp áp dụng |
| `PROMO_STACK_NOT_ALLOWED`| 422| Mỗi đơn hàng chỉ được sử dụng tối đa 01 mã giảm giá. | Người dùng cố gắng nhập thêm mã thứ 2 | Giữ nguyên voucher đã áp dụng đầu tiên |

#### 6. Phân Hệ Cổng Thanh Toán & Đối Soát (PAYMENT)
| Mã Lỗi (Code) | HTTP Status | Thông Báo Tiếng Việt Hiển Thị Cho Người Dùng | Nguyên Nhân Kỹ Thuật | Hướng Xử Lý Của Client |
|:---|:---:|:---|:---|:---|
| `PAYMENT_USER_CANCELLED`| 400 | Giao dịch đã bị hủy bởi người dùng. Ghế của bạn vẫn được giữ trong {mm:ss}. | Khách bấm "Hủy" hoặc "Quay lại" trên App ví MoMo/ZaloPay | Giữ nguyên màn hình thanh toán để khách chọn phương thức khác |
| `PAYMENT_INSUFFICIENT_FUNDS`| 402| Số dư trong tài khoản ví không đủ để thanh toán đơn hàng này. | Cổng thanh toán trả về lỗi thiếu tiền trong ví | Gợi ý nạp thêm tiền hoặc chọn thanh toán Thẻ ATM |
| `PAYMENT_GATEWAY_TIMEOUT`| 504| Cổng thanh toán phản hồi chậm. Vui lòng không thao tác lại để tránh trừ tiền trùng. | Cổng MoMo/ZaloPay không trả kết quả sau 30 giây | Hiển thị màn hình chờ xác thực kèm spinner loading |
| `PAYMENT_SIGNATURE_INVALID`| 403| Lỗi xác thực bảo mật thanh toán. Giao dịch bị từ chối. | Sai lệch chữ ký số HMAC-SHA256 giữa Cổng và Server | Chặn đơn hàng, log cảnh báo gian lận |
| `PAYMENT_DEEPLINK_FAILED`| 500 | Không thể mở ứng dụng thanh toán. Vui lòng kiểm tra app ví trên máy. | Thiết bị chưa cài ứng dụng ví hoặc lỗi custom scheme | Tự động chuyển hướng mở giao diện Webview thanh toán |

#### 7. Phân Hệ Vé Điện Tử & Soát Vé QR (TICKET)
| Mã Lỗi (Code) | HTTP Status | Thông Báo Tiếng Việt Hiển Thị Cho Người Dùng | Nguyên Nhân Kỹ Thuật | Hướng Xử Lý Của Client |
|:---|:---:|:---|:---|:---|
| `TICKET_QR_EXPIRED` | 400 | Mã QR đã hết hạn (chỉ có hiệu lực 60 giây). Đang làm mới mã mới... | Máy quét đọc mã QR TOTP cũ đã quá hạn 60 giây | Client tự động tạo mã QR mới ngay lập tức |
| `TICKET_ALREADY_CHECKED_IN`| 409| CẢNH BÁO: Vé này đã được check-in lúc {Time} tại Cửa {Gate}! | Mã vé đã mang trạng thái `CHECKED_IN` trên hệ thống rạp | Máy quét nhân viên rung chuông báo động đỏ, từ chối vào |
| `TICKET_NOT_ACTIVE_YET`| 400 | Phòng chiếu chưa mở cửa đón khách. Vui lòng quay lại trước giờ chiếu 15 phút. | Khách quét mã quá sớm (> 45 phút trước giờ chiếu) | Hiện thông báo giờ mở cửa đón khách |
| `TICKET_CANCELLED` | 410 | Vé này đã bị hủy hoặc hoàn tiền. Không có giá trị vào rạp. | Vé có trạng thái `REFUNDED` hoặc `CANCELLED` | Màn hình chi tiết vé hiển thị tem chéo "ĐÃ HỦY" |

#### 8. Phân Hệ Trợ Lý Thông Minh PhimBook AI (AI)
| Mã Lỗi (Code) | HTTP Status | Thông Báo Tiếng Việt Hiển Thị Cho Người Dùng | Nguyên Nhân Kỹ Thuật | Hướng Xử Lý Của Client |
|:---|:---:|:---|:---|:---|
| `AI_INTENT_UNRECOGNIZED`| 422 | PhimBook AI chưa hiểu rõ ý bạn. Bạn có thể nói rõ hơn về giờ chiếu hoặc phim muốn xem không? | Độ tin cậy trích xuất thực thể (NER Confidence) < 0.6 | Trả về tin nhắn gợi ý các mẫu câu hỏi sẵn (Prompt Chips) |
| `AI_NO_MATCHING_SHOWTIME`| 404| Không tìm thấy suất chiếu nào phù hợp với yêu cầu. AI đề xuất suất chiếu gần nhất: | Bộ lọc (Giờ + Rạp + Phim) không có phòng nào còn chỗ | AI tự động nới lỏng bán kính tìm kiếm (+/- 1 giờ hoặc rạp lân cận) |
| `AI_BUDGET_OVERFLOW` | 422 | Ngân sách {Budget}đ không đủ cho {Quantity} vé. Giá vé thấp nhất hiện tại là {MinPrice}đ. | Ngân sách người dùng đặt ra thấp hơn giá vé tối thiểu của phòng | Đưa ra gợi ý chuyển sang rạp có giá vé rẻ hơn hoặc suất chiếu sáng |
| `AI_SEAT_AUTO_PICK_FAILED`| 409| Không tìm thấy {Quantity} ghế liền kề nhau trong suất chiếu này. | Phòng chiếu không còn đủ ghế trống đi chung | Đề xuất suất chiếu khác còn nhiều ghế hơn |

#### 9. Phân Hệ Tích Hợp Hệ Thống & Rạp Đối Tác (SYS)
| Mã Lỗi (Code) | HTTP Status | Thông Báo Tiếng Việt Hiển Thị Cho Người Dùng | Nguyên Nhân Kỹ Thuật | Hướng Xử Lý Của Client |
|:---|:---:|:---|:---|:---|
| `SYS_CINEMA_POS_OFFLINE`| 502| Hệ thống của rạp {CinemaName} đang bảo trì kết nối. Vui lòng thử lại sau ít phút. | API máy chủ POS rạp (CGV/Lotte/Galaxy) không phản hồi | Ẩn tạm thời suất chiếu của rạp đó trên ứng dụng |
| `SYS_RATE_LIMIT_EXCEEDED`| 429| Bạn đang thao tác quá nhanh. Vui lòng đợi trong vài giây. | Vượt quá 60 requests/phút từ 1 địa chỉ IP/User ID | Khóa tạm thời nút bấm 3 giây |
| `SYS_INTERNAL_ERROR` | 500 | Đã có lỗi xảy ra từ máy chủ. Đội ngũ kỹ thuật đang xử lý. | Lỗi ngoại lệ chưa được bắt (Unhandled Exception) | Hiện màn hình báo lỗi thân thiện kèm mã Request ID để báo tổng đài |

---

### 2.3. Quy Định Phản Hồi Giao Diện UI Khi Xảy Ra Lỗi (UX Recovery)

Để giao diện đạt chuẩn **Premium Consumer App**, ứng dụng PhimBook phân định 4 cấp độ phản hồi lỗi trực quan:

```
[MỨC 1: LỖI NHẸ - INLINE ERROR]
Ví dụ: Sai định dạng SĐT, nhập sai mã voucher
Phản hồi: Đổi viền ô input sang màu đỏ Crimson (#D32F2F), rung nhẹ (Haptic Error), hiển thị dòng text cảnh báo nhỏ 12px bên dưới ô nhập. Không làm gián đoạn màn hình của người dùng.

[MỨC 2: CẢNH BÁO TỨC THỜI - TOAST NOTIFICATION]
Ví dụ: Thao tác quá nhanh, chưa chọn ghế mà ấn tiếp tục, mã QR tự làm mới
Phản hồi: Toast đen mờ viền đỏ bo tròn xuất hiện ở cạnh trên màn hình trong 3 giây rồi tự động biến mất.

[MỨC 3: XUNG ĐỘT NGHIỆP VỤ - BOTTOM SHEET / MODAL DIALOG]
Ví dụ: Ghế vừa bị người khác chọn (SEAT_ALREADY_LOCKED), Hết 10 phút giữ ghế (ORDER_HOLD_TIMEOUT)
Phản hồi: Mở Bottom Sheet bán trong suốt (Glassmorphism), có biểu tượng cảnh báo dạ quang, giải thích nguyên nhân rõ ràng và cung cấp 1 nút CTA duy nhất: "Chọn Lại Ghế" hoặc "Làm Mới Sơ Đồ".

[MỨC 4: LỖI NGẮT QUÃNG TOÀN HÀNG - FULLSCREEN ERROR SCREEN]
Ví dụ: Mất kết nối internet hoàn toàn, hệ thống rạp sập kết nối
Phản hồi: Màn hình điện ảnh nghệ thuật minh họa đứt cuộn phim, nút CTA lớn: "Thử Lại Kết Nối".
```

---

## PHẦN III: TỔNG QUAN HỆ THỐNG & CÁC BÊN LIÊN QUAN

### 3.1. Phạm vi & Mục tiêu
- **PhimBook** là nền tảng bán vé xem phim trực tuyến liên kết đa cụm rạp tại Việt Nam (CGV, Lotte Cinema, Galaxy Cinema, BHD Star, Beta Cinemas, Cinestar, v.v.).
- Giải quyết 3 bài toán lớn:
  1. **Tập trung hóa:** Người dùng không cần cài đặt nhiều app rạp; so sánh suất chiếu, giá vé, khoảng cách địa lý tức thì.
  2. **Tối ưu hóa thời gian đặt vé với AI:** Loại bỏ 8 bước click rườm rà truyền thống qua tính năng Trợ lý AI PhimBook (NLP-driven booking trong 1 câu chat).
  3. **Trải nghiệm vào rạp không chạm (Touchless Cinema):** Vé điện tử QR động (Dynamic QR), tích hợp Apple Wallet / Google Wallet, cảnh báo đếm ngược giờ vào rạp.

### 3.2. Ma Trận Vai Trò Người Dùng & Phân Quyền Truy Cập (Roles & RBAC Matrix)

#### 1. Định nghĩa các thực thể & Vai trò (Actors & System Roles)
1. **Khách vãng lai (`GUEST`):** Tra cứu phim, xem trailer, xem lịch chiếu, đặt vé nhanh (Guest Checkout) với thông tin SĐT/Email. Không lưu điểm tích lũy.
2. **Thành viên PhimBook (`CUSTOMER`):** Thành viên đăng nhập chính thức. Có ví vé điện tử, lưu lịch sử, tích điểm hội viên (Bạc, Vàng, Kim Cương), sử dụng ví voucher và lưu hồ sơ cá nhân hóa cho AI.
3. **Nhân viên Soát vé (`TICKET_STAFF`):** Nhân viên tại cụm rạp đối tác. Sử dụng ứng dụng POS/Mobile Scanner để quét mã Dynamic QR check-in, xác nhận đổi combo bắp nước tại quầy, tra cứu mã vé trong ngày tại rạp phụ trách.
4. **Quản lý Cụm rạp (`CINEMA_MANAGER`):** Quản lý vận hành chi nhánh rạp đối tác (CGV, Lotte, Beta...). Quản lý danh sách phòng chiếu, cập nhật sơ đồ ghế vật lý, phê duyệt lịch chiếu, điều chỉnh giá vé và theo dõi báo cáo doanh thu theo từng rạp.
5. **Quản trị viên Tối cao (`SUPER_ADMIN`):** Ban điều hành nền tảng PhimBook. Toàn quyền quản trị hệ sinh thái: Quản lý đối tác rạp chiếu, quản trị danh mục phim, cấu hình bot AI, quản lý chiến dịch Voucher toàn sàn, quản trị người dùng và đối soát tài chính với các cổng thanh toán.

#### 2. Ma Trận Phân Quyền Chi Tiết (RBAC Permission Matrix)

| Nhóm Nghiệp Vụ / Chức Năng | GUEST | CUSTOMER | TICKET_STAFF | CINEMA_MANAGER | SUPER_ADMIN | Ghi Chú Giới Hạn Phạm Vi |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **Xem Phim, Lịch chiếu, Giá vé** | ✅ | ✅ | ✅ | ✅ | ✅ | Công khai toàn bộ |
| **Đặt vé & Thanh toán trực tuyến** | ✅ (Shadow) | ✅ | ❌ | ❌ | ❌ | Staff/Admin không đặt vé qua portal quản trị |
| **Sử dụng Trợ lý AI PhimBook** | ✅ (Giới hạn) | ✅ (Đầy đủ) | ❌ | ❌ | ✅ (Test) | Thành viên lưu lịch sử khẩu vị cá nhân |
| **Ví vé điện tử & Mã QR Dynamic**| ❌ (Nhận SMS) | ✅ | ❌ | ❌ | ❌ | Khách xem mã qua app hoặc link SMS/Email |
| **Tích điểm hội viên & Đổi Voucher**| ❌ | ✅ | ❌ | ❌ | ❌ | Tích lũy theo doanh số năm |
| **Quét mã QR Check-in vào rạp** | ❌ | ❌ | ✅ | ✅ | ✅ | **Chỉ quét vé thuộc Rạp mình phụ trách** |
| **Xác nhận giao Combo bắp nước**| ❌ | ❌ | ✅ | ✅ | ✅ | **Chỉ áp dụng tại Rạp mình phụ trách** |
| **Quản lý Phòng chiếu & Sơ đồ ghế**| ❌ | ❌ | ❌ | ✅ | ✅ | Manager quản lý trong phạm vi cụm rạp |
| **Tạo & Duyệt Suất chiếu (Showtime)**| ❌ | ❌ | ❌ | ✅ | ✅ | Đồng bộ từ POS rạp hoặc nhập thủ công |
| **Cấu hình Giá vé động & Phụ thu**| ❌ | ❌ | ❌ | ✅ | ✅ | Áp dụng theo quy định của chuỗi rạp |
| **Xem Báo cáo Doanh thu & Lấp đầy**| ❌ | ❌ | ❌ | ✅ (Cụm rạp) | ✅ (Toàn sàn) | Manager chỉ xem doanh thu rạp mình |
| **Quản lý Danh mục Phim & Trailer**| ❌ | ❌ | ❌ | ❌ | ✅ | Đảm bảo tính chuẩn hóa dữ liệu phim |
| **Tạo Chiến dịch Voucher / Promo**| ❌ | ❌ | ❌ | ❌ | ✅ | Ngân sách khuyến mãi toàn hệ thống |
| **Phân quyền Nhân viên & Cụm rạp** | ❌ | ❌ | ❌ | ❌ | ✅ | Gán nhân viên vào cụm rạp cụ thể |
| **Đối soát Tài chính Cổng thanh toán**| ❌ | ❌ | ❌ | ❌ | ✅ | MoMo, ZaloPay, VietQR, Thẻ quốc tế |

---

## PHẦN IV: HÀNH TRÌNH NGƯỜI DÙNG & MÁY TRẠNG THÁI (STATE MACHINES)

### 4.1. Sơ Đồ Hai Luồng Đặt Vé Song Song

```
[LUỒNG TRUYỀN THỐNG]
Trang chủ / Khám phá -> Chi tiết phim -> Chọn Rạp & Suất chiếu -> Sơ đồ ghế (Giữ ghế 10p) 
   -> Chọn Combo Bắp Nước -> Áp Voucher -> Điền thông tin liên hệ -> Thanh toán Deeplink -> Nhận Vé QR

[LUỒNG ĐẶT VÉ SIÊU TỐC VỚI AI ASSISTANT]
Tab "AI Trợ lý" -> Nhập/Bấm prompt ("Tối nay 20h 2 người phim kinh dị < 350k") 
   -> AI phân tích và trả về "Thẻ Chốt Kèo" (Phim + Suất + 2 Ghế VIP trung tâm + Combo) 
   -> Người dùng bấm nút "Chốt" -> Chuyển thẳng vào Màn hình Thanh toán (Bỏ qua 4 bước thủ công)
```

### 4.2. Vòng Đời Trạng Thái Đơn Hàng (Order State Machine)
- `DRAFT`: Khách chọn ghế đầu tiên trên sơ đồ.
- `HOLDING_SEATS`: Khóa phân tán Redis 10 phút kích hoạt.
- `CANCELLED_EXPIRED`: Quá 10 phút chưa thanh toán -> Tự động nhả ghế.
- `PENDING_PAYMENT`: Khách bấm thanh toán -> Chuyển sang MoMo/ZaloPay/Thẻ.
- `PAYMENT_FAILED`: Cổng báo thất bại / Khách hủy giao dịch.
- `CONFIRMED / PAID`: Webhook IPN hợp lệ -> Xuất vé điện tử.
- `REFUNDED`: Hủy vé hợp lệ trước giờ chiếu >= 120 phút.
- `CHECKED_IN`: Khách quét mã QR tại cổng rạp thành công.
- `COMPLETED`: Suất chiếu kết thúc.

---

## PHẦN V: ĐẶC TẢ NGHIỆP VỤ CHI TIẾT 11 MÀN HÌNH

### Màn hình 1: Trang Chủ (Home Screen)
- **Mục đích:** Landing page điện ảnh, kích thích đặt vé qua trailer, phim hot và ưu đãi.
- **Thành phần & Nghiệp vụ:**
  - Header vị trí: Chọn tỉnh/thành phố (GPS tự động). Lịch chiếu lọc theo khu vực này.
  - Promotional Banner Carousel: Tự động trượt mỗi 4s, vuốt tay được, dẫn link ưu đãi.
  - Hero Spotlight ("Phim nổi bật"): Poster lớn tràn viền, nhãn độ tuổi (`P`, `K`, `T13`, `T16`, `T18`, `C21`), rating ⭐ 8.9/10.
  - Phân nhóm phim: "Đang chiếu" (xếp theo doanh thu), "Sắp chiếu" (kèm chuông nhắc mở bán), "Trending" (Top 10 phim rạp).
  - Thao tác nhanh: Nút "Xem chi tiết" (qua Màn 4), Nút "Đặt vé ngay" (Bottom Sheet chọn nhanh rạp/giờ), Trailer Quick Play (Modal xem video 1080p có nút đặt vé).

### Màn hình 2: Khám Phá & Bộ Lọc Nâng Cao (Explore Screen)
- **Mục đích:** Bộ máy tra cứu và lọc phim đa chiều theo nhu cầu sâu.
- **Thành phần & Nghiệp vụ:**
  - Search bar tức thì: Tìm theo tên tiếng Việt/Anh, đạo diễn, diễn viên (Debounce 300ms).
  - Filter chips & Bottom Sheet: Thể loại (Hành động, Kinh dị, Hoạt hình...), Hệ thống rạp (CGV, Lotte, Galaxy...), Khung giờ (Sáng 8-12h, Chiều 12-17h, Tối 17-22h, Khuya >22h), Định dạng (2D, 3D, IMAX, 4DX, ScreenX), Ngày xem (14 ngày).
  - Toggles cá nhân: Tab "Yêu thích" (phim đã thả tim), Tab "Xem sau" (watchlist chờ ngày chiếu).
  - Empty State: Hiển thị minh họa cuộn phim kèm nút "Xóa bộ lọc" hoặc "Nhờ AI gợi ý".

### Màn hình 3: Trợ Lý Thông Minh PhimBook AI (Assistant Screen) — *Signature Feature*
- **Mục đích:** Đặt vé bằng ngôn ngữ tự nhiên, hoàn tất chốt vé trong 60 giây.
- **Thành phần & Nghiệp vụ:**
  - Giao diện chat trực quan: Phân biệt rõ tin nhắn user và AI (avatar robot phát sáng crimson).
  - Suggested Prompt Chips: "Tối nay 20h phim hot", "Ngân sách 350k cho 2 người", "IMAX Dune cuối tuần"...
  - AI Recommendation Bento Card: Trả về thẻ tóm tắt trọn gói gồm: Phim, Suất chiếu tối ưu, **Tự động chọn 2 ghế VIP chính giữa**, **Tự động chọn combo bắp nước theo số dư ngân sách**, Tổng tiền dự kiến (ví dụ: 345.000đ / 350.000đ).
  - Nút CTA "Chốt": Khóa ngầm 2 ghế trong 10 phút, add combo vào giỏ, điều hướng thẳng sang Màn hình Thanh toán (Màn 6).

### Màn hình 4: Chi Tiết Phim & Chọn Suất Chiếu (Movie Detail Screen)
- **Mục đích:** Cung cấp thông tin điện ảnh chuyên sâu và ma trận lịch chiếu đa rạp.
- **Thành phần & Nghiệp vụ:**
  - Hero Backdrop & Poster, Video trailer 1080p, Điểm đánh giá (PhimBook Score, IMDb, Rotten Tomatoes), Thời lượng, Thể loại, Nhãn tuổi, Synopsis (Xem thêm / Thu gọn).
  - Showtime Matrix: Chọn ngày ngang (7 ngày), lọc cụm rạp theo cự ly GPS gần nhất, nhóm theo định dạng (2D Phụ đề, 2D Lồng tiếng, IMAX 3D, ScreenX).
  - Chip suất chiếu: Giờ chiếu, phòng chiếu, giá vé khởi điểm, màu chỉ báo tình trạng chỗ (Xanh: Còn nhiều; Vàng: Sắp hết; Đỏ: Cháy vé). Chạm vào mở Màn 5 (Chọn ghế).

### Màn hình 5: Bản Đồ Ghế & Khóa Ghế Thời Gian Thực (Seat Selection Screen)
- **Mục đích:** Sơ đồ phòng chiếu vật lý trực quan, kích hoạt khóa ghế đồng thời chống tranh chấp.
- **Thành phần & Nghiệp vụ:**
  - Màn hình cong phát sáng dạ quang phía trên.
  - Phân loại ghế: Thường (xám mờ), VIP (vàng hổ phách), Ghế đôi Sweetbox (hàng cuối).
  - Trạng thái ghế: Còn trống, Đang bạn chọn (đỏ crimson), Người khác đang giữ (ổ khóa xám), Đã bán (dấu X mờ).
  - Ràng buộc: Tối đa 8 ghế/đơn, Sweetbox bắt buộc chọn cả cặp, **Không để trống 1 ghế đơn lẻ (Orphan seat rule)**.
  - Bộ đếm thời gian: 10:00 phút đếm ngược xuất hiện ngay khi chọn ghế đầu tiên.
  - Sticky bottom bar: Danh sách ghế chọn, tạm tính tiền, nút "Tiếp tục".

### Màn hình 6: Thanh Toán, Combo & Khuyến Mãi (Checkout Screen)
- **Mục đích:** Đơn hàng tổng thể, bán gia tăng bắp nước, áp voucher và chuyển sang cổng thanh toán.
- **Thành phần & Nghiệp vụ:**
  - Order Card: Phim, rạp, phòng chiếu, suất chiếu, số ghế, đếm ngược giữ ghế còn lại.
  - Combo bắp nước: Solo (85k), Cặp đôi (119k), Gia đình (199k) với bộ nút tăng giảm +/- real-time.
  - Voucher input: Nhập mã hoặc chọn từ ví, tối đa 1 mã/đơn, kiểm tra min spend tự động.
  - Thông tin liên hệ: Họ tên, SĐT, Email (prefill nếu đã login).
  - Phương thức thanh toán: Ví MoMo (Deeplink), Ví ZaloPay, Thẻ Visa/Mastercard/JCB, Thẻ ATM / VietQR Napas 24/7.
  - Bảng giá phân rã: Tiền vé + Tiền combo - Voucher = Tổng cộng.
  - CTA "Thanh toán ngay": Sinh deeplink mở app ví tương ứng.

### Màn hình 7: Quản Lý Vé Của Tôi (Tickets Screen)
- **Mục đích:** Ví vé số lưu trữ toàn bộ vé xem phim hiện tại và quá khứ.
- **Thành phần & Nghiệp vụ:**
  - Tab "Sắp tới": Vé chưa diễn ra, ưu tiên suất gần nhất lên đầu, badge trạng thái (Đã thanh toán, Sắp bắt đầu < 30p, Chưa vào rạp).
  - Tab "Lịch sử": Vé đã xem, đã hủy, hết hạn. Có nút đánh giá sao hoặc "Đặt lại phim này".
  - Thao tác: Chạm thẻ vé mở Màn 8 (Chi tiết vé).

### Màn hình 8: Chi Tiết Vé & Check-in QR Bảo Mật (Ticket Detail Screen)
- **Mục đích:** Xuất trình vé điện tử để vào rạp hoặc nhận bắp nước mà không cần in vé giấy.
- **Thành phần & Nghiệp vụ:**
  - Thiết kế vé đục lỗ điện ảnh (Perforated ticket): Nửa trên poster, tên phim, nhãn tuổi, rạp, phòng, suất chiếu, ghế, mã đặt vé in hoa (PB-982145). Nửa dưới mã QR lớn + Barcode.
  - Dynamic QR (TOTP): Mã QR tự động đổi mỗi 60 giây chống chụp màn hình bán lại. Có chứng chỉ offline nếu rạp mất sóng.
  - Đếm ngược: "Phòng chiếu mở cửa đón khách sau 15 phút". Sau quét chuyển sang `Đã check-in`.
  - Tiện ích: Lưu ảnh vào máy, Thêm vào Apple/Google Wallet, Chia sẻ bạn bè (ẩn giá tiền).

### Màn hình 9: Tài Khoản & Thiết Lập Cá Nhân Hóa AI (Profile Screen)
- **Mục đích:** Quản lý hội viên, ví voucher và cấu hình hành vi của AI Assistant.
- **Thành phần & Nghiệp vụ:**
  - Cấp bậc hội viên: Bạc (mặc định), Vàng (>1.5tr/năm), Kim Cương (>5tr/năm).
  - Thiết lập AI: Số người đi xem mặc định (1, 2, 3-4), Ngân sách mặc định (ví dụ 300k-400k), Rạp "ruột" ưu tiên (AI luôn quét rạp này trước), Khẩu vị thể loại.
  - Ví voucher, cài đặt thông báo mở bán vé, bảo mật FaceID khi mở app.

### Màn hình 10: Phim Cá Nhân (Yêu Thích & Xem Sau)
- **Mục đích:** Danh sách theo dõi giúp tăng tỷ lệ quay lại của khách hàng.
- **Thành phần & Nghiệp vụ:**
  - Tab Yêu thích: Phim đã thả tim, nhãn "Đang chiếu hôm nay" kèm nút đặt vé ngay.
  - Tab Xem sau: Bom tấn sắp chiếu, nút chuông "Nhắc tôi khi mở bán vé". Tự động gửi Push Notification khi có suất chiếu sớm.

### Màn hình 11: Xác Thực Tài Khoản (Đăng Nhập / Đăng Ký / Khách)
- **Mục đích:** Đảm bảo trải nghiệm mua vé không bị cản trở (Zero-friction checkout).
- **Thành phần & Nghiệp vụ:**
  - Đăng nhập SĐT không mật khẩu (OTP qua SMS/Zalo ZNS trong 5s).
  - Đăng nhập Social (Apple ID / Google).
  - Chế độ Khách (Guest Checkout): Đặt vé chỉ cần nhập SĐT + Email lúc thanh toán, hệ thống tự tạo Shadow Account để lưu lịch sử vé.

---

## PHẦN VI: CÁC QUY TẮC NGHIỆP VỤ CỐT LÕI (CORE BUSINESS RULES)

### 6.1. Quy tắc Khóa ghế & Chống tranh chấp (Seat Hold & Concurrency)
- **Thời hạn khóa ghế:** 10 phút (600 giây). Khi chuyển màn hình giữa Chọn ghế -> Combo -> Thanh toán, đồng hồ đếm ngược giữ nguyên, không được reset.
- **Xử lý tranh chấp (Race condition):** Sử dụng **Distributed Lock (Redis Mutex)**. Ai gửi request trước (theo mili-giây) sẽ được giữ ghế (`LOCK_SUCCESS`), người đến sau nhận lỗi `SEAT_ALREADY_LOCKED`. Khi ghế bị giữ, hệ thống phát WebSocket broadcast cập nhật tức thì sơ đồ ghế trên tất cả các máy khác.
- **Giải phóng ghế tự động:** Hết 10 phút, khóa Redis tự hủy (TTL Expired), ghế trở lại trạng thái `Còn trống`.

### 6.2. Quy tắc Ràng buộc Ghế trống (Orphan Seat Prevention Rule)
- Thuật toán phòng vé **nghiêm cấm để lại 1 ghế trống đơn lẻ** giữa các ghế đã chọn/đã bán hoặc sát mép tường.
- Ví dụ: Dãy có ghế 1 đến 5 còn trống. Khách chọn ghế 2 và 3, để lại ghế 1 trơ trọi -> Báo lỗi `SEAT_ORPHAN_SINGLE`. Khách phải chọn sát vách (ghế 1, 2) hoặc chừa ra từ 2 ghế trống trở lên.

### 6.3. Quy tắc Định giá Đa tầng (Dynamic Pricing Formula)
$$\text{Giá Vé} = \text{Giá Cơ Bản} + \text{Phụ Thu Định Dạng} + \text{Phụ Thu Hạng Ghế} + \text{Phụ Thu Khung Giờ}$$
- **Phụ thu định dạng:** 2D (`+0đ`), 3D (`+30k`), IMAX 2D (`+80k`), IMAX 3D (`+110k`), 4DX (`+60k`).
- **Phụ thu hạng ghế:** Standard (`+0đ`), VIP (`+15k`), Sweetbox (`+30k/cặp`).
- **Phụ thu khung giờ:** Giờ thường T2-T6 (`+0đ`), Giờ vàng 17h-22h (`+10k`), Cuối tuần & Lễ (`+20k`). Học sinh - Sinh viên U22 đồng giá `55k - 65k` cho suất 2D tiêu chuẩn.

### 6.4. Cơ chế AI Concierge Engine Pipeline
1. **Phân tích câu thoại (NER):** Trích xuất Thời gian, Số người, Ngân sách, Thể loại, Vị trí rạp.
2. **Matching lịch chiếu:** Quét phòng chiếu còn đủ số ghế trống liền kề trong khung giờ.
3. **Thuật toán chọn ghế tối ưu:** Tự động định vị cặp ghế ở chính giữa hàng VIP.
4. **Gợi ý Combo theo số dư:** Lấy `Ngân sách - Tiền vé` để chọn combo bắp nước vừa khít số tiền còn lại.
5. **Fast-track Checkout:** Bấm "Chốt" tự động tạo phiên giữ ghế và mở ngay màn hình thanh toán.

### 6.5. Quy tắc Thanh toán Deeplink & Webhook Reconcile
- Gọi API đối tác sinh Deeplink mở trực tiếp App MoMo / ZaloPay.
- Server PhimBook bắt buộc xác thực thanh toán qua **Webhook IPN (HMAC-SHA256)** từ cổng thanh toán thay vì chỉ tin vào callback của client (phòng trường hợp mất mạng khi vừa trừ tiền).
- Nếu trừ tiền thành công nhưng hệ thống rạp gặp sự cố xuất vé: Đơn hàng chuyển sang trạng thái chờ xử lý (`HOLD_EXCEPTION`) và tự động kích hoạt hoàn tiền trong vòng 15 phút.

### 6.6. Quy tắc Check-in QR Chống Gian Lận (Dynamic QR)
- Mã QR được mã hóa TOTP/JWT làm mới sau mỗi **60 giây** (ngăn chặn việc chụp ảnh màn hình bán lại cho nhiều người).
- Có chứng chỉ khóa Offline để kiểm tra khi rạp mất sóng điện thoại.
- Cơ chế **One-time Scanned:** Máy quét rạp quét xong lần 1 vé chuyển trạng thái `ĐÃ_CHECK_IN`. Nếu quét lần 2 máy quét sẽ báo động vé trùng lặp.

### 6.7. Chính sách Hủy Vé & Hoàn Tiền (Refund Policy)
- Chỉ áp dụng với rạp có chính sách hoàn hủy và yêu cầu hủy phải thực hiện **trước giờ chiếu tối thiểu 120 phút (2 tiếng)**.
- Phí hủy tiêu chuẩn: `15.000đ / vé`. Tiền hoàn được nạp 100% thành **PhimBook Xu** vào ví tài khoản để sử dụng ngay.

### 6.8. Quy Tắc Xác Thực, Bảo Mật Phiên & Phân Quyền Truy Cập
- **Nguyên tắc phân định ranh giới dữ liệu (Data Isolation):**
  - Nhân viên soát vé (`TICKET_STAFF`) và Quản lý rạp (`CINEMA_MANAGER`) chỉ được phép xem dữ liệu, đơn hàng, vé và suất chiếu thuộc phạm vi cụm rạp (`cinema_id`) mà mình được gán quyền trong bảng `staff_cinemas`.
  - Nghiêm cấm nhân viên của cụm rạp A quét mã check-in hoặc xem vé của cụm rạp B (Hệ thống trả mã lỗi `AUTH_FORBIDDEN_CINEMA_ACCESS` HTTP 403).
- **Quy tắc bảo vệ mã OTP:**
  - OTP chỉ có hiệu lực trong 120 giây (TTL = 120s). Mỗi số điện thoại chỉ được gửi tối đa 3 OTP trong 10 phút để tránh bị spam SMS/ZNS.
  - Sau 5 lần nhập sai liên tiếp, số điện thoại bị khóa xác thực trong 15 phút.
- **Quy tắc thu hồi phiên làm việc (Session Revocation):**
  - Khi người dùng đổi mật khẩu, đăng xuất từ xa, hoặc tài khoản bị khóa (`status = 'BANNED'`), tất cả các phiên trong bảng `user_sessions` của người dùng đó lập tức chuyển cờ `is_revoked = true` và các Access Token tương ứng sẽ bị từ chối ở tầng Middleware/Guard.

---

## PHẦN VII: THIẾT KẾ CƠ SỞ DỮ LIỆU ĐẦY ĐỦ (DBML SCRIPT CHO DBDIAGRAM.IO)

Dưới đây là đoạn mã **DBML (Database Markup Language)** bổ sung hoàn chỉnh phân hệ **Xác thực (Authentication)**, **Phân quyền (RBAC)** và **Liên kết Cụm rạp (Staff Assignment)**, tương thích 100% để copy và cập nhật trực tiếp vào [dbdiagram.io](https://dbdiagram.io/d/6ab5ef9f0f25a52d0102a7ff):

```dbml
// ==========================================
// 1. PHÂN HỆ XÁC THỰC & PHÂN QUYỀN (AUTH & RBAC)
// ==========================================

Table users {
  id varchar [pk, note: 'PB-USR-...']
  phone varchar [unique, note: 'Số điện thoại định dạng chuẩn VN (10 số)']
  email varchar [unique, note: 'Email định danh']
  password_hash varchar [note: 'Mã hóa Argon2id/Bcrypt cho Admin/Staff/Email Login']
  full_name varchar [note: 'Họ và tên hiển thị']
  avatar_url varchar [note: 'Đường dẫn ảnh đại diện']
  role varchar [default: 'CUSTOMER', note: 'SUPER_ADMIN, CINEMA_MANAGER, TICKET_STAFF, CUSTOMER, GUEST']
  status varchar [default: 'ACTIVE', note: 'ACTIVE, INACTIVE, BANNED']
  membership_tier varchar [default: 'SILVER', note: 'SILVER, GOLD, DIAMOND']
  is_guest boolean [default: false, note: 'true: tài khoản tạm tạo khi mua vé nhanh']
  phone_verified_at timestamp [note: 'Thời điểm xác thực OTP số điện thoại']
  email_verified_at timestamp [note: 'Thời điểm xác thực email']
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
}

Table user_accounts {
  id uuid [pk, default: `gen_random_uuid()`]
  user_id varchar [ref: > users.id, note: 'Liên kết tới bảng users']
  provider varchar [note: 'google, apple, credentials, zns_otp']
  provider_account_id varchar [note: 'ID định danh từ bên thứ 3 (Google Sub, Apple Sub...)']
  access_token text
  refresh_token text
  expires_at timestamp
  created_at timestamp [default: `now()`]

  indexes {
    (provider, provider_account_id) [unique]
  }
}

Table user_sessions {
  id uuid [pk, default: `gen_random_uuid()`]
  user_id varchar [ref: > users.id, note: 'Liên kết tới bảng users']
  session_token varchar [unique, note: 'Refresh token định danh phiên']
  device_id varchar [note: 'Mã định danh thiết bị di động (UUID)']
  device_name varchar [note: 'Tên thiết bị: iPhone 15 Pro, Samsung S24...']
  ip_address varchar [note: 'Địa chỉ IP đăng nhập']
  user_agent text [note: 'Thông tin trình duyệt/App OS']
  expires_at timestamp [note: 'Hạn chót của phiên']
  is_revoked boolean [default: false, note: 'true nếu đã bị đăng xuất/hủy phiên']
  created_at timestamp [default: `now()`]
}

Table otp_verifications {
  id uuid [pk, default: `gen_random_uuid()`]
  phone varchar [note: 'Số điện thoại nhận OTP']
  otp_code_hash varchar [note: 'Mã OTP 6 số đã được băm một chiều']
  type varchar [note: 'LOGIN, REGISTER, PASSWORD_RESET, GUEST_CHECKOUT']
  attempts_count int [default: 0, note: 'Số lần nhập sai (max 5)']
  expires_at timestamp [note: 'Thời hạn 120 giây kể từ lúc sinh mã']
  is_used boolean [default: false, note: 'true khi đã xác thực thành công']
  created_at timestamp [default: `now()`]
}

Table staff_cinemas {
  id uuid [pk, default: `gen_random_uuid()`]
  user_id varchar [ref: > users.id, note: 'Nhân viên hoặc Quản lý rạp']
  cinema_id varchar [ref: > cinemas.id, note: 'Cụm rạp được phân công công tác']
  role_title varchar [note: 'TICKET_STAFF, CINEMA_MANAGER']
  assigned_at timestamp [default: `now()`]

  indexes {
    (user_id, cinema_id) [unique]
  }
}

Table roles {
  id varchar [pk, note: 'SUPER_ADMIN, CINEMA_MANAGER, TICKET_STAFF, CUSTOMER, GUEST']
  name varchar [note: 'Tên hiển thị: Quản trị viên, Quản lý rạp, Soát vé...']
  description text
}

Table permissions {
  id varchar [pk, note: 'ticket:checkin, showtime:manage, cinema:manage, finance:view...']
  module varchar [note: 'AUTH, TICKET, SHOWTIME, CINEMA, REPORT']
  description text
}

Table role_permissions {
  role_id varchar [ref: > roles.id]
  permission_id varchar [ref: > permissions.id]

  indexes {
    (role_id, permission_id) [pk]
  }
}
```

---

*Tài liệu đặc tả nghiệp vụ & quy định mã lỗi được biên soạn chuẩn hóa cho dự án PhimBook, phục vụ trực tiếp cho công tác thiết kế UI/UX, lập trình Frontend Mobile và xây dựng kiến trúc Backend Microservices.*
