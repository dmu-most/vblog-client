import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';

//icon
import { MdTravelExplore, MdOutlineHealthAndSafety, MdOutlineFoodBank, MdFace4 } from 'react-icons/md';
import { FaGamepad } from 'react-icons/fa';
import { BiBroadcast } from 'react-icons/bi';

/** 2023/09/06 - 헤더 왼쪽 컴포넌트 메뉴바 - 카테고리 작업 by jh */
const CategoryList: React.FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  /** 2023/09/06 - 메뉴 클릭 시 카테고리를 띄어주는 함수 by jh */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /** 2023/09/06 - 메뉴 hover 트랜지션 수행 작업하는 함수 by jh */
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <CategoryListContainer
      onClick={toggleMenu}
      onMouseEnter={handleMouseEnter}
    >
      <MenuIconContainer data-ismenuopen={isMenuOpen}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </MenuIconContainer>
      {isHovered && isMenuOpen && (
            <CategoryDropdown>
              <h2> Category </h2>
              <CategoryItems>
                <MdTravelExplore color="var(--gray-dark)" size="20px" />
                <CategoryItem>여행</CategoryItem>
              </CategoryItems>
              <CategoryItems>
                <FaGamepad color="var(--gray-dark)" size="20px" />
                <CategoryItem>게임</CategoryItem>
              </CategoryItems>
              <CategoryItems>
                <MdOutlineHealthAndSafety color="var(--gray-dark)" size="20px" />
                <CategoryItem>건강</CategoryItem>
              </CategoryItems>
              <CategoryItems>
                <MdOutlineFoodBank color="var(--gray-dark)" size="20px" />
                <CategoryItem>맛집</CategoryItem>
              </CategoryItems>
              <CategoryItems>
                <BiBroadcast color="var(--gray-dark)" size="20px" />
                <CategoryItem>방송</CategoryItem>
              </CategoryItems>
              <CategoryItems>
                <MdFace4 color="var(--gray-dark)" size="20px" />
                <CategoryItem>뷰티</CategoryItem>
              </CategoryItems>
            </CategoryDropdown>
      )}
    </CategoryListContainer>
  );
};

export default CategoryList;

const CategoryListContainer = styled.div`
  display: flex;
`;

// warning으로 인한 수정 작업
interface MenuIconContainerProps {
  "data-ismenuopen": boolean;
}

const MenuIconContainer = styled.div<MenuIconContainerProps>`
  font-size: 30px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 24px;
  }

  ${props =>
    props["data-ismenuopen"] &&
    `
    transform: rotate(90deg);
  `}
`;

const MenuIcon = styled(FiMenu)`
  font-size: 30px;
  color: var(--black-hunt);
`;

const CloseIcon = styled(FiX)`
   font-size :30px ;
   color: var(--black-hunt);
`;

const CategoryDropdown = styled.div`
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 15%;
  height: 60%;
  top: 0;
  margin-top: 65px;
  z-index: 1;
  background-color: var(--white-primary);

  > h2{
    font-size: 25px;
    margin-top: 4rem;
    padding: 1.5rem;
    color: var(--black-deeplight);
  }

  @media ${props => props.theme.breakpoints.tabletMax} {
    width: 30%;
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    width: 100%;
    height: 100%;
  }
`;

const CategoryItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;

const CategoryItem = styled.div`
  font-size: 20px;
  padding: 1.5rem 0.5rem;
  color: var(--gray-dark);
`;