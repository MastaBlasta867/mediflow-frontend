import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, VStack, Text } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  // Role-based menu configuration
  const menuItems = {
    ADMIN: [
      { label: "Dashboard", path: "/" },
      { label: "Manage Doctors", path: "/admin/doctors" },
      { label: "Manage Patients", path: "/admin/patients" },
    ],

    DOCTOR: [
      { label: "Dashboard", path: "/doctor" },
      { label: "My Appointments", path: "/doctor/appointments" },
    ],

    PATIENT: [
      { label: "Dashboard", path: "/patient" },
      { label: "My Appointments", path: "/patient/appointments" },
      { label: "Prescriptions", path: "/patient/prescriptions" },
    ],
  };

  // If no user yet, show nothing
  if (!user || !user.role) return null;

  return (
    <Box
      w="250px"
      bg="gray.900"
      color="white"
      minH="100vh"
      p={5}
      position="fixed"
      left={0}
      top={0}
    >
      <Text fontSize="2xl" fontWeight="bold" mb={8}>
        MediFlow Clinic
      </Text>

      <VStack align="stretch" spacing={4}>
        {menuItems[user.role].map((item) => (
          <Box
            key={item.path}
            as={Link}
            to={item.path}
            p={3}
            borderRadius="md"
            bg={location.pathname === item.path ? "blue.600" : "gray.700"}
            _hover={{ bg: "blue.500" }}
          >
            {item.label}
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
