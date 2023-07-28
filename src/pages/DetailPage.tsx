import { styled } from "styled-components";
import ContentComponent from "@components/detail/ContentComonent";


const DetailPage = () => {
    return(
    <DetailContainer>
        <ContentComponent />
    </DetailContainer>
    );
};

export default DetailPage;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;

`;