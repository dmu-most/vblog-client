import styled from "styled-components";

// marerial UI
import Rating from '@mui/material/Rating';

//type
import { vblogReviewType } from "types/detail/review";

interface ReviewFormProps {
  data: vblogReviewType;
}

//**2023/08/07 ReviewForm
const ReviewForm: React.FC<ReviewFormProps> = ({ data }) => {
    return (
        <ReviewFormContainer>
            <ReviewTitleContainer>
                <div className="Grade"> 
                  <Rating name="read-only" size="small" readOnly value={data.grade} />
                </div>
                <div className="ReviewDate"> {data.reviewDate} </div>
            </ReviewTitleContainer>
            <ReviewContentContainer>
                <div className="ReviewContent"> {data.reviewContent} </div>
            </ReviewContentContainer>
            <ReviewWriterContainer>
                <div className="ReviewWriter"> {data.userName}</div>
            </ReviewWriterContainer>
        </ReviewFormContainer>
  );
};

export default ReviewForm;

const ReviewFormContainer = styled.div`
  width: 90%;
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
    font-size: 14px;
    }

> .ReviewDate{
    font-size: 14px;
    color: var(--gray-primary);

    @media ${props => props.theme.breakpoints.mobileLMax} {
      font-size: 10px;
      }
    }
`;

const ReviewContentContainer = styled.div`
  height: auto;
  padding: 20px 0px 20px 0px;

  > .ReviewContent {
    font-size: 15px;
    color: var(--black-hunt);

    @media ${props => props.theme.breakpoints.mobileLMax} {
      font-size: 10px;
      }
  }
`;

const ReviewWriterContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: auto;

  > .ReviewWriter {
    font-size: 12px;
    color: var(--gray-primary);

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 10px;
      }
  }
`;
