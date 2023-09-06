import styled from 'styled-components';

// icon
import { FiMenu } from 'react-icons/fi';

const CategoryList = () => {

    return (
        <StyledMenu color="var(--black-light)">
        </StyledMenu>
    );
};

export default CategoryList;


// Menu bar 아이콘
const StyledMenu = styled(FiMenu)`
  font-size: 30px;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 24px;
  }
`;