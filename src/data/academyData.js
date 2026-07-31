// ==============================
// HERO STATS
// ==============================

export const stats = [
  {
    id: 1,
    title: "Lessons",
    value: "40+",
    color: "emerald",
  },
  {
    id: 2,
    title: "Threat Categories",
    value: "15",
    color: "blue",
  },
  {
    id: 3,
    title: "Interactive Quizzes",
    value: "20",
    color: "purple",
  },
  {
    id: 4,
    title: "Cyber Labs",
    value: "8",
    color: "orange",
  },
];

// ==============================
// LEARNING TRACKS
// ==============================

export const learningTracks = [
  {
    title: "Beginner",
    icon: "🌱",
    lessons: 10,
    description: "Build strong cybersecurity fundamentals.",
  },
  {
    title: "Intermediate",
    icon: "🎣",
    lessons: 12,
    description: "Learn phishing, scams and online fraud detection.",
  },
  {
    title: "Advanced",
    icon: "🔥",
    lessons: 15,
    description: "Master malware, ransomware and network security.",
  },
  {
    title: "AI Security",
    icon: "🤖",
    lessons: 8,
    description: "Understand AI-powered attacks and defenses.",
  },
];

// ==============================
// FEATURED COURSES
// ==============================

export const courses = [
  {
    title: "Phishing Awareness",
    duration: "25 mins",
    difficulty: "Easy",
    icon: "🎣",
  },
  {
    title: "UPI & Banking Fraud",
    duration: "30 mins",
    difficulty: "Easy",
    icon: "💳",
  },
  {
    title: "Password Security",
    duration: "20 mins",
    difficulty: "Beginner",
    icon: "🔐",
  },
  {
    title: "Malware Basics",
    duration: "35 mins",
    difficulty: "Medium",
    icon: "🦠",
  },
  {
    title: "AI Scams",
    duration: "40 mins",
    difficulty: "Advanced",
    icon: "🤖",
  },
  {
    title: "Social Engineering",
    duration: "30 mins",
    difficulty: "Medium",
    icon: "🧠",
  },
];

// ==============================
// TOPIC GRID
// ==============================

export const topics = [
  {
    icon: "🎣",
    title: "Phishing",
  },
  {
    icon: "💳",
    title: "UPI Fraud",
  },
  {
    icon: "🦠",
    title: "Malware",
  },
  {
    icon: "🔐",
    title: "Password Security",
  },
  {
    icon: "📧",
    title: "Email Scams",
  },
  {
    icon: "🤖",
    title: "AI Threats",
  },
  {
    icon: "🌍",
    title: "Safe Browsing",
  },
  {
    icon: "📱",
    title: "Mobile Security",
  },
  {
    icon: "☁️",
    title: "Cloud Security",
  },
  {
    icon: "🧠",
    title: "Social Engineering",
  },
  {
    icon: "🌐",
    title: "Network Security",
  },
  {
    icon: "🛡️",
    title: "Privacy & Protection",
  },
];

// ==============================
// EMERGENCY CONTACTS
// ==============================

export const emergencyContacts = [
  {
    title: "National Cyber Crime Helpline",
    number: "1930",
    description:
      "Immediately report online financial fraud, phishing, UPI scams and cyber fraud.",
    icon: "🛡️",
    color: "emerald",
  },
  {
    title: "Emergency Police",
    number: "112",
    description:
      "National emergency assistance for urgent situations.",
    icon: "🚔",
    color: "blue",
  },
  {
    title: "Bank Support",
    number: "Immediately",
    description:
      "Contact your bank to block cards, freeze accounts and stop fraudulent transactions.",
    icon: "🏦",
    color: "yellow",
  },
];
// ==============================
// GOVERNMENT RESOURCES
// ==============================

export const governmentResources = [
  {
    title: "National Cyber Crime Portal",
    icon: "🛡️",
    description:
      "Report cyber crimes, financial fraud, phishing and online scams.",
    link: "https://cybercrime.gov.in",
    button: "Visit Portal",
  },
  {
    title: "CERT-In",
    icon: "💻",
    description:
      "India's national agency for cyber incident response and security advisories.",
    link: "https://www.cert-in.org.in",
    button: "Visit Website",
  },
  {
    title: "I4C",
    icon: "🏛️",
    description:
      "Indian Cyber Crime Coordination Centre under the Ministry of Home Affairs.",
    link: "https://i4c.mha.gov.in",
    button: "Learn More",
  },
  {
    title: "TAFCOP",
    icon: "📱",
    description:
      "Check mobile numbers issued in your name and report unauthorized SIM cards.",
    link: "https://tafcop.sancharsaathi.gov.in",
    button: "Check Now",
  },
  {
    title: "Cyber Swachhta Kendra",
    icon: "🧹",
    description:
      "Free malware removal tools and cybersecurity awareness resources.",
    link: "https://www.csk.gov.in",
    button: "Explore",
  },
];
// ==============================
// QUIZ QUESTIONS
// ==============================

export const quizQuestions = [
  {
    question: "Which of the following is a phishing attempt?",
    options: [
      "An email asking you to verify your bank password",
      "Your college timetable",
      "A software update notification",
      "A YouTube recommendation",
    ],
    answer: 0,
  },
  {
    question: "What should you do before clicking an unknown link?",
    options: [
      "Open it immediately",
      "Check the website URL carefully",
      "Share it with friends",
      "Disable antivirus",
    ],
    answer: 1,
  },
  {
    question: "Which password is the strongest?",
    options: [
      "12345678",
      "password123",
      "Ayush@2026",
      "X9#Lm2!Qa7@Rt",
    ],
    answer: 3,
  },
];
// ==============================
// SCAM ALERTS
// ==============================

export const scamAlerts = [
  {
    title: "Fake Bank KYC Update",
    type: "Phishing",
    risk: "High",
    icon: "🏦",
    description:
      "Fraudsters send fake KYC update links pretending to be your bank.",
  },
  {
    title: "UPI Collect Request Scam",
    type: "Financial Fraud",
    risk: "Critical",
    icon: "💳",
    description:
      "Never approve a UPI Collect Request to receive money.",
  },
  {
    title: "Fake Job Offer",
    type: "Recruitment Scam",
    risk: "Medium",
    icon: "💼",
    description:
      "Scammers ask for registration fees before offering jobs.",
  },
  {
    title: "Courier Delivery Scam",
    type: "SMS Scam",
    risk: "High",
    icon: "📦",
    description:
      "Messages claiming your parcel is stuck and asking for payment.",
  },
  {
    title: "QR Code Payment Scam",
    type: "UPI Fraud",
    risk: "Critical",
    icon: "📱",
    description:
      "Scanning unknown QR codes can authorize payments from your account.",
  },
  {
    title: "AI Voice Call Scam",
    type: "AI Fraud",
    risk: "Critical",
    icon: "🤖",
    description:
      "Scammers clone voices using AI to impersonate family members.",
  },
];
// ==============================
// LEARNING PROGRESS
// ==============================

export const learningProgress = {
  completedLessons: 18,
  totalLessons: 40,
  completedQuizzes: 7,
  totalQuizzes: 20,
  completedLabs: 3,
  totalLabs: 8,
};

export const achievementBadges = [
  {
    title: "Cyber Beginner",
    icon: "🌱",
    unlocked: true,
  },
  {
    title: "Phishing Detective",
    icon: "🎣",
    unlocked: true,
  },
  {
    title: "Password Master",
    icon: "🔐",
    unlocked: false,
  },
  {
    title: "AI Defender",
    icon: "🤖",
    unlocked: false,
  },
];
// ==============================
// DOWNLOAD RESOURCES
// ==============================

export const downloadResources = [
  {
    title: "Cyber Safety Checklist",
    description: "Essential checklist to stay safe while browsing and shopping online.",
    type: "PDF",
    icon: "📄",
  },
  {
    title: "Strong Password Guide",
    description: "Best practices for creating and managing secure passwords.",
    type: "Guide",
    icon: "🔐",
  },
  {
    title: "Phishing Detection Cheat Sheet",
    description: "Quick reference to identify phishing emails and fake websites.",
    type: "PDF",
    icon: "🎣",
  },
  {
    title: "UPI Safety Handbook",
    description: "Protect yourself from QR code scams, fake collect requests and UPI fraud.",
    type: "PDF",
    icon: "💳",
  },
];
// ==============================
// DAILY CYBER TIPS
// ==============================

export const cyberTips = [
  "Never share OTPs with anyone, even if they claim to be from your bank.",
  "Always verify website URLs before entering passwords or payment details.",
  "Enable Two-Factor Authentication (2FA) on all important accounts.",
  "Avoid scanning QR codes from unknown sources.",
  "Keep your operating system and apps updated to patch security vulnerabilities.",
  "Use a password manager to create and store strong unique passwords.",
  "Never install software from unofficial websites.",
  "Think before you click—phishing emails often create urgency to trick you.",
];
// ==============================
// FREQUENTLY ASKED QUESTIONS
// ==============================

export const faqs = [
  {
    question: "What is phishing?",
    answer:
      "Phishing is a cyber attack where attackers impersonate trusted organizations through emails, SMS, or websites to steal passwords, OTPs, banking details, or personal information.",
  },
  {
    question: "How can SafeLink AI help me?",
    answer:
      "SafeLink AI analyzes suspicious URLs using AI, domain reputation, SSL validation, WHOIS data, and other security indicators to detect potential threats before you visit a website.",
  },
  {
    question: "Can SafeLink AI guarantee a website is completely safe?",
    answer:
      "No. SafeLink AI provides a risk assessment based on multiple security signals. Always use your own judgment and follow cybersecurity best practices.",
  },
  {
    question: "What should I do if I lose money to an online scam?",
    answer:
      "Immediately contact your bank, call the National Cyber Crime Helpline (1930), and report the incident on the National Cyber Crime Reporting Portal.",
  },
  {
    question: "Why should I enable Two-Factor Authentication (2FA)?",
    answer:
      "2FA adds an extra layer of security by requiring a second verification step, making it much harder for attackers to access your accounts.",
  },
];