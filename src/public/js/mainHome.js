$(document).ready(() => {
    "use strict";
    $('#logout_btn').click(() => {
        $.ajax({
            url: '/api/logout',
            type: 'delete',
            success: (data) => {
                window.location.href = '/login'
            },
            error: (error) => {
                console.error('Lỗi khi gọi API:', error);
            }
        })
    })
})