import { useState } from 'react';
import styled from 'styled-components';
import { ReviewContent, ReviewResponseType } from 'types/my-info';

// icons
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

interface PaginationProps {
  data: ReviewResponseType;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

/** 2023/10/22 - 리뷰 페이지네이션 컴포넌트 - by sineTlsl */
const ReviewPagination: React.FC<PaginationProps> = ({ data, currentPage, setCurrentPage }): JSX.Element => {
  const [startPage, setStartPage] = useState<number>(1);

  const totalPages = data.pageSize;

  /** 2023/10/22 - 페이지 전환 함수 - by sineTlsl */
  const handlerPageChange = (page: number) => {
    setCurrentPage(page);
    console.log(page);
  };
  return (
    <PaginationContainer>
      <button
        onClick={() => setStartPage(prev => Math.max(prev - 5, 1))}
        disabled={startPage === 1}
        className="page_icon">
        <MdOutlineArrowBackIos
          size={16}
          color={startPage + 5 < totalPages ? 'var(--gray-primary)' : 'var(--black-hunt)'}
        />
      </button>
      {Array.from({ length: 5 }, (_, idx) => (
        <button
          key={idx}
          onClick={() => handlerPageChange(startPage + idx)}
          className={`page_number ${startPage + idx === currentPage ? 'btn_active' : ''} ${
            startPage + idx > totalPages ? 'hidden' : ''
          }`}>
          {startPage + idx}
        </button>
      ))}
      <button
        onClick={() => setStartPage(prev => (prev + 5 > totalPages ? prev : prev + 5))}
        disabled={startPage + 5 > totalPages}
        className="page_icon">
        <MdOutlineArrowForwardIos
          size={16}
          color={startPage + 5 > totalPages ? 'var(--gray-primary)' : 'var(--black-hunt)'}
        />
      </button>
    </PaginationContainer>
  );
};

export default ReviewPagination;

const PaginationContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterRow};
  gap: 5px;

  > button {
    color: var(--black-hunt);
    border: none;
    padding: 10px;
    margin: 0px;
    cursor: pointer;
    border-radius: 3px;
    ${({ theme }) => theme.common.flexCenterRow};
    height: 30px;
    font-weight: 400;

    &:disabled {
      color: var(--gray-primary);
    }
  }
  > .page_number {
    width: 30px;
    background: #dadada;
  }
  > .btn_active {
    color: var(--white-primary);
    background: #699bf7;
  }
  > .page_icon {
    width: 40px;
  }
  .hidden {
    display: none;
  }
`;
