import { styled } from "styled-components";

const BannerComponent = () => {
  return (
    <BannerContainer>
      <h2>bannerComponent</h2>
    </BannerContainer>
  );
};

export default BannerComponent;

const BannerContainer = styled.div`
    ${({ theme }) => theme.common.flexCenter};
    background-color: var(--green-hunt);
    width: 100%;
    height: 450px;

    // 나중에 지우기
    margin-top: 50px;
`;