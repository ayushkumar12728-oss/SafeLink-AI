from urllib.parse import urlparse
import re


SUSPICIOUS_KEYWORDS = [
    "login",
    "verify",
    "secure",
    "update",
    "bank",
    "wallet",
    "crypto",
    "bonus",
    "gift",
    "reward",
    "free",
    "earn",
    "investment",
    "ads",
    "airdrop",
]


def calculate_risk(ssl, whois, dns, http, vt, urlscan, url=None):
    score = 0
    reasons = []

    # -----------------------
    # SSL
    # -----------------------
    if not ssl.get("valid"):
        score += 30
        reasons.append("Invalid or missing SSL certificate.")

    # -----------------------
    # Domain Age
    # -----------------------
    age = whois.get("age_days")

    if isinstance(age, int):
        if age < 30:
            score += 35
            reasons.append("Domain registered within the last month.")

        elif age < 180:
            score += 20
            reasons.append("Recently registered domain.")

        elif age < 365:
            score += 10

    else:
        score += 15
        reasons.append("Domain age unavailable.")

    # -----------------------
    # VirusTotal
    # -----------------------
    score += vt.get("malicious", 0) * 25
    score += vt.get("suspicious", 0) * 10

    if vt.get("malicious", 0) > 0:
        reasons.append("VirusTotal detected malicious activity.")

    if vt.get("suspicious", 0) > 0:
        reasons.append("VirusTotal marked URL as suspicious.")

    # -----------------------
    # URLScan
    # -----------------------
    verdict = urlscan.get("overall_verdict", {})

    if verdict.get("malicious"):
        score += 40
        reasons.append("URLScan reported malicious behaviour.")

    score += verdict.get("score", 0)

    # -----------------------
    # HTTP Security Headers
    # -----------------------
    missing_headers = http.get("missing_security_headers", [])

    if missing_headers:
        score += min(len(missing_headers) * 3, 15)
        reasons.append("Important HTTP security headers are missing.")

    # -----------------------
    # DNS
    # -----------------------
    if not dns.get("available", True):
        score += 10
        reasons.append("DNS lookup failed.")

    # -----------------------
    # Suspicious Keywords
    # -----------------------
    if url:
        host = urlparse(url).netloc.lower()

        for word in SUSPICIOUS_KEYWORDS:
            if word in host:
                score += 8
                reasons.append(
                    f"Suspicious keyword detected: {word}"
                )

    # -----------------------
    # Excessive Hyphens
    # -----------------------
    if url:
        host = urlparse(url).netloc

        hyphen_count = host.count("-")

        if hyphen_count >= 3:
            score += 10
            reasons.append(
                "Domain contains many hyphens."
            )

    # -----------------------
    # Long Domain
    # -----------------------
    if url:
        host = urlparse(url).netloc

        if len(host) > 35:
            score += 8
            reasons.append(
                "Unusually long domain name."
            )

    # -----------------------
    # IP Address URL
    # -----------------------
    if url:
        host = urlparse(url).hostname or ""

        if re.match(r"^\d+\.\d+\.\d+\.\d+$", host):
            score += 35
            reasons.append(
                "Website uses an IP address instead of a domain."
            )

    # -----------------------
    # Final Risk Level
    # -----------------------
    score = min(score, 100)

    if score >= 80:
        level = "Critical"
        color = "red"

    elif score >= 60:
        level = "High"
        color = "orange"

    elif score >= 35:
        level = "Medium"
        color = "yellow"

    else:
        level = "Low"
        color = "green"

    return {
        "score": score,
        "level": level,
        "color": color,
        "reasons": reasons,
    }