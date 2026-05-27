import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const curriculumData = [
  {
    weeks: "Weeks 1-3",
    phase: "Phase One",
    title: "Strategic Infrastructure",
    description: "Aligning data architecture with organizational goals for unparalleled growth.",
    points: ["Data Architecture Basics", "Ecosystem Mapping", "Pipeline Deployment"]
  },
  {
    weeks: "Weeks 4-6",
    phase: "Phase Two",
    title: "Infrastructure & SQL",
    description: "Mastering the language of databases to pull raw value from the source and connect disparate data points.",
    points: ["SQL Foundations", "Advanced Joins & Aggregations", "Corporate Query Optimization"]
  },
  {
    weeks: "Weeks 7-9",
    phase: "Phase Three",
    title: "Executive Visualization",
    description: "Power BI and the psychology of data storytelling for executive presentation.",
    points: ["Dashboard Wireframing", "DAX Executive Metrics", "The Boardroom Pitch"]
  }
];

export default function Curriculum() {
  return (
    <section className="bg-reino-navy py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-reino-gold text-sm font-bold tracking-[0.4em] uppercase mb-4 block">
          The Curriculum
        </span>
        <h2 className="text-white text-3xl md:text-5xl font-serif font-semibold uppercase">
          The Analytics Blueprint
        </h2>
      </div>

      <div className="max-w-3xl mx-auto relative pl-8 sm:pl-16">
        {/* Timeline Line */}
        <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-reino-gold/30" />

        <div className="space-y-12">
          {curriculumData.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Number Node */}
              <div className="absolute -left-8 sm:-left-16 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-reino-gold text-reino-navy flex items-center justify-center font-sans font-bold text-sm sm:text-base border-4 border-reino-navy z-10">
                {index + 1}
              </div>

              {/* Curriculum Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 p-5 sm:p-8 border border-white/10 backdrop-blur-sm rounded-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-4">
                  <span className="text-reino-gold text-xs font-bold tracking-widest uppercase font-sans">
                    {item.weeks}
                  </span>
                  <span className="hidden sm:inline text-white/30">|</span>
                  <span className="text-white/60 text-xs uppercase tracking-wider font-sans font-medium">
                    {item.phase}
                  </span>
                </div>

                {/* Fixed Responsive Heading */}
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-serif font-semibold mb-4 uppercase tracking-tight break-words leading-tight">
                  {item.title}
                </h3>

                <p className="text-reino-muted text-sm sm:text-base mb-6 font-sans font-normal leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80 text-xs sm:text-sm">
                      <Check className="text-reino-gold w-4 h-4 mt-0.5 shrink-0" />
                      <span className="font-sans font-normal">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

