import styled from 'styled-components';
import { useEffect, useState } from 'react';

// type
import { MyInfoType } from 'types/myInfo';

// api
import { getMyInfo } from '@api/myInfo';

/** 2023/09/13 - 프로필 소개 컴포넌트 - by sineTlsl */
const ProfileDescription: React.FC = (): JSX.Element => {
  const [myInfoData, setMyInfoData] = useState<MyInfoType>();

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
  }, []);

  return (
    <ProfileDescriptionContainer>
      {myInfoData && (
        <>
          <ProfileImageWrap>
            <img src={myInfoData.imageUrl ? myInfoData.imageUrl : '/assets/images/avator_default.png'} />
          </ProfileImageWrap>
          <ProfileInfoWrap>
            <ProfileInfoText>
              <p className="myinfo_name">{myInfoData.username}</p>
              {/* <p className="myinfo_email">{myInfoData}</p> */}
              <div className="myinfo_socialType">
                {myInfoData.socialType ? (
                  <>
                    {myInfoData.socialType === 'kakao' && <img src="/assets/images/kakao-logo.png" />}
                    {myInfoData.socialType === 'naver' && <img src="/assets/images/naver-logo.png" />}
                    {myInfoData.socialType === 'google' && <img src="/assets/images/google-logo.png" />}
                  </>
                ) : (
                  <p className="local_text">local</p>
                )}
              </div>
            </ProfileInfoText>
            <ProfileUpdateBtn>회원정보 수정</ProfileUpdateBtn>
          </ProfileInfoWrap>
        </>
      )}
    </ProfileDescriptionContainer>
  );
};

export default ProfileDescription;

const ProfileDescriptionContainer = styled.div`
  width: 100%;
  padding: 32px 64px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    ${({ theme }) => theme.common.flexCenterRow};
    padding: 25px;
  }
`;

// ===================== 프로필 이미지 =====================
const ProfileImageWrap = styled.div`
  ${({ theme }) => theme.common.flexCenterRow};
  width: 130px;
  height: 130px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 110px;
    height: 110px;
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
    font-size: 25px;
    color: var(--black-hunt);
    font-weight: 600;
  }
  > .myinfo_socialType {
    display: flex;
    gap: 0.5rem;

    > img {
      object-fit: cover;
      width: 20px;
      height: 20px;
    }
  }
  > .myinfo_socialType > .local_text {
    font-size: 16px;
    color: var(--gray-dark);
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .myinfo_name {
      font-size: 25px;
    }
    > .myinfo_email {
      font-size: 16px;
    }
  }
`;

// ===================== 프로필 회원수정 버튼  =====================
const ProfileUpdateBtn = styled.button`
  border: none;
  background: var(--green-hunt);
  padding: 8px 15px;
  font-size: 16px;
  margin: 0;
  border-radius: 7px;
  color: var(--white-primary);
  font-weight: 600;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
