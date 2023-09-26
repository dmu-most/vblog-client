import React, { useState } from 'react';
import { styled } from 'styled-components';
import { FaAngleDown } from "react-icons/fa";


interface CategoryDropdownProps {
  setSortType: (sortType: string) => void;
}
/** 2023/08/23 - category dropdown - by jh */
const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ setSortType }): JSX.Element => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('최신순');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  /** 2023/09/26 - 최신순 인기순 정렬을 위한 옵션 클릭 함수 추가 - by jh */
  const handleOptionClick = (option: string) => {
    console.log('handleOptionClick called'); // 확인을 위한 로그 추가
    setSelectedOption(option);
    setDropdownOpen(false);

    // 선택된 옵션에 따라 sortType 변경
    if (option === '최신순') {
      setSortType('new');
    } else if (option === '인기순') {
      setSortType('like');
    }
  };

  return (
    <CategoryDropdownContainer>
      <DropdownLayout>
        <div className='DropdownLabel' onClick={toggleDropdown}>
          {selectedOption} <FaAngleDown className={`DropdownIcon ${dropdownOpen ? 'open' : ''}`} />
        </div>
        {dropdownOpen && (
          <div className='DropdownContent'>
            <ul>
              <li onClick={() => handleOptionClick('최신순')}>최신순</li>
              <li onClick={() => handleOptionClick('인기순')}>인기순</li>
            </ul>
          </div>
        )}
      </DropdownLayout>
    </CategoryDropdownContainer>
  );
};

export default CategoryDropdown;

const CategoryDropdownContainer = styled.div`
    margin-top: 6rem;
    width: 100%;
    height: auto;
    padding: 1rem;
`;

const DropdownLayout = styled.div`
  max-width: 150px;
  height: auto;
  margin: 0 2rem;
  background: var(--white-primary);
  transition: transform 0.3s ease, opacity 0.3s ease;
  box-shadow: 0 4px 5px 0 #00000026;
  position: relative;

  @media ${props => props.theme.breakpoints.mobileS} {
      margin-left: 4rem;
      max-width: 120px;

      }


  > input {
    left: 0;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  > .DropdownLabel {
      display: flex;
      justify-content: space-between;
      padding: 12px;
        cursor: pointer;

  > .DropdownIcon {
      transition: transform 250ms ease-out;
    }
  }

  > .DropdownContent {
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      background: white;
      box-shadow: 0 4px 5px 0 #00000026;
      cursor: pointer;
      z-index: 1;
      transition: transform 0.3s ease, opacity 0.3s ease;

      animation: dropdownAnimation 0.3s ease forwards; 

      @keyframes dropdownAnimation {
      0% {
        opacity: 0;
        transform: translateY(-10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        }
      }

      > ul { 
        list-style-type: none;
        padding: 12px;
        margin: 0;
      }
      > ul li {
        margin: 0.8rem 0;
      }
  }
`;