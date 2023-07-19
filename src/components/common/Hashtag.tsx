import styled from "styled-components";

//**2023/07/19 Hashtag
const Hashtag = () => {
    return (
        <TagContainer>
            <span className="Label"> #내돈내산</span>
        </TagContainer>
  );
};

export default Hashtag;


// hashtag 컨테이너
const TagContainer = styled.div`
 ${({ theme }) => theme.common.flexCenter};
    padding: 6px 12px;
    gap: 8px;
    height: 35px;
    width: 100px;
    border: none;
    background-color: var(--tag-pink);
    border-radius: 20px;
    cursor: pointer;

    > .Label{
        line-height: 20px;
        font-size: 12px;
        color: var(--black-hunt);
        font-family: sans-serif;
        letter-spacing: 1px;
        }

      &:hover {
    background-color: var(--white-deepdark);
  }
`;