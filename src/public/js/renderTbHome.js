const renderItemTbHome = (books) => {
  let html = [];
  books.forEach((book) => {
    let actionHtml = '';
    const statusHtml = book.status
      ? `<span class="badge bg-success p-2">Hoạt động</span>`
      : `<span class="badge bg-danger p-2">Khóa</span>`;
    if (book.status) {
        actionHtml = `<button
                        data-status="verified"
                        id="customer-status-veqhwftl"
                        type="button"
                        class="btn btn-block btn-danger mt-0 mr-2 p-1 block-book-btn"
                        style="width: fit-content"
                        onclick="blockBook('${book.id}')"
                    >
                        <i class="fa-solid fa-lock"></i>
                    </button>`;
    } else {
        actionHtml = `<button
                        data-status="verified"
                        id="customer-status-veqhwftl"
                        type="button"
                        class="btn btn-block btn-success mt-0 mr-2 p-1 active-book-btn"
                        style="width: fit-content"
                        onclick="activeBook('${book.id}')"
                    >
                        <i class="fa-solid fa-lock"></i>
                    </button> `;
    }
    html.push(`<tr>
                <td>${book.name}</td>
                <td>${book.idAuthor.name}</td>
                <td>${book.idType.name}</td>
                <td>${book.price}</td>
                <td>${book.description}</td>
                <td>${book.quantity}</td>
                <td>
                    ${statusHtml}
                </td>
                <td>
                <div class="d-flex align-items-center justify-content-center">
                    ${actionHtml}
                    <button
                        type=" button"
                        class="btn btn-block btn-success mt-0 p-1"
                        style="width: fit-content"
                        
                      >
                        <i class="fa-solid fa-eye"></i>
                      </button>
                </div>
                </td>
            </tr>`) 
  });
  return html.join();
}

export default renderItemTbHome

