import { Routes, Route } from "react-router-dom";

// Admin pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageDoctors from "../pages/admin/ManageDoctors";
import ManagePatients from "../pages/admin/ManagePatients";

// Doctor pages
import DoctorDashboard from "../pages/doctor/DoctorDashboard";
import MyAppointmentsDoctor from "../pages/doctor/MyAppointments";
import PatientDetails from "../pages/doctor/PatientDetails";

// Patient pages
import PatientDashboard from "../pages/patient/PatientDashboard";
import MyAppointmentsPatient from "../pages/patient/MyAppointments";
import Prescriptions from "../pages/patient/Prescriptions";

function AppRoutes() {
  return (
    <Routes>
      {/* Admin */}
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/admin/doctors" element={<ManageDoctors />} />
      <Route path="/admin/patients" element={<ManagePatients />} />

      {/* Doctor */}
      <Route path="/doctor" element={<DoctorDashboard />} />
      <Route path="/doctor/appointments" element={<MyAppointmentsDoctor />} />
      <Route path="/doctor/patient/:id" element={<PatientDetails />} />

      {/* Patient */}
      <Route path="/patient" element={<PatientDashboard />} />
      <Route path="/patient/appointments" element={<MyAppointmentsPatient />} />
      <Route path="/patient/prescriptions" element={<Prescriptions />} />
    </Routes>
  );
}

export default AppRoutes;
