import "./patienthistory.css";

const mockPatientId = 101;

const mockConsultations = [
  {
    patientId: 101,
    doctorName: "Dr. Arjun Reddy",
    hospitalName: "Apollo Hospital",
    slot: "2025-07-15 10:00",
    fee: 500,
  },
  {
    patientId: 101,
    doctorName: "Dr. Sita Sharma",
    hospitalName: "Sunshine Hospital",
    slot: "2025-07-16 10:00",
    fee: 400,
  },
  {
    patientId: 102,
    doctorName: "Dr. Rahul",
    hospitalName: "KIMS",
    slot: "2025-07-14 11:30",
    fee: 600,
  },
];

const PatientHistory = () => {
  const patientHistory = mockConsultations.filter(
    (c) => c.patientId === mockPatientId
  );

  return (
    <div className="patient-history">
      <h2>My Consultation History</h2>

      {patientHistory.length === 0 ? (
        <p>No consultation records found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Hospital</th>
              <th>Date & Time</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {patientHistory.map((c, index) => (
              <tr key={index}>
                <td>{c.doctorName}</td>
                <td>{c.hospitalName}</td>
                <td>{c.slot}</td>
                <td>₹{c.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PatientHistory;
