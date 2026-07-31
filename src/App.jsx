import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import NotFound from "./pages/NotFound";
import ThreatFeed from "./pages/ThreatFeed";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
       <Route
  path="/threat-feed"
  element={<ThreatFeed />}
/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}