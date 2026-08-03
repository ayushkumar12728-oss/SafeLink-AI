import { useNavigate } from "react-router-dom";
import { House, GraduationCap } from "lucide-react";

import Navbar from "../components/layout/Navbar";

import AcademyHero from "../components/academy/AcademyHero";

import FeaturedCourses from "../components/academy/FeaturedCourses";
import TopicGrid from "../components/academy/TopicGrid";
import CyberLabs from "../components/academy/CyberLabs";
import QuizPreview from "../components/academy/QuizPreview";
import ProgressTracker from "../components/academy/ProgressTracker";
import CertificateGenerator from "../components/academy/CertificateGenerator";
import ScamAlerts from "../components/academy/ScamAlerts";
import DailyTip from "../components/academy/DailyTip";
import GovernmentResources from "../components/academy/GovernmentResources";
import EmergencyHelp from "../components/academy/EmergencyHelp";
import Downloads from "../components/academy/Downloads";
import FAQ from "../components/academy/FAQ";
//import FooterCTA from "../components/academy/FooterCTA";

import { AcademyProvider } from "../context/AcademyContext";

const CyberAcademy = () => {
  const navigate = useNavigate();

  return (
    <AcademyProvider>
      <main className="min-h-screen bg-[#030712] text-white">

        <Navbar />

        <div className="mx-auto max-w-7xl px-6 pt-24">

          {/* Header */}

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <button
              onClick={() => navigate("/")}
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white transition hover:border-cyan-500 hover:bg-slate-800"
            >
              <House size={18} />
              Back to Home
            </button>

            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
              <GraduationCap size={16} />
              Cyber Academy
            </div>

          </div>

          <AcademyHero />

          
          <FeaturedCourses />
          <TopicGrid />

          <CyberLabs />
          <QuizPreview />
          

          <ScamAlerts />
          <DailyTip />
          <GovernmentResources />
          <EmergencyHelp />
          <Downloads />
          <FAQ />
          

        </div>

      </main>
    </AcademyProvider>
  );
};

export default CyberAcademy;