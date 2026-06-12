import { Link, useNavigate } from "react-router-dom";
import { BookOpen, LogOut, User, LayoutDashboard, Trash2 } from "lucide-react";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to={isLoggedIn ? "/dashboard" : "/"} className="navbar-brand">
          <BookOpen size={24} />
          <span>LibAdmin Portal</span>
        </Link>

        {isLoggedIn && (
          <div className="navbar-nav">
            <Link to="/dashboard" className="nav-link">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>
            <Link to="/deletebook" className="nav-link">
              <Trash2 size={18} />
              <span>Catalog Management</span>
            </Link>
            <div className="profile-badge">
              <span className="badge-dot"></span>
              <User size={14} style={{ marginRight: "4px" }} />
              <span>Librarian</span>
            </div>
            <button 
              onClick={handleLogout} 
              className="btn btn-secondary btn-sm"
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <LogOut size={14} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
