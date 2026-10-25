/*
 * Testimonials / Insights — Cygnus AI Labs
 * Theme: Light precision — Section background #F4F8FC, white cards #FFFFFF,
 * navy text #071426, muted text #526174, and logo accents.
 */
import { motion } from "framer-motion";
import { Lightbulb, Target, Users, ArrowRight } from "lucide-react";
import { useScrollReveal, staggerContainer, staggerItem } from "@/hooks/useScrollReveal";

const principles = [
  {
    icon: <Target className="w-5 h-5 text-[#075BC7]" />,
    iconBg: "bg-[#075BC7]/10 border-[#075BC7]/25",
    title: "Outcome-first thinking",
    desc: "We measure success by the business impact our systems create — reduction in manual effort, improvement in decision quality, or time recovered for your team.",
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-[#00A596]" />,
    iconBg: "bg-[#00A596]/10 border-[#00A596]/25",
    title: "Research-backed design",
    desc: "Our solutions draw on current AI research. We select methods that are proven, interpretable, and appropriate for your scale — not whatever happens to be trending.",
  },
  {
    icon: <Users className="w-5 h-5 text-[#078ED8]" />,
    iconBg: "bg-[#078ED8]/10 border-[#078ED8]/25",
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
    <section id="testimonials" className="relative py-32 overflow-hidden bg-[#F4F8FC]" ref={ref}>
      <div className="section-divider absolute top-0 left-0 right-0" />

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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071426] mb-5 tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Principled AI for{" "}
            <span className="gradient-text">serious organisations</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-[#526174] text-lg max-w-xl mx-auto">
            We believe the most valuable AI systems are the ones that earn trust — through transparency, rigour, and results that are genuinely attributable.
          </motion.p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.12 }}
              className="rounded-2xl p-8 card-hover flex flex-col gap-4"
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${p.iconBg}`}>
                {p.icon}
              </div>
              <h3 className="text-[#071426] font-bold text-xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {p.title}
              </h3>
              <p className="text-[#526174] text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Domain coverage */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl p-8 md:p-14 bg-white border border-[#DCE5EF] shadow-sm"
        >
          <div className="text-center mb-8">
            <h3 className="text-[#071426] font-bold text-2xl mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Industry domains we work across
            </h3>
            <p className="text-[#526174] text-sm">We bring domain-aware AI — not generic solutions — to each engagement.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {domains.map((domain) => (
              <span
                key={domain}
                className="px-4 py-2 rounded-full text-sm text-[#071426] font-medium border border-[#DCE5EF] bg-[#F4F8FC] hover:border-[#075BC7] hover:text-[#075BC7] transition-colors"
              >
                {domain}
              </span>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-[#526174] text-sm mb-5 font-medium">Ready to explore what AI can do for your specific operations?</p>
            <a
              href="#pricing"
              className="btn-primary inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-xl text-sm"
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
