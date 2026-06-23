import { useState } from "react";
import {
  Check,
  Laptop,
  Sparkles,
  Heart,
  GraduationCap,
  Send,
} from "lucide-react";

const benefits = [
  {
    icon: <Laptop className="h-6 w-6 text-blue-500" />,
    title: "Remote-First Setup",
    desc: "Work from anywhere in the world. We optimize for asynchronous communication and minimal synchronous meetings.",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-cyan-400" />,
    title: "Learning Stipend",
    desc: "$2,000 annual budget for courses, technical books, certificates, or attending international conferences.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-purple-400" />,
    title: "Premium Hardware",
    desc: "Get equipped with an Apple MacBook Pro M-series chip, high-end monitor, and workspace accessories budget.",
  },
  {
    icon: <Heart className="h-6 w-6 text-pink-400" />,
    title: "Health & Wellness",
    desc: "Comprehensive medical stipends, mental health support access, and local gym membership coverage.",
  },
];



export default function Careers() {
  // Application Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    position: "Front End Developer",
    coverLetter: "",
    resume: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.resume.trim())
      errors.resume = "Resume link or upload is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          github: "",
          position: "Front End Developer",
          coverLetter: "",
          resume: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="page-container bg-dark-bg text-gray-300 pt-28 pb-16">
      {/* Careers Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
        <span className="text-blue-500 text-xs font-semibold uppercase tracking-widest">
          Build the Future
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
          Careers at WickGen
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          We are a distributed team of engineers and designers crafting premium
          web systems. Work from where you want, on complex technical
          challenges.
        </p>
      </section>

      {/* Why Work With Us Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-500 text-xs font-semibold uppercase tracking-widest">
            Benefits
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Our Work Culture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-6 rounded-2xl bg-white/[0.02] border border-dark-border/40 relative"
            >
              <div className="mb-4 bg-white/5 w-max p-3 rounded-lg border border-white/5">
                {b.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {b.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Application Portal Section */}
      <section className="border-t border-dark-border/40 bg-black/10 py-24">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="text-blue-500 text-xs font-semibold uppercase tracking-widest">
              Apply Online
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Application Portal
            </h2>
            <p className="text-gray-400 text-sm">
              Select a role and submit your details to start your journey with
              WickGen.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-5">
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Application Received!
                  </h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thank you for applying. We have received your credentials
                    and our hiring managers will review them and follow up
                    within 3 business days.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-1">
                    <label
                      htmlFor="position"
                      className="text-xs font-semibold uppercase tracking-wider text-gray-400"
                    >
                      Position *
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full glass-input text-sm px-4 py-2.5 rounded-lg bg-[#0b0f19] focus:outline-none focus:border-blue-500 text-white font-medium"
                    >
                      <option value="Front End Developer">
                        Front End Developer
                      </option>
                      <option value="Backend Developer">
                        Backend Developer
                      </option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="Flutter Developer">
                        Flutter Developer
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider text-gray-400"
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
                      placeholder="John Doe"
                      className={`w-full glass-input text-sm px-4 py-2.5 rounded-lg ${formErrors.name ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-400">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wider text-gray-400"
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
                        placeholder="johndoe@email.com"
                        className={`w-full glass-input text-sm px-4 py-2.5 rounded-lg ${formErrors.email ? "border-red-500 focus:border-red-500" : ""}`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-400">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="github"
                        className="text-xs font-semibold uppercase tracking-wider text-gray-400"
                      >
                        Portfolio / GitHub Link
                      </label>
                      <input
                        type="url"
                        id="github"
                        name="github"
                        value={formData.github}
                        onChange={handleInputChange}
                        placeholder="https://github.com/johndoe"
                        className="w-full glass-input text-sm px-4 py-2.5 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="resume"
                      className="text-xs font-semibold uppercase tracking-wider text-gray-400"
                    >
                      Resume Link or Text *
                    </label>
                    <input
                      type="text"
                      id="resume"
                      name="resume"
                      required
                      value={formData.resume}
                      onChange={handleInputChange}
                      placeholder="Link to PDF/Drive, or short profile text"
                      className={`w-full glass-input text-sm px-4 py-2.5 rounded-lg ${formErrors.resume ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                    {formErrors.resume && (
                      <p className="text-xs text-red-400">
                        {formErrors.resume}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="coverLetter"
                      className="text-xs font-semibold uppercase tracking-wider text-gray-400"
                    >
                      Cover Letter
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows="4"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us briefly why you want to build with WickGen..."
                      className="w-full glass-input text-sm px-4 py-2.5 rounded-lg resize-none"
                    />
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold text-sm px-6 py-2 rounded-lg transition-all active:scale-95 shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-1 h-4 w-4 text-white"
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
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="h-4 w-4 text-white" />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
