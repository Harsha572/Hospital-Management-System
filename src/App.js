import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/common/navbar";
import ProtectedRoute from "./components/auth/protectedroute";
import RoleSelection from "./components/auth/roleselection";
import AdminLogin from "./components/auth/adminlogin";
import DoctorLogin from "./components/auth/doctorlogin";
import PatientLogin from "./components/auth/patientlogin";
import Hospital from "./components/admin/hospitalregister";
import AdminDashboard from "./components/admin/admindashboard";
import AdminHome from "./components/home/adminhome";
import DoctorRegister from "./components/doctor/doctorregister";
import HospitalAssociation from "./components/doctor/hospitalassociation";
import DoctorDashboard from "./components/doctor/doctordashboard";
import DoctorHome from "./components/home/doctorhome";
import PatientRegister from "./components/patients/patientregister";
import PatientBooking from "./components/patients/patientbooking";
import PatientHistory from "./components/patients/patienthistory";
import PatientHome from "./components/home/patienthome";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/doctor" element={<DoctorLogin />} />
        <Route path="/login/patient" element={<PatientLogin />} />
        <Route path="/admin/home" element={<ProtectedRoute allowedRole="admin"><AdminHome /></ProtectedRoute>}/>
        <Route path="/admin/hospital" element={<ProtectedRoute allowedRole="admin"><Hospital /></ProtectedRoute>}/>
        <Route path="/doctor/register" element={<ProtectedRoute allowedRole="doctor"><DoctorRegister /></ProtectedRoute>}/>
        <Route path="/admin/dashboard" element={<ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>}/>
        <Route path="/doctor/home" element={<ProtectedRoute allowedRole="doctor"><DoctorHome /></ProtectedRoute>}/>
        <Route path="/doctor/associate" element={<ProtectedRoute allowedRole="doctor"><HospitalAssociation /></ProtectedRoute>}/>
        <Route path="/doctor/dashboard" element={<ProtectedRoute allowedRole="doctor"><DoctorDashboard /></ProtectedRoute>}/>
        <Route path="/patient/home" element={<ProtectedRoute allowedRole="patient"><PatientHome /></ProtectedRoute>}/>
        <Route path="/patient/register" element={<ProtectedRoute allowedRole="patient"><PatientRegister /></ProtectedRoute>}/>
        <Route path="/patient/booking" element={<ProtectedRoute allowedRole="patient"><PatientBooking /></ProtectedRoute>}/>
        <Route path="/patient/history" element={<ProtectedRoute allowedRole="patient"><PatientHistory /></ProtectedRoute>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
