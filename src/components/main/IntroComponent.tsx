import React from 'react';
import { styled } from "styled-components";

interface IntroProps {
  intro: string;
}

//**2023/07/07 IntroComponent
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
    /* background-color: var(--icon-red); */
    width: 100%;
    height: 100px;

    >.Label {
    padding: 7px;
    color: var(--black-hunt);
    font-weight: 500;
    font-size: 25px;

    }
`;