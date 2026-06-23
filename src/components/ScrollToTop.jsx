import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 🔥 Prevent browser from restoring old scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 🔥 Force scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
