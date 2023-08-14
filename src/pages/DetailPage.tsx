import { styled } from "styled-components";
import { vblogData } from "../data/DummyData";

//component
import ContentComponent from "@components/detail/ContentComonent";
import ReviewComponent from "@components/detail/ReviewComponent";
import CommandComponent from "@components/detail/CommandComponent";
import PostCard from "@components/common/PostCard";


const DetailPage = () => {
    const firstThreePosts = vblogData.slice(0, 3);

    return(
    <DetailContainer>
        <ContentComponent />
        <ReviewComponent />
        <CommandComponent>
        {firstThreePosts.map((item) => (
          <PostCard key={item.ContentId} data={item} />
        ))}
        </CommandComponent>
    </DetailContainer>
    );
};

export default DetailPage;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;

`;