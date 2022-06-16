import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Event, SignIn, SignUp, ProfileUpdate } from 'pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profiles/update" element={<ProfileUpdate/>}/>
      </Routes>
    </BrowserRouter>
  );
}
