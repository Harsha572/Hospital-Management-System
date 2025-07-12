import { useState } from "react";
import "./patientregister.css";

const PatientRegister = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [uniqueId, setUniqueId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const patient = { name, gender, dob, uniqueId };

    const existing = JSON.parse(localStorage.getItem("patients")) || [];
    localStorage.setItem("patients", JSON.stringify([...existing, patient]));

    alert("Patient registered successfully!");

    setName("");
    setGender("");
    setDob("");
    setUniqueId("");
  };

  return (
    <div className="patient-register">
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label>Date of Birth:</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />

        <label>Unique ID (Aadhar/Passport):</label>
        <input value={uniqueId} onChange={(e) => setUniqueId(e.target.value)} required />

        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
};

export default PatientRegister;
