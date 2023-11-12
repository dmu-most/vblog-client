import styled from 'styled-components';
import { useEffect, useState } from 'react';

// store
import { useMemberStore } from '@store/useMemberStore';

// type
import { MyInfoType } from 'types/my-info';

// api
import { getUserCategory, patchMyInfoName, patchUserCategory } from '@api/my-info';

// components
import ProfileImageEdit from '@components/my-info/ProfileImageEdit';
import ProfileNameEdit from '@components/my-info/ProfileNameEdit';
import InterestList from '@components/my-info/InterestList';
import AlertModal from '@components/common/AlertModal';

interface ProfileProps {
  profile: MyInfoType;
  handlerProfileEdit: () => void;
  isCategory: boolean;
}

/** 2023/09/28 - 프로필 업데이트 컴포넌트 - by sineTlsl */
const UserProfileUpdate: React.FC<ProfileProps> = ({ profile, handlerProfileEdit, isCategory }): JSX.Element => {
  const { setMember } = useMemberStore();
  const [name, setName] = useState<string>(profile.username);
  const [image, setImage] = useState<string | null>(profile.imageUrl);
  const [hasCategoriesMin, setHasCategoryMin] = useState<boolean>(!isCategory);
  const [isAlertModal, setIsAlertModal] = useState<boolean>(false);
  const [interest, setInterest] = useState<string[]>([]);

  useEffect(() => {
    const getCategoryFetch = async () => {
      try {
        const res = await getUserCategory();
        setInterest(res);
        setHasCategoryMin(res.length > 0);
      } catch (err) {
        console.error(err);
      }
    };
    getCategoryFetch();
  }, []);

  /** 2023/10/15 - 프로필 이름 및 카테고리 수정 핸들러 - by sineTlsl */
  const handlerNameUpdate = async () => {
    if (hasCategoriesMin) {
      const resName = await patchMyInfoName({ username: name });

      try {
        handlerProfileEdit();
        patchUserCategory(interest);
        setMember({ username: resName.username, imageUrl: resName.imageUrl });
      } catch (err) {
        console.log(err);
      }
    } else {
      setIsAlertModal(true);
    }
  };

  return (
    <UserProfileContainer>
      <ProfileEditWrap>
        <ProfileImageEdit image={image} setImage={setImage} />
        <ProfileInfoText>
          <p className="name">Name</p>
          <ProfileNameEdit name={name} setName={setName} />
          <InterestList setHasCategoryMin={setHasCategoryMin} interest={interest} setInterest={setInterest} />
          <div className="btn_wrap">
            <button onClick={handlerNameUpdate}>저장</button>
          </div>
        </ProfileInfoText>
      </ProfileEditWrap>
      <AlertModal isOpen={isAlertModal} onClose={() => setIsAlertModal(false)}>
        {'카테고리를 1개 이상 선택해주세요.'}
      </AlertModal>
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

  > .name {
    color: var(--black-hunt);
    font-weight: 600;
    font-size: 17px;
  }

  > .btn_wrap {
    display: flex;
    justify-content: flex-end;
  }
  > .btn_wrap > button {
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

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .name {
      font-size: 16px;
    }

    > .btn_wrap > button {
      font-size: 15px;
      width: 60px;
    }
  }
`;

const ProfileEditWrap = styled.div`
  display: flex;
  gap: 20px;
`;
