import React, { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export default function DownloadReportButton({ report }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const getRiskColor = (level = "") => {
    switch (String(level).toLowerCase()) {
      case "critical":
        return [220, 38, 38];

      case "high":
        return [234, 88, 12];

      case "medium":
        return [234, 179, 8];

      default:
        return [22, 163, 74];
    }
  };

  const handleDownload = () => {
    if (!report) {
      alert("No report available.");
      return;
    }

    try {
      setIsGenerating(true);

      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const risk = report.risk || {};
      const ai = report.ai || {};
      const ssl = report.ssl || {};
      const whois = report.whois || {};
      const dns = report.dns || {};
      const http = report.http || {};
      const vt = report.virustotal || {};
      const urlscan = report.urlscan || {};

      const riskColor = getRiskColor(risk.level);

      const primary = [15, 23, 42];
      const secondary = [71, 85, 105];

      const target =
        report.normalized_url ||
        report.url ||
        "Unknown";

      const scanTime =
        new Date().toLocaleString();

      // ==========================
      // HEADER
      // ==========================

      doc.setFillColor(...primary);
      doc.rect(0, 0, 210, 30, "F");

      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text("SafeLink AI", 15, 15);

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(
        "AI Powered Cybersecurity Threat Analysis Report",
        15,
        22
      );

      // ==========================
      // Executive Summary
      // ==========================

      doc.setDrawColor(220);

      doc.roundedRect(
        15,
        38,
        180,
        38,
        2,
        2
      );

      doc.setTextColor(...secondary);

      doc.setFontSize(9);

      doc.text(
        "Target URL",
        20,
        46
      );

      doc.setFontSize(11);

      doc.setTextColor(20);

      doc.text(
        doc.splitTextToSize(target, 110),
        20,
        54
      );

      doc.setFillColor(...riskColor);

      doc.roundedRect(
        145,
        44,
        40,
        22,
        2,
        2,
        "F"
      );

      doc.setTextColor(255);

      doc.setFontSize(8);

      doc.text(
        "RISK LEVEL",
        165,
        50,
        {
          align: "center",
        }
      );

      doc.setFontSize(14);

      doc.text(
        String(
          risk.level || "LOW"
        ).toUpperCase(),
        165,
        58,
        {
          align: "center",
        }
      );

      doc.setFontSize(8);

      doc.text(
        `${risk.score ?? 0}/100`,
        165,
        64,
        {
          align: "center",
        }
      );

      let currentY = 86;

      // ==========================
      // AI SUMMARY
      // ==========================

      doc.setTextColor(...primary);

      doc.setFontSize(13);

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.text(
        "1. Executive Summary",
        15,
        currentY
      );

      currentY += 4;

      autoTable(doc, {
        startY: currentY,

        head: [["AI Security Assessment"]],

        body: [
          [
            ai.summary ||
              "No AI summary available.",
          ],
        ],

        theme: "grid",

        headStyles: {
          fillColor: primary,
          textColor: 255,
        },

        bodyStyles: {
          fontSize: 9,
          cellPadding: 4,
        },

        margin: {
          left: 15,
          right: 15,
        },
      });

      currentY =
        doc.lastAutoTable.finalY + 8;

      // ==========================
      // SSL & WHOIS
      // ==========================
      doc.setTextColor(...primary);
      doc.setFontSize(13);
      doc.setFont("helvetica", "bold");
      doc.text(
        "2. SSL & Domain Information",
        15,
        currentY
      );
      currentY += 4;
      const ageDays = whois.age_days;
      const domainAge =
        typeof ageDays === "number"
          ? `${Math.floor(ageDays / 365)} year(s) (${ageDays} days)`
          : "Unknown";
      autoTable(doc, {
        startY: currentY,
        head: [[
          "Property",
          "Value"
        ]],
        body: [
          [
            "Registrar",
            whois.registrar || "Unknown",
          ],
          [
            "Creation Date",
            whois.creation_date || "Unknown",
          ],
          [
            "Expiration Date",
            whois.expiration_date || "Unknown",
          ],
          [
            "Domain Age",
            domainAge,
          ],
          [
            "Country",
            whois.country || "Unknown",
          ],
          [
            "SSL Status",
            ssl.valid ? "Valid" : "Invalid",
          ],
          [
            "Certificate Issuer",
            ssl.issuer || "Unknown",
          ],
          [
            "Certificate Expires",
            ssl.expires || "Unknown",
          ],
          [
            "Days Remaining",
            ssl.days_remaining ?? "Unknown",
          ],
        ],
        theme: "striped",
        headStyles: {
          fillColor: primary,
          textColor: 255,
        },
        bodyStyles: {
          fontSize: 8.5,
        },
        margin: {
          left: 15,
          right: 15,
        },
      });
      currentY =
        doc.lastAutoTable.finalY + 8;
      // ==========================
      // VirusTotal
      // ==========================
      doc.setFontSize(13);
      doc.setFont(
        "helvetica",
        "bold"
      );
      doc.setTextColor(...primary);
      doc.text(
        "3. VirusTotal Scan",
        15,
        currentY
      );
      currentY += 4;
      autoTable(doc, {
        startY: currentY,
        head: [[
          "Metric",
          "Result"
        ]],
        body: [
          [
            "Malicious",
            String(vt.malicious ?? 0),
          ],
          [
            "Suspicious",
            String(vt.suspicious ?? 0),
          ],
          [
            "Harmless",
            String(vt.harmless ?? 0),
          ],
          [
            "Undetected",
            String(vt.undetected ?? 0),
          ],
          [
            "Timeout",
            String(vt.timeout ?? 0),
          ],
        ],
        theme: "grid",
        headStyles: {
          fillColor: primary,
          textColor: 255,
        },
        bodyStyles: {
          fontSize: 8.5,
        },
        margin: {
          left: 15,
          right: 15,
        },
      });
      currentY =
        doc.lastAutoTable.finalY + 8;
      if (currentY > 245) {
        doc.addPage();
        currentY = 20;
      }

      // ==========================
      // URLScan Analysis
      // ==========================

      doc.setTextColor(...primary);
      doc.setFontSize(13);
      doc.setFont("helvetica", "bold");

      doc.text(
        "4. URLScan Analysis",
        15,
        currentY
      );

      currentY += 4;

      autoTable(doc, {
        startY: currentY,

        head: [["Metric", "Result"]],

        body: [
          [
            "Analysis Available",
            urlscan.available ? "Yes" : "No",
          ],

          [
            "Overall Verdict",
            urlscan.overall_verdict?.malicious
              ? "Malicious"
              : "No Malicious Behaviour",
          ],

          [
            "Verdict Score",
            String(
              urlscan.overall_verdict?.score ??
                0
            ),
          ],
        ],

        theme: "grid",

        headStyles: {
          fillColor: primary,
          textColor: 255,
        },

        bodyStyles: {
          fontSize: 8.5,
        },

        margin: {
          left: 15,
          right: 15,
        },
      });

      currentY =
        doc.lastAutoTable.finalY + 8;

      // ==========================
      // Technical Details
      // ==========================

      if (currentY > 240) {
        doc.addPage();
        currentY = 20;
      }

      doc.setFontSize(13);

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setTextColor(...primary);

      doc.text(
        "5. Technical Details",
        15,
        currentY
      );

      currentY += 4;

      autoTable(doc, {

        startY: currentY,

        head: [["Property", "Value"]],

        body: [

          [
            "IP Address",
            dns.ip_address ||
              dns.ipv4 ||
              dns.ip ||
              "Unknown",
          ],

          [
            "Server",
            http.server || "Unknown",
          ],

          [
            "HTTP Status",
            http.status_code
              ? `${http.status_code}`
              : "Unknown",
          ],

          [
            "Content Type",
            http.content_type ||
              "Unknown",
          ],

          [
            "Protocol",
            ssl.protocol ||
              (ssl.valid
                ? "HTTPS"
                : "HTTP"),
          ],

          [
            "DNS Available",
            dns.available
              ? "Yes"
              : "No",
          ],

        ],

        theme: "striped",

        headStyles: {
          fillColor: primary,
          textColor: 255,
        },

        bodyStyles: {
          fontSize: 8.5,
        },

        margin: {
          left: 15,
          right: 15,
        },

      });

      currentY =
        doc.lastAutoTable.finalY + 8;

      // ==========================
      // Recommendation
      // ==========================

      if (currentY > 240) {
        doc.addPage();
        currentY = 20;
      }

      doc.setFontSize(13);

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setTextColor(...primary);

      doc.text(
        "6. AI Recommendation",
        15,
        currentY
      );

      currentY += 5;

      autoTable(doc, {

        startY: currentY,

        head: [["Recommendation"]],

        body: [[
          ai.recommendation ||
            "No recommendation available.",
        ]],

        theme: "grid",

        headStyles: {
          fillColor: primary,
          textColor: 255,
        },

        bodyStyles: {
          fontSize: 9,
          cellPadding: 4,
        },

        margin: {
          left: 15,
          right: 15,
        },

      });

      // ==========================
      // Footer
      // ==========================

      const pages =
        doc.internal.getNumberOfPages();

      for (
        let i = 1;
        i <= pages;
        i++
      ) {

        doc.setPage(i);

        doc.setDrawColor(220);

        doc.line(
          15,
          285,
          195,
          285
        );

        doc.setFontSize(8);

        doc.setTextColor(120);

        doc.text(
          "Generated by SafeLink AI",
          15,
          290
        );

        doc.text(
          `Page ${i} of ${pages}`,
          195,
          290,
          {
            align: "right",
          }
        );
      }

      const safeFileName = target
        .replace(/[^a-zA-Z0-9]/g, "_")
        .substring(0, 30);

      doc.save(
        `SafeLink_Report_${safeFileName}.pdf`
      );

    } catch (err) {

      console.error(err);

      alert(
        "Failed to generate PDF."
      );

    } finally {

      setIsGenerating(false);

    }

  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating || !report}
      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isGenerating
        ? "Generating PDF..."
        : "Download Security Report"}
    </button>
  );
}