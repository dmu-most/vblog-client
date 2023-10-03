import styled from 'styled-components';
import { useEffect, useState } from 'react';

// type
import { MyInfoType } from 'types/myInfo';

// components
import ProfileImageEdit from '@components/my-info/ProfileImageEdit';
import ProfileNameEdit from '@components/my-info/ProfileNameEdit';

interface ProfileProps {
  profile: MyInfoType;
  handlerProfileEdit: () => void;
}

/** 2023/09/28 - 프로필 업데이트 컴포넌트 - by sineTlsl */
const UserProfileUpdate: React.FC<ProfileProps> = ({ profile, handlerProfileEdit }): JSX.Element => {
  const [name, setName] = useState<string>(profile.username);
  const [image, setImage] = useState<string | null>(profile.imageUrl);

  return (
    <UserProfileContainer>
      <ProfileEditWrap>
        <ProfileImageEdit image={image} setImage={setImage} />
        <ProfileInfoText>
          <p className="name">Name</p>
          <div className="profile_name_wrap">
            <ProfileNameEdit name={name} setName={setName} />
            <button onClick={handlerProfileEdit}>저장</button>
          </div>
        </ProfileInfoText>
      </ProfileEditWrap>
    </UserProfileContainer>
  );
};

export default UserProfileUpdate;

const UserProfileContainer = styled.div`
  width: 70%;

  @media ${props => props.theme.breakpoints.mobileLMax} {
    width: 90%;
  }
  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 100%;
  }
`;

const ProfileInfoText = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  padding-top: 25px;

  > .name {
    color: var(--black-hunt);
    font-weight: 600;
    font-size: 17px;
  }

  > .profile_name_wrap {
    display: flex;
    flex-direction: row;
    gap: 10px;

    > button {
      width: 70px;
      height: 35px;
      font-size: 16px;
      cursor: pointer;
      padding: 10px;
      font-weight: 600;
      font-size: 16px;
      color: var(--white-primary);
      background: var(--green-hunt);
      border-radius: 3px;
      border: none;

      &:active {
        background: var(--deep-green);
      }

      ${({ theme }) => theme.common.flexCenterRow};
      flex-wrap: nowrap;
    }
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .name {
      font-size: 16px;
    }
    > .profile_name_wrap {
      flex-direction: column;
      align-items: flex-end;
      gap: 5px;
    }
    > .profile_name_wrap > button {
      font-size: 15px;
    }
  }
`;

const ProfileEditWrap = styled.div`
  display: flex;
  gap: 20px;
`;