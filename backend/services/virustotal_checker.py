import os
import time
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("VT_API_KEY")


def check_virustotal(url: str) -> dict:
    if not API_KEY:
        return {
            "available": False,
            "error": "VirusTotal API key not found"
        }

    headers = {
        "x-apikey": API_KEY
    }

    try:
        # Submit URL
        submit = requests.post(
            "https://www.virustotal.com/api/v3/urls",
            headers=headers,
            data={"url": url},
            timeout=30
        )

        if submit.status_code != 200:
            return {
                "available": False,
                "error": submit.text
            }

        analysis_id = submit.json()["data"]["id"]

        # Poll until completed
        for _ in range(10):

            report = requests.get(
                f"https://www.virustotal.com/api/v3/analyses/{analysis_id}",
                headers=headers,
                timeout=30
            )

            if report.status_code != 200:
                time.sleep(2)
                continue

            data = report.json()["data"]["attributes"]

            if data.get("status") == "completed":

                stats = data.get("stats", {})

                return {
                    "available": True,
                    "malicious": stats.get("malicious", 0),
                    "suspicious": stats.get("suspicious", 0),
                    "harmless": stats.get("harmless", 0),
                    "undetected": stats.get("undetected", 0),
                    "timeout": stats.get("timeout", 0)
                }

            time.sleep(2)

        return {
            "available": False,
            "error": "VirusTotal analysis timeout"
        }

    except Exception as e:
        return {
            "available": False,
            "error": str(e)
        }