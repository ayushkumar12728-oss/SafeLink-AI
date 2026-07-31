import { jsPDF } from "jspdf";

export function generateCertificate({
  name,
  completion,
  quizzes,
  lessons,
}) {
  const doc = new jsPDF("landscape");

  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  // Background
  doc.setFillColor(248, 250, 252);
  doc.rect(0, 0, width, height, "F");

  // Border
  doc.setDrawColor(16, 185, 129);
  doc.setLineWidth(2);
  doc.rect(10, 10, width - 20, height - 20);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(30);
  doc.text("CERTIFICATE OF COMPLETION", width / 2, 35, {
    align: "center",
  });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(16);

  doc.text("This Certificate is Proudly Presented To", width / 2, 55, {
    align: "center",
  });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(30);

  doc.text(name.toUpperCase(), width / 2, 78, {
    align: "center",
  });

  doc.line(70, 82, width - 70, 82);

  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");

  doc.text(
    "For successfully completing the SafeLink AI Cyber Academy.",
    width / 2,
    100,
    { align: "center" }
  );

  doc.setFontSize(18);

  doc.text(`Lessons Completed : ${lessons}`, 35, 125);
  doc.text(`Quiz Score : ${quizzes}`, 35, 140);
  doc.text(`Overall Completion : ${completion}%`, 35, 155);

  const certId =
    "SLAI-" +
    new Date().getFullYear() +
    "-" +
    Math.floor(Math.random() * 100000);

  doc.text(`Certificate ID : ${certId}`, 35, 180);

  doc.text(
    `Issued : ${new Date().toLocaleDateString()}`,
    width - 90,
    180
  );

  doc.setFont("helvetica", "bold");

  doc.text("SafeLink AI", width - 70, 160);

  doc.save(`${name.replace(/\s+/g, "_")}_Certificate.pdf`);
}