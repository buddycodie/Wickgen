import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import whiteLogo from "../assets/whitea.png";

const navItems = [
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update visibility (scroll down hides, scroll up shows)
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY) {
          // Scroll down
          setIsVisible(false);
          setIsHovered(false);
        } else {
          // Scroll up
          setIsVisible(true);
        }
      } else {
        // Near the top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle window resize for responsive layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isExpanded = !scrolled || isVisible || isHovered || mobileMenuOpen;

  const containerVariants = {
    expanded: {
      width: isMobile ? "92%" : (scrolled ? "780px" : "840px"),
      height: scrolled ? "52px" : "60px",
      borderRadius: scrolled ? "26px" : "30px",
      backgroundColor: scrolled ? "rgba(3, 7, 18, 0.75)" : "rgba(3, 7, 18, 0.2)",
      borderColor: scrolled ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)",
      marginTop: scrolled ? "12px" : "16px",
      opacity: 1,
    },
    collapsed: {
      width: "115px",
      height: "36px",
      borderRadius: "18px",
      backgroundColor: "rgba(3, 7, 18, 0.95)",
      borderColor: "rgba(255, 255, 255, 0.15)",
      marginTop: "12px",
      opacity: 1,
    }
  };

  const springTransition = {
    type: "spring",
    stiffness: 280,
    damping: 22,
    mass: 0.8,
  };

  return (
    <>
      {/* Invisible hover trigger zone at the top of the viewport */}
      {!isExpanded && (
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[320px] h-10 z-40 pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
        />
      )}

      <motion.nav
        variants={containerVariants}
        animate={isExpanded ? "expanded" : "collapsed"}
        initial={false}
        transition={springTransition}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          if (!isExpanded) setIsHovered(true);
        }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 border backdrop-blur-md text-white flex items-center justify-center select-none ${isExpanded ? "overflow-visible pointer-events-auto" : "overflow-hidden pointer-events-auto md:pointer-events-none"}`}
      >
        {/* Expanded Full Content */}
        <motion.div
          animate={{ opacity: isExpanded ? 1 : 0, scale: isExpanded ? 1 : 0.9 }}
          initial={false}
          transition={{ duration: 0.15 }}
          className="w-full h-full flex items-center justify-between px-6 md:px-8"
          style={{ pointerEvents: isExpanded ? "auto" : "none" }}
        >
          {/* Logo */}
          <a
            href={import.meta.env.BASE_URL}
            onClick={(e) => {
              e.stopPropagation();
              setIsHovered(false);
            }}
            className="flex items-center gap-2 group shrink-0"
          >
            <img
              src={whiteLogo}
              alt="WickGen"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-white ${location.pathname.startsWith("/services") ? "text-white" : "text-gray-300"}`}
              >
                Services
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 top-full pt-2 w-64 z-50 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-150 origin-top-left pointer-events-none group-hover:pointer-events-auto">
                <div className="rounded-xl border border-white/10 bg-[#030712]/80 p-2 shadow-xl backdrop-blur-md">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${location.pathname === item.path ? "text-gray-400 bg-white/[0.02]" : "text-white hover:text-gray-400 hover:bg-white/5"}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other static links */}
            {navItems.map((item) => {
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
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <Link to="/contact">
              <button className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-3.5 py-1.5 rounded-lg transition-all duration-200 active:scale-95 group shadow-sm hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                Start Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-1.5 text-gray-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </motion.div>

        {/* Collapsed State Content */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 flex items-center justify-between px-4 w-full h-full pointer-events-none"
            >
              <img
                src={whiteLogo}
                alt="WickGen"
                className="h-4 w-auto object-contain"
              />
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

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
                          className={`text-lg font-medium transition-colors ${location.pathname === item.path ? "text-gray-400" : "text-white hover:text-gray-400"}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other static links */}
              {navItems.map((item) => {
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
