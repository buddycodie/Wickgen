import { motion } from "framer-motion";
import { ShieldCheck, Eye, Lock, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="page-container bg-dark-bg text-gray-300 pt-28 pb-16 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-blue-500 text-xs font-semibold uppercase tracking-widest font-mono"
        >
          Legal Documentation
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight max-w-4xl leading-tight font-sans"
        >
          Privacy Policy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-sm font-medium tracking-wide"
        >
          Effective Date: June 21, 2026 | Last Updated: June 21, 2026
        </motion.p>
      </section>

      {/* Narrative Section */}
      <section className="max-w-4xl mx-auto px-6 py-8 relative z-10 space-y-12">
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            At WickGen, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, license our products (such as FitGenCore), or engage with our services.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our software products.
          </p>
        </div>

        {/* Highlighted core pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-xl bg-white/[0.01] border border-dark-border/40 space-y-3">
            <Eye className="h-6 w-6 text-blue-500" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Transparency</h3>
            <p className="text-gray-400 text-xs leading-relaxed">We outline exactly what telemetry and server information we process with zero hidden hooks.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/[0.01] border border-dark-border/40 space-y-3">
            <Lock className="h-6 w-6 text-cyan-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Data Security</h3>
            <p className="text-gray-400 text-xs leading-relaxed">All information is encrypted both in transit (TLS 1.3) and at rest (AES-256 standards).</p>
          </div>
          <div className="p-6 rounded-xl bg-white/[0.01] border border-dark-border/40 space-y-3">
            <ShieldCheck className="h-6 w-6 text-purple-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">User Rights</h3>
            <p className="text-gray-400 text-xs leading-relaxed">You retain the right to query, export, or wipe your databases and credentials on request.</p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 pt-8 border-t border-dark-border/40">
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans">1. Information We Collect</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We collect information that you provide directly to us (such as when filling out contact forms, subscribing to newsletters, or submitting job applications). This may include your name, email address, phone number, and resume attachment.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              For users of our flagship **FitGenCore Platform**, we process aggregate, high-frequency activity logs, bluetooth sensor statuses (BLE), offline workout counts, and billing data as authorized by licensing contracts.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans">2. How We Use Your Data</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We process your information to deliver high-quality services, license software assets, evaluate candidates for careers, reply to contact requests, coordinate server deployments, and prevent telemetry bottlenecks.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans">3. Sharing and Disclosures</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share data with secure third-party processors (such as Stripe for payments, AWS for server databases, or post-delivery analytics tools) under strict NDA conditions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans">4. Security of Your Information</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal info you provide to us, please be aware that no security measures are perfect or impenetrable.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans">5. Contact Us</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              If you have questions or comments about this Privacy Policy, please reach out to our team at **privacy@wickgen.com**.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
