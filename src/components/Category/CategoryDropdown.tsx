import React, { useState } from 'react';
import { styled } from 'styled-components';
import { FaAngleDown } from "react-icons/fa";

// 무한스크롤 사용 예정
/** 2023/08/23 - category dropdown - by jh */
const CategoryDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

  return (
    <CategoryDropdownContainer>
      <DropdownLayout>
        <input />
        <div className='DropdownLabel' onClick={toggleDropdown}> 최신순 <FaAngleDown className="DropdownIcon" onClick={toggleDropdown}/> </div>
        {dropdownOpen && (
          <div className='DropdownContent'>
            <ul>
              <li>최신순</li>
              <li>인기순</li>
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
  background: var(--white-primary);
  transition: transform 0.3s ease, opacity 0.3s ease;
  box-shadow: 0 4px 5px 0 #00000026;
  position: relative;

  @media ${props => props.theme.breakpoints.desktopMin} {
      margin-left: 4rem;
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