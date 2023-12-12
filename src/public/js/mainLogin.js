$(document).ready(() => {
  "use strict";

  $("#login_btn").click((event) => {
    event.preventDefault();
    // Lấy dữ liệu từ form (username và password)
    var userName = $("#userNameInput").val();
    var password = $("#passwordInput").val();

    $.ajax({
      type: "POST",
      url: "/api/login",
      data: {
        userName: userName,
        password: password,
      },
      success: (result) => {
        if (result.errCode === 1) {
          Swal.fire({
            title: "Đăng nhập thất bại!",
            text: "Sai thông tin đăng nhập",
            icon: "error",
          });
        } else {
          location.reload();
        }
      },
      error: (err) => {
        Swal.fire({
          title: "Đăng nhập thất bại!",
          text: "Có lỗi thử lại sau",
          icon: "error",
        });
      },
    });
  });
});
