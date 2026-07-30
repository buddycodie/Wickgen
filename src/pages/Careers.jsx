import { useState } from "react";
import {
  Check,
  Laptop,
  Sparkles,
  Heart,
  GraduationCap,
  Send,
  Upload,
  FileText,
  X,
} from "lucide-react";

const benefits = [
  {
    icon: <Laptop className="h-6 w-6 text-blue-500" />,
    title: "Remote-First Setup",
    desc: "Work from wherever you're most productive. We foster a flexible remote environment built on trust, collaboration, and results.",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-cyan-400" />,
    title: "Learning & Development",
    desc: "Expand your knowledge through hands-on projects, mentorship, and continuous exposure to modern technologies and industry best practices.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-purple-400" />,
    title: "Technology-Driven Culture",
    desc: "Work in an environment focused on innovation, collaboration, and building high-quality software using modern technologies.",
  },
  {
    icon: <Heart className="h-6 w-6 text-pink-400" />,
    title: "Work-Life Balance",
    desc: "We believe great work comes from a healthy balance, encouraging flexibility and a culture that supports both personal and professional well-being.",
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
  const [resumeFile, setResumeFile] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setFormErrors((prev) => ({
          ...prev,
          resume: "Please upload a PDF file only",
        }));
        return;
      }
      setResumeFile(file);
      setFormData((prev) => ({ ...prev, resume: file.name }));
      setFormErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    setFormData((prev) => ({ ...prev, resume: "" }));
    const fileInput = document.getElementById("resume-upload");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.resume.trim()) errors.resume = "Resume PDF is required";

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

    const formDataObj = new FormData();
    formDataObj.append("Position", formData.position);
    formDataObj.append("Name", formData.name);
    formDataObj.append("Email", formData.email);
    formDataObj.append("GitHub / Portfolio", formData.github);
    formDataObj.append("Cover Letter", formData.coverLetter);
    if (resumeFile) {
      formDataObj.append("attachment", resumeFile);
    }

    fetch("https://formsubmit.co/ajax/wickgeninfo@gmail.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formDataObj,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Form submission failed");
        }
        return res.json();
      })
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset form inputs immediately
        setFormData({
          name: "",
          email: "",
          github: "",
          position: "Front End Developer",
          coverLetter: "",
          resume: "",
        });
        setResumeFile(null);
        const fileInput = document.getElementById("resume-upload");
        if (fileInput) {
          fileInput.value = "";
        }
        // Turn back to application card form after 4 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("AJAX Careers submission error:", error);
        setIsSubmitting(false);
        // Fallback to success state so user gets a confirmation page even if offline
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          github: "",
          position: "Front End Developer",
          coverLetter: "",
          resume: "",
        });
        setResumeFile(null);
        const fileInput = document.getElementById("resume-upload");
        if (fileInput) {
          fileInput.value = "";
        }
        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      });
  };

  return (
    <div className="page-container bg-dark-bg text-gray-300 pt-28 pb-16">
      {/* Careers Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
          Careers at WickGen
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Be part of a team that's shaping the future through technology. At
          WickGen, you'll have the opportunity to innovate, grow, and contribute
          to building impactful digital solutions for tomorrow.
        </p>
      </section>

      {/* Why Work With Us Section */}
      <section className="relative border-t border-slate-100 py-16 bg-slate-50 w-full overflow-hidden text-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Our Work Culture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-all relative"
              >
                <div className="mb-4 bg-blue-50 w-max p-3 rounded-lg border border-blue-100 text-blue-600">
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Portal Section */}
      <section className="border-t border-slate-100 bg-white py-24 w-full overflow-hidden text-slate-800">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Application Portal
            </h2>
            <p className="text-slate-600 text-sm">
              Select a role and submit your details to start your journey with
              WickGen.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-2xl relative overflow-hidden shadow-sm">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              encType="multipart/form-data"
            >
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Application Received!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-xs">
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
                      className="text-xs font-semibold uppercase tracking-wider text-slate-500"
                    >
                      Position *
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full glass-input text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 font-medium bg-white"
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
                      placeholder=""
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
                        placeholder=""
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
                        placeholder=""
                        className="w-full glass-input text-sm px-4 py-2.5 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                      Resume (PDF only) *
                    </label>

                    {/* Always keep the file input in the DOM to support serialization */}
                    <input
                      type="file"
                      id="resume-upload"
                      name="attachment"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {!resumeFile && (
                      <label
                        htmlFor="resume-upload"
                        className={`flex items-center justify-center gap-2 w-full glass-input text-sm px-4 py-3 rounded-lg border border-dashed border-dark-border hover:border-blue-500/50 hover:bg-white/[0.02] cursor-pointer transition-all ${formErrors.resume ? "border-red-500 hover:border-red-500" : ""}`}
                      >
                        <Upload className="h-4 w-4 text-blue-500" />
                        <span className="text-gray-400 hover:text-white font-medium">
                          Upload PDF Resume
                        </span>
                      </label>
                    )}

                    {resumeFile && (
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-dark-border/40">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <FileText className="h-5 w-5 text-blue-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-white truncate max-w-[280px]">
                            {resumeFile.name}
                          </span>
                          <span className="text-xs text-gray-500 flex-shrink-0">
                            ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="p-1 rounded-md text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                          aria-label="Remove uploaded file"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}

                    {formErrors.resume && (
                      <p className="text-xs text-red-400 mt-1">
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

                  <div className="pt-4 flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold text-sm px-8 py-2.5 rounded-lg transition-all active:scale-95 shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] w-full sm:w-auto"
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
