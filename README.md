<p align="center">
<img src="https://dummyimage.com/1200x250/0d1117/ffffff&text=MediFlow+Clinic+Frontend+%7C+Enterprise+Healthcare+Management+UI" alt="MediFlow Clinic Frontend Banner">
</p>

# **MediFlow Clinic Frontend — Enterprise Healthcare Management UI**

A modern, cloud‑ready frontend built with React, Chakra UI, React Router, and Context API.  
Designed to deliver a secure, responsive, enterprise‑grade user interface for Admin, Doctor, and Patient users while integrating seamlessly with the MediFlow backend.

# **Table of Contents**
- Overview
- Features
- Architecture
- Tech Stack
- System Modules
- UI Layout Design
- Security
- API Integration
- Screenshots
- Running the Project
- Docker Support
- CI/CD Pipeline
- Future Enhancements
- Author

# **Overview**
The MediFlow Clinic Frontend is a modern single‑page application (SPA) designed to streamline clinic operations through a clean, role‑based interface.  
It supports patient onboarding, doctor management, appointment scheduling, and prescription viewing through dynamic dashboards and secure JWT authentication.

# **Features**

**Admin**
- Manage doctors
- Manage patients
- View system‑wide metrics

**Doctor**
- View upcoming appointments
- Access patient details
- Manage prescriptions

**Patient**
- Search doctors
- Book appointments
- View personal medical history

**UI/UX**
- Responsive Chakra UI components
- Dynamic Sidebar & Navbar
- Role‑aware navigation

**Security**
- JWT‑based authentication
- Protected routes
- Role‑based authorization

# **Architecture**

**1. Presentation Layer**
- React components
- Chakra UI styling
- Responsive layout system

**2. Application Layer**
- React Router for navigation
- Context API for authentication state
- ProtectedRoute & RoleGuard for access control

**3. Integration Layer**
- Fetch API for backend communication
- Token‑based authentication
- Role‑based redirects

# **Tech Stack**

**Frontend**
- React 18
- React Router v6
- Chakra UI
- Context API
- Fetch API

**Build Tools**
- Node.js
- Vite or Create React App

**DevOps**
- Docker
- GitHub Actions (CI pipeline)

# **System Modules**

Module | Description
-------|------------
Admin | Manage doctors, patients, and system settings
Doctor | View appointments, manage prescriptions
Patient | Book appointments, view medical history
Auth | Login, JWT handling, role management
Layout | Sidebar, Navbar, MainLayout

# **UI Layout Design**

**Core Components**
- MainLayout — global layout wrapper
- Sidebar — dynamic role‑based navigation
- NavBar — top navigation with user info
- AppRoutes — centralized routing

# **Security**

The frontend uses:
- JWT authentication (via backend)
- Role‑based access control
- Protected routes
- Secure redirects

# **API Integration**

Auth APIs:
- POST /api/auth/login
- POST /api/auth/register

Doctor APIs:
- GET /api/doctors
- GET /api/doctors/{id}
- POST /api/doctors

Appointment APIs:
- GET /api/appointments/patient/{id}
- POST /api/appointments

# **Screenshots**
(Add screenshots here once generated.)

# **Author**

**Pomolefe (MastaBlasta867)**  
📧 pomolefe1986@gmail.com  
Distributed AI Engineer (in progress)




