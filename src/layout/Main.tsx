import styled from 'styled-components';
import React, { useEffect } from 'react';

// store
import { useContentModeStore } from '@store/useConentModeStore';

interface MainProps {
  className?: string;
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ className, children }) => {
  const { mode } = useContentModeStore();

  // Update the --bg-mode variable based on the mode
  useEffect(() => {
    document.documentElement.style.setProperty('--bg-mode', mode === 'V' ? 'var(--bg-green)' : 'var(--bg-brown)');
  }, [mode]);

  return (
    <main className={className}>
      <MainContainer>{children}</MainContainer>
    </main>
  );
};

export default Main;

const MainContainer = styled.div`
  max-width: ${({ theme }) => theme.widthSize.contentMaxL}; // 1350px
  width: 100%;
  height: 100%;
  margin-bottom: 50px;

  // 디바이스 크기가 1580px 클 경우 1500px
  @media ${props => props.theme.breakpoints.desktopLMax} {
    max-width: ${({ theme }) => theme.widthSize.contentMaxXL};
  }

  // 디바이스 크기가 1439px 보다 작을 경우 1250px
  @media ${props => props.theme.breakpoints.desktopMMax} {
    max-width: ${({ theme }) => theme.widthSize.contentMaxM};
    padding: 0 2rem;
  }

  // 디바이스 크기가 1250px 보다 작을 경우 1150px
  @media ${props => props.theme.breakpoints.desktopSMax} {
    max-width: ${({ theme }) => theme.widthSize.contentMaxS};
  }
`;
