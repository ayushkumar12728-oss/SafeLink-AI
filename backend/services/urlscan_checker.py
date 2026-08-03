import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("URLSCAN_API_KEY")


def check_urlscan(url: str):

    if not API_KEY:
        return {
            "available": False,
            "error": "URLSCAN_API_KEY not found",
        }

    headers = {
        "API-Key": API_KEY,
        "Content-Type": "application/json",
    }

    try:

        submit = requests.post(
            "https://urlscan.io/api/v1/scan/",
            headers=headers,
            json={
                "url": url,
                "visibility": "public",
            },
            timeout=8,
        )

        if submit.status_code not in (200, 201):
            return {
                "available": False,
                "error": "Submission failed",
            }

        result_api = submit.json().get("api")

        if not result_api:
            return {
                "available": False,
                "error": "Result API not returned",
            }

        # Only ONE quick fetch
        result = requests.get(
            result_api,
            headers=headers,
            timeout=8,
        )

        if result.status_code != 200:
            return {
                "available": False,
                "status": "processing",
            }

        data = result.json()

        page = data.get("page", {})
        task = data.get("task", {})
        verdicts = data.get("verdicts", {})

        return {
            "available": True,
            "page_title": page.get("title"),
            "final_url": page.get("url"),
            "server": page.get("server"),
            "ip": page.get("ip"),
            "country": page.get("country"),
            "asn": page.get("asn"),
            "screenshot": task.get("screenshotURL"),
            "overall_verdict": verdicts.get("overall", {}),
        }

    except Exception as e:
        return {
            "available": False,
            "error": str(e),
        }