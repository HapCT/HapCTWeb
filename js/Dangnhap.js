
function checkLogin() {
    event.preventDefault();
    const username = document.getElementById('user').value;

    const password = document.getElementById('pass').value;
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    const exists = accounts.some(acc => acc.username === username && acc.password === password);
    if (exists) {
        alert("Đăng nhập thành công");
        window.location.href = "./index.html"; 
        return true;
    }
    else{
        alert("Đăng nhập thất bại, thông tin tài khoản hoặc mật khẩu sai");
    }

}   
