import { motion } from "framer-motion";
import { topics } from "../../data/academyData";

export default function TopicGrid() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-400">
            Explore Topics
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Learn Every Area of
            <span className="text-indigo-400"> Cyber Security</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Browse cybersecurity concepts, fraud techniques and
            modern AI-powered attacks through categorized lessons.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {topics.map((topic, index) => (

            <motion.div
              key={topic.title}
              initial={{ opacity:0,y:30 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
              transition={{
                delay:index*.05
              }}
              whileHover={{
                y:-8,
                scale:1.03
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all hover:border-indigo-500/40 hover:shadow-[0_0_35px_rgba(99,102,241,.18)]"
            >

              <div className="text-5xl">
                {topic.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {topic.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Interactive lessons, examples,
                quizzes and best security practices.
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}