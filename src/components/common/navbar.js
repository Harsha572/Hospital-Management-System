import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (!user || !role) return null;

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h3>Hospital System</h3>
      </div>
      <div className="navbar-right">
        <span>{role.toUpperCase()}: {user}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
