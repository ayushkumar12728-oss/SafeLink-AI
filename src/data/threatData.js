export const threats = [
  {
    id: 1,
    icon: "🎣",
    title: "Fake SBI Banking Portal",
    category: "Phishing",
    severity: "🔴 High Risk",
    description:
      "A fake SBI banking website was detected attempting to steal usernames, passwords, OTPs and banking credentials.",

    warningSigns: [
      "Suspicious domain name",
      "Urgent login request",
      "Requests OTP or password",
    ],
  },

  {
    id: 2,
    icon: "🛒",
    title: "Amazon Refund Scam",
    category: "Fraud",
    severity: "🟡 Medium Risk",
    description:
      "Fraudsters send fake refund emails asking users to verify payment information through phishing websites.",

    warningSigns: [
      "Unexpected refund message",
      "Unknown sender",
      "Fake payment page",
    ],
  },

  {
    id: 3,
    icon: "💬",
    title: "WhatsApp Job Scam",
    category: "Social Engineering",
    severity: "🔴 High Risk",
    description:
      "Scammers offer fake online jobs and ask victims to pay registration or processing fees.",

    warningSigns: [
      "Easy money promises",
      "Registration fee",
      "Unknown recruiter",
    ],
  },

  {
    id: 4,
    icon: "🌐",
    title: "Fake Google Login",
    category: "Credential Theft",
    severity: "🔴 High Risk",
    description:
      "A cloned Google login page designed to capture Gmail usernames and passwords.",

    warningSigns: [
      "Misspelled URL",
      "Unexpected login request",
      "Fake Google branding",
    ],
  },

  {
    id: 5,
    icon: "💳",
    title: "UPI QR Code Scam",
    category: "Financial Fraud",
    severity: "🟡 Medium Risk",
    description:
      "Attackers trick victims into scanning fake QR codes or approving fraudulent UPI requests.",

    warningSigns: [
      "Unknown QR code",
      "Unexpected payment request",
      "Fake cashback offers",
    ],
  },

  {
    id: 6,
    icon: "🛡️",
    title: "Verified Safe Website",
    category: "Safe",
    severity: "🟢 Safe",
    description:
      "This website passed all SafeLink AI security checks including SSL, WHOIS and AI threat analysis.",

    warningSigns: [
      "Valid SSL Certificate",
      "Trusted domain",
      "No phishing indicators",
    ],
  },
];