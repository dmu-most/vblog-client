import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

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

  /** 2023/09/06 - 메뉴 hover가 없을 시 true -> false로 반환하는 함수 by jh */
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsMenuOpen(false);
  };

  return (
    <CategoryListContainer
      onClick={toggleMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MenuIconContainer data-ismenuopen={isMenuOpen}>
        <MenuIcon color="var(--black-light)" />
      </MenuIconContainer>
      {isHovered && isMenuOpen && (
            <CategoryDropdown>
                <CategoryItem>여행</CategoryItem>
                <CategoryItem>게임</CategoryItem>
                <CategoryItem>건강</CategoryItem>
                <CategoryItem>맛집</CategoryItem>
                <CategoryItem>방송</CategoryItem>
                <CategoryItem>뷰티</CategoryItem>
            </CategoryDropdown>
      )}
    </CategoryListContainer>
  );
};

export default CategoryList;

const CategoryListContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

// warning으로 인한 수정 작업
interface MenuIconContainerProps {
  "data-ismenuopen": boolean;
}

const MenuIconContainer = styled.div<MenuIconContainerProps>`
  font-size: 30px;
  transition: transform 0.3s ease-in-out;

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
`;

const CategoryDropdown = styled.div`
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: fixed;
  width: 100%;
  height: 10%;
  top: 0;
  margin-top: 65px;
  padding: 0 10rem 0 6rem;
  z-index: 1;
  background-color: var(--white-primary);

  @media ${props => props.theme.breakpoints.mobileLMax} {
    margin-top: 50px;
  }
`;

const CategoryItem = styled.div`
  font-size: 20px;
  color: var(--black-hunt);

 @media ${props => props.theme.breakpoints.mobileLMax} {
    font-size: 15px;
  }
`;
