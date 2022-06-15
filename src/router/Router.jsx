import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Event, SignIn, SignUp } from 'pages';
import { auth } from 'api';
import { useCookie } from 'hooks';
import { setIsLoggedIn, setUser } from 'store';

export default function Router() {
  const dispatch = useDispatch();
  const { getCookie, checkCookie } = useCookie();

  const handleUserState = useCallback(async () => {
    if (checkCookie()) {
      const token = getCookie();

      const user = await auth.getUser({ token });

      dispatch(setUser(user));
      dispatch(setIsLoggedIn(true));
    } else {
      dispatch(setIsLoggedIn(false));
    }
  }, [checkCookie, dispatch, getCookie]);

  useEffect(() => {
    handleUserState();
  }, [handleUserState]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
