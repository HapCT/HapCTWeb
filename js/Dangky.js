function saveLoginData() {
    event.preventDefault();
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    const comfirm_password = document.getElementById('confirmPass').value;
    console.log(username);
    // Điền đầy đủ thông tin
    if (!username || !password) {
        alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu!");
        return;
    }
    // Kiểm tra tài khoản trong localStorage bằng cách chuyển đổi từ chuỗi JSON sang đối tượng JavaScript
    
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Kiểm tra tài khoản đã tồn tại hay chưa
    const exists = accounts.some(acc => acc.username === username);
    if (exists) {
        alert("Tài khoản đã tồn tại!");
        return;
    }

    // Kiểm tra mật khẩu có giống mật khẩu xác nhận hay không
    if(password !== comfirm_password){
        alert("Mật khẩu xác nhận phải giống mật khẩu");
        return;
    }
    // Mật khẩu phải dài trên 8 ký tự
    if(password.length < 8){
        alert("Mật khẩu phải dài tối thiểu 8 ký tự");
        return;
    }

    // Nếu chưa tồn tại thì đẩy chúng vào mảng accounts
    accounts.push({ username: username, password: password });
    // Lưu mảng accounts vào localStorage sau khi chuyển đổi thành chuỗi JSON
    localStorage.setItem('accounts', JSON.stringify(accounts));
    // Thông báo đăng ký thành công
    alert("Đăng ký thành công!");
    window.location.href = './Dangnhap.html';
}

