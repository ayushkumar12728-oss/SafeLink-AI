export const courses = [
  {
    id: 1,
    slug: "phishing-awareness",
    title: "Phishing Awareness",
    icon: "🎣",
    duration: "25 min",
    difficulty: "Beginner",
    lessons: 5,
    xp: 100,
    description:
      "Learn how phishing attacks work and how to identify fake emails, websites and online scams.",

    outcomes: [
      "Identify phishing emails",
      "Detect fake login pages",
      "Verify suspicious URLs",
      "Report phishing attacks",
    ],

    lessonData: [
      {
        title: "What is Phishing?",
        content:
          "Phishing is a cyber attack where attackers pretend to be trusted organizations to steal passwords, banking details and personal information.",
      },
      {
        title: "Email Scams",
        content:
          "Always verify the sender's email address before opening attachments or clicking links.",
      },
      {
        title: "Fake Websites",
        content:
          "Check spelling mistakes, HTTPS and domain names before entering sensitive information.",
      },
      {
        title: "SMS & WhatsApp Scams",
        content:
          "Never share OTPs or click unknown links received through SMS or messaging apps.",
      },
      {
        title: "Stay Protected",
        content:
          "Use 2FA, update your browser and report phishing websites immediately.",
      },
    ],

    quiz: [
      {
        question: "Which URL is safe?",
        options: [
          "google-login.xyz",
          "google.com",
          "secure-google.cc",
        ],
        answer: "google.com",
      },
      {
        question: "What is phishing mainly used for?",
        options: [
          "Speeding up internet",
          "Stealing personal information",
          "Removing malware",
        ],
        answer: "Stealing personal information",
      },
      {
        question: "Should you share OTP with anyone?",
        options: [
          "Yes",
          "Only with bank staff",
          "No",
        ],
        answer: "No",
      },
    ],
  },

  {
    id: 2,
    slug: "password-security",
    title: "Password Security",
    icon: "🔐",
    duration: "20 min",
    difficulty: "Beginner",
    lessons: 4,
    xp: 80,
    description:
      "Learn how to create secure passwords and protect your online accounts.",

    outcomes: [
      "Create strong passwords",
      "Use password managers",
      "Enable Two-Factor Authentication",
      "Avoid password reuse",
    ],

    lessonData: [
      {
        title: "Strong Passwords",
        content:
          "Use long passwords with uppercase, lowercase, numbers and symbols.",
      },
      {
        title: "Password Managers",
        content:
          "Password managers help you securely store and generate unique passwords.",
      },
      {
        title: "Two-Factor Authentication",
        content:
          "Enable 2FA to add an extra layer of account security.",
      },
      {
        title: "Common Mistakes",
        content:
          "Never reuse passwords across multiple websites.",
      },
    ],

    quiz: [
      {
        question: "Which password is strongest?",
        options: [
          "123456",
          "password",
          "Ayush@2026#Safe",
        ],
        answer: "Ayush@2026#Safe",
      },
      {
        question: "Should you reuse passwords?",
        options: [
          "Yes",
          "No",
          "Sometimes",
        ],
        answer: "No",
      },
      {
        question: "2FA improves?",
        options: [
          "Security",
          "Battery",
          "Internet Speed",
        ],
        answer: "Security",
      },
    ],
  },

  {
    id: 3,
    slug: "safe-browsing",
    title: "Safe Browsing",
    icon: "🌍",
    duration: "30 min",
    difficulty: "Intermediate",
    lessons: 5,
    xp: 120,
    description:
      "Browse safely by identifying malicious websites and unsafe downloads.",

    outcomes: [
      "Recognize HTTPS",
      "Detect fake domains",
      "Avoid unsafe downloads",
      "Browse securely",
    ],

    lessonData: [
      {
        title: "HTTPS",
        content:
          "Always look for HTTPS before entering passwords.",
      },
      {
        title: "Fake Domains",
        content:
          "Cybercriminals often use similar-looking domain names.",
      },
      {
        title: "Browser Safety",
        content:
          "Keep your browser updated to stay protected.",
      },
      {
        title: "Downloads",
        content:
          "Download files only from trusted websites.",
      },
      {
        title: "Privacy",
        content:
          "Avoid sharing personal information on unknown websites.",
      },
    ],

    quiz: [
      {
        question: "Which site is safer?",
        options: [
          "https://google.com",
          "google-login.xyz",
          "google-free.net",
        ],
        answer: "https://google.com",
      },
      {
        question: "Should you ignore browser warnings?",
        options: [
          "Yes",
          "No",
          "Sometimes",
        ],
        answer: "No",
      },
      {
        question: "HTTPS mainly provides?",
        options: [
          "Encryption",
          "Speed",
          "Storage",
        ],
        answer: "Encryption",
      },
    ],
  },

  {
    id: 4,
    slug: "upi-banking-fraud",
    title: "UPI & Banking Fraud",
    icon: "💳",
    duration: "25 min",
    difficulty: "Intermediate",
    lessons: 5,
    xp: 120,
    description:
      "Understand common UPI scams, QR fraud and banking attacks.",

    outcomes: [
      "Avoid QR scams",
      "Protect OTP",
      "Recognize fake banking apps",
      "Stay safe while using UPI",
    ],

    lessonData: [
      {
        title: "QR Scams",
        content:
          "Scanning unknown QR codes can redirect you to fraudulent payment requests.",
      },
      {
        title: "Fake Banking Apps",
        content:
          "Download banking apps only from official app stores.",
      },
      {
        title: "OTP Safety",
        content:
          "Banks never ask for your OTP over calls or messages.",
      },
      {
        title: "Payment Requests",
        content:
          "Verify UPI IDs before sending money.",
      },
      {
        title: "Emergency Reporting",
        content:
          "Report financial fraud immediately on 1930.",
      },
    ],

    quiz: [
      {
        question: "Cyber fraud helpline?",
        options: [
          "1930",
          "100",
          "108",
        ],
        answer: "1930",
      },
      {
        question: "Should you share OTP?",
        options: [
          "No",
          "Yes",
          "Only with bank staff",
        ],
        answer: "No",
      },
      {
        question: "Scan random QR codes?",
        options: [
          "Yes",
          "No",
          "Only if requested",
        ],
        answer: "No",
      },
    ],
  },

  {
    id: 5,
    slug: "social-engineering",
    title: "Social Engineering",
    icon: "🧠",
    duration: "20 min",
    difficulty: "Intermediate",
    lessons: 4,
    xp: 100,
    description:
      "Understand how attackers manipulate people into revealing confidential information.",

    outcomes: [
      "Recognize fake calls",
      "Avoid impersonation",
      "Protect personal data",
      "Verify identities",
    ],

    lessonData: [
      {
        title: "Human Manipulation",
        content:
          "Attackers exploit trust instead of technology.",
      },
      {
        title: "Fake Calls",
        content:
          "Never trust callers asking for banking details.",
      },
      {
        title: "Impersonation",
        content:
          "Verify identity before sharing information.",
      },
      {
        title: "Stay Alert",
        content:
          "Always think before clicking or sharing.",
      },
    ],

    quiz: [
      {
        question: "Social engineering attacks target?",
        options: [
          "People",
          "Servers",
          "Routers",
        ],
        answer: "People",
      },
      {
        question: "Should you trust unknown callers?",
        options: [
          "No",
          "Yes",
          "Sometimes",
        ],
        answer: "No",
      },
      {
        question: "Best defense?",
        options: [
          "Awareness",
          "Luck",
          "Ignoring updates",
        ],
        answer: "Awareness",
      },
    ],
  },

  {
    id: 6,
    slug: "ai-cyber-threats",
    title: "AI Cyber Threats",
    icon: "🤖",
    duration: "35 min",
    difficulty: "Advanced",
    lessons: 5,
    xp: 150,
    description:
      "Learn about AI-powered scams, deepfakes and modern cyber attacks.",

    outcomes: [
      "Understand AI scams",
      "Detect deepfakes",
      "Recognize AI phishing",
      "Stay protected",
    ],

    lessonData: [
      {
        title: "AI Phishing",
        content:
          "AI helps attackers generate convincing phishing emails.",
      },
      {
        title: "Deepfake Videos",
        content:
          "Deepfakes can impersonate trusted individuals.",
      },
      {
        title: "Voice Cloning",
        content:
          "Scammers use AI to mimic voices during fraud calls.",
      },
      {
        title: "AI Malware",
        content:
          "AI can automate cyber attacks and evade detection.",
      },
      {
        title: "Future Protection",
        content:
          "Verify information before trusting AI-generated content.",
      },
    ],

    quiz: [
      {
        question: "Deepfake is mainly?",
        options: [
          "AI-generated fake media",
          "Firewall",
          "Browser",
        ],
        answer: "AI-generated fake media",
      },
      {
        question: "Voice cloning uses?",
        options: [
          "Artificial Intelligence",
          "Bluetooth",
          "VPN",
        ],
        answer: "Artificial Intelligence",
      },
      {
        question: "Best protection?",
        options: [
          "Verify information",
          "Believe everything",
          "Disable browser",
        ],
        answer: "Verify information",
      },
    ],
  },
];