if (!localStorage.getItem("qtv")) {
    let adminAccounts = [
        { email: "admin1@gmail.com", matkhau: "admin123" },
        { email: "admin2@gmail.com", matkhau: "admin123" }
    ];
    localStorage.setItem("qtv", JSON.stringify(adminAccounts));
}
document.getElementById("btn_dk").addEventListener("click", function () {
    let ho = document.getElementById("txt_ho").value.trim();
    let ten = document.getElementById("txt_ten").value.trim();
    let email = document.getElementById("txt_email").value.trim();
    let matkhau = document.getElementById("txt_mk").value;
    let nlmatkhau = document.getElementById("txt_nlmk").value;

    // Kiểm tra dữ liệu đầu vào
    if (!ho || !ten || !email || !matkhau || !nlmatkhau) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    if (matkhau !== nlmatkhau) {
        alert("Mật khẩu nhập lại không trùng khớp.");
        return;
    }

    // Kiểm tra email đã đăng ký chưa
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let isEmailExists = users.some(user => user.email === email);

    if (isEmailExists) {
        alert("Email đã tồn tại!");
        return;
    }

    // Lưu dữ liệu vào localStorage
    let newUser = {
        ho: ho,
        ten: ten,
        email: email,
        matkhau: matkhau
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    // Chuyển hướng đến trang đăng nhập
});
document.querySelector(".modal-content-1 button").addEventListener("click", function () {
    let email = document.querySelector(".modal-content-dangnhap input[type='text']").value.trim();
    let matkhau = document.querySelector(".modal-content-dangnhap input[type='text']:nth-child(2)").value;

    // Lấy dữ liệu người dùng từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let qtvAccounts = JSON.parse(localStorage.getItem("qtv")) || [];
    let user = users.find(user => user.email === email && user.matkhau === matkhau);
    let admin = qtvAccounts.find(admin => admin.email === email && admin.matkhau === matkhau);
    if (admin) {
        alert("Đăng nhập thành công! Chào mừng QTV.");
        window.location.href = "indexQTV.html"; 
    }
    else if(!user) {
        alert("Email hoặc mật khẩu không đúng!");
        window.location.href = "index.html";
       
    } else {
        alert("Đăng nhập thành công!");
        window.location.href = "index2.html"; // Chuyển đến giao diện chào mừng
    }
});