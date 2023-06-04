import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export interface PaginationProps {
  activePage: number;
  pageSize: number;
  totalCount: number;
  handleChangePage?: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  activePage,
  pageSize,
  totalCount,
  handleChangePage,
}) => {
  const maxPage = Math.ceil(totalCount / pageSize);

  const arrayOfNumbers = new Array(maxPage).fill(0);

  const disabledArrow = '!text-gray-300 cursor-default';

  const handlePrevPage = (currentPage: number) => {
    if (currentPage > 1 && handleChangePage) {
      handleChangePage(currentPage - 1);
    }
  };

  const handleNextPage = (currentPage: number) => {
    if (currentPage < maxPage && handleChangePage) {
      handleChangePage(currentPage + 1);
    }
  };
  return (
    <div className="text-gray-500  flex py-4 text-center m-auto justify-center">
      <button disabled={activePage === 0} onClick={() => handlePrevPage(activePage)}>
        <FaAngleLeft className={`${activePage === 1 ? disabledArrow : ''}`} size={30} />
      </button>
      {arrayOfNumbers.map((item, index) => (
        <div
          key={index + 'page'}
          className={`mx-1 px-4 py-1 rounded-md border-[1px] border-gray-400 ${
            activePage - 1 === index
              ? 'bg-yellowQ !border-yellowQ text-black'
              : 'bg-white'
          }`}
        >
          {index + 1}
        </div>
      ))}
      <button
        disabled={activePage === maxPage}
        onClick={() => handleNextPage(activePage)}
      >
        <FaAngleRight
          className={`${activePage === maxPage ? disabledArrow : ''}`}
          size={30}
        />
      </button>
    </div>
  );
};

export default Pagination;
