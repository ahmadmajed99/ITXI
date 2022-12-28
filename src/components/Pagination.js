import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="drawer__pagination">
      <ul className="pagination">
        <a href="#">&raquo;</a>
        {pageNumbers.reverse().map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="active">
              {number}
            </a>
          </li>
        ))}
        <a href="#">&laquo;</a>
      </ul>
    </div>
  );
};

export default Pagination;
