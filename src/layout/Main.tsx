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
    document.documentElement.style.setProperty('--bg-mode', mode === "V" ? "var(--bg-green)" : "var(--bg-brown)");
  }, [mode]);

  return (
    <main className={className}>
      <MainContainer>{children}</MainContainer>
    </main>
  );
};

export default Main;

const MainContainer = styled.div`
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
`;
