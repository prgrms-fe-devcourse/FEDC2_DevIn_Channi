import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import {
  Home,
  Event,
  Search,
  Notification,
  SignIn,
  SignUp,
  Profile,
  ProfileUpdate,
  PostForm,
} from 'pages';
import { auth } from 'api';
import { useCookie } from 'hooks';
import PrivateRoute from 'router/PrivateRoute';
import { setIsLoggedIn, setUser, setFollowing } from 'store';
import { PostList } from 'components';

export default function Router() {
  const dispatch = useDispatch();
  const { getCookie, checkCookie } = useCookie();

  const handleUserState = useCallback(async () => {
    if (checkCookie()) {
      const token = getCookie();

      const user = await auth.getUser({ token });

      dispatch(setUser(user));
      dispatch(setIsLoggedIn(true));
      dispatch(setFollowing(user.following));
      
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
        <Route path="/search" element={<Search />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/signin" element={<PrivateRoute Children={SignIn} />} />
        <Route path="/signup" element={<PrivateRoute Children={SignUp} />} />
        <Route path="/profiles/:id" element={<Profile />} />
        <Route path="/profiles/update" element={<ProfileUpdate />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/create" element={<PostForm />} />
        <Route path="/posts/:postid/update" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}
