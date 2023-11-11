import { useRef } from 'react';
import styled from 'styled-components';

// store
import { useMemberStore } from '@store/useMemberStore';

// api
import { deleteMyInfoImage, patchMyInfoImage } from '@api/my-info';

interface ProfileImageProps {
  image: string | null;
  setImage: (image: string) => void;
}

/** 2023/09/28 - 마이페이지 프로필 이미지 수정 컴포넌트 - by sineTlsl */
const ProfileImageEdit: React.FC<ProfileImageProps> = ({ image, setImage }): JSX.Element => {
  const { setMember } = useMemberStore();
  const profileImgInput = useRef<HTMLInputElement>(null);

  /** 2023/10/15 - 이미지 선택 대화상자 open - by sineTlsl */
  const handlerUpdateImg = () => {
    if (profileImgInput.current) {
      profileImgInput.current.click();
    }
  };

  /** 2023/10/15 - 프로필 이미지 선택 - by sineTlsl */
  const handlerChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const uploadImgFile = e.target.files[0];
      const formData = new FormData();
      formData.append('file', uploadImgFile);

      const res = await patchMyInfoImage(formData);
      try {
        if (res.imageUrl) {
          setImage(res.imageUrl);
          setMember({ username: res.username, imageUrl: res.imageUrl });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  /** 2023/10/15 - 프로필 이미지 제거 - by sineTlsl */
  const handlerRemoveImg = async () => {
    const res = await deleteMyInfoImage();

    try {
      setImage('');
      setMember({ username: res.username, imageUrl: res.imageUrl });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProfileImageContainer>
      <ProfileImageWrap>
        <img src={image || '/assets/images/avator_default.png'} alt="프로필 이미지" />
        <div className="img_btn_wrap">
          <input
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            name="profile_img"
            ref={profileImgInput}
            onChange={handlerChangeImg}
          />
        </div>
      </ProfileImageWrap>
      <ImageBtnWrap>
        <button className="common upload_btn" onClick={handlerUpdateImg}>
          이미지 업로드
        </button>
        <button className="common remove_btn" onClick={handlerRemoveImg}>
          이미지 제거
        </button>
      </ImageBtnWrap>
    </ProfileImageContainer>
  );
};

export default ProfileImageEdit;

const ProfileImageContainer = styled.div`
  width: 30%;
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 16px;
  min-width: 140px;
`;

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

  > .img_btn_wrap {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  > .img_btn_wrap > input[type='file'] {
    display: none;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    min-width: 100px;
    min-height: 100px;
    width: 100px;
    height: 100px;
  }
`;

// 이미지 업로드 or 제거
const ImageBtnWrap = styled.div`
  width: 100%;
  gap: 0.3rem;
  ${({ theme }) => theme.common.flexCenterCol};

  > .common {
    cursor: pointer;
    padding: 17px 22px;
    width: 100%;
    height: 30px;
    border-radius: 3px;
    font-weight: 600;
    font-size: 16px;
    border: none;
    ${({ theme }) => theme.common.flexCenterRow};
  }

  > .upload_btn {
    color: var(--white-primary);
    background: var(--green-hunt);
    border: none;

    &:active {
      background: var(--deep-green);
    }
  }
  > .remove_btn {
    color: var(--green-hunt);
    background: var(--white-primary);

    &:active {
      color: var(--deep-green);
      background: var(--white-dark);
    }
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .common {
      font-size: 15px;
    }
  }
`;
