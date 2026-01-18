import React from "react";
import Card from "./ui/Card.jsx";
import { motion } from "framer-motion";
import LanguageStats from "./LanguageStats.jsx";

export default function Result({ userData }) {
  const [copied, setCopied] = React.useState(false);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(userData.html_url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="result-card">
        <div className="profile-header">
          <img
            src={userData.avatar_url || "/assets/image-user-placeholder.png"}
            alt={`${userData.login} avatar`}
            className="profile-avatar"
          />
          <div className="profile-info">
            <div className="profile-name-container">
              <div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <h2 className="profile-name">
                    {userData.name || userData.login}
                  </h2>
                  <span className={`type-badge ${userData.type.toLowerCase()}`}>
                    {userData.type}
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <a
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-username"
                  >
                    @{userData.login}
                  </a>
                  <button onClick={handleCopy} className="share-btn">
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                </div>
              </div>
              <p className="profile-joined">
                Joined {formatDate(userData.created_at)}
              </p>
            </div>

            <p className="profile-bio">
              {userData.bio || "This profile has no bio"}
            </p>

            <div className="profile-stats">
              <div className="stat-item">
                <span>Repos</span>
                <strong>{userData.public_repos}</strong>
              </div>
              <div className="stat-item">
                <span>Followers</span>
                <strong>{userData.followers}</strong>
              </div>
              <div className="stat-item">
                <span>Following</span>
                <strong>{userData.following}</strong>
              </div>
            </div>

            <div className="profile-links">
              <div
                className={`link-item ${!userData.location ? "disabled" : ""}`}
              >
                <img src="/assets/icon-location.svg" alt="" />
                <span>{userData.location || "Not Available"}</span>
              </div>
              <div className={`link-item ${!userData.blog ? "disabled" : ""}`}>
                <img src="/assets/icon-website.svg" alt="" />
                {userData.blog ? (
                  <a
                    href={userData.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userData.blog}
                  </a>
                ) : (
                  <span>Not Available</span>
                )}
              </div>
              <div
                className={`link-item ${!userData.twitter_username ? "disabled" : ""}`}
              >
                <img src="/assets/icon-twitter.svg" alt="" />
                {userData.twitter_username ? (
                  <a
                    href={`https://twitter.com/${userData.twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userData.twitter_username}
                  </a>
                ) : (
                  <span>Not Available</span>
                )}
              </div>
              <div
                className={`link-item ${!userData.company ? "disabled" : ""}`}
              >
                <img src="/assets/icon-company.svg" alt="" />
                <span>{userData.company || "Not Available"}</span>
              </div>
            </div>

            <LanguageStats repos={userData.top_repos} />

            {userData.top_repos && userData.top_repos.length > 0 && (
              <div className="repos-section">
                <h3>Top Repositories</h3>
                <div className="repos-grid">
                  {userData.top_repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-card"
                    >
                      <div>
                        <div className="repo-name">{repo.name}</div>
                        <p className="repo-desc">
                          {repo.description || "No description provided"}
                        </p>
                      </div>
                      <div className="repo-meta">
                        <span>⭐ {repo.stargazers_count}</span>
                        <span>🍴 {repo.forks_count}</span>
                        {repo.language && <span>● {repo.language}</span>}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
