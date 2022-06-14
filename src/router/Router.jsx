import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Event } from 'pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        
      </Routes>
    </BrowserRouter>
  );
}
