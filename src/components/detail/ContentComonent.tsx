import { styled } from "styled-components";
import DetailForm from "@components/common/DetailForm";

const ContentComponent = () => {
  return (
    <ContentContainer>
      <DetailForm>
      </DetailForm>
    </ContentContainer>
  );
};

export default ContentComponent;

const ContentContainer = styled.div`
${({ theme }) => theme.common.flexCenter};
  /* background-color: var(--green-hunt); */
  width: 100%;
  height: 500px;

  // 나중에 지우기
  margin-top: 50px;
`;
