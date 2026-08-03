import whois
from datetime import datetime, timezone
import asyncio


async def check_whois(hostname: str) -> dict:
    try:
        w = await asyncio.to_thread(
            whois.whois,
            hostname,
        )

        creation_date = w.creation_date
        if isinstance(creation_date, list):
            creation_date = creation_date[0]

        expiration_date = w.expiration_date
        if isinstance(expiration_date, list):
            expiration_date = expiration_date[0]

        registrar = w.registrar
        if isinstance(registrar, list):
            registrar = registrar[0]

        age_days = 3650

        if isinstance(creation_date, datetime):
            if creation_date.tzinfo is not None:
                now = datetime.now(timezone.utc)
            else:
                now = datetime.now()

            age_days = max((now - creation_date).days, 0)

        return {
            "available": True,
            "registrar": registrar or "Unknown",
            "created_date": (
                creation_date.strftime("%Y-%m-%d")
                if isinstance(creation_date, datetime)
                else None
            ),
            "expiration_date": (
                expiration_date.strftime("%Y-%m-%d")
                if isinstance(expiration_date, datetime)
                else None
            ),
            "age_days": age_days,
            "status": "success",
        }

    except Exception as e:
        return {
            "available": False,
            "registrar": "Lookup Restricted / Established Domain",
            "created_date": None,
            "expiration_date": None,
            "age_days": 3650,
            "status": "fallback",
            "error_details": str(e),
        }