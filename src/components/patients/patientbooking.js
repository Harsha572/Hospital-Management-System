import { useState, useEffect } from "react";
import "./patientbooking.css";

const PatientBooking = () => {
  const [specialization, setSpecialization] = useState("");
  const [hospital, setHospital] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // Load hospitals and prepare specialization options
  useEffect(() => {
    const storedHospitals = JSON.parse(localStorage.getItem("hospitals")) || [];
    setHospitals(storedHospitals);

    // Extract unique specializations from all hospitals' departments
    const allDepartments = storedHospitals.flatMap((h) => h.departments || []);
    const uniqueDepartments = [...new Set(allDepartments)];
    setSpecializations(uniqueDepartments);
  }, []);

  const handleSearch = () => {
    const storedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];

    const results = storedDoctors.filter(
      (doc) =>
        Array.isArray(doc.specializations) &&
        doc.specializations.includes(specialization) &&
        Array.isArray(doc.hospitals) &&
        doc.hospitals.some((h) => h.name === hospital)
    );

    setFilteredDoctors(results);
  };
  const handleBook = (doctorId, hospitalId, slot, feeInput) => {
    if (!feeInput) {
      alert("Enter consultation amount");
      return;
    }

    const booking = {
      doctorId,
      hospitalId,
      slot,
      fee: parseInt(feeInput),
    };

    // Save to localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const updatedBookings = [...existingBookings, booking];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // Update slots
    const updatedDoctors = filteredDoctors.map((doc) => {
      if (doc.id === doctorId) {
        return {
          ...doc,
          hospitals: doc.hospitals.map((h) =>
            h.id === hospitalId
              ? { ...h, slots: h.slots.filter((s) => s !== slot) }
              : h
          ),
        };
      }
      return doc;
    });

    setFilteredDoctors(updatedDoctors);
    alert("Appointment booked!");
  };

  return (
    <div className="booking-page">
      <h2>Search & Book Doctor</h2>

      <div className="filters">
        <label>Specialization:</label>
        <select value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
          <option value="">-- Select --</option>
          {specializations.map((spec, idx) => (
            <option key={idx} value={spec}>{spec}</option>
          ))}
        </select>

        <label>Hospital:</label>
        <select value={hospital} onChange={(e) => setHospital(e.target.value)}>
          <option value="">-- Select --</option>
          {hospitals.map((h) => (
            <option key={h.id} value={h.name}>{h.name}</option>
          ))}
        </select>

        <button onClick={handleSearch}>Search</button>
      </div>

      {filteredDoctors.length === 0 ? (
        <p>No doctors found. Try searching above.</p>
      ) : (
        filteredDoctors.map((doc) =>
          doc.hospitals
            .filter((h) => h.name === hospital)
            .map((hosp, index) => (
              <div key={`${doc.id}-${hosp.id}`} className="doctor-card">
                <h3>{doc.name}</h3>
                <p><strong>Specializations:</strong> {doc.specializations.join(", ")}</p>
                <p><strong>Hospital:</strong> {hosp.name}</p>
                <p><strong>Fee:</strong> ₹{hosp.fee}</p>
                <p><strong>Available Slots:</strong></p>

                {hosp.slots.length === 0 ? (
                  <p>No slots available.</p>
                ) : (
                  <ul>
                    {hosp.slots.map((slot) => (
                      <li key={slot}>
                        {slot}
                        <input
                          type="number"
                          placeholder="Amount"
                          style={{ marginLeft: "10px" }}
                          id={`amount-${doc.id}-${slot}`}
                        />
                        <button
                          onClick={() =>
                            handleBook(
                              doc.id,
                              hosp.id,
                              slot,
                              document.getElementById(`amount-${doc.id}-${slot}`).value
                            )
                          }
                        >
                          Book
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
        )
      )}
    </div>
  );
};

export default PatientBooking;
