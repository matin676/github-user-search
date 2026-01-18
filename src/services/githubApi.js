const GITHUB_API_BASE = "https://api.github.com";

export const githubService = {
  getUser: async (username) => {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
    if (!response.ok) {
      if (response.status === 404) throw new Error("User not found");
      throw new Error("An error occurred while fetching user data");
    }
    return response.json();
  },

  getRepos: async (username) => {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=6`,
    );
    if (!response.ok) return [];
    return response.json();
  },
};
