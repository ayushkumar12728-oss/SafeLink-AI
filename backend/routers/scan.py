import asyncio
from fastapi import APIRouter, HTTPException

from services.url_validator import normalize_and_validate_url
from services.ssl_checker import check_ssl
from services.whois_checker import check_whois
from services.dns_checker import check_dns
from services.http_checker import check_http
from services.virustotal_checker import check_virustotal
from services.urlscan_checker import check_urlscan
from services.risk_engine import calculate_risk
from services.ai_summary import generate_ai_summary

router = APIRouter(prefix="/api", tags=["scan"])


@router.post("/scan")
async def scan_url(payload: dict):

    raw_url = payload.get("url")

    if not raw_url:
        raise HTTPException(status_code=400, detail="URL is required.")

    try:
        validated = normalize_and_validate_url(raw_url)

        normalized_url = validated["normalized_url"]
        hostname = validated["hostname"]

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    # ----------------------------
    # Async wrapper for sync functions
    # ----------------------------
    async def run_sync(func, *args):
        return await asyncio.to_thread(func, *args)

    ssl_task = run_sync(check_ssl, normalized_url)
    whois_task = check_whois(hostname)
    dns_task = run_sync(check_dns, normalized_url)
    http_task = run_sync(check_http, normalized_url)
    vt_task = run_sync(check_virustotal, normalized_url)
    urlscan_task = run_sync(check_urlscan, normalized_url)

    (
        ssl_info,
        whois_info,
        dns_info,
        http_info,
        virustotal_info,
        urlscan_info,
    ) = await asyncio.gather(
        ssl_task,
        whois_task,
        dns_task,
        http_task,
        vt_task,
        urlscan_task,
        return_exceptions=True,
    )

    def safe(result, default):
        if isinstance(result, Exception):
            return default
        return result

    ssl_info = safe(
        ssl_info,
        {
            "available": False,
            "valid": False,
            "error": "SSL check failed",
        },
    )

    whois_info = safe(
        whois_info,
        {
            "available": False,
            "age_days": 3650,
            "error": "WHOIS lookup failed",
        },
    )

    dns_info = safe(
        dns_info,
        {
            "available": False,
            "error": "DNS lookup failed",
        },
    )

    http_info = safe(
        http_info,
        {
            "available": False,
            "error": "HTTP check failed",
        },
    )

    virustotal_info = safe(
        virustotal_info,
        {
            "available": False,
            "malicious": 0,
            "suspicious": 0,
        },
    )

    urlscan_info = safe(
        urlscan_info,
        {
            "available": False,
        },
    )

    # ----------------------------
    # Calculate Risk
    # ----------------------------

    risk = calculate_risk(
    ssl_info,
    whois_info,
    dns_info,
    http_info,
    virustotal_info,
    urlscan_info,
    normalized_url,
)

    ai = generate_ai_summary(
        ssl_info,
        whois_info,
        http_info,
        virustotal_info,
        urlscan_info,
        risk,
    )

    return {
        "success": True,
        "normalized_url": normalized_url,
        "domain": hostname,

        "risk": risk,
        "ai": ai,

        "ssl": ssl_info,
        "whois": whois_info,
        "dns": dns_info,
        "http": http_info,
        "virustotal": virustotal_info,
        "urlscan": urlscan_info,

        "risk_score": risk["score"],
        "verdict": risk["level"],
    }