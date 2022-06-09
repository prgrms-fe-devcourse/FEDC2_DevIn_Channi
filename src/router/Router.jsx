import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Event, Search } from 'pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </BrowserRouter>
  );
}
