import React from "react";

export default function Skeleton({ type }) {
  const classes = `skeleton ${type}`;

  if (type === "profile") {
    return (
      <div className="skeleton-wrapper profile">
        <div className="skeleton avatar"></div>
        <div className="skeleton-info">
          <div className="skeleton title"></div>
          <div className="skeleton subtitle"></div>
          <div className="skeleton text"></div>
        </div>
      </div>
    );
  }

  return <div className={classes}></div>;
}
