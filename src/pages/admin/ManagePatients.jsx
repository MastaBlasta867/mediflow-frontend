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

export default function ManagePatients() {
  // Temporary placeholder data
  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 34,
      gender: "Male",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 28,
      gender: "Female",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Michael Brown",
      age: 45,
      gender: "Male",
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
        <Heading size="lg">Patients</Heading>
        <Button colorScheme="blue">Add Patient</Button>
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
              <Th>Age</Th>
              <Th>Gender</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>

          <Tbody>
            {patients.map((patient) => (
              <Tr key={patient.id}>
                <Td>{patient.id}</Td>
                <Td>{patient.name}</Td>
                <Td>{patient.age}</Td>
                <Td>{patient.gender}</Td>
                <Td>
                  <Badge colorScheme={statusColor[patient.status]}>
                    {patient.status}
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
