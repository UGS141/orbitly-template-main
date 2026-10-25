/*
 * Footer — Cygnus AI Labs
 * Design: Dark premium — CTA with gradient card, polished footer grid.
 */
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Linkedin, Twitter, Mail } from "lucide-react";
import { useScrollReveal, staggerContainer, staggerItem } from "@/hooks/useScrollReveal";

const footerLinks = {
  Services: ["AI Research", "Process Automation", "Model Development", "System Integration", "Consulting"],
  Company: ["About Cygnus", "Our Approach", "Careers", "Contact"],
  Resources: ["Case Studies", "Insights Blog", "Documentation", "Responsible AI"],
  Legal: ["Privacy Policy", "Terms of Service", "Security"],
};

export default function Footer() {
  const { ref, inView } = useScrollReveal(0.08);

  return (
    <>
      {/* CTA Section */}
      <section className="relative py-36 overflow-hidden" ref={ref}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="glow-orb w-[800px] h-[500px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-[0.12]"
          style={{ background: "radial-gradient(ellipse, #0E60C4, transparent)" }}
          aria-hidden="true"
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.75 }}
            className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto"
            style={{
              background: "linear-gradient(145deg, rgba(14,96,196,0.10), rgba(0,160,150,0.06), rgba(255,255,255,0.02))",
              border: "1px solid rgba(14,96,196,0.25)",
              boxShadow: "0 0 80px rgba(14,96,196,0.10), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(14,96,196,0.12), transparent)" }}
              aria-hidden="true"
            />
            <div className="relative z-10 p-12 md:p-20 text-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.div variants={staggerItem}>
                  <span className="badge-pill mb-7">
                    <Sparkles className="w-3 h-3 fill-sky-400 text-sky-400" />
                    Start your AI transformation
                  </span>
                </motion.div>
                <motion.h2
                  variants={staggerItem}
                  className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Your processes deserve{" "}
                  <span className="gradient-text">intelligent structure</span>
                </motion.h2>
                <motion.p variants={staggerItem} className="text-white/65 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                  Whether you're exploring AI for the first time or scaling an existing programme, we'd welcome a conversation about what's possible.
                </motion.p>
                <motion.div
                  variants={staggerItem}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                  <a
                    href="mailto:hello@cygnuslabs.ai"
                    className="btn-primary inline-flex items-center gap-2.5 text-white font-semibold px-9 py-4 rounded-xl text-base"
                  >
                    Talk to our team
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#features"
                    className="btn-ghost inline-flex items-center gap-2.5 text-white/65 hover:text-white font-medium px-9 py-4 rounded-xl text-base"
                  >
                    Explore capabilities
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
            {/* Brand */}
            <div className="col-span-2">
              <a href="/" className="flex items-center gap-2.5 mb-5">
                <img
                  src="/cygnus-logo.png"
                  alt="Cygnus AI Labs"
                  className="h-10 w-auto object-contain"
                  style={{ maxWidth: "160px" }}
                />
              </a>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-7">
                AI research and development that helps businesses bring structure to complex, unorganised processes.
              </p>
              <p className="text-white/40 text-xs mb-1">A UGS Product</p>
              <a
                href="mailto:hello@cygnuslabs.ai"
                className="text-sky-400/70 hover:text-sky-400 text-sm transition-colors duration-200 flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                hello@cygnuslabs.ai
              </a>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="text-white text-sm font-semibold mb-5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/50 text-sm hover:text-white/65 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="section-divider mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Cygnus AI Labs — A UGS Product. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {[
                { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                { icon: <Twitter className="w-4 h-4" />, label: "Twitter" },
                { icon: <Mail className="w-4 h-4" />, label: "Email" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href={label === "Email" ? "mailto:hello@cygnuslabs.ai" : "#"}
                  className="text-white/50 hover:text-white/75 transition-colors duration-200"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
