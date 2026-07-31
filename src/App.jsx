import { BrowserRouter, Routes, Route } from "react-router-dom";
import CyberAcademy from "./pages/CyberAcademy";

import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import NotFound from "./pages/NotFound";
import ThreatFeed from "./pages/ThreatFeed";
import CourseDetails from "./pages/CourseDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/academy/course/:slug"
  element={<CourseDetails />}
/>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
       <Route
  path="/threat-feed"
  element={<ThreatFeed />}
/>
<Route path="/academy" element={<CyberAcademy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
  );
}