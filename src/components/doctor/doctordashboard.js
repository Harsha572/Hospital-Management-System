import "./doctordashboard.css";

const mockConsultations = [
  {
    doctorId: 1,
    hospitalId: 1,
    hospitalName: "Apollo Hospital",
    fee: 500,
  },
  {
    doctorId: 1,
    hospitalId: 1,
    hospitalName: "Apollo Hospital",
    fee: 500,
  },
  {
    doctorId: 1,
    hospitalId: 2,
    hospitalName: "Sunshine Hospital",
    fee: 400,
  },
  {
    doctorId: 2,
    hospitalId: 2,
    hospitalName: "Sunshine Hospital",
    fee: 400,
  },
];

const currentDoctorId = 1;

const DoctorDashboard = () => {
  const doctorBookings = mockConsultations.filter(
    (c) => c.doctorId === currentDoctorId
  );

  const totalConsultations = doctorBookings.length;
  const totalEarnings = doctorBookings.reduce((sum, c) => sum + c.fee * 0.6, 0);

  const earningsByHospital = {};
  doctorBookings.forEach((c) => {
    if (!earningsByHospital[c.hospitalName]) {
      earningsByHospital[c.hospitalName] = {
        total: 0,
        consultations: 0,
      };
    }
    earningsByHospital[c.hospitalName].total += c.fee * 0.6;
    earningsByHospital[c.hospitalName].consultations += 1;
  });

  return (
    <div className="doctor-dashboard">
      <h2>Doctor Dashboard</h2>

      <div className="summary">
        <p><strong>Total Consultations:</strong> {totalConsultations}</p>
        <p><strong>Total Earnings:</strong> ₹{totalEarnings}</p>
      </div>

      <h3>Earnings by Hospital</h3>
      <ul>
        {Object.entries(earningsByHospital).map(([hospital, data], idx) => (
          <li key={idx}>
            <strong>{hospital}</strong> — ₹{data.total} ({data.consultations} consultations)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorDashboard;
