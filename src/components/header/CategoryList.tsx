import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

//icon
import { MdTravelExplore, MdOutlineHealthAndSafety, MdOutlineFoodBank, MdFace4 } from 'react-icons/md';
import { FaGamepad } from 'react-icons/fa';
import { BiBroadcast } from 'react-icons/bi';
import { FiMenu, FiX } from 'react-icons/fi';

interface CategoryItemsProps {
  isSelected?: boolean; // 선택 상태를 나타내는 prop 추가
}

/** 2023/09/06 - 헤더 왼쪽 컴포넌트 메뉴바 - 카테고리 작업 by jh */
const CategoryList: React.FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  /** 2023/09/14 - 각 카테고리 클릭 시 카테고리페이지로 넘어가는 함수 by jh */
  const handleItemClick = (category: string) => {
    setSelectedCategory(category);
    navigate(`/category/${category}`);
  };

  /** 2023/09/06 - 메뉴 클릭 시 카테고리를 띄어주는 함수 by jh */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /** 2023/09/06 - 메뉴 hover 트랜지션 수행 작업하는 함수 by jh */
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <CategoryListContainer onClick={toggleMenu} onMouseEnter={handleMouseEnter}>
      <MenuIconContainer data-ismenuopen={isMenuOpen}>{isMenuOpen ? <CloseIcon /> : <MenuIcon />}</MenuIconContainer>
      {isHovered && isMenuOpen && (
        <CategoryDropdown>
          <h2> Category </h2>
          <CategoryItems onClick={() => handleItemClick('Travel')} isSelected={selectedCategory === 'Travel'}>
            <MdTravelExplore
              color={selectedCategory === 'Travel' ? 'var(--white-primary)' : 'var(--gray-dark)'}
              size="20px"
            />
            <CategoryItem>여행</CategoryItem>
          </CategoryItems>
          <CategoryItems onClick={() => handleItemClick('Game')} isSelected={selectedCategory === 'Game'}>
            <FaGamepad color={selectedCategory === 'Game' ? 'var(--white-primary)' : 'var(--gray-dark)'} size="20px" />
            <CategoryItem>게임</CategoryItem>
          </CategoryItems>
          <CategoryItems onClick={() => handleItemClick('Health')} isSelected={selectedCategory === 'Health'}>
            <MdOutlineHealthAndSafety
              color={selectedCategory === 'Health' ? 'var(--white-primary)' : 'var(--gray-dark)'}
              size="20px"
            />
            <CategoryItem>건강</CategoryItem>
          </CategoryItems>
          <CategoryItems onClick={() => handleItemClick('Restaurant')} isSelected={selectedCategory === 'Restaurant'}>
            <MdOutlineFoodBank
              color={selectedCategory === 'Restaurant' ? 'var(--white-primary)' : 'var(--gray-dark)'}
              size="20px"
            />
            <CategoryItem>맛집</CategoryItem>
          </CategoryItems>
          <CategoryItems
            onClick={() => handleItemClick('Broadcasting')}
            isSelected={selectedCategory === 'Broadcasting'}>
            <BiBroadcast
              color={selectedCategory === 'Broadcasting' ? 'var(--white-primary)' : 'var(--gray-dark)'}
              size="20px"
            />
            <CategoryItem>방송</CategoryItem>
          </CategoryItems>
          <CategoryItems onClick={() => handleItemClick('Beauty')} isSelected={selectedCategory === 'Beauty'}>
            <MdFace4 color={selectedCategory === 'Beauty' ? 'var(--white-primary)' : 'var(--gray-dark)'} size="20px" />
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
  'data-ismenuopen': boolean;
}

const MenuIconContainer = styled.div<MenuIconContainerProps>`
  font-size: 30px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 24px;
  }

  ${props =>
    props['data-ismenuopen'] &&
    `
    transform: rotate(90deg);
  `}
`;

const MenuIcon = styled(FiMenu)`
  font-size: 30px;
  color: var(--black-hunt);

  @media ${props => props.theme.breakpoints.mobileLMax} {
    font-size: 24px;
  }
`;

const CloseIcon = styled(FiX)`
  font-size: 30px;
  color: var(--black-hunt);

  @media ${props => props.theme.breakpoints.mobileLMax} {
    font-size: 24px;
  }
`;

const CategoryDropdown = styled.ul`
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 200px;
  top: 0;
  margin-top: 68px;
  z-index: 1;
  padding: 30px 0;
  border-radius: 3px;
  background-color: var(--white-primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  > h2 {
    ${({ theme }) => theme.common.flexCenterRow};
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 20px;
    color: var(--black-deeplight);
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 175px;
    margin-top: 52px;
  }
`;

const CategoryItems = styled.li<CategoryItemsProps>`
  width: 100%;
  ${({ theme }) => theme.common.flexCenterRow};
  cursor: pointer;
  font-size: 16px;
  color: ${props => (props.isSelected ? 'var(--white-primary)' : 'var(--gray-dark)')};
  background-color: ${props => (props.isSelected ? 'var(--green-hunt)' : null)};

  &:hover {
    background-color: var(--gray-light);
  }
  &:active {
    background-color: var(--gray-primary);
    color: var(--white-primary);
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 15px;
  }
`;

const CategoryItem = styled.div`
  font-weight: 500;
  padding: 1.2rem 1rem;
`;
