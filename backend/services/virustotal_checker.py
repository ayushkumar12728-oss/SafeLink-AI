import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("VT_API_KEY")


def check_virustotal(url: str) -> dict:
    if not API_KEY:
        return {
            "available": False,
            "error": "VirusTotal API key missing",
        }

    headers = {
        "x-apikey": API_KEY
    }

    try:
        submit = requests.post(
            "https://www.virustotal.com/api/v3/urls",
            headers=headers,
            data={"url": url},
            timeout=8,
        )

        if submit.status_code != 200:
            return {
                "available": False,
                "error": "Submission failed",
            }

        analysis_id = submit.json()["data"]["id"]

        report = requests.get(
            f"https://www.virustotal.com/api/v3/analyses/{analysis_id}",
            headers=headers,
            timeout=8,
        )

        if report.status_code != 200:
            return {
                "available": False,
                "error": "Analysis unavailable",
            }

        data = report.json()["data"]["attributes"]

        stats = data.get("stats", {})

        return {
            "available": True,
            "status": data.get("status"),
            "malicious": stats.get("malicious", 0),
            "suspicious": stats.get("suspicious", 0),
            "harmless": stats.get("harmless", 0),
            "undetected": stats.get("undetected", 0),
            "timeout": stats.get("timeout", 0),
        }

    except Exception as e:
        return {
            "available": False,
            "error": str(e),
        }