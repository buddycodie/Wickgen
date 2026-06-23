import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Activity, Calendar, Trophy, ArrowRight } from 'lucide-react';
import vrImg from '../assets/VR.jpg';

const features = [
  {
    icon: <Activity className="h-6 w-6 text-blue-500" />,
    title: 'Activity Telemetry & Sensors',
    desc: 'Aggregate high-frequency sensor readings (accelerometer, gyroscope, GPS) to map workouts in real-time with negligible battery usage.'
  },
  {
    icon: <Heart className="h-6 w-6 text-cyan-400" />,
    title: 'Heart Rate Zone Analytics',
    desc: 'Dynamic SVG heart rate zone charts integrating with wearable sensor bluetooth logs (BLE) for real-time training feedback.'
  },
  {
    icon: <Calendar className="h-6 w-6 text-purple-400" />,
    title: 'Interactive Workout Builder',
    desc: 'Let users schedule workout calendars and drag-and-drop exercises. Fully operational offline with automatic cloud synchronization.'
  }
];

const technologies = [
  { name: 'Flutter & Dart', desc: 'Sleek cross-platform client app core' },
  { name: 'Node.js / Express', desc: 'Secure backend API routing layer' },
  { name: 'Firebase Firestore', desc: 'Real-time database sync and authentication' },
  { name: 'SQLite Caching', desc: 'Robust local data offline storage' },
  { name: 'BLE API Integration', desc: 'Bluetooth connection with fitness heart rate straps' },
  { name: 'Google Maps SDK', desc: 'Route tracking and GPX data imports' }
];

export default function FitGenCore() {
  return (
    <div className="page-container bg-dark-bg text-gray-300 pt-28 pb-16 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center relative z-10">
        <span className="text-blue-500 text-xs font-semibold uppercase tracking-widest font-mono">Flagship Product</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
          FitGenCore Ecosystem
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          FitGenCore is the ultimate gym management suite and member application ecosystem. Combining sensor aggregation, real-time heart rate zones telemetry, and booking pipelines.
        </p>
      </section>

      {/* Main Content Details */}
      <section className="max-w-6xl mx-auto px-6 py-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="mb-4 bg-blue-500/10 w-max p-4 rounded-xl border border-blue-500/20">
            <Trophy className="h-10 w-10 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">A case study in mobile performance & telemetry.</h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            WickGen designed and built FitGenCore to demonstrate high-performance mobile and backend systems engineering for the fitness market. We solved battery drain issues by writing optimized background isolates in Dart and throttling local disk writes.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm">
            Whether importing running routes, synchronizing heart rate zones in real-time, or caching schedules offline, FitGenCore stands as a benchmark of what modern mobile architectures can achieve under load.
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
              <div className="mt-1 bg-white/5 p-2 rounded-lg shrink-0">{f.icon}</div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">{f.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10 border-t border-dark-border/40 mt-16">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">FitGenCore Technology Stack</h2>
          <p className="text-gray-400 text-sm">We used a variety of modern protocols to structure FitGenCore.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="p-4 rounded-xl border border-dark-border/50 bg-white/[0.01]">
              <p className="font-semibold text-white text-sm">{tech.name}</p>
              <p className="text-[10px] text-gray-500 mt-1 leading-normal">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-dark-border/40 py-24 bg-gradient-to-r from-blue-900/10 via-dark-bg to-cyan-950/10 overflow-hidden mt-16">
        {/* Background Graphic Image (VR.jpg) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-15 overflow-hidden mix-blend-screen">
          <img 
            src={vrImg} 
            alt="" 
            className="w-full h-full object-cover" 
          />
          {/* Gradient overlays to blend edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712] opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] opacity-95" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Interested in licensing FitGenCore?</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Get in touch with our engineering team today to review our white-label SaaS options and features licensing.
          </p>
          <Link to="/contact">
            <button className="flex items-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition-all active:scale-95 group shadow-sm hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              Inquire Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 text-white" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
