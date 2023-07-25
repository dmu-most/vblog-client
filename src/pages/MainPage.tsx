import PostCard from "@components/common/PostCard";
import BannerComponent from "@components/Main/BannerComponent";
import IntroComponent from "@components/Main/IntroComponent";
import CardComponent from "@components/Main/CardComponent";
import { styled } from "styled-components";



const MainPage = () => {
    return (
        <MainPageContainer>
            <BannerComponent />
            <IntroComponent intro="OO님을 위한 브블의 콘텐츠 💬" />
            <CardComponent>
                <PostCard/>
            </CardComponent>
            <IntroComponent intro="브블이 선정한 금주의 콘텐츠 🏆" />
            <CardComponent>
                <PostCard/>
            </CardComponent>
            <IntroComponent intro="브블Pick이 가장 많은 콘텐츠 ❤️" />
            <CardComponent>
                <PostCard/>
            </CardComponent>
            <IntroComponent intro="새롭게 뜨고 있는 브이로그 모음 🕵🏼‍♀️" />
            <CardComponent>
                <PostCard/>
            </CardComponent>
        </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
