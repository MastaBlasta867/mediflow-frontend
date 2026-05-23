import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/Layout/MainLayout";

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

// Auth
import Login from "../pages/auth/Login";

// Guards
import ProtectedRoute from "../components/common/ProtectedRoute";
import RoleGuard from "../components/common/RoleGuard";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Admin Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["ADMIN"]}>
              <MainLayout>
                <AdminDashboard />
              </MainLayout>
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/doctors"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["ADMIN"]}>
              <MainLayout>
                <ManageDoctors />
              </MainLayout>
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/patients"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["ADMIN"]}>
              <MainLayout>
                <ManagePatients />
              </MainLayout>
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      {/* Doctor Routes */}
      <Route
        path="/doctor"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["DOCTOR"]}>
              <MainLayout>
                <DoctorDashboard />
              </MainLayout>
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctor/appointments"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["DOCTOR"]}>
              <MainLayout>
                <MyAppointmentsDoctor />
              </MainLayout>
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctor/patient/:id"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["DOCTOR"]}>
              <MainLayout>
                <PatientDetails />
              </MainLayout>
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      {/* Patient Routes */}
      <Route
        path="/patient"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["PATIENT"]}>
              <MainLayout>
                <PatientDashboard />
              </MainLayout>
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/patient/appointments"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["PATIENT"]}>
              <MainLayout>
                <MyAppointmentsPatient />
              </MainLayout>
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/patient/prescriptions"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["PATIENT"]}>
              <MainLayout>
                <Prescriptions />
              </MainLayout>
            </RoleGuard>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}
