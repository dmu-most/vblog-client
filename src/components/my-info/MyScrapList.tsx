import styled from 'styled-components';
import { useEffect } from 'react';

// apis
import { postScrapFolder, getScrapBlog, getScrapVlog } from '@api/my-info';

// types
import { MyContentListProps, ScrapResponseType } from 'types/my-info';

/** 2023/10/23 - 스크랩 리스트 컴포넌트 - by sineTlsl */
const MyScrapList: React.FC<MyContentListProps> = ({ mode }): JSX.Element => {
  /** 2023/10/23 - 스크랩 카테고리 폴더 추가 - by sineTlsl */
  // const handlerFolderAdd = async () => {
  //   const res = await postScrapFolder();
  // }

  useEffect(() => {
    const fetchScrapData = async () => {
      const res = await getScrapBlog();
      const res2 = await getScrapVlog();

      try {
        console.log('vlog >> ', res2);
        console.log('blog >> ', res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchScrapData();
  }, []);

  return (
    <ScrapListContainer>
      <div className="category_add_wrap">
        <CategoryBtn>카테고리 추가</CategoryBtn>
      </div>
    </ScrapListContainer>
  );
};

export default MyScrapList;

const ScrapListContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  > .category_add_wrap {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;
  }
`;

const CategoryBtn = styled.button`
  width: 110px;
  height: 36px;
  color: #699bf7;
  border: 2px solid #699bf7;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  background: none;
`;
