import React, { useEffect, useState } from "react";
import "./patienthome.css";

const PatientHome = () => {
  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const storedHospitals = JSON.parse(localStorage.getItem("hospitals")) || [];
    const storedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
    setHospitals(storedHospitals);
    setDoctors(storedDoctors);
  }, []);

  return (
    <div className="patient-home">
      <h2>Welcome, Patient</h2>

      <section>
        <h3>Available Hospitals</h3>
        {hospitals.length === 0 ? (
          <p>No hospitals registered yet.</p>
        ) : (
          <ul>
            {hospitals.map((h) => (
              <li key={h.id}>
                <strong>{h.name}</strong> - {h.location}<br />
                Departments: {h.departments.join(", ") || "None"}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3>Registered Doctors</h3>
        {doctors.length === 0 ? (
          <p>No doctors registered yet.</p>
        ) : (
          <ul>
            {doctors.map((d) => (
              <li key={d.id}>
                <strong>{d.name}</strong> - {d.qualifications}<br />
                Specializations: {d.specializations.join(", ")}<br />
                Experience: {d.experience} years
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default PatientHome;
