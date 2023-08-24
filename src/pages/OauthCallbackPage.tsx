import { useTokenStore } from '@store/useTokenStore';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/** 2023/08/20 - OAuth 콜백 페이지 - by sineTlsl */
const OauthCallbackPage: React.FC = (): JSX.Element => {
  const { setAccessToken, setRefreshToken } = useTokenStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const accessToken = queryParams.get('access');
    const refreshToken = queryParams.get('refresh');

    if (accessToken && refreshToken) {
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      navigate('/');
    }
  }, []);

  return <div>Loading...</div>;
};

export default OauthCallbackPage;
