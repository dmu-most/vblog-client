import { styled } from 'styled-components';
import React, { useState } from 'react';

// Component
import CategoryDropdown from '@components/Category/CategoryDropdown';
import CategoryCardComponent from '@components/Category/CategotyCardComponent';

const CategoryPage: React.FC = () => {
  const [sortType, setSortType] = useState('new'); // 최신순 또는 인기순

  return (
    <CategoryContainer>
      <CategoryDropdown setSortType={setSortType} />
      <CategoryCardComponent sortType={sortType} />
    </CategoryContainer>
  );
};

export default CategoryPage;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;