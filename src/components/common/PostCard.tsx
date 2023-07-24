import styled from "styled-components";


const CardText = styled.p`
  color: var(--gray-dark);
  font-size: 15px;
`;

const Card = () => {
    return (
        <div>
            <CardText> This is a card!</CardText>
        </div>
  );
};

export default Card;