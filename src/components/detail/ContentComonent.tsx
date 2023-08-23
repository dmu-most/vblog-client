import { styled } from "styled-components";

// Component
import Hashtag from "@components/common/Hashtag";



//**2023/07/29 CommandComponent
const ContentComponent = () => {
  return (
    <ContentContainer>
      <ProfileContainer>
        <img src="/assets/images/vlog_ex.png" />
        <TitleContainer>
          <div className="content"> 우리 지락이들 또 랜덤 플레이 댄스 찢었다💥 케이팝 기강 잡고 영석이 형도 비명 지르게 한 지락이들 표 칼군무💃 매주 금 오후 8시 40분 tvN에서!</div>
          <div className="title"> 지구오락실 </div>
        </TitleContainer>
      </ProfileContainer>
      <TagContainer>
        {/* <Hashtag /><Hashtag /><Hashtag /><Hashtag /> */}
      </TagContainer>
      <Line />
      <GradeContainer>
        <Grade>
          <div className="value"> 1위</div>
          <div className="key"> 브블 순위 </div>
        </Grade>
        <Grade>
          <div className="value"> 4.5 </div>
          <div className="key"> 브블 평점 </div>
        </Grade>
        <Grade>
          <div className="value"> 100/10 </div>
          <div className="key"> 브블 좋아요/싫어요 </div>
        </Grade>
      </GradeContainer>
      <ThumbnailContainer>
        <img src="/assets/images/vlog_ex.png" />
      </ThumbnailContainer>
    </ContentContainer>
  );
};

export default ContentComponent;


const ContentContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 100px 20px 20px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 90%;
      }
    @media ${props => props.theme.breakpoints.mobileLMax} {
    width: 90%;
      }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  margin-top: 30px;

  > img {
    width: 50px;
    height: 50px;
    margin: 20px;
    border-radius: 50%;

    @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 30px;
    height: 30px;
      }
    }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-top: 13px;

  >.content {
    padding: 7px;
    color: var(--black-hunt);
    font-weight: 600;
    font-size: 20px;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 15px;
    }
  }

  >.title {
    padding: 7px;
    color: var(--black-hunt);
    font-size: 15px;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 13px;
    }
  }
`;

//TagContainer :  카드 안에 들어갈 태그들
const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    padding: 15px;
    flex-wrap : wrap;
`;

const Line = styled.hr`
  color: var(--gray-light);
  width: 90%;
  border-top: 1px solid;
`;

const GradeContainer = styled.div`
    ${({ theme }) => theme.common.flexCenterRow};
    width: 100%;
    height: auto;
    padding: 30px;
    gap: 200px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
          gap: 50px;
    }

    @media ${props => props.theme.breakpoints.mobileLMax} {
          gap: 50px;
    }
`;

const Grade = styled.div`
    ${({ theme }) => theme.common.flexCenterCol};

    > .key {
    color: var(--gray-dark);
    font-size: 15px;
    padding: 15px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 5px;
     }
    }

    > .value {
    color: var(--black-hunt);
    font-weight: 500;
    font-size: 30px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 17px;
     }
    }  
`;

const ThumbnailContainer = styled.div`
    width: 100%;
    height: 600px;
    position: relative;
    overflow: hidden;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      height: 300px;
     }

    @media ${props => props.theme.breakpoints.mobileLMax} {
      height: 400px;
    }

    > img {
      width: 100%;
      height: 100%;
      filter: blur(7px);
      object-fit: cover;
    }
`;



