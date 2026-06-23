import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Cpu,
  ShieldAlert,
  WifiOff,
  ArrowRight,
} from "lucide-react";
import vrImg from "../../assets/VR.jpg";

const features = [
  {
    icon: <WifiOff className="h-6 w-6 text-blue-500" />,
    title: "Offline First Capabilities",
    desc: "Offline ready applications designed for seamless performance with or without internet connectivity.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-cyan-400" />,
    title: "Native Bridge Performance",
    desc: "Advanced mobile integrations designed for seamless access to native device features and enhanced user experiences.",
  },
  {
    icon: <ShieldAlert className="h-6 w-6 text-purple-400" />,
    title: "Secure User Authentication",
    desc: "Implementing reliable login systems, protected user access, and secure authentication workflows for modern applications.",
  },
];

const technologies = [
  {
    name: "Flutter",
    desc: "Modern UI framework for building fast, scalable cross-platform mobile applications",
  },
  {
    name: "React Native",
    desc: "JavaScript based framework for creating native like mobile experiences",
  },
  {
    name: "Dart / TypeScript",
    desc: "Modern programming languages for building structured and maintainable applications",
  },
  {
    name: "SQLite / Hive",
    desc: "Lightweight local storage solutions for offline-first mobile functionality",
  },
  {
    name: "Swift / Kotlin",
    desc: "Native development languages for iOS and Android platforms",
  },
  {
    name: "Firebase",
    desc: "Cloud based backend services for authentication, notifications, and analytics",
  },
];

export default function MobileDev() {
  return (
    <div className="page-container bg-dark-bg text-gray-300 pt-28 pb-16 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
          Mobile App Development
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          We develop modern iOS and Android applications focused on smooth
          performance, intuitive user experiences, and seamless functionality
          across every device.
        </p>
      </section>

      {/* Main Content Details */}
      <section className="max-w-6xl mx-auto px-6 py-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="mb-4 bg-blue-500/10 w-max p-4 rounded-xl border border-blue-500/20">
            <Smartphone className="h-10 w-10 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            High Performance Mobile Applications
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            Modern mobile experiences require more than just attractive
            interfaces. We build responsive and scalable applications designed
            for smooth performance, seamless navigation, and reliable
            functionality across iOS and Android devices.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm">
            By optimizing application architecture, real-time synchronization,
            and user workflows, we deliver fast, intuitive, and dependable
            mobile experiences tailored for modern businesses and users.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="space-y-4">
          {features.map((f, i) => (
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

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10 border-t border-dark-border/40 mt-16">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Our Mobile Tech Stack
          </h2>
          <p className="text-gray-400 text-sm">
            We use modern mobile technologies and reliable frameworks to build
            fast, scalable, and native like applications.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-xl border border-dark-border/50 bg-white/[0.01]"
            >
              <p className="font-semibold text-white text-sm">{tech.name}</p>
              <p className="text-[10px] text-gray-500 mt-1 leading-normal">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-dark-border/40 py-24 bg-gradient-to-r from-blue-900/10 via-dark-bg to-purple-900/10 overflow-hidden mt-16">
        {/* Background Graphic Image (VR.jpg) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-15 overflow-hidden mix-blend-screen">
          <img src={vrImg} alt="" className="w-full h-full object-cover" />
          {/* Gradient overlays to blend edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712] opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] opacity-95" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            Need a mobile app build?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Get in touch with our mobile engineering team today to review your
            system requirements and timeline.
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
