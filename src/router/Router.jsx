import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Event } from 'components';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}
