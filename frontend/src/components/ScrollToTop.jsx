import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // Stop the browser from restoring the old scroll position
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) return; // let #anchor links work

    const toTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    toTop();

    // Pages are lazy loaded, so scroll again after they have rendered
    const timers = [50, 150, 400].map((ms) => setTimeout(toTop, ms));
    return () => timers.forEach(clearTimeout);
  }, [pathname, hash]);

  return null;
}