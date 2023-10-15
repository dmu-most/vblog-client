import styled from 'styled-components';
import { useEffect, useState } from 'react';

// type
import { MyInfoType } from 'types/my-info';

// api
import { getMyInfo } from '@api/my-info';

// components
import UserProfileUpdate from '@components/my-info/UserProfileUpdate';
import SocialIcons from '@components/my-info/SocialIcons';

/** 2023/09/13 - 프로필 소개 컴포넌트 - by sineTlsl */
const ProfileDescription: React.FC = (): JSX.Element => {
  const [myInfoData, setMyInfoData] = useState<MyInfoType>();
  const [isProfileEdit, setIsProfileEdit] = useState<boolean>(false);

  const fetchMyInfoData = async () => {
    const res = await getMyInfo();

    try {
      setMyInfoData(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchMyInfoData();
  }, [isProfileEdit]);

  /** 2023/10/15 - 프로필 보기 or 프로피 수정 모드 - by sineTlsl */
  const handlerProfileEdit = async () => {
    setIsProfileEdit(!isProfileEdit);
  };

  return (
    <ProfileDescriptionContainer>
      {myInfoData &&
        (!isProfileEdit ? (
          <>
            <ProfileImageWrap>
              <img src={myInfoData.imageUrl ? myInfoData.imageUrl : '/assets/images/avator_default.png'} />
            </ProfileImageWrap>
            <ProfileInfoWrap>
              <ProfileInfoText>
                <p className="myinfo_name">{myInfoData.username}</p>
                <SocialIcons socialType={myInfoData.socialType} />
              </ProfileInfoText>
              <ProfileUpdateBtn onClick={handlerProfileEdit}>회원정보 수정</ProfileUpdateBtn>
            </ProfileInfoWrap>
          </>
        ) : (
          <UserProfileUpdate profile={myInfoData} handlerProfileEdit={handlerProfileEdit} />
        ))}
    </ProfileDescriptionContainer>
  );
};

export default ProfileDescription;

const ProfileDescriptionContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterRow};
  width: 100%;
  padding: 32px 64px;
  gap: 20px;

  @media ${props => props.theme.breakpoints.mobileLMax} {
    padding: 25px;
  }
`;

// ===================== 프로필 이미지 =====================
const ProfileImageWrap = styled.div`
  ${({ theme }) => theme.common.flexCenterRow};
  width: 140px;
  height: 140px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    min-width: 100px;
    min-height: 100px;
    width: 100px;
    height: 100px;
  }
`;

// ===================== 프로필 정보  =====================
const ProfileInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
`;

// ===================== 프로필 텍스트  =====================
const ProfileInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  > .myinfo_name {
    font-size: 22px;
    color: var(--black-hunt);
    font-weight: 600;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .myinfo_name {
      font-size: 20px;
    }
  }
`;

// ===================== 프로필 회원수정 버튼  =====================
const ProfileUpdateBtn = styled.button`
  padding: 2px 15px;
  height: 32px;
  font-size: 16px;
  margin: 0;
  border-radius: 5px;
  color: var(--green-hunt);
  border: 1.5px solid var(--green-hunt);
  background: none;
  font-weight: 600;
  cursor: pointer;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
