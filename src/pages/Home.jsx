import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  LayoutGrid,
  Layers,
  ArrowRight,
  Zap,
  Shield,
  HeartHandshake,
} from "lucide-react";
import rvImg from "../assets/Rv.jpeg";
import vrImg from "../assets/VR.jpg";
import fitGenCoreLogo from "../assets/fitgencoree.png";

const featuredServices = [
  {
    icon: <Code2 className="h-8 w-8 text-blue-500" />,
    title: "Web Development",
    desc: "Engineering high performance client interfaces alongside scalable backends. We build secure APIs, database schemas, and caching layers optimized for high concurrency traffic.",
    tech: ["Next.js", "React", "Node.js", "Vite", "JavaScript", "PHP"],
    path: "/services/web-development",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-cyan-400" />,
    title: "Mobile App Development",
    desc: "Creating modern mobile applications with smooth performance, intuitive interfaces, and seamless user experiences across every device.",
    tech: ["Flutter", "React Native", "Swift/Kotlin", "Firebase", "Node.js"],
    path: "/services/mobile-development",
  },
  {
    icon: <LayoutGrid className="h-8 w-8 text-purple-400" />,
    title: "Admin Dashboard Systems",
    desc: "Developing smart dashboard solutions and management systems that streamline operations, improve efficiency, and simplify business workflows.",
    tech: ["React", "WebSockets", "Tailwind CSS", "PostgreSQL", "Recharts"],
    path: "/services/admin-dashboards",
  },
  {
    icon: <Layers className="h-8 w-8 text-violet-400" />,
    title: "SaaS Product Development",
    desc: "Building scalable software platforms with modern architecture, seamless user experiences, and reliable cloud-based infrastructure.",
    tech: ["Vite", "Node.js", "Docker", "AWS / GCP", "Stripe", "CI/CD"],
    path: "/services/saas-development",
  },
];

const benefits = [
  {
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    title: "High Performance",
    desc: "Optimized digital experiences built for speed, smooth performance, and seamless user interaction across every platform.",
  },
  {
    icon: <Shield className="h-6 w-6 text-cyan-600" />,
    title: "Robust Security",
    desc: "Secure and reliable systems developed with modern standards, protected infrastructure, and performance-focused architecture.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-purple-600" />,
    title: "Agile & Collaborative",
    desc: "Efficient development workflows, transparent communication, and a collaborative approach focused on delivering quality results.",
  },
];

const titleWords = [
  { text: "We", isGradient: false },
  { text: "engineer", isGradient: false },
  { text: "the", isGradient: false },
  { text: "digital", isGradient: false },
  { text: "infrastructure", isGradient: false },
  { text: "for", isGradient: false },
  { text: "future", isGradient: true },
  { text: "scales.", isGradient: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 * i },
  }),
};

const childVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

const servicesContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const servicesItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
};

export default function Home() {
  return (
    <div className="page-container bg-dark-bg text-gray-300 relative overflow-hidden pt-28">
      {/* Decorative Gradients */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section Wrapper */}
      <div className="relative w-full overflow-hidden">
        {/* Background Graphic Image (Rv.jpeg) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1920px] h-[1080px] pointer-events-none select-none z-0 opacity-20 overflow-hidden mix-blend-screen">
          <img src={rvImg} alt="" className="w-full h-full object-cover" />
          {/* Gradient overlays to blend top and bottom edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712] opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] opacity-90" />
        </div>

        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pb-32 flex flex-col items-center text-center z-10">
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Title */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6 flex flex-wrap justify-center gap-x-[0.23em] gap-y-2"
            >
              {titleWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={childVariants}
                  className={
                    word.isGradient ? "gradient-text-blue font-black" : ""
                  }
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            >
              “At WickGen, we transform ambitious ideas into cutting-edge
              software products designed for growth, performance, and
              innovation.”
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-all active:scale-98 shadow-sm hover:shadow-[0_0_18px_rgba(37,99,235,0.55)]">
                  Start Your Project
                </button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white font-medium px-6 py-2.5 rounded-xl border border-dark-border transition-all flex items-center justify-center gap-2 hover:border-gray-500 active:scale-98 group">
                  More About Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* About Section Short Intro */}
      <section className="relative border-t border-slate-100 py-20 bg-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                We design and build premium software solutions.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                WickGen is a specialized design and development studio. We build
                scalable web systems, custom mobile apps, and robust cloud
                infrastructures for businesses ready to scale.
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                At WickGen, we create innovative software solutions tailored for
                the modern era. From scalable web platforms to intuitive mobile
                applications, we combine clean design, modern technology, and
                reliable engineering to build digital experiences that drive
                growth, performance, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="relative border-t border-slate-100 py-24 bg-slate-50 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Core Services
            </h2>
            <p className="text-slate-600">
              Smart digital solutions engineered for the modern era.
            </p>
          </div>

          {/* Flagship Product - FitGenCore Ecosystem */}
          <div className="bg-[#0b0f19] border border-slate-800/40 p-8 md:p-10 rounded-3xl mb-12 relative group overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400 font-semibold tracking-wide shadow-sm">
                Flagship Product
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight transition-colors">
                FitGenCore Ecosystem
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                FitGenCore is our flagship, turn-key product for the modern
                fitness market. A unified digital ecosystem that combines
                membership management, workout choreography interfaces, offline
                telemetry tracking, and automated billing engines. Built for
                enterprise gym networks and high-scale fitness businesses.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Flutter",
                  "Firebase",
                  "Node.js",
                  "MongoDB",
                  "Real-Time Telemetry",
                  "Stripe API",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono bg-white/5 border border-white/5 text-gray-400 px-2.5 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  to="/fitgencore"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-white/80 transition-colors group/link"
                >
                  Explore FitGenCore Ecosystem
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full h-48 rounded-2xl bg-white border border-dark-border/40 flex items-center justify-center p-8 shadow-lg shadow-black/10">
                <img
                  src={fitGenCoreLogo}
                  alt="FitGenCore Ecosystem"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={servicesContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {featuredServices.map((service) => (
              <motion.div
                key={service.title}
                variants={servicesItemVariants}
                className="bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-500/20 transition-all rounded-2xl p-8 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="mb-6 bg-blue-50 w-max p-4 rounded-xl border border-blue-100 text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  {service.tech && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1d4ed8] hover:text-[#1e40af] transition-colors mt-auto group/link"
                >
                  Explore Service
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative border-t border-slate-200 py-24 bg-white w-full text-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Why Choose WickGen?
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              We build reliable digital solutions with a focus on quality,
              innovation, and long-term business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-white hover:shadow-xl hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="mb-4 bg-slate-100 w-max p-3 rounded-lg border border-slate-200/60">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative border-t border-dark-border/40 py-24 bg-gradient-to-r from-blue-900/10 via-dark-bg to-purple-900/10 overflow-hidden">
        {/* Background Graphic Image (VR.jpg) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-15 overflow-hidden mix-blend-screen">
          <img src={vrImg} alt="" className="w-full h-full object-cover" />
          {/* Gradient overlays to blend top and bottom edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712] opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] opacity-95" />
        </div>

        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Your next digital solution starts here.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Partner with WickGen to build modern software solutions designed for
            growth, performance, and long-term success.
          </p>
          <Link to="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-2.5 rounded-xl transition-all active:scale-98 mt-4 shadow-md hover:shadow-[0_0_18px_rgba(37,99,235,0.55)]">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
