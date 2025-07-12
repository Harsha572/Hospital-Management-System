import { useState } from "react";
import "./hospitalassociation.css";

const hospitals = [
  {
    id: 1,
    name: "Apollo Hospital",
    location: "Hyderabad",
    departments: ["Cardiology", "Dermatology", "Orthopedics"],
  },
  {
    id: 2,
    name: "Sunshine Hospital",
    location: "Secunderabad",
    departments: ["Neurology", "Pediatrics"],
  },
  {
    id: 3,
    name: "KIMS",
    location: "Gachibowli",
    departments: ["Cardiology", "Orthopedics"],
  },
];

const doctorSpecializations = ["Cardiology", "Pediatrics"];

const generateTimeSlots = () => {
  const slots = [];
  let hour = 9;
  let minute = 30;
  while (hour < 24) {
    const hh = hour.toString().padStart(2, "0");
    const mm = minute.toString().padStart(2, "0");
    slots.push(`${hh}:${mm}`);
    minute += 30;
    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

const HospitalAssociation = () => {
  const [associations, setAssociations] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const isEligible = (hospital) =>
    hospital.departments.some((dept) => doctorSpecializations.includes(dept));

  const handleAssociate = (hospital) => {
    if (associations.find((a) => a.hospital.id === hospital.id)) return;

    setAssociations([...associations, { hospital, fee: "", slots: [] }]);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 4, 0);
    return nextMonth.toISOString().split("T")[0];
  };

  const handleAddSlot = (hospitalId) => {
    if (!selectedDate || !selectedTime) return;

    const fullSlot = `${selectedDate} ${selectedTime}`;

    const slotConflict = associations.some((a) =>
      a.slots.includes(fullSlot)
    );

    if (slotConflict) {
      alert("Time slot already used in another hospital!");
      return;
    }

    const updated = associations.map((a) =>
      a.hospital.id === hospitalId
        ? { ...a, slots: [...a.slots, fullSlot] }
        : a
    );

    setAssociations(updated);
    setSelectedDate("");
    setSelectedTime("");
  };

  const handleSetFee = (hospitalId, feeValue) => {
    const updated = associations.map((a) =>
      a.hospital.id === hospitalId ? { ...a, fee: feeValue } : a
    );
    setAssociations(updated);
  };

  return (
    <div className="association">
      <h2>Hospital Association</h2>

      <h3>Available Hospitals</h3>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            <strong>{hospital.name}</strong> ({hospital.location})<br />
            Departments: {hospital.departments.join(", ")} <br />
            {isEligible(hospital) ? (
              <button onClick={() => handleAssociate(hospital)}>
                Associate
              </button>
            ) : (
              <span style={{ color: "gray" }}>No matching specialization</span>
            )}
          </li>
        ))}
      </ul>

      <h3>Associated Hospitals</h3>
      {associations.length === 0 && <p>No hospitals associated yet.</p>}

      {associations.map((a) => (
        <div key={a.hospital.id} className="box">
          <h4>{a.hospital.name}</h4>

          <label>Consultation Fee:</label>
          <input
            type="number"
            value={a.fee}
            onChange={(e) => handleSetFee(a.hospital.id, e.target.value)}
            placeholder="e.g., 500"
          />

          <label>Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setSelectedTime("");
            }}
            min={getMinDate()}
            max={getMaxDate()}
          />

          {selectedDate && (
            <>
              <label>Select Time:</label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">-- Select Time --</option>
                {timeSlots.map((time, idx) => (
                  <option key={idx} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <button onClick={() => handleAddSlot(a.hospital.id)}>Add Slot</button>
            </>
          )}

          <p><strong>Time Slots:</strong></p>
          <ul>
            {a.slots.map((slot, idx) => (
              <li key={idx}>{slot}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HospitalAssociation;
