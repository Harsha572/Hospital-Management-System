import React, { useState } from "react";
import "./doctorregister.css";

const DoctorRegister = () => {
  const [name, setName] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [specializations, setSpecializations] = useState([]);
  const [specInput, setSpecInput] = useState("");
  const [experience, setExperience] = useState("");

  const handleAddSpecialization = () => {
    if (specInput.trim() && !specializations.includes(specInput.trim())) {
      setSpecializations([...specializations, specInput.trim()]);
      setSpecInput("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctor = {
      name,
      qualifications,
      specializations,
      experience,
    };

    const existing = JSON.parse(localStorage.getItem("doctors")) || [];
    localStorage.setItem("doctors", JSON.stringify([...existing, doctor]));

    alert("Doctor registered successfully!");

    // Clear form
    setName("");
    setQualifications("");
    setSpecializations([]);
    setSpecInput("");
    setExperience("");
  };

  return (
    <div className="doctor-register">
      <h2>Doctor Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Qualifications:</label>
        <input value={qualifications} onChange={(e) => setQualifications(e.target.value)} required />

        <label>Specializations:</label>
        <div>
          <input
            value={specInput}
            onChange={(e) => setSpecInput(e.target.value)}
            placeholder="e.g., Cardiology"
          />
          <button type="button" onClick={handleAddSpecialization}>Add</button>
        </div>
        <ul>
          {specializations.map((spec, idx) => <li key={idx}>{spec}</li>)}
        </ul>

        <label>Years of Experience:</label>
        <input
          type="number"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />

        <button type="submit">Register Doctor</button>
      </form>
    </div>
  );
};

export default DoctorRegister;
