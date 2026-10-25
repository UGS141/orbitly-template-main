/*
 * Footer — Cygnus AI Labs
 * Theme: Light precision — Section background #F4F8FC for CTA, white footer #FFFFFF,
 * navy text #071426, muted text #526174, and logo blue accents #075BC7.
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
      <section className="relative py-32 overflow-hidden bg-[#F4F8FC]" ref={ref}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.75 }}
            className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto bg-white border border-[#DCE5EF] shadow-xl shadow-[#071426]/05"
          >
            <div className="relative z-10 p-12 md:p-20 text-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.div variants={staggerItem}>
                  <span className="badge-pill mb-7">
                    <Sparkles className="w-3.5 h-3.5 text-[#075BC7]" />
                    Start your AI transformation
                  </span>
                </motion.div>
                <motion.h2
                  variants={staggerItem}
                  className="text-4xl md:text-6xl font-bold text-[#071426] mb-6 tracking-tight leading-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Your processes deserve{" "}
                  <span className="gradient-text">intelligent structure</span>
                </motion.h2>
                <motion.p variants={staggerItem} className="text-[#526174] text-lg max-w-xl mx-auto mb-10 leading-relaxed font-normal">
                  Whether you're exploring AI for the first time or scaling an existing programme, we'd welcome a conversation about what's possible.
                </motion.p>
                <motion.div
                  variants={staggerItem}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
                >
                  <a
                    href="mailto:hello@cygnuslabs.ai"
                    className="btn-primary inline-flex items-center gap-2.5 font-semibold px-9 py-4 rounded-xl text-base shadow-md"
                  >
                    Talk to our team
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#features"
                    className="btn-ghost inline-flex items-center gap-2.5 font-medium px-9 py-4 rounded-xl text-base"
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
      <footer className="border-t border-[#DCE5EF] py-20 bg-white">
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
              <p className="text-[#526174] text-sm leading-relaxed max-w-xs mb-5">
                AI research and development that helps businesses bring structure to complex, unorganised processes.
              </p>
              <p className="text-[#526174] text-xs font-semibold mb-3 tracking-wide uppercase">A UGS Product</p>
              <a
                href="mailto:hello@cygnuslabs.ai"
                className="text-[#075BC7] hover:text-[#078ED8] text-sm font-medium transition-colors duration-200 flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                hello@cygnuslabs.ai
              </a>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="text-[#071426] text-sm font-bold mb-5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[#526174] text-sm hover:text-[#075BC7] transition-colors duration-200"
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
            <p className="text-[#526174] text-sm">
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
                  className="text-[#526174] hover:text-[#075BC7] transition-colors duration-200"
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
