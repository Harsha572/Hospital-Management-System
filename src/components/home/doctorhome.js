import { useNavigate } from "react-router-dom";
import DoctorDashboard from "../doctor/doctordashboard";

const DoctorHome = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h2>Welcome, Doctor</h2>
      <button onClick={() => navigate("/doctor/associate")}>Hospital Association</button>
      <DoctorDashboard/>
    </div>
  );
};

export default DoctorHome;
