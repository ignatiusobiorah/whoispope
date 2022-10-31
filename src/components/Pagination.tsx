import React from "react";

interface Props {
  usersPerPage: any;
  totalUsers: any;
  paginate: any;
}

const Pagination = ({ usersPerPage, totalUsers, paginate }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const next: any = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <nav>
      <ul className="pagination">
        <button onClick={next}>prev</button>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        <button>next</button>
      </ul>
    </nav>
  );
};

export default Pagination;
function setCurrentPage(pageNumber: any) {
  throw new Error("Function not implemented.");
}
