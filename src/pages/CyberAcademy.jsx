import AcademyHero from "../components/academy/AcademyHero";
import LearningTracks from "../components/academy/LearningTracks";
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
import FooterCTA from "../components/academy/FooterCTA";

import { AcademyProvider } from "../context/AcademyContext";

const CyberAcademy = () => {
  return (
    <AcademyProvider>
      <main className="min-h-screen bg-[#030712] text-white">
        <AcademyHero />

        <LearningTracks />
        <FeaturedCourses />
        <TopicGrid />

        <CyberLabs />
        <QuizPreview />
        <ProgressTracker />

        <CertificateGenerator />

        <ScamAlerts />
        <DailyTip />
        <GovernmentResources />
        <EmergencyHelp />
        <Downloads />
        <FAQ />
        <FooterCTA />
      </main>
    </AcademyProvider>
  );
};

export default CyberAcademy;