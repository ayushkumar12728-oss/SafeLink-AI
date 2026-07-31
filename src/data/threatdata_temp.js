export const threats = [
  {
    id: 1,
    title: "Phishing Websites",
    category: "Web",
    severity: "Critical",
    score: 95,
    icon: "🌐",
    description:
      "Fraudulent websites designed to imitate legitimate banking, government and social media portals to steal usernames, passwords and financial information.",
    warningSigns: [
      "Misspelled domain",
      "Fake login page",
      "Invalid SSL certificate",
      "Urgent verification message",
    ],
  },
  {
    id: 2,
    title: "UPI QR Fraud",
    category: "Banking",
    severity: "High",
    score: 91,
    icon: "💳",
    description:
      "Scammers trick victims into scanning malicious QR codes or approving payment requests.",
    warningSigns: [
      "Unknown QR",
      "Unexpected payment request",
      "Fake cashback offer",
    ],
  },
  {
    id: 3,
    title: "WhatsApp OTP Scam",
    category: "Social",
    severity: "High",
    score: 88,
    icon: "💬",
    description:
      "Attackers convince users to share OTPs and take over WhatsApp accounts.",
    warningSigns: [
      "OTP request",
      "Unknown contact",
      "Urgent message",
    ],
  },
];