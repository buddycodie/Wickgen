

import { Link } from "react-router-dom";
import {
  Cpu,
  Zap,
  HeartHandshake,
  ArrowRight,
  Globe,
  Mail,
} from "lucide-react";
import vrImg from "../assets/eco_bg.jpg";

const titleWords = [
  { text: "Where", isGradient: false },
  { text: "Wisdom", isGradient: false },
  { text: "Meets", isGradient: true },
  { text: "Innovation.", isGradient: true },
];

const coreValues = [
  {
    icon: <Cpu className="h-6 w-6 text-blue-500" />,
    title: "Engineering Excellence",
    desc: "We are committed to delivering reliable, scalable, and high-quality software solutions. Through modern development practices, thoughtful design, and attention to detail, we create digital products that perform efficiently, adapt to growth, and drive meaningful innovation.",
  },
  {
    icon: <Zap className="h-6 w-6 text-cyan-400" />,
    title: "Wisdom & Innovation",
    desc: "We combine strong technical knowledge with modern innovation to build future ready digital solutions that drive progress, create opportunities, and empower the next generation through technology.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-purple-400" />,
    title: "Unyielding Partnership",
    desc: "We believe great technology is built through trust, collaboration, and shared goals. By maintaining clear communication, transparency, and a commitment to excellence, we work closely with every project to ensure long-term success and meaningful results.",
  },
];

const team = [
  {
    name: "Anjula Wickramaarachchi",
    role: "Founder & CEO",
    bio: "Former Principal Systems Architect with 15+ years of experience designing high-throughput databases and cloud architectures for enterprise applications.",
    avatar: "AW",
    links: { website: "#", email: "mailto:alex@wickgen.com" },
  },
  {
    name: "Nirmal Ranasinghe",
    role: "Co-Founder",
    bio: "Passionate about creating fluid user flows and clean design systems. Sarah leads product strategy, bridging complex tech with human interaction.",
    avatar: "SC",
    links: { website: "#", email: "mailto:sarah@wickgen.com" },
  },
];

export default function AboutUs() {
  return (
    <div className="page-container bg-dark-bg text-gray-300 pt-28 pb-16 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center relative z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6 flex flex-wrap justify-center gap-x-[0.23em] gap-y-2">
          {titleWords.map((word, idx) => (
            <span
              key={idx}
              className={
                word.isGradient ? "gradient-text-blue font-black" : ""
              }
            >
              {word.text}
            </span>
          ))}
        </h1>
      </section>

      {/* Light Theme Middle Wrapper */}
      <div className="bg-slate-50 w-full border-t border-slate-200/50 py-8 text-slate-800 relative z-10">
        {/* Narrative Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Powering the next generation of digital innovation.
              </h2>
              <div className="h-1 w-12 bg-blue-600 rounded" />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                WickGen was founded with a vision to empower the next generation
                through technology and innovation. We believe modern digital
                solutions should not only solve problems, but also create
                opportunities, inspire growth, and help businesses move
                confidently into the future.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Driven by creativity, modern engineering, and a passion for
                innovation, we focus on building scalable, reliable, and
                user-focused software experiences that help shape the next era of
                digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 relative z-10 border-t border-slate-200 mt-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-sm">
              The values that inspire innovation, drive excellence, and shape
              every solution we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col items-start space-y-4"
              >
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-blue-600">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 relative z-10 border-t border-slate-200 mt-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Meet the Architects
            </h2>
            <p className="text-slate-600 text-sm">
              A passionate team of innovators, developers, and problemsolvers
              dedicated to building technology that empowers the next generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md group relative overflow-hidden flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Avatar Placeholder */}
                  <div className="h-16 w-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-xl font-bold text-blue-600 mb-6 group-hover:scale-105 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-xs font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex gap-4 pt-4 border-t border-slate-100 mt-auto">
                  <a
                    href={member.links.website}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    aria-label="Website"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                  <a
                    href={member.links.email}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="relative border-t border-dark-border/40 py-24 bg-gradient-to-r from-blue-900/10 via-dark-bg to-cyan-950/10 overflow-hidden mt-16">
        {/* Background Graphic Image (eco_bg.jpg) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-40 overflow-hidden">
          <img src={vrImg} alt="" className="w-full h-full object-cover" />
          {/* Gradient overlays to blend edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#010104] via-transparent to-[#010104] opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#010104] via-transparent to-[#010104] opacity-100" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            Empower Your Future With Technology.
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Let's discuss your ideas and build innovative digital solutions
            designed for long term success.
          </p>
          <Link to="/contact">
            <button className="flex items-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition-all active:scale-95 group shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
