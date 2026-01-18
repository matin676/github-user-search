import React, { useState } from "react";

export default function Search({ onSearch, error }) {
  const [usernameInput, setUsernameInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameInput.trim()) {
      onSearch(usernameInput);
    }
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <img src="/assets/icon-search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        {error && <p className="error-msg">{error}</p>}
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
