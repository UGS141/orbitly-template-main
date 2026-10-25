/*
 * Hero — Cygnus AI Labs
 * Theme: Light precision — clean white background, refined navy typography,
 * logo blue primary actions, and restrained logo-inspired accents.
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Brain, Workflow } from "lucide-react";
import { staggerContainer, staggerItem } from "@/hooks/useScrollReveal";
import Marquee from "react-fast-marquee";

const activities = [
  { icon: <Brain className="w-3.5 h-3.5 text-[#075BC7]" />, text: "Applied AI research for real-world business challenges" },
  { icon: <Workflow className="w-3.5 h-3.5 text-[#00A596]" />, text: "Intelligent automation that brings order to complex workflows" },
  { icon: <Sparkles className="w-3.5 h-3.5 text-[#FF9820]" />, text: "Bespoke AI systems grounded in your operational reality" },
];

// Technology ecosystem logos — rendered inline as SVGs with navy fill for crisp light mode
const TechLogos = [
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-auto fill-[#071426] opacity-45 hover:opacity-85 transition-opacity duration-300" aria-label="Python">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-auto fill-[#071426] opacity-45 hover:opacity-85 transition-opacity duration-300" aria-label="OpenAI">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.387 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.663zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
      </svg>
    ),
  },
  {
    name: "TensorFlow",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-auto fill-[#071426] opacity-45 hover:opacity-85 transition-opacity duration-300" aria-label="TensorFlow">
        <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-6.168-3.564v14.019L12.46 24V0l10.248 5.856.014 5.311z"/>
      </svg>
    ),
  },
  {
    name: "Microsoft Azure",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-auto fill-[#071426] opacity-45 hover:opacity-85 transition-opacity duration-300" aria-label="Microsoft Azure">
        <path d="M13.05 4.24l-6.37 11.06 9.03.02-1.68 1.46H22.5l-9.45-12.54zm-9.15 7.89L0 19.76h6.08l4.74-8.24-6.92.61z"/>
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-auto fill-[#071426] opacity-45 hover:opacity-85 transition-opacity duration-300" aria-label="AWS">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.064.056.128.056.184 0 .08-.048.16-.152.24l-.504.336a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.24-.112a2.47 2.47 0 0 1-.288-.376 6.18 6.18 0 0 1-.248-.472c-.624.736-1.408 1.104-2.352 1.104-.672 0-1.208-.192-1.6-.576-.392-.384-.6-.896-.6-1.536 0-.68.24-1.232.728-1.648.488-.416 1.136-.624 1.96-.624.272 0 .552.024.848.064.296.04.6.104.92.176v-.584c0-.608-.128-1.032-.376-1.288-.256-.256-.688-.376-1.304-.376-.28 0-.568.032-.864.104-.296.072-.584.16-.864.272a2.29 2.29 0 0 1-.28.104.488.488 0 0 1-.12.016c-.104 0-.16-.072-.16-.224v-.352c0-.112.016-.2.056-.248.04-.048.112-.096.216-.144.28-.144.616-.264 1.008-.36a4.86 4.86 0 0 1 1.248-.152c.952 0 1.648.216 2.096.648.44.432.664 1.088.664 1.96v2.576zm-3.24 1.212c.264 0 .536-.048.824-.144.288-.096.544-.272.76-.512.128-.152.224-.32.272-.512.048-.192.08-.424.08-.696v-.336a6.66 6.66 0 0 0-.736-.136 6.02 6.02 0 0 0-.752-.048c-.536 0-.928.104-1.184.32-.256.208-.384.504-.384.888 0 .36.088.632.272.816.184.176.44.36.848.36zm6.396.876c-.128 0-.216-.024-.272-.08-.056-.048-.104-.16-.144-.312L7.78 6.592a1.448 1.448 0 0 1-.072-.32c0-.128.064-.2.192-.2h.784c.136 0 .224.024.272.08.056.048.096.16.136.312l1.48 5.824 1.376-5.824c.032-.16.08-.264.136-.312a.526.526 0 0 1 .28-.08h.64c.136 0 .224.024.28.08.056.048.112.16.136.312l1.392 5.896 1.528-5.896c.04-.16.088-.264.136-.312a.51.51 0 0 1 .272-.08h.744c.128 0 .2.064.2.2 0 .04-.008.08-.016.128a1.137 1.137 0 0 1-.064.2l-2.096 7.14c-.04.16-.088.264-.144.312a.45.45 0 0 1-.272.08h-.688a.535.535 0 0 1-.28-.08c-.056-.056-.104-.16-.136-.32l-1.368-5.648-1.36 5.64c-.04.16-.08.264-.136.32a.515.515 0 0 1-.28.08zm11.176.216c-.416 0-.832-.048-1.232-.152-.4-.104-.712-.216-.92-.344-.128-.072-.216-.152-.248-.224a.56.56 0 0 1-.048-.224v-.368c0-.152.056-.224.168-.224a.42.42 0 0 1 .128.024c.04.016.104.048.176.08.24.104.496.184.776.24.288.056.568.088.856.088.456 0 .808-.08 1.048-.24a.811.811 0 0 0 .36-.696.732.732 0 0 0-.2-.528c-.136-.144-.392-.272-.768-.384l-1.104-.344c-.56-.176-.976-.432-1.232-.768a1.9 1.9 0 0 1-.384-1.152c0-.332.072-.624.216-.88.144-.256.336-.48.576-.664.24-.192.512-.336.832-.432.32-.096.656-.144 1.008-.144.176 0 .36.008.536.04.184.024.352.064.512.104.152.048.296.096.432.152.136.056.24.112.312.168a.65.65 0 0 1 .168.184.43.43 0 0 1 .048.208v.336c0 .152-.056.232-.16.232a.738.738 0 0 1-.272-.088 3.29 3.29 0 0 0-1.384-.288c-.408 0-.728.064-.952.2-.224.136-.336.344-.336.632 0 .208.072.384.216.528.144.144.416.288.816.416l1.08.344c.552.176.952.424 1.192.744.24.32.36.688.36 1.096 0 .344-.072.656-.208.928a2.07 2.07 0 0 1-.576.696c-.248.192-.544.336-.888.432-.36.112-.744.16-1.168.16z"/>
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-auto fill-[#071426] opacity-45 hover:opacity-85 transition-opacity duration-300" aria-label="Google Cloud">
        <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0C1.692 10.586 0 12.565 0 14.928c0 2.774 2.25 5.023 5.02 5.023h13.368c2.433 0 4.61-1.775 4.608-4.21-.002-2.135-1.52-3.899-3.52-4.284a5.21 5.21 0 0 0-1.256-.075c-.04 0-.083.005-.124.006A7.028 7.028 0 0 0 12.19 2.38z"/>
      </svg>
    ),
  },
  {
    name: "Hugging Face",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-auto fill-[#071426] opacity-45 hover:opacity-85 transition-opacity duration-300" aria-label="Hugging Face">
        <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 2.4a9.6 9.6 0 1 1 0 19.2A9.6 9.6 0 0 1 12 2.4zm-3.6 7.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm7.2 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm-7.958 4.2a.6.6 0 0 0-.442 1.002C8.015 16.222 9.94 17.4 12 17.4s3.985-1.178 4.8-2.598A.6.6 0 0 0 16.358 14H7.642z"/>
      </svg>
    ),
  },
  {
    name: "Langchain",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-auto fill-[#071426] opacity-45 hover:opacity-85 transition-opacity duration-300" aria-label="LangChain">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

const allLogos = [...TechLogos, ...TechLogos];

function ActivityTicker() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % activities.length), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex items-center justify-center gap-2 h-7 px-4 rounded-full bg-[#F4F8FC] border border-[#DCE5EF]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 text-[#526174] text-xs font-medium"
        >
          {activities[index].icon}
          <span>{activities[index].text}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Subtle light blue radial ambiance */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(7, 91, 199, 0.06) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 container flex flex-col items-center text-center pt-36 pb-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="badge-pill mb-8 max-w-[90vw] flex-wrap justify-center"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#075BC7] flex-shrink-0" />
          <span className="whitespace-nowrap font-semibold">AI Research &amp; Development — A UGS Product</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-[#071426] leading-[1.06] tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Structure for every
          </motion.h1>
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight gradient-text pb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            complex process
          </motion.h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.42 }}
          className="text-base md:text-lg text-[#526174] max-w-2xl mx-auto mb-6 leading-relaxed px-4 sm:px-0 font-normal"
        >
          Cygnus AI Labs applies rigorous AI research and pragmatic engineering to turn tangled, manual workflows into intelligent, automated systems — so your business can operate at its full potential.
        </motion.p>

        {/* Live ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="mb-9"
        >
          <ActivityTicker />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.52 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl text-sm whitespace-nowrap w-full sm:w-auto shadow-md"
          >
            <span>Talk to our team</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </a>
          <a
            href="#features"
            className="btn-ghost inline-flex items-center justify-center gap-2 font-medium px-8 py-4 rounded-xl text-sm whitespace-nowrap w-full sm:w-auto"
          >
            Explore capabilities
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.65 }}
          className="text-xs text-[#526174] tracking-wide mb-14 font-medium"
        >
          Tailored engagements · Transparent process · Results-focused delivery
        </motion.p>

        {/* Brand showcase card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative w-full max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden bg-white border border-[#DCE5EF] shadow-xl shadow-[#071426]/06 p-10 md:p-14">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/cygnus-logo.png"
                alt="Cygnus AI Labs — AI Automation &amp; Intelligence"
                className="w-56 md:w-72 h-auto object-contain mb-6 animate-float"
              />
              <div className="h-0.5 w-16 bg-[#075BC7]/20 rounded-full mb-4" />
              <p className="text-[#526174] text-sm text-center max-w-md leading-relaxed">
                Applied AI research that converts operational complexity into competitive clarity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technology stack marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="w-full mt-20"
        >
          <p className="text-xs text-[#526174] uppercase tracking-[0.18em] text-center mb-8 font-semibold">
            Built on industry-leading technology
          </p>
          <Marquee
            speed={40}
            gradient={true}
            gradientColor="#FFFFFF"
            gradientWidth={80}
            pauseOnHover={true}
          >
            {allLogos.map((logo, i) => (
              <div key={i} className="flex items-center mx-10">
                {logo.svg}
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}
