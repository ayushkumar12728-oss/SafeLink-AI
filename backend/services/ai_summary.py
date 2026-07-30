def generate_ai_summary(
    ssl_info,
    whois_info,
    http_info,
    virustotal_info,
    urlscan_info,
    risk_info,
):
    paragraphs = []

    # ---------------- Opening ----------------
    level = risk_info.get("level", "Low")

    if level == "Low":
        paragraphs.append(
            "This website appears to be legitimate based on the collected security signals."
        )
    elif level == "Medium":
        paragraphs.append(
            "This website shows a few warning signs. Exercise caution before interacting with it."
        )
    elif level == "High":
        paragraphs.append(
            "This website presents multiple security concerns and should be approached carefully."
        )
    else:
        paragraphs.append(
            "This website appears highly suspicious and should be avoided."
        )

    # ---------------- SSL ----------------
    if ssl_info.get("valid"):
        paragraphs.append(
            f"The website uses a valid SSL certificate issued by {ssl_info.get('issuer', 'Unknown')}."
        )
    else:
        paragraphs.append(
            "The SSL certificate could not be verified."
        )

    # ---------------- Domain Age ----------------
    age_days = whois_info.get("age_days", 0)
    years = age_days // 365

    if years >= 5:
        paragraphs.append(
            f"The domain has existed for approximately {years} years, indicating long-term stability."
        )
    elif years >= 1:
        paragraphs.append(
            f"The domain has existed for approximately {years} year(s)."
        )
    else:
        paragraphs.append(
            "The domain appears to be recently registered."
        )

    # ---------------- VirusTotal ----------------
    malicious = virustotal_info.get("malicious", 0)
    suspicious = virustotal_info.get("suspicious", 0)

    if malicious > 0:
        paragraphs.append(
            f"VirusTotal detected {malicious} malicious security engine(s)."
        )
    elif suspicious > 0:
        paragraphs.append(
            f"VirusTotal reported {suspicious} suspicious detection(s)."
        )
    else:
        paragraphs.append(
            "VirusTotal reported no malicious detections."
        )

    # ---------------- URLScan ----------------
    if urlscan_info.get("available"):
        verdict = urlscan_info.get("overall_verdict", {})

        if verdict.get("malicious"):
            paragraphs.append(
                "URLScan also classified this website as malicious."
            )
        else:
            paragraphs.append(
                "URLScan did not detect malicious behaviour."
            )

    # ---------------- HTTP Security Headers ----------------
    missing = sum(
        1
        for header in [
            "strict_transport_security",
            "content_security_policy",
            "x_frame_options",
            "x_content_type_options",
        ]
        if not http_info.get(header)
    )

    if missing >= 3:
        paragraphs.append(
            "Several recommended HTTP security headers are missing."
        )

    # ---------------- Recommendation ----------------
    if level == "Low":
        recommendation = (
            "The website appears safe to visit. Continue using normal online safety practices."
        )
    elif level == "Medium":
        recommendation = (
            "Proceed carefully and avoid sharing sensitive information unless you trust the website."
        )
    elif level == "High":
        recommendation = (
            "Avoid entering passwords, banking details, or personal information on this website."
        )
    else:
        recommendation = (
            "Do not visit or interact with this website. It presents a high security risk."
        )

    return {
        "summary": " ".join(paragraphs),
        "recommendation": recommendation,
    }