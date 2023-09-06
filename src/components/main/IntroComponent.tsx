import React from 'react';
import { styled } from "styled-components";

interface IntroProps {
  intro: string;
}

//**2023/07/07 IntroComponent - by jh
const IntroComponent: React.FC<IntroProps> = ({ intro }) => {
  return (
    <IntroContainer>
      <div className='Label'>{intro}</div>
    </IntroContainer>
  );
};

export default IntroComponent;


const IntroContainer = styled.div`
    ${({ theme }) => theme.common.flexRow};
    width: 100%;
    height: auto;

    >.Label {
    padding: 1.5rem 7px;
    color: var(--black-hunt);
    font-weight: 500;
    font-size: 25px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 15px;
      padding: 30px 0 0 20px;
      }
    }
`;