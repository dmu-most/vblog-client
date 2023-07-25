import styled from 'styled-components';

interface MainProps {
  className?: string;
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ className, children }) => {
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
`;
