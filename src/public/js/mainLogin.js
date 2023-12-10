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
                password: password
            },
            success: (result) => {
                console.log(result)
            },
            error: (err) => {
                console.log("Lỗi đăng nhập: " + err.responseText);
            }
        });

    });
})