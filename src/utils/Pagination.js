import React from "react";

function Pagination({ productPerPage, totalProduct, changePage }) {
  const totalpages = Math.ceil(totalProduct / productPerPage);
  let pages = [];

  for (let i = 1; i <= totalpages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-3 mb-3 ">
      <ul className="pagination ">
        {pages.map((page) => (
          <li
            key={page}
            className="page_item"
            onClick={() => {
              changePage(page);
            }}
          >
            <span className="page-link">{page}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
