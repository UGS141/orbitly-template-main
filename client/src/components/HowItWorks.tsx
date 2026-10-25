/*
 * HowItWorks — Cygnus AI Labs
 * Design: Dark premium — numbered steps with animated connector,
 * count-up stats on scroll, sticky left column.
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, FlaskConical, Rocket } from "lucide-react";
import { useScrollReveal, staggerContainer, staggerItem } from "@/hooks/useScrollReveal";

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

const stats = [
  { value: 60, suffix: "%", label: "Average time saved on manual workflows", decimals: 0 },
  { value: 82, suffix: "%", label: "Reduction in processing errors", decimals: 0 },
  { value: 94, suffix: "%", label: "Model accuracy across engagements", decimals: 0 },
  { value: 4, suffix: "–8 wks", label: "Typical time-to-first-value", decimals: 0 },
];

function StatCard({ stat, inView, delay }: { stat: typeof stats[0]; inView: boolean; delay: number }) {
  const raw = useCountUp(stat.value * (stat.decimals ? 10 : 1), inView);
  const display = stat.decimals ? (raw / 10).toFixed(stat.decimals) : raw;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className="gradient-border rounded-2xl p-5 text-center"
    >
      <div
        className="text-3xl font-bold gradient-text mb-1"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {display}{stat.suffix}
      </div>
      <div className="text-white/55 text-xs leading-snug">{stat.label}</div>
    </motion.div>
  );
}

const steps = [
  {
    number: "01",
    icon: <Search className="w-5 h-5 text-sky-400" />,
    iconBg: "bg-sky-500/10 border-sky-500/20",
    title: "Understand your landscape",
    desc: "We begin by deeply analysing your existing processes, data sources, and pain points. No assumptions — just structured discovery that surfaces where AI can deliver the greatest return.",
    detail: "Outcome: a clear problem statement and a prioritised opportunity map.",
  },
  {
    number: "02",
    icon: <FlaskConical className="w-5 h-5 text-teal-400" />,
    iconBg: "bg-teal-500/10 border-teal-500/20",
    title: "Research, prototype, validate",
    desc: "Our team selects the right AI approaches — NLP, computer vision, predictive modelling, or agentic pipelines — builds a working prototype, and validates it against your real data and use cases.",
    detail: "Outcome: a tested solution with measurable performance benchmarks.",
  },
  {
    number: "03",
    icon: <Rocket className="w-5 h-5 text-blue-400" />,
    iconBg: "bg-blue-500/10 border-blue-500/20",
    title: "Deploy, integrate, and optimise",
    desc: "We handle full deployment into your environment, integrate with your systems, and provide ongoing monitoring and refinement so performance improves over time — not just at launch.",
    detail: "Outcome: a production-ready system with measurable business impact.",
  },
];

export default function HowItWorks() {
  const { ref, inView } = useScrollReveal(0.08);

  return (
    <section id="how-it-works" className="relative py-36 overflow-hidden" ref={ref}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Right glow */}
      <div
        className="glow-orb w-[500px] h-[500px] -right-48 top-1/2 -translate-y-1/2 opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse, #00A096, transparent)" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: sticky header + stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:sticky lg:top-32"
          >
            <motion.div variants={staggerItem}>
              <span className="badge-pill mb-5">How It Works</span>
            </motion.div>
            <motion.h2
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              From complexity to clarity{" "}
              <span className="gradient-text">in three stages</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-white/65 text-lg leading-relaxed mb-10">
              Most organisations know AI can help — but not where to start, or how to get from proof-of-concept to production. We bridge that gap at every step.
            </motion.p>

            {/* Count-up stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} inView={inView} delay={0.3 + i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Right: steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 28 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2 + i * 0.18 }}
                className="relative flex gap-6 pb-14 last:pb-0 group"
              >
                {/* Animated connector line */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="absolute left-5 top-14 bottom-0 w-px step-line"
                    initial={{ scaleY: 0, originY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.18 }}
                    aria-hidden="true"
                  />
                )}

                {/* Step icon */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110 ${step.iconBg}`}>
                  {step.icon}
                </div>

                {/* Step content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-mono text-white/50 tracking-[0.15em]"
                      style={{ fontFamily: "'Fira Code', monospace" }}
                    >
                      {step.number}
                    </span>
                    <div className="h-px flex-1 bg-white/[0.05]" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-white mb-3 leading-snug"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed mb-3 text-[0.95rem]">{step.desc}</p>
                  <p className="text-sm text-sky-300/60 italic leading-relaxed">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
