def calculate_risk(
    ssl_info,
    whois_info,
    dns_info,
    http_info,
    virustotal_info,
    urlscan_info,
):
    score = 0
    reasons = []

    # ---------------- SSL ----------------
    if not ssl_info.get("valid", False):
        score += 25
        reasons.append("SSL certificate is invalid or missing.")

    # ---------------- WHOIS ----------------
    age_days = whois_info.get("age_days", 3650)

    if age_days < 30:
        score += 25
        reasons.append("Domain registered less than 30 days ago.")

    elif age_days < 180:
        score += 15
        reasons.append("Recently registered domain.")

    # ---------------- VirusTotal ----------------
    malicious = virustotal_info.get("malicious", 0)
    suspicious = virustotal_info.get("suspicious", 0)

    if malicious > 0:
        score += min(40, malicious * 8)
        reasons.append(
            f"{malicious} VirusTotal engine(s) flagged the URL as malicious."
        )

    elif suspicious > 0:
        score += min(20, suspicious * 5)
        reasons.append(
            f"{suspicious} VirusTotal engine(s) marked the URL as suspicious."
        )

    # ---------------- URLScan ----------------
    if urlscan_info.get("available"):

        verdict = urlscan_info.get("overall_verdict", {})

        if verdict.get("malicious"):
            score += 30
            reasons.append("URLScan classified the website as malicious.")

        elif verdict.get("score", 0) > 50:
            score += 15
            reasons.append("URLScan reputation score is elevated.")

    # ---------------- HTTP ----------------
    redirects = http_info.get("redirect_count", 0)

    if redirects > 5:
        score += 10
        reasons.append("Website performs excessive redirects.")

    status = http_info.get("status_code")

    if status in [403, 404, 500]:
        score += 5
        reasons.append(f"Unexpected HTTP status ({status}).")

    # ---------------- Security Headers ----------------
    security_headers = [
        "strict_transport_security",
        "content_security_policy",
        "x_frame_options",
        "x_content_type_options",
    ]

    missing = sum(
        1 for header in security_headers
        if not http_info.get(header)
    )

    if missing == 4:
        score += 5
        reasons.append("All major HTTP security headers are missing.")

    elif missing >= 2:
        score += 2
        reasons.append("Some recommended HTTP security headers are missing.")

    # ---------------- Final Score ----------------
    score = max(0, min(score, 100))

    if score <= 20:
        level = "Low"
        color = "green"

    elif score <= 50:
        level = "Medium"
        color = "yellow"

    elif score <= 80:
        level = "High"
        color = "orange"

    else:
        level = "Critical"
        color = "red"

    if not reasons:
        reasons.append("No significant security risks detected.")

    return {
        "score": score,
        "level": level,
        "color": color,
        "reasons": reasons,
    }