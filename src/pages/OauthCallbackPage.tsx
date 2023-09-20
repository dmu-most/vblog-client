import { useMemberStore } from '@store/useMemberStore';
import { useTokenStore } from '@store/useTokenStore';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/** 2023/08/20 - OAuth 콜백 페이지 - by sineTlsl */
const OauthCallbackPage: React.FC = (): JSX.Element => {
  const { setAccessToken, setRefreshToken } = useTokenStore();
  const { setMember } = useMemberStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const authorization = queryParams.get('Authorization');
    const refreshTokenParam = queryParams.get('RefreshToken');
    const imageUrl = queryParams.get('imageUrl');
    const userName = queryParams.get('username');

    // null인지 확인
    const accessToken = authorization ? authorization.split(' ')[1] : null;
    const refreshToken = refreshTokenParam ? refreshTokenParam.split(' ')[1] : null;

    if (accessToken && refreshToken) {
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      setMember({
        imageUrl,
        username: userName,
      });

      navigate('/');
    }
  }, [location.search, setAccessToken, setRefreshToken, setMember]);

  return <div>Loading...</div>;
};

export default OauthCallbackPage;
