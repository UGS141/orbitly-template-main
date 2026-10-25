/*
 * Testimonials — Cygnus AI Labs
 * Design: Dark premium — partner/client insights section.
 * Testimonials removed; replaced with a credibility and approach section
 * that makes no unsupported claims.
 */
import { motion } from "framer-motion";
import { Lightbulb, Target, Users, ArrowRight } from "lucide-react";
import { useScrollReveal, staggerContainer, staggerItem } from "@/hooks/useScrollReveal";

const principles = [
  {
    icon: <Target className="w-5 h-5 text-sky-400" />,
    iconBg: "bg-sky-500/10 border-sky-500/20",
    title: "Outcome-first thinking",
    desc: "We measure success by the business impact our systems create — reduction in manual effort, improvement in decision quality, or time recovered for your team.",
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-teal-400" />,
    iconBg: "bg-teal-500/10 border-teal-500/20",
    title: "Research-backed design",
    desc: "Our solutions draw on current AI research. We select methods that are proven, interpretable, and appropriate for your scale — not whatever happens to be trending.",
  },
  {
    icon: <Users className="w-5 h-5 text-blue-400" />,
    iconBg: "bg-blue-500/10 border-blue-500/20",
    title: "Built with your team",
    desc: "We work alongside your people, not instead of them. Knowledge transfer and documentation are standard — so capability stays inside your organisation after we deliver.",
  },
];

const domains = [
  "Operations & Logistics",
  "Finance & Compliance",
  "Healthcare Data",
  "Retail & Supply Chain",
  "Customer Intelligence",
  "Document Processing",
  "Quality Assurance",
  "HR & Workforce",
];

export default function Testimonials() {
  const { ref, inView } = useScrollReveal(0.08);

  return (
    <section id="testimonials" className="relative py-36 overflow-hidden" ref={ref}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div
        className="glow-orb w-[900px] h-[400px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse, rgba(14,96,196,0.8), transparent)" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={staggerItem}>
            <span className="badge-pill mb-5">Our Approach</span>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Principled AI for{" "}
            <span className="gradient-text">serious organisations</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-white/65 text-lg max-w-xl mx-auto">
            We believe the most valuable AI systems are the ones that earn trust — through transparency, rigour, and results that are genuinely attributable.
          </motion.p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.12 }}
              className="gradient-border rounded-2xl p-7 card-hover flex flex-col gap-4"
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${p.iconBg}`}>
                {p.icon}
              </div>
              <h3 className="text-white font-semibold text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {p.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Domain coverage */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="gradient-border rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-white font-semibold text-xl mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Industry domains we work across
            </h3>
            <p className="text-white/50 text-sm">We bring domain-aware AI — not generic solutions — to each engagement.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {domains.map((domain) => (
              <span
                key={domain}
                className="px-4 py-2 rounded-full text-sm text-sky-300/80 border border-sky-500/20 bg-sky-500/08 font-medium"
              >
                {domain}
              </span>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-white/50 text-sm mb-5">Ready to explore what AI can do for your specific operations?</p>
            <a
              href="#pricing"
              className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-xl text-sm"
            >
              Talk to our team
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
