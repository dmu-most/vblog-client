import styled from 'styled-components';

// props
interface NameEditProps {
  name: string;
  setName: (name: string) => void;
}

/** 2023/09/27 - 회원정보 이름 업데이트 컴포넌트 - by sineTlsl */
const ProfileNameEdit: React.FC<NameEditProps> = ({ name, setName }): JSX.Element => {
  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <ProfileNameContainer>
      <input className="profile_name" value={name} onChange={e => handlerOnChange(e)} />
    </ProfileNameContainer>
  );
};

export default ProfileNameEdit;

const ProfileNameContainer = styled.div`
  width: 100%;

  > .profile_name {
    outline: none;
    width: 100%;
    height: 35px;
    box-shadow: none;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    padding: 0.4rem 0.4rem;
    color: var(--black-hunt);
    font-size: 18px;
    font-weight: 500;

    &:active,
    &:focus {
      border-color: var(--green-hunt);
    }
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .profile_name {
      font-size: 15px;
    }
  }
`;
