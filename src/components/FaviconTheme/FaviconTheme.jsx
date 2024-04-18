import { useState, useRef, useEffect } from "react";

export default function FaviconTheme() {
  const [darkTheme, setDarkTheme] = useState(false);
  const faviconRef = useRef(null);

  const lightFaviconPath = "/logo-light.png";
  const darkFaviconPath = "/logo-dark.png";

  useEffect(() => {
    const updateFavicon = () => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        faviconRef.current.href = darkFaviconPath;
        setDarkTheme(true);
      } else {
        faviconRef.current.href = lightFaviconPath;
        setDarkTheme(false);
      }
    };

    const isDark = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChangeTheme = () => {
      updateFavicon();
    };

    isDark.addEventListener("change", handleChangeTheme);

    return () => {
      isDark.removeEventListener("change", handleChangeTheme);
    };
  }, []);

  return null;
}
