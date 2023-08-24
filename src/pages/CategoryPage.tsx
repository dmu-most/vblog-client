import { styled } from 'styled-components';
// import { vblogData } from '../data/dummyData';

// Component
import CategoryDropdown from '@components/Category/CategoryDropdown';
import CategoryCardComponent from '@components/Category/CategotyCardComponent';


/** 2023/08/23 - 카테고리 페이지 */
const CategoryPage = () => {

  return (
    <CategoryContainer>
        <CategoryDropdown />
        <CategoryCardComponent />
    </CategoryContainer>
  );
};

export default CategoryPage;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;