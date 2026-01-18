import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";

export default function Layout({ children }) {
  const { isDark } = useTheme();

  return (
    <main className={`app-container ${isDark ? "dark" : ""}`}>{children}</main>
  );
}
