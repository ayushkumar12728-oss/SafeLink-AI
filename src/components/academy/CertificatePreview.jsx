import { Award, ShieldCheck, Calendar, User } from "lucide-react";

export default function CertificatePreview({
  name,
  completion,
  certificateId,
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border-4 border-emerald-500 bg-gradient-to-br from-white to-slate-100 p-10 shadow-2xl">

      {/* Background */}

      <div className="absolute inset-0 opacity-5">
        <div className="flex h-full items-center justify-center">
          <ShieldCheck size={300} />
        </div>
      </div>

      <div className="relative">

        <div className="flex justify-center">
          <Award
            size={80}
            className="text-yellow-500"
          />
        </div>

        <h1 className="mt-6 text-center text-5xl font-bold text-slate-900">
          CERTIFICATE
        </h1>

        <p className="mt-2 text-center text-xl text-slate-600">
          OF COMPLETION
        </p>

        <div className="my-10 h-px bg-slate-300" />

        <p className="text-center text-lg text-slate-700">
          This Certificate is Proudly Presented To
        </p>

        <h2 className="mt-6 text-center text-4xl font-bold text-emerald-700">
          {name || "Your Name"}
        </h2>

        <div className="mx-auto mt-3 h-1 w-72 bg-emerald-500 rounded-full" />

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-slate-700">
          For successfully completing the
          <span className="font-bold">
            {" "}SafeLink AI Cyber Academy{" "}
          </span>
          and demonstrating outstanding cybersecurity awareness.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <div className="rounded-xl bg-white p-5 shadow">
            <User className="mb-2 text-emerald-600" />
            <p className="text-sm text-slate-500">
              Learner
            </p>
            <h3 className="font-bold text-slate-800">
              {name || "Your Name"}
            </h3>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <ShieldCheck className="mb-2 text-blue-600" />
            <p className="text-sm text-slate-500">
              Completion
            </p>
            <h3 className="font-bold text-slate-800">
              {completion}%
            </h3>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <Calendar className="mb-2 text-purple-600" />
            <p className="text-sm text-slate-500">
              Date
            </p>
            <h3 className="font-bold text-slate-800">
              {new Date().toLocaleDateString()}
            </h3>
          </div>

        </div>

        <div className="mt-12 flex items-center justify-between">

          <div>
            <p className="text-sm text-slate-500">
              Certificate ID
            </p>

            <h3 className="font-semibold">
              {certificateId}
            </h3>
          </div>

          <div className="text-right">

            <p className="text-sm text-slate-500">
              Authorized By
            </p>

            <h3 className="text-xl font-bold text-emerald-700">
              SafeLink AI
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}