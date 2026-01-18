import React from "react";

const COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  PHP: "#4F5D95",
  Ruby: "#701516",
  default: "#8b949e",
};

export default function LanguageStats({ repos }) {
  if (!repos || repos.length === 0) return null;

  const languages = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  const total = Object.values(languages).reduce((a, b) => a + b, 0);
  const sortedLangs = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .map(([name, count]) => ({
      name,
      percentage: ((count / total) * 100).toFixed(1),
      color: COLORS[name] || COLORS.default,
    }));

  return (
    <div className="language-stats">
      <h3>Language Distribution</h3>
      <div className="lang-bar">
        {sortedLangs.map((lang) => (
          <div
            key={lang.name}
            className="lang-segment"
            style={{
              width: `${lang.percentage}%`,
              backgroundColor: lang.color,
            }}
            title={`${lang.name}: ${lang.percentage}%`}
          />
        ))}
      </div>
      <div className="lang-legend">
        {sortedLangs.map((lang) => (
          <div key={lang.name} className="legend-item">
            <span className="dot" style={{ backgroundColor: lang.color }} />
            <span className="name">{lang.name}</span>
            <span className="percent">{lang.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
