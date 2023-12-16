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
            console.log(error);
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

const addType = (type)=> {
  
}


document.querySelector("#add-type-btn").addEventListener("click", (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Thêm thể loại",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Thêm",
    showLoaderOnConfirm: true,
    preConfirm: async (type) => {
      if(!type){
        Swal.showValidationMessage('Nhập dô mày?');
      }else{

        return await $.ajax({
          type: "POST",
          url: "/api/addType",
          data: {
            type: type
          },
          success: (result) => {
            return result
          },
          error: (err) => {
      
            return err;
          },
        });
      }
     
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      if(result.value.allType){
        Swal.fire({
          title: "Thành công",
          text: "Thêm thành công",
          icon: "success",
        });
      }else{
        Swal.fire({
          title: "Sai rồi",
          text: result.value.errMsg,
          icon: "error",
        });
      }
    }
  });
});


