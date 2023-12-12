

function blockBook(bookId) {
  if (bookId) {
    Swal.fire({
      title: "Bạn có muốn khóa sách này không?",
      showCancelButton: true,
      confirmButtonText: "Có",
      icon: "question",
      cancelButtonText: `Không`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        $.ajax({
          url: "/api/blockBook",
          type: "PUT",
          data: {
            id: bookId,
          },
          success: (data) => {
            document.getElementById("content-tb").innerHTML = data.books;

            Swal.fire({
              title: "Thành công",
              text: "Khóa thành công",
              icon: "success",
            });
          },
          error: (error) => {
            Swal.fire({
              title: "Lỗi?",
              text: "Có lỗi thử lại sau",
              icon: "error",
            });
          },
        });
      }
    });
  }
}

function activeBook(bookId) {
  if (bookId) {
    Swal.fire({
      title: "Bạn có muốn mở sách này không?",
      showCancelButton: true,
      confirmButtonText: "Có",
      icon: "question",
      cancelButtonText: `Không`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        $.ajax({
          url: "/api/activeBook",
          type: "PUT",
          data: {
            id: bookId,
          },
          success: (data) => {
            document.getElementById("content-tb").innerHTML = data.books;

            Swal.fire({
              title: "Thành công",
              text: "Mở thành công",
              icon: "success",
            });
          },
          error: (error) => {
            Swal.fire({
              title: "Lỗi?",
              text: "Có lỗi thử lại sau",
              icon: "error",
            });
          },
        });
      }
    });
  }
}
