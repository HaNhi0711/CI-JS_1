const model = {};
    //1. Khởi tạo dữ liệu trống
model.authUser = undefined;


    //2. Hàm cập nhật thông tin sau khi đăng nhập thành công

model.loginSuccess = authUser => {
    model.authUser = authUser;
};