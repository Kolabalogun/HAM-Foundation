type PaginationType = {
  itemsPerPage: number;
  totalItems: number;
  paginate: (value: number) => void;
  currentPage: number;
};

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: PaginationType) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex gap-x-7 items-center flex-row">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`  page-item ${currentPage === number ? "active" : ""}`}
          >
            <button
              onClick={() => paginate(number)}
              className="page-link bg-primary hover:bg-secondary py-2 px-4 rounded-md text-white font-semibold "
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
