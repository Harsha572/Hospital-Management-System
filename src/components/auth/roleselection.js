import { useNavigate } from "react-router-dom";
import "./auth.css";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="role-selection">
      <h2>Select Your Role</h2>
      <div className="role-buttons">
        <button onClick={() => navigate("/login/admin")}>Hospital Admin</button>
        <button onClick={() => navigate("/login/doctor")}>Doctor</button>
        <button onClick={() => navigate("/login/patient")}>Patient</button>
      </div>
    </div>
  );
};

export default RoleSelection;
