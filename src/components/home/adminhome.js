import { useNavigate } from "react-router-dom";
import AdminDashboard from "../admin/admindashboard";

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h2>Welcome, Admin</h2>
      <button onClick={() => navigate("/admin/hospital")}>Register Hospital</button>
      <AdminDashboard/>
    </div>
  );
};

export default AdminHome;
