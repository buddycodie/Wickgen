import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  ShieldCheck,
  Zap,
  Laptop,
  Database,
  Server,
  Key,
  ArrowRight,
} from "lucide-react";
import vrImg from "../../assets/VR.jpg";

const frontendFeatures = [
  {
    icon: <Zap className="h-6 w-6 text-blue-500" />,
    title: "Core Web Vitals Optimization",
    desc: "We optimize First Input Delay (FID), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS) for a fluid user experience.",
  },
  {
    icon: <Globe className="h-6 w-6 text-cyan-400" />,
    title: "Headless CMS Configurations",
    desc: "Modern content management solutions designed for flexibility, scalability, and seamless performance.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-purple-400" />,
    title: "Strict Security Guidelines",
    desc: "Built with modern security standards to ensure safe, reliable, and protected digital experiences.",
  },
];

const backendFeatures = [
  {
    icon: <Server className="h-6 w-6 text-emerald-400" />,
    title: "API Engineering & Integrations",
    desc: "Developing scalable and reliable system integrations that enable seamless communication, real-time functionality, and efficient data flow across digital platforms.",
  },
  {
    icon: <Database className="h-6 w-6 text-teal-400" />,
    title: "Optimized Database Schemas",
    desc: "Designing scalable and efficient database architectures that ensure secure data management, fast performance, and reliable application scalability.",
  },
  {
    icon: <Key className="h-6 w-6 text-indigo-400" />,
    title: "Authentication & Access Control",
    desc: "Implementing secure access systems with protected authentication flows, user permission management, and reliable data security practices.",
  },
];

const frontendTechnologies = [
  { name: "React", desc: "Modern component-based user interface development" },
  {
    name: "Next.js",
    desc: "High-performance frontend framework for scalable web applications",
  },
  {
    name: "Vite",
    desc: "Fast development environment with optimized build performance",
  },
  {
    name: "JavaScript",
    desc: "Interactive and dynamic frontend functionality",
  },
  {
    name: "Tailwind CSS",
    desc: "Responsive and modern utility-first styling system",
  },
  {
    name: "Framer Motion",
    desc: "Smooth animations and interactive user experiences",
  },
];

const backendTechnologies = [
  { name: "Node.js", desc: "Scalable backend runtime for modern applications" },
  {
    name: "NestJS",
    desc: "Structured backend framework for scalable server architecture",
  },
  {
    name: "PostgreSQL",
    desc: "Advanced relational database management system",
  },
  {
    name: "Java",
    desc: "Enterprise grade backend development for large-scale systems",
  },
  { name: "PHP", desc: "Reliable server side scripting for web applications" },
  {
    name: "Express.js",
    desc: "Lightweight framework for backend APIs and services",
  },
];

export default function WebDev() {
  return (
    <div className="page-container bg-dark-bg text-gray-300 pt-28 pb-16 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-80 right-1/4 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
          Full-Stack Web Development
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Building modern web applications with scalable architecture, seamless
          functionality, and high-performance user experiences.
        </p>
      </section>

      {/* Frontend Details */}
      <section className="max-w-6xl mx-auto px-6 py-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="mb-4 bg-blue-500/10 w-max p-4 rounded-xl border border-blue-500/20">
            <Laptop className="h-10 w-10 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            High-performance frontend systems.
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            Modern digital products require more than just attractive
            interfaces. We build scalable full-stack applications with powerful
            frontend experiences, secure backend systems, optimized databases,
            and reliable cloud infrastructure. By combining modern technologies
            with performance-focused architecture, we create fast, responsive,
            and scalable platforms designed to support long-term business growth
            and seamless user experiences.
          </p>
        </div>

        {/* Frontend Feature Grid */}
        <div className="space-y-4">
          {frontendFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-5 rounded-xl bg-white/[0.02] border border-dark-border/40 flex items-start gap-4"
            >
              <div className="mt-1 bg-white/5 p-2 rounded-lg shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Backend Details */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10 border-t border-dark-border/40 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Backend Feature Grid */}
        <div className="space-y-4 order-2 lg:order-1">
          {backendFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-5 rounded-xl bg-white/[0.02] border border-dark-border/40 flex items-start gap-4"
            >
              <div className="mt-1 bg-white/5 p-2 rounded-lg shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6 order-1 lg:order-2 lg:pl-6">
          <div className="mb-4 bg-emerald-500/10 w-max p-4 rounded-xl border border-emerald-500/20">
            <Server className="h-10 w-10 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Robust & scalable backend services.
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            Reliable digital platforms require powerful backend infrastructure.
            We develop scalable backend systems designed for performance,
            security, and seamless data management. Using modern architectures,
            secure authentication flows, optimized databases, and cloud-ready
            infrastructure, we build stable and efficient systems capable of
            handling growing user demands while maintaining fast, secure, and
            reliable application performance.
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10 border-t border-dark-border/40 mt-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            Full-Stack Tech Stack
          </h2>
          <p className="text-gray-400 text-sm">
            We use reliable, state of the art technologies for both client and
            server layers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend Tech */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-blue-400 border-b border-dark-border/40 pb-2">
              Frontend Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {frontendTechnologies.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-xl border border-dark-border/50 bg-white/[0.01]"
                >
                  <p className="font-semibold text-white text-sm">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1 leading-normal">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Tech */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-emerald-400 border-b border-dark-border/40 pb-2">
              Backend Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {backendTechnologies.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-xl border border-dark-border/50 bg-white/[0.01]"
                >
                  <p className="font-semibold text-white text-sm">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1 leading-normal">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-dark-border/40 py-24 bg-gradient-to-r from-blue-900/10 via-dark-bg to-cyan-950/10 overflow-hidden mt-16">
        {/* Background Graphic Image (VR.jpg) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-15 overflow-hidden mix-blend-screen">
          <img src={vrImg} alt="" className="w-full h-full object-cover" />
          {/* Gradient overlays to blend edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712] opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] opacity-95" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            Need a custom website ?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Get in touch with our engineering team today to review your system
            requirements and timeline.
          </p>
          <Link to="/contact">
            <button className="flex items-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition-all active:scale-95 group shadow-sm hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              Start Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 text-white" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
