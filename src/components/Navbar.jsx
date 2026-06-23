import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import whiteLogo from "../assets/whitea.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const serviceItems = [
  { name: "Web Development", path: "/services/web-development" },
  { name: "Mobile App Development", path: "/services/mobile-development" },
  { name: "Admin Dashboard Systems", path: "/services/admin-dashboards" },
  { name: "SaaS Product Development", path: "/services/saas-development" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (!mobileMenuOpen && !mobileServicesOpen) return;

    const timeoutId = window.setTimeout(() => {
      setMobileMenuOpen(false);
      setMobileServicesOpen(false);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location, mobileMenuOpen, mobileServicesOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4 shadow-lg shadow-black/10" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={whiteLogo}
              alt="WickGen"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {/* Home Link */}
            <Link
              to="/"
              className={`relative text-sm font-medium transition-colors duration-200 hover:text-white ${location.pathname === "/" ? "text-white" : "text-gray-300"}`}
            >
              Home
              {location.pathname === "/" && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-blue-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-white ${location.pathname.startsWith("/services") ? "text-white" : "text-gray-300"}`}
              >
                Services
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 top-full pt-2 w-64 z-50 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-150 origin-top-left pointer-events-none group-hover:pointer-events-auto">
                <div className="rounded-xl border border-dark-border bg-dark-card p-2 shadow-xl backdrop-blur-md">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block rounded-lg px-4 py-2.5 text-xs font-semibold hover:bg-white/5 hover:text-white transition-colors ${location.pathname === item.path ? "text-blue-400 bg-white/[0.02]" : "text-gray-400"}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other static links */}
            {navItems.slice(1).map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative text-sm font-medium transition-colors duration-200 hover:text-white ${isActive ? "text-white" : "text-gray-300"}`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-blue-500 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-3.5 py-1.5 rounded-lg transition-all duration-200 active:scale-95 group shadow-sm hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                Start Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-gray-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-dark-bg/98 backdrop-blur-xl flex flex-col justify-center px-8 pt-20 overflow-y-auto"
          >
            {/* Background Grid Pattern for texture */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="flex flex-col gap-5 text-center my-auto">
              {/* Home Link */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-semibold tracking-wide ${location.pathname === "/" ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
              >
                Home
              </Link>

              {/* Services Mobile Accordion Trigger */}
              <div className="space-y-3">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-center gap-1.5 text-2xl font-semibold tracking-wide text-gray-300 hover:text-white`}
                >
                  Services
                  <ChevronDown
                    className={`h-6 w-6 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-3 mt-1.5 pl-4"
                    >
                      {serviceItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`text-lg font-medium transition-colors ${location.pathname === item.path ? "text-blue-400" : "text-gray-400 hover:text-white"}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other static links */}
              {navItems.slice(1).map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-semibold tracking-wide ${isActive ? "text-blue-500" : "text-gray-300 hover:text-white"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="mt-6 flex flex-col gap-3 w-full">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg py-2.5 rounded-xl transition-all shadow-lg shadow-black/10 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    Start Project
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
