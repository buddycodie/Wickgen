import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";
import Map from "../components/Map";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    let err = {};
    if (!formData.name.trim()) err.name = "Full name is required";
    if (!formData.email.trim()) {
      err.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) err.subject = "Subject is required";
    if (!formData.message.trim()) err.message = "Message is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="page-container bg-dark-bg text-gray-300 pt-28 pb-16">
      {/* Contact Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
          Contact Us
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Have an idea, project, or business challenge in mind? Get in touch
          with us and let's explore how technology can help bring your vision to
          life.
        </p>
      </section>

      {/* Grid Container */}
      <section className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form Column (6 cols) */}
        <div className="lg:col-span-6 w-full flex justify-center">
          <div className="w-full max-w-[450px] glass-card p-5 rounded-2xl relative">
            <div className="mb-3">
              <h2 className="text-xl font-bold text-white mb-1">
                Send us a message
              </h2>
              <p className="text-gray-400 text-xs">
                We typically reply within 24 business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {isSuccess && (
                <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>
                    Thank you! Your message has been sent successfully. We will
                    follow up soon.
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder=""
                    className={`w-full glass-input text-xs px-3 py-2 rounded-lg ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-400">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder=""
                    className={`w-full glass-input text-xs px-3 py-2 rounded-lg ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="subject"
                  className="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Product Partnership, Consultation..."
                  className={`w-full glass-input text-xs px-3 py-2 rounded-lg ${errors.subject ? "border-red-500 focus:border-red-500" : ""}`}
                />
                {errors.subject && (
                  <p className="text-[10px] text-red-400">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder=""
                  className={`w-full glass-input text-xs px-3 py-2 rounded-lg resize-none ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="text-[10px] text-red-400">{errors.message}</p>
                )}
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold text-xs px-5 py-1.5 rounded-lg transition-all duration-200 active:scale-95 shadow-sm hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] w-max"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-1 h-3.5 w-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-3.5 w-3.5 text-white" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Company Info & Map (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Info Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-dark-border/40 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-white shrink-0" />
                <h4 className="font-semibold text-white text-sm">
                  Headquarters
                </h4>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                100 Tech Venture Way, Suite 400
                <br />
                San Francisco, CA 94107
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-white shrink-0" />
                <h4 className="font-semibold text-white text-sm">Hours</h4>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM PST
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white shrink-0" />
                <h4 className="font-semibold text-white text-sm">Emails</h4>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                General:{" "}
                <a
                  href="mailto:hello@wickgen.com"
                  className="hover:text-white transition-colors"
                >
                  hello@wickgen.com
                </a>
                <br />
                Careers:{" "}
                <a
                  href="mailto:jobs@wickgen.com"
                  className="hover:text-white transition-colors"
                >
                  jobs@wickgen.com
                </a>
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white shrink-0" />
                <h4 className="font-semibold text-white text-sm">Phone</h4>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Office:{" "}
                <a
                  href="tel:+14155552671"
                  className="hover:text-white transition-colors"
                >
                  +1 (415) 555-2671
                </a>
              </p>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="flex-grow min-h-[300px]">
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
}
