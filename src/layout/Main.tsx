import { ReactNode } from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: ReactNode;
};

const Main = ({ children }: LayoutProps) => {
  return (
    <main>
      <MainContainer>{children}</MainContainer>
    </main>
  );
};

export default Main;

const MainContainer = styled.div`
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  width: 100%;
  height: 100%;
`;
