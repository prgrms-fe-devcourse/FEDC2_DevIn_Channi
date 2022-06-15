import { Cookies } from 'react-cookie';
import { DEVIN_TOKEN } from 'utils';

export function useCookie() {
  const cookies = new Cookies();

  const options = {
    path: '/',
    secure: true,
    maxAge: new Date(Date.now() + 24 * 60 * 60 * 1000), // 하루
    httpOnly: true,
  };

  const setCookie = ({ value }) => {
    cookies.set(DEVIN_TOKEN, value, options);
  };

  const checkCookie = () => {
    const cookie = cookies.get(DEVIN_TOKEN);
    return !!cookie;
  };

  const removeCookie = () => {
    cookies.remove(DEVIN_TOKEN, options);
  };

  return { setCookie, checkCookie, removeCookie };
}
