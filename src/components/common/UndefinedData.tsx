import styled from 'styled-components';

interface UndefinedProps {
  text: string;
}

/** 2023/10/25 - 데이터가 없을 때 나타내는 컴포넌트 - by sineTlsl */
const UndefinedData: React.FC<UndefinedProps> = ({ text }): JSX.Element => {
  return (
    <UndefinedContainer>
      <img src="/assets/images/undefined.png" alt="리뷰가 없을 때 이미지 처리" />
      <p className="undefined-data">{text}</p>
    </UndefinedContainer>
  );
};

export default UndefinedData;

const UndefinedContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenterCol}

  > img {
    max-width: 500px;
    max-height: auto;
    width: 100%;
    height: auto;
    opacity: 0.1;
  }

  > .undefined-data {
    font-size: 20px;
    font-weight: 700;
    color: var(--gray-primary);
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .undefined-data {
      font-size: 15px;
    }
  }
`;
