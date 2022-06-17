import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Event, SignIn, SignUp } from 'pages';
import { Post } from 'components';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/posts" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
