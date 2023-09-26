import styled from "styled-components";

interface HashtagProps {
  hashtag: string;
}

interface TagContainerProps {
  randomcolor: string;
}

// tag-color
const colors: { [key: string]: string } = {
  "--tag-pink": "#F2E1E9",
  "--tag-blue": "#D6E4EE",
  "--tag-purple": "#F2E1E9",
  "--tag-green": "#DEECDD",
};

Object.entries(colors).forEach(([colorName, colorValue]) => {
  document.documentElement.style.setProperty(colorName, colorValue);
});

//**2023/07/19 Hashtag
const Hashtag: React.FC<HashtagProps> = ({ hashtag }) => {
  const getRandomColor = () => {
    const colors = ["--tag-pink", "--tag-blue", "--tag-purple", "--tag-green"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return `var(${colors[randomIndex]})`;
  };

    return (
        <TagContainer randomcolor={getRandomColor()}>
            <span className="Label"> #{hashtag}</span>
        </TagContainer>
  );
};

export default Hashtag;


// hashtag 컨테이너
const TagContainer = styled.div<TagContainerProps>`
    ${({ theme }) => theme.common.flexCenter};
    padding: 6px 12px;
    margin: 0 5px 5px 0;
    gap: 8px;
    height: 25px;
    width: auto;
    border: none;
    background-color: ${({ randomcolor }) => randomcolor};
    border-radius: 20px;
    cursor: pointer;

    @media ${props => props.theme.breakpoints.mobileLMax} {
    height: 1.5rem;
      }

    > .Label{
        line-height: 20px;
        font-size: 11px;
        font-weight: 500;
        color: var(--black-hunt);
        font-family: sans-serif;
        letter-spacing: 1px;

        @media ${props => props.theme.breakpoints.mobileLMax} {
        font-size: 7px;
          }
        }

      &:hover {
    background-color: var(--white-deepdark);
  }
`;
