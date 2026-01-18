import { useState, useCallback } from "react";
import { githubService } from "../services/githubApi.js";

const CACHE_KEY = "github_user_cache_v2";
const HISTORY_KEY = "github_search_history";

export const useGithubUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  });

  const fetchUser = useCallback(
    async (username) => {
      if (!username || !username.trim()) return;

      setLoading(true);
      setError(null);

      try {
        // Basic caching logic
        const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}");
        if (
          cache[username] &&
          Date.now() - cache[username].timestamp < 3600000
        ) {
          setUser(cache[username].data);
          setLoading(false);
          return;
        }

        // Fetch user and repos in parallel
        const [userData, repos] = await Promise.all([
          githubService.getUser(username),
          githubService.getRepos(username),
        ]);

        const combinedData = { ...userData, top_repos: repos };

        // Update cache
        cache[username] = { data: combinedData, timestamp: Date.now() };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cache));

        // Update history
        const newHistory = [
          username,
          ...history.filter((h) => h !== username),
        ].slice(0, 5);
        setHistory(newHistory);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));

        setUser(combinedData);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    },
    [history],
  );

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  };

  return { user, loading, error, fetchUser, history, clearHistory };
};
