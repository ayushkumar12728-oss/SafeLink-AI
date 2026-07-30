import socket
import ssl
from datetime import datetime
from urllib.parse import urlparse


def check_ssl(url: str) -> dict:
    try:
        parsed = urlparse(url)

        hostname = parsed.hostname if parsed.hostname else url

        context = ssl.create_default_context()

        with socket.create_connection((hostname, 443), timeout=8) as sock:
            with context.wrap_socket(sock, server_hostname=hostname) as secure_sock:

                cert = secure_sock.getpeercert()

                issuer = dict(x[0] for x in cert.get("issuer", []))
                subject = dict(x[0] for x in cert.get("subject", []))

                expiry = datetime.strptime(
                    cert["notAfter"],
                    "%b %d %H:%M:%S %Y %Z"
                )

                cipher = secure_sock.cipher()

                return {
                    "available": True,
                    "valid": True,
                    "issuer": issuer.get("organizationName", "Unknown"),
                    "issued_to": subject.get("commonName", hostname),
                    "expires": expiry.strftime("%Y-%m-%d"),
                    "days_remaining": (expiry - datetime.utcnow()).days,
                    "protocol": secure_sock.version(),
                    "cipher": cipher[0] if cipher else None
                }

    except Exception as e:
        return {
            "available": False,
            "valid": False,
            "issuer": None,
            "issued_to": None,
            "expires": None,
            "days_remaining": None,
            "protocol": None,
            "cipher": None,
            "error": str(e)
        }