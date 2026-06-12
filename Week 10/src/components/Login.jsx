import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KeyRound, ShieldAlert } from "lucide-react";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("librarian");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setError("Please enter valid credentials.");
    }
  };

  return (
    <div className="card fade-in">
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <div style={{
          display: "inline-flex",
          background: "var(--color-primary-glow)",
          color: "var(--color-primary)",
          padding: "1rem",
          borderRadius: "50%",
          marginBottom: "1rem"
        }}>
          <KeyRound size={32} />
        </div>
        <h2 className="title-gradient">Library Login</h2>
        <p className="subtitle">Librarian catalog access portal</p>
      </div>

      <form onSubmit={loginHandler}>
        {error && (
          <div className="loading-overlay" style={{ background: "rgba(244, 63, 94, 0.1)", color: "var(--color-danger)" }}>
            <ShieldAlert size={18} />
            <span>{error}</span>
          </div>
        )}

        <div className="form-group">
          <label className="form-label">Librarian ID / Username</label>
          <input
            type="text"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter librarian ID"
            required
          />
        </div>

        <div className="form-group" style={{ marginBottom: "2rem" }}>
          <label className="form-label">Password / Security Key</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign In as Librarian
        </button>
      </form>
    </div>
  );
}

export default Login;
