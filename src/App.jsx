import React, { useEffect } from "react";
import Layout from "./components/layout/Layout.jsx";
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import Result from "./components/Result.jsx";
import Skeleton from "./components/ui/Skeleton.jsx";
import { useGithubUser } from "./hooks/useGithubUser.js";

function App() {
  const { user, loading, error, fetchUser, history, clearHistory } =
    useGithubUser();

  // Fetch 'octocat' on initial load as a default state
  useEffect(() => {
    fetchUser("octocat");
  }, [fetchUser]);

  return (
    <Layout>
      <Header />
      <Search onSearch={fetchUser} error={error} />

      {history.length > 0 && (
        <div className="search-history">
          {history.map((name) => (
            <button
              key={name}
              className="history-chip"
              onClick={() => fetchUser(name)}
            >
              <span>{name}</span>
            </button>
          ))}
          <button className="history-chip" onClick={clearHistory}>
            <span style={{ opacity: 0.5 }}>Clear</span>
          </button>
        </div>
      )}

      {loading ? (
        <div className="card">
          <Skeleton type="profile" />
        </div>
      ) : (
        user && <Result userData={user} />
      )}
    </Layout>
  );
}

export default App;
