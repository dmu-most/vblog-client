import { styled } from 'styled-components';

// Card
import { vblogData } from '../../data/dummyData';
import PostCard from '@components/common/PostCard';


/** 2023/08/23 - category card - by jh */
const CategoryCardComponent = () => {

  return (
    <CategoryCardContainer>
      <CardContainer>
        {vblogData.map((item) => (
          <PostCard key={item.ContentId} data={item} />
        ))}
      </CardContainer>
    </CategoryCardContainer>
  );
};

export default CategoryCardComponent;

const CategoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: auto;
    gap: 20px;
    margin-top: 1rem;
    

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;