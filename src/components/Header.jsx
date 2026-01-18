import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1>devfinder</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        <span>{isDark ? "LIGHT" : "DARK"}</span>
        <img
          src={isDark ? "/assets/icon-sun.svg" : "/assets/icon-moon.svg"}
          alt={isDark ? "sun" : "moon"}
        />
      </button>
    </header>
  );
}
