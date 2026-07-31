import { motion } from "framer-motion";

export default function ThreatHero() {
  return (
    <section className="pt-32 pb-14">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-5xl text-center px-6"
      >

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
          AI Cyber Intelligence
        </span>

        <h1 className="mt-8 text-6xl font-black">
          AI Threat Feed
        </h1>

        <p className="mt-6 text-slate-400 text-lg">
          Explore phishing attacks, banking scams,
          malware and cyber threats before they
          reach you.
        </p>

      </motion.div>

    </section>
  );
}