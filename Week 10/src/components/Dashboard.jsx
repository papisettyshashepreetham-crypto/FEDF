import { Link } from "react-router-dom";
import { Trash2, Book, Shield, Users } from "lucide-react";

function Dashboard() {
  return (
    <div className="card card-lg fade-in" style={{ width: "100%", maxWidth: "800px" }}>
      <div style={{ marginBottom: "2rem" }}>
        <h2 className="title-gradient">Librarian Command Dashboard</h2>
        <p className="subtitle">Welcome back. Select a panel below to manage library operations.</p>
      </div>

      <div className="dashboard-grid">
        <div className="stats-card">
          <div className="stats-icon-wrapper">
            <Book size={24} />
          </div>
          <div className="stats-info">
            <h3>3</h3>
            <p>Active Books in Catalog</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon-wrapper">
            <Shield size={24} />
          </div>
          <div className="stats-info">
            <h3>Authorized</h3>
            <p>Role: Head Librarian</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon-wrapper">
            <Users size={24} />
          </div>
          <div className="stats-info">
            <h3>Online</h3>
            <p>System Status: Active</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "3rem", borderTop: "1px solid var(--border-card)", paddingTop: "2rem" }}>
        <h3>Administrative Controls</h3>
        <p className="subtitle" style={{ marginBottom: "1.5rem" }}>
          Librarian privileges allow access to critical catalog systems including book removal operations.
        </p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/deletebook" className="btn btn-primary btn-sm" style={{ display: "inline-flex", width: "auto" }}>
            <Trash2 size={16} />
            <span>Manage & Delete Books</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
