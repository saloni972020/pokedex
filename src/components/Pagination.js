import React, { useState } from "react";
import "../styles/pagination.css";

const Pagination = ({ limit = 20, count, paginate }) => {
  const [activePage, setActivePage] = useState("1");
  const pageNumbers = [];

  for (let i = 1; i <= Math.floor(count / limit); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => {
                setActivePage(number);
                paginate(number);
              }}
              className={` ${activePage == number ? "active" : ""}`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
