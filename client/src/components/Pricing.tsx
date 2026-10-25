/*
 * Pricing / Engagements — Cygnus AI Labs
 * Theme: Light precision — Section background #FFFFFF, white cards #FFFFFF,
 * navy text #071426, muted text #526174, and logo accents.
 */
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal, staggerContainer, staggerItem } from "@/hooks/useScrollReveal";

const engagements = [
  {
    name: "Discovery",
    badge: null,
    description: "Ideal for organisations beginning their AI journey who need clarity before committing to a build.",
    cta: "Talk to our team",
    ctaClass: "btn-ghost",
    popular: false,
    features: [
      "Structured problem discovery",
      "Data readiness assessment",
      "Opportunity mapping & prioritisation",
      "High-level solution architecture",
      "Feasibility & ROI estimate",
      "Findings report & roadmap",
    ],
  },
  {
    name: "Build",
    badge: "Most Requested",
    description: "A focused end-to-end engagement: from validated prototype to production-ready AI system.",
    cta: "Talk to our team",
    ctaClass: "btn-primary font-semibold",
    popular: true,
    features: [
      "Everything in Discovery",
      "AI model research & development",
      "Prototype with real business data",
      "Iterative validation & refinement",
      "Production deployment & integration",
      "Performance benchmarking",
      "Documentation & knowledge transfer",
      "60-day post-launch support",
    ],
  },
  {
    name: "Partner",
    badge: null,
    description: "For organisations that want an ongoing AI research and engineering capability without building it in-house.",
    cta: "Talk to our team",
    ctaClass: "btn-ghost",
    popular: false,
    features: [
      "Everything in Build",
      "Continuous model optimisation",
      "New use-case development",
      "Dedicated research team access",
      "Quarterly strategy reviews",
      "Priority response SLA",
      "Executive reporting",
    ],
  },
];

export default function Pricing() {
  const { ref, inView } = useScrollReveal(0.08);

  return (
    <section id="pricing" className="relative py-32 overflow-hidden bg-white" ref={ref}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="badge-pill mb-5">Engagements</span>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071426] mb-5 tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Find the right starting point
          </motion.h2>
          <motion.p variants={staggerItem} className="text-[#526174] text-lg max-w-xl mx-auto">
            Every engagement is scoped to your specific context. These tiers help you understand where to begin — pricing is discussed after we understand your needs.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {engagements.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col bg-white ${
                plan.popular ? "pricing-popular" : "border border-[#DCE5EF] card-hover"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#075BC7] to-[#078ED8] text-white shadow-md">
                    <Sparkles className="w-3 h-3 fill-white" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name + desc */}
              <div className="mb-7 mt-1">
                <h3
                  className="text-[#071426] font-bold text-2xl mb-2.5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {plan.name}
                </h3>
                <p className="text-[#526174] text-sm leading-relaxed">{plan.description}</p>
              </div>

              {/* CTA */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("footer");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full py-3.5 rounded-xl text-sm text-center transition-all duration-200 mb-8 flex items-center justify-center gap-2 ${plan.ctaClass}`}
              >
                {plan.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Divider */}
              <div className="section-divider mb-6" />

              {/* Features */}
              <div className="flex flex-col gap-3.5 flex-1">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <div className="w-4.5 h-4.5 rounded-full bg-[#00A596]/10 border border-[#00A596]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#00A596]" />
                    </div>
                    <span className="text-[#071426] text-sm leading-snug font-normal">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center text-[#526174] text-sm mt-12 font-medium"
        >
          Pricing is tailored to scope and complexity · Engagements start with a no-obligation conversation
        </motion.p>
      </div>
    </section>
  );
}
