/*
 * Features — Cygnus AI Labs
 * Design: Dark premium — asymmetric bento grid, gradient-border cards,
 * scroll-triggered stagger. Capabilities tailored to AI research & automation.
 */
import { motion } from "framer-motion";
import { Brain, Network, BarChart3, Shield, Cpu, GitMerge } from "lucide-react";
import { useScrollReveal, staggerContainer, staggerItem } from "@/hooks/useScrollReveal";

const smallFeatures = [
  {
    icon: <Brain className="w-5 h-5 text-sky-400" />,
    iconBg: "bg-sky-500/10 border-sky-500/20",
    title: "AI Model Development",
    desc: "We design, train, and fine-tune language and predictive models customised to your domain — not repurposed off-the-shelf tools.",
  },
  {
    icon: <Shield className="w-5 h-5 text-teal-400" />,
    iconBg: "bg-teal-500/10 border-teal-500/20",
    title: "Responsible AI Practices",
    desc: "Every system we build is auditable, explainable, and aligned with data-governance standards your stakeholders can trust.",
  },
  {
    icon: <GitMerge className="w-5 h-5 text-blue-400" />,
    iconBg: "bg-blue-500/10 border-blue-500/20",
    title: "Seamless Integration",
    desc: "Our solutions slot into your existing stack — ERP, CRM, cloud, or on-prem — with minimal disruption and clear handover documentation.",
  },
];

export default function Features() {
  const { ref, inView } = useScrollReveal(0.08);

  return (
    <section id="features" className="relative py-36 overflow-hidden" ref={ref}>
      {/* Left glow */}
      <div
        className="glow-orb w-[500px] h-[500px] -left-48 top-1/2 -translate-y-1/2 opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse, #0E60C4, transparent)" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={staggerItem}>
            <span className="badge-pill mb-5">
              Capabilities
            </span>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Intelligence applied to{" "}
            <br className="hidden md:block" />
            <span className="gradient-text">real business problems</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine rigorous AI research with pragmatic engineering to build systems that bring measurable order to your most complex operations.
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

          {/* Large card — Process Intelligence (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-2 gradient-border rounded-2xl overflow-hidden card-hover"
          >
            <div className="p-7">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 bg-sky-500/10 border-sky-500/20">
                  <BarChart3 className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Process Intelligence &amp; Analytics
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    We map your current workflows, identify inefficiencies, and deploy AI-driven analytics that surface actionable insight — from executive dashboards to operational alerts.
                  </p>
                </div>
              </div>
              {/* Visual — abstract process flow representation */}
              <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02] p-6">
                <div className="flex items-center gap-3 flex-wrap">
                  {["Raw Data", "Ingestion", "AI Processing", "Structured Insight", "Action"].map((label, i, arr) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="px-3 py-1.5 rounded-lg text-xs font-medium text-sky-300/80 border border-sky-500/20 bg-sky-500/08 whitespace-nowrap">
                        {label}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="h-px w-4 bg-gradient-to-r from-sky-500/40 to-teal-500/40 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { label: "Accuracy", value: "94%" },
                    { label: "Time Saved", value: "60%" },
                    { label: "Error Rate", value: "↓ 82%" },
                  ].map((m) => (
                    <div key={m.label} className="text-center py-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                      <div className="text-sky-300 font-bold text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>{m.value}</div>
                      <div className="text-white/40 text-xs mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tall card — Intelligent Automation */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="gradient-border rounded-2xl overflow-hidden card-hover flex flex-col"
          >
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 bg-teal-500/10 border-teal-500/20">
                  <Cpu className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Intelligent Automation
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    From document processing to multi-step decision pipelines — we automate the repetitive and the complex, freeing your team for higher-value work.
                  </p>
                </div>
              </div>
              <div className="flex-1 relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 flex flex-col gap-3">
                {[
                  { step: "Document arrives", status: "auto" },
                  { step: "AI extracts & classifies", status: "ai" },
                  { step: "Validation & routing", status: "auto" },
                  { step: "Workflow triggered", status: "done" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      item.status === "done" ? "bg-teal-400" :
                      item.status === "ai" ? "bg-sky-400" : "bg-white/20"
                    }`} />
                    <span className="text-white/60 text-xs">{item.step}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Small feature cards */}
          {smallFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.26 + i * 0.08 }}
              className="gradient-border rounded-2xl p-7 card-hover group"
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 transition-colors duration-300 ${feat.iconBg}`}>
                {feat.icon}
              </div>
              <h3
                className="text-white font-semibold text-base mb-2.5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {feat.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}

          {/* Wide card — End-to-End R&D */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.5 }}
            className="lg:col-span-3 gradient-border rounded-2xl p-7 card-hover"
          >
            <div className="flex items-start gap-4 mb-2">
              <div className="w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 bg-blue-500/10 border-blue-500/20">
                <Network className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  End-to-End R&amp;D Partnership
                </h3>
                <p className="text-white/65 text-sm leading-relaxed max-w-3xl">
                  We work with you from problem definition through deployment and ongoing optimisation — research, prototype, validate, scale. No hand-off gaps, no black-box deliverables.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
