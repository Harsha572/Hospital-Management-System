import { useEffect, useState } from "react";
import "./admindashboard.css";

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const storedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
    setDoctors(storedDoctors);
  }, []);

  const totalRevenue = doctors.reduce(
    (sum, doc) => sum + (doc.consultations || 0) * (doc.fee || 0),
    0
  );

  const hospitalRevenue = totalRevenue * 0.4;

  const departmentRevenue = {};
  doctors.forEach((doc) => {
    const dept = doc.department || "Unknown";
    const revenue = (doc.consultations || 0) * (doc.fee || 0) * 0.4;

    if (!departmentRevenue[dept]) {
      departmentRevenue[dept] = 0;
    }
    departmentRevenue[dept] += revenue;
  });

  return (
    <div className="admin-dashboard">
      <h2>Hospital Admin Dashboard</h2>

      <h3>Doctors List</h3>
      {doctors.length === 0 ? (
        <p>No doctors registered yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Consultations</th>
              <th>Fee</th>
              <th>Doctor Revenue (60%)</th>
              <th>Hospital Revenue (40%)</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc, idx) => (
              <tr key={idx}>
                <td>{doc.name}</td>
                <td>{doc.department}</td>
                <td>{doc.consultations || 0}</td>
                <td>₹{doc.fee || 0}</td>
                <td>₹{(doc.consultations || 0) * (doc.fee || 0) * 0.6}</td>
                <td>₹{(doc.consultations || 0) * (doc.fee || 0) * 0.4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Total Hospital Revenue: ₹{hospitalRevenue}</h3>

      <h3>Revenue by Department (Hospital's 40%)</h3>
      <ul>
        {Object.entries(departmentRevenue).map(([dept, rev], idx) => (
          <li key={idx}>
            {dept}: ₹{rev}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
