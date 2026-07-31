import { Award } from "lucide-react";

export default function CertificateSeal() {
  return (
    <div className="flex justify-center">

      <div className="flex h-36 w-36 items-center justify-center rounded-full border-8 border-yellow-400 bg-yellow-100 shadow-lg">

        <Award
          size={70}
          className="text-yellow-600"
        />

      </div>

    </div>
  );
}