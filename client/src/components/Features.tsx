/*
 * Features — Cygnus AI Labs
 * Theme: Light precision — Section background #F4F8FC, white cards #FFFFFF,
 * deep navy text #071426, muted blue-gray #526174, and logo accents.
 */
import { motion } from "framer-motion";
import { Brain, Network, BarChart3, Shield, Cpu, GitMerge } from "lucide-react";
import { useScrollReveal, staggerContainer, staggerItem } from "@/hooks/useScrollReveal";

const smallFeatures = [
  {
    icon: <Brain className="w-5 h-5 text-[#075BC7]" />,
    iconBg: "bg-[#075BC7]/10 border-[#075BC7]/25",
    title: "AI Model Development",
    desc: "We design, train, and fine-tune language and predictive models customised to your domain — not repurposed off-the-shelf tools.",
  },
  {
    icon: <Shield className="w-5 h-5 text-[#00A596]" />,
    iconBg: "bg-[#00A596]/10 border-[#00A596]/25",
    title: "Responsible AI Practices",
    desc: "Every system we build is auditable, explainable, and aligned with data-governance standards your stakeholders can trust.",
  },
  {
    icon: <GitMerge className="w-5 h-5 text-[#FF9820]" />,
    iconBg: "bg-[#FF9820]/10 border-[#FF9820]/25",
    title: "Seamless Integration",
    desc: "Our solutions slot into your existing stack — ERP, CRM, cloud, or on-prem — with minimal disruption and clear handover documentation.",
  },
];

export default function Features() {
  const { ref, inView } = useScrollReveal(0.08);

  return (
    <section id="features" className="relative py-32 overflow-hidden bg-[#F4F8FC]" ref={ref}>
      <div className="section-divider absolute top-0 left-0 right-0" />

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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071426] mb-5 tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Intelligence applied to{" "}
            <br className="hidden md:block" />
            <span className="gradient-text">real business problems</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-[#526174] text-lg max-w-2xl mx-auto leading-relaxed">
            We combine rigorous AI research with pragmatic engineering to build systems that bring measurable order to your most complex operations.
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Large card — Process Intelligence (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden card-hover"
          >
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 bg-[#075BC7]/10 border-[#075BC7]/25">
                  <BarChart3 className="w-5 h-5 text-[#075BC7]" />
                </div>
                <div>
                  <h3 className="text-[#071426] font-bold text-xl mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Process Intelligence &amp; Analytics
                  </h3>
                  <p className="text-[#526174] text-sm leading-relaxed">
                    We map your current workflows, identify inefficiencies, and deploy AI-driven analytics that surface actionable insight — from executive dashboards to operational alerts.
                  </p>
                </div>
              </div>
              {/* Process visualization */}
              <div className="rounded-xl border border-[#DCE5EF] bg-[#F4F8FC] p-6">
                <div className="flex items-center gap-3 flex-wrap">
                  {["Raw Data", "Ingestion", "AI Processing", "Structured Insight", "Action"].map((label, i, arr) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#075BC7] border border-[#DCE5EF] bg-white shadow-2xs whitespace-nowrap">
                        {label}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="h-0.5 w-4 bg-[#078ED8]/40 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { label: "Accuracy", value: "94%" },
                    { label: "Time Saved", value: "60%" },
                    { label: "Error Rate", value: "↓ 82%" },
                  ].map((m) => (
                    <div key={m.label} className="text-center py-3 rounded-lg bg-white border border-[#DCE5EF] shadow-2xs">
                      <div className="text-[#075BC7] font-bold text-xl" style={{ fontFamily: "'Outfit', sans-serif" }}>{m.value}</div>
                      <div className="text-[#526174] text-xs mt-0.5 font-medium">{m.label}</div>
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
            className="rounded-2xl overflow-hidden card-hover flex flex-col"
          >
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 bg-[#00A596]/10 border-[#00A596]/25">
                  <Cpu className="w-5 h-5 text-[#00A596]" />
                </div>
                <div>
                  <h3 className="text-[#071426] font-bold text-xl mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Intelligent Automation
                  </h3>
                  <p className="text-[#526174] text-sm leading-relaxed">
                    From document processing to multi-step decision pipelines — we automate the repetitive and the complex, freeing your team for higher-value work.
                  </p>
                </div>
              </div>
              <div className="flex-1 rounded-xl border border-[#DCE5EF] bg-[#F4F8FC] p-5 flex flex-col justify-center gap-3">
                {[
                  { step: "Document arrives", status: "auto", dotColor: "bg-[#075BC7]" },
                  { step: "AI extracts & classifies", status: "ai", dotColor: "bg-[#078ED8]" },
                  { step: "Validation & routing", status: "auto", dotColor: "bg-[#00A596]" },
                  { step: "Workflow triggered", status: "done", dotColor: "bg-[#FF9820]" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3 bg-white px-3.5 py-2.5 rounded-lg border border-[#DCE5EF] shadow-2xs">
                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.dotColor}`} />
                    <span className="text-[#071426] text-xs font-medium">{item.step}</span>
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
              className="rounded-2xl p-8 card-hover"
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 transition-colors duration-300 ${feat.iconBg}`}>
                {feat.icon}
              </div>
              <h3
                className="text-[#071426] font-bold text-lg mb-2.5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {feat.title}
              </h3>
              <p className="text-[#526174] text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}

          {/* Wide card — End-to-End R&D */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.5 }}
            className="lg:col-span-3 rounded-2xl p-8 card-hover"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 bg-[#075BC7]/10 border-[#075BC7]/25">
                <Network className="w-5 h-5 text-[#075BC7]" />
              </div>
              <div>
                <h3 className="text-[#071426] font-bold text-xl mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  End-to-End R&amp;D Partnership
                </h3>
                <p className="text-[#526174] text-sm leading-relaxed max-w-3xl">
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
