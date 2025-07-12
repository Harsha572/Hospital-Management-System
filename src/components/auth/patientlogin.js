import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [uniqueId, setUniqueId] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    const matched = patients.find(
      (p) => p.username === username && p.password === password
    );

    if (matched) {
      localStorage.setItem("currentUser", JSON.stringify({ role: "patient", username }));
      navigate("/patient/booking");
    } else {
      setError("Invalid credentials");
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const patients = JSON.parse(localStorage.getItem("patients")) || [];

    const alreadyExists = patients.find((p) => p.username === username);
    if (alreadyExists) {
      setError("Username already exists");
      return;
    }

    const newPatient = {
      name,
      username,
      password,
      gender,
      dob,
      uniqueId,
    };

    localStorage.setItem("patients", JSON.stringify([...patients, newPatient]));
    localStorage.setItem("currentUser", JSON.stringify({ role: "patient", username }));

    alert("Registration successful!");
    navigate("/patient/booking");
  };

  return (
    <div className="login">
      <h2>Patient {showRegister ? "Registration" : "Login"}</h2>

      {!showRegister ? (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>
            New here? <button onClick={() => setShowRegister(true)}>Register</button>
          </p>
        </>
      ) : (
        <form onSubmit={handleRegisterSubmit}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br />
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select><br />
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          /><br />
          <input
            placeholder="Unique ID (Aadhar/Passport)"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            required
          /><br />
          <button type="submit">Register & Login</button>
          <button type="button" onClick={() => setShowRegister(false)}>Back to Login</button>
        </form>
      )}
    </div>
  );
};

export default PatientLogin;
