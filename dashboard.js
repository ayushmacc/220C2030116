import React, { useState } from "react";

function Dashboard() {
  const [analytics, setAnalytics] = useState({
    likes: 1200,
    comments: 450,
    shares: 300,
  });

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Analytics Overview</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <div style={{ padding: "20px", background: "#eee", borderRadius: "10px" }}>
          <h3>Likes</h3>
          <p>{analytics.likes}</p>
        </div>
        <div style={{ padding: "20px", background: "#eee", borderRadius: "10px" }}>
          <h3>Comments</h3>
          <p>{analytics.comments}</p>
        </div>
        <div style={{ padding: "20px", background: "#eee", borderRadius: "10px" }}>
          <h3>Shares</h3>
          <p>{analytics.shares}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
