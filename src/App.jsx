import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import ThreatFeed from "./pages/ThreatFeed";
import CyberAcademy from "./pages/CyberAcademy";
import CourseDetails from "./pages/CourseDetails";
import QRScanner from "./pages/QRScanner";
import NotFound from "./pages/NotFound";

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
        <Route path="/qr-scanner" element={<QRScanner />} />
        <Route path="/threat-feed" element={<ThreatFeed />} />
        <Route path="/academy" element={<CyberAcademy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}