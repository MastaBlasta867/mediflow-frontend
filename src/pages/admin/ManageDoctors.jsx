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

export default function ManageDoctors() {
  // Temporary placeholder data
  const doctors = [
    {
      id: 1,
      name: "Dr. Emily Smith",
      specialty: "Cardiology",
      status: "Active",
    },
    {
      id: 2,
      name: "Dr. Raj Patel",
      specialty: "Dermatology",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Dr. Linda Lee",
      specialty: "Pediatrics",
      status: "Active",
    },
  ];

  const statusColor = {
    Active: "green",
    Inactive: "red",
  };

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="lg">Doctors</Heading>
        <Button colorScheme="blue">Add Doctor</Button>
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
              <Th>Name</Th>
              <Th>Specialty</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>

          <Tbody>
            {doctors.map((doctor) => (
              <Tr key={doctor.id}>
                <Td>{doctor.id}</Td>
                <Td>{doctor.name}</Td>
                <Td>{doctor.specialty}</Td>
                <Td>
                  <Badge colorScheme={statusColor[doctor.status]}>
                    {doctor.status}
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
