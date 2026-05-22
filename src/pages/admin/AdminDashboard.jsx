import { Box, SimpleGrid, Flex, Text, Icon } from "@chakra-ui/react";
import { FiUsers, FiCalendar, FiBarChart2 } from "react-icons/fi";

function StatCard({ icon, label, value }) {
  return (
    <Flex
      p={6}
      bg="white"
      borderRadius="lg"
      boxShadow="sm"
      border="1px solid rgba(0,0,0,0.05)"
      align="center"
      gap={4}
    >
      <Flex
        w="50px"
        h="50px"
        borderRadius="full"
        bg="brand.50"
        align="center"
        justify="center"
      >
        <Icon as={icon} boxSize={6} color="brand.600" />
      </Flex>

      <Box>
        <Text fontSize="sm" color="slate.500">
          {label}
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color="slate.800">
          {value}
        </Text>
      </Box>
    </Flex>
  );
}

export default function AdminDashboard() {
  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" mb={8} color="slate.800">
        Dashboard Overview
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <StatCard icon={FiUsers} label="Total Patients" value="128" />
        <StatCard icon={FiCalendar} label="Upcoming Appointments" value="14" />
        <StatCard icon={FiBarChart2} label="Monthly Revenue" value="$12,450" />
      </SimpleGrid>
    </Box>
  );
}
