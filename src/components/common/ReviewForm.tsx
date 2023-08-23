import styled from "styled-components";

// marerial UI
import Rating from '@mui/material/Rating';

//**2023/08/07 ReviewForm
const ReviewForm = () => {
    return (
        <ReviewFormContainer>
            <ReviewTitleContainer>
                <div className="Grade"> 
                  <Rating name="read-only" size="small" readOnly />
                </div>
                <div className="ReviewDate"> 2023.08.07 </div>
            </ReviewTitleContainer>
            <ReviewContentContainer>
                <div className="ReviewContent"> 이번 안유진 폼 미쳤다잉 </div>
            </ReviewContentContainer>
            <ReviewWriterContainer>
                <div className="ReviewWriter"> fasdlfdfs...</div>
            </ReviewWriterContainer>
        </ReviewFormContainer>
  );
};

export default ReviewForm;

const ReviewFormContainer = styled.div`
  width: 97%;
  height: auto;
  background-color: var(--bg-green);
  margin: 15px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 90%;
    }
`;

const ReviewTitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: auto;
gap: 20px;

> .Grade{
    // 수정할 부분
    font-size: 16px;
    }

> .ReviewDate{
    font-size: 16px;
    color: var(--gray-primary);

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 13px;
      }
    }
`;

const ReviewContentContainer = styled.div`
  height: auto;
  padding: 20px 0px 20px 0px;

  > .ReviewContent {
    font-size: 16px;
    color: var(--black-hunt);

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 12px;
      }
  }
`;

const ReviewWriterContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: auto;

  > .ReviewWriter {
    font-size: 14px;
    color: var(--gray-primary);

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 10px;
      }
  }
`;
