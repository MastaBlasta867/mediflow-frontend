import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Flex,
  Button,
} from "@chakra-ui/react";

export default function ManageAppointments() {
  // Temporary placeholder data
  const appointments = [
    {
      id: 1,
      patient: "John Doe",
      doctor: "Dr. Smith",
      date: "2024-05-12",
      time: "10:00 AM",
      status: "Scheduled",
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      doctor: "Dr. Patel",
      date: "2024-05-13",
      time: "2:00 PM",
      status: "Completed",
    },
    {
      id: 3,
      patient: "Michael Brown",
      doctor: "Dr. Lee",
      date: "2024-05-14",
      time: "11:30 AM",
      status: "Cancelled",
    },
  ];

  const statusColor = {
    Scheduled: "blue",
    Completed: "green",
    Cancelled: "red",
  };

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="lg">Appointments</Heading>
        <Button colorScheme="blue">Create Appointment</Button>
      </Flex>

      <Box
        bg="white"
        p={6}
        rounded="lg"
        shadow="sm"
        border="1px solid #e5e7eb"
      >
        <Table variant="simple">
          <Thead bg="gray.50">
            <Tr>
              <Th>ID</Th>
              <Th>Patient</Th>
              <Th>Doctor</Th>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>

          <Tbody>
            {appointments.map((appt) => (
              <Tr key={appt.id}>
                <Td>{appt.id}</Td>
                <Td>{appt.patient}</Td>
                <Td>{appt.doctor}</Td>
                <Td>{appt.date}</Td>
                <Td>{appt.time}</Td>
                <Td>
                  <Badge colorScheme={statusColor[appt.status]}>
                    {appt.status}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
