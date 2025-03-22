import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <h2>Social Media Analytics</h2>
      <Link to="/" style={{ color: "#fff", marginLeft: "20px" }}>Dashboard</Link>
    </nav>
  );
}

export default Navbar;
