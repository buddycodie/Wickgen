import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="page-container bg-dark-bg text-gray-300 pt-28 pb-16 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight max-w-4xl leading-tight font-sans"
        >
          Terms of Service
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-sm font-medium tracking-wide"
        >
          Effective Date: June 20, 2026
        </motion.p>
      </section>

      {/* Narrative Section */}
      <section className="relative border-t border-slate-100 py-16 bg-white w-full overflow-hidden text-black">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Terms of Service Section */}
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-6 w-6 text-blue-500" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight font-sans">
                Terms of Service
              </h2>
            </div>
            <p className="text-black text-xs font-medium tracking-wide">
              Please review these Terms carefully.
            </p>
          </div>

          <div className="space-y-8 pt-4 border-t border-slate-200">
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight font-sans">
                1. Introduction
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Welcome to WickGen. These Terms of Service ("Terms") govern your
                access to and use of our website and any content, information,
                and services made available through it.
              </p>
              <p className="text-black text-sm leading-relaxed">
                By accessing or using this website, you agree to be bound by
                these Terms. If you do not agree with any part of these Terms,
                please discontinue use of the website.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight font-sans">
                2. Use of the Website
              </h3>
              <p className="text-black text-sm leading-relaxed">
                You agree to use this website only for lawful purposes and in a
                manner that does not violate any applicable laws, regulations,
                or the rights of others.
              </p>
              <p className="text-black text-sm leading-relaxed font-semibold">
                You must not:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-black text-sm">
                <li>
                  Attempt to gain unauthorized access to the website, servers,
                  or systems.
                </li>
                <li>
                  Disrupt or interfere with the operation or security of the
                  website.
                </li>
                <li>
                  Use the website for fraudulent, harmful, or unlawful
                  activities.
                </li>
                <li>
                  Copy, reproduce, or distribute website content without
                  authorization.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight font-sans">
                3. Intellectual Property
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Unless otherwise stated, all content available on this website,
                including but not limited to text, graphics, branding, logos,
                designs, software, and other materials, is the property of
                WickGen or its licensors and is protected by applicable
                intellectual property laws.
              </p>
              <p className="text-black text-sm leading-relaxed">
                No content from this website may be copied, modified,
                reproduced, published, or distributed without prior written
                permission.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight font-sans">
                4. Service Information
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Information presented on this website is provided for general
                informational purposes only. While we strive to ensure accuracy,
                we do not guarantee that all content is complete, accurate, or
                up to date at all times.
              </p>
              <p className="text-black text-sm leading-relaxed">
                Descriptions of services, technologies, projects, and
                capabilities may be updated, modified, or removed without prior
                notice.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight font-sans">
                5. Third-Party Links
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Our website may contain links to third-party websites or
                services for informational or convenience purposes.
              </p>
              <p className="text-black text-sm leading-relaxed">
                WickGen does not control and is not responsible for the content,
                policies, security, or practices of any third-party websites.
                Accessing third-party websites is done at your own discretion
                and risk.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight font-sans">
                6. Disclaimer of Warranties
              </h3>
              <p className="text-black text-sm leading-relaxed">
                This website is provided on an "as is" and "as available" basis.
                To the fullest extent permitted by law, WickGen makes no
                warranties, express or implied, regarding website availability,
                accuracy of information, reliability of content, security of
                transmissions, or freedom from errors, interruptions, or
                technical issues. Your use of the website is at your own risk.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight font-sans">
                7. Limitation of Liability
              </h3>
              <p className="text-black text-sm leading-relaxed">
                To the maximum extent permitted by applicable law, WickGen shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from or related to
                your use of the website, inability to access the website,
                reliance on website content, technical failures, or unauthorized
                access to information. Nothing in these Terms excludes liability
                that cannot legally be excluded under applicable law.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight font-sans">
                8. User Submissions
              </h3>
              <p className="text-black text-sm leading-relaxed">
                If you submit information through contact forms, inquiries, or
                other communications, you represent that the information
                provided is accurate and does not violate the rights of any
                third party. By submitting information, you grant WickGen the
                right to review and respond to your inquiry as necessary.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight font-sans">
                9. Privacy
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Your use of the website is also governed by our Privacy Policy,
                which explains how information may be collected and processed.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight font-sans">
                10. Changes to These Terms
              </h3>
              <p className="text-black text-sm leading-relaxed">
                We reserve the right to modify these Terms at any time without
                prior notice. Updated versions will be posted on this page with
                a revised effective date. Continued use of the website after any
                changes constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight font-sans">
                11. Governing Law
              </h3>
              <p className="text-black text-sm leading-relaxed">
                These Terms shall be governed and interpreted in accordance with
                the laws applicable within the jurisdiction in which WickGen
                operates, without regard to conflict of law principles.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight font-sans">
                12. Contact Information
              </h3>
              <p className="text-black text-sm leading-relaxed">
                If you have questions regarding these Terms of Service, please
                contact us through the contact information available on our
                website.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
