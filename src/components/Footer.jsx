import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import whiteLogo from "../assets/whitea.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import githubIcon from "../assets/github.png";
import linkedIcon from "../assets/linked.png";

export default function Footer() {
  return (
    <footer className="relative bg-dark-bg border-t border-dark-border overflow-hidden">
      {/* Background Subtle Radial Gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-2 group w-max">
              <img
                src={whiteLogo}
                alt="WickGen"
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We create modern software solutions that help businesses grow,
              scale, and thrive in the digital era. Combining innovative
              technology with clean design, WickGen delivers powerful digital
              experiences built for the future.
            </p>
            <div className="flex items-center gap-4">
              {[
                { name: "Facebook", icon: facebookIcon, link: "#" },
                { name: "Instagram", icon: instagramIcon, link: "https://www.instagram.com/wickgenco?igshid=OGQ5ZDc2ODk2ZA%3D%3D" },
                { name: "Twitter", icon: twitterIcon, link: "https://x.com/teamwickgen" },
                { name: "GitHub", icon: githubIcon, link: "https://github.com/wickgen" },
                { name: "LinkedIn", icon: linkedIcon, link: "https://www.linkedin.com/company/wickgen-cooperation/?viewAsMember=true" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.link}
                  target={platform.link !== "#" ? "_blank" : undefined}
                  rel={platform.link !== "#" ? "noopener noreferrer" : undefined}
                  className="transition-transform duration-200 hover:scale-110 opacity-70 hover:opacity-100"
                >
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="h-[18px] w-[18px] object-contain brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Nested container for Sitemap and Get in Touch columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-7 gap-8 md:gap-12">
            {/* Quick Links (3 cols on md) */}
            <div className="col-span-1 md:col-span-3 space-y-4">
              <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
                Sitemap
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Services", path: "/services/web-development" },
                  { name: "About Us", path: "/about" },
                  { name: "Careers", path: "/careers" },
                  { name: "Contact", path: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details (4 cols on md) */}
            <div className="col-span-1 md:col-span-4 space-y-4">
              <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
                Get In Touch
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">
                    100 Tech Venture Way, Suite 400, San Francisco, CA 94107
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-white shrink-0" />
                  <a
                    href="mailto:hello@wickgen.com"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    hello@wickgen.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-white shrink-0" />
                  <a
                    href="tel:+14155552671"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    +1 (415) 555-2671
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-dark-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} WickGen. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
