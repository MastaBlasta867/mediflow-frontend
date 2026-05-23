import { Box, Heading, Text, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { FiCalendar, FiUsers, FiClipboard } from "react-icons/fi";

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

export default function DoctorDashboard() {
  return (
    <Box>
      <Heading size="lg" mb={6} color="slate.800">
        Doctor Dashboard
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <StatCard icon={FiCalendar} label="Today's Appointments" value="6" />
        <StatCard icon={FiUsers} label="Active Patients" value="42" />
        <StatCard icon={FiClipboard} label="Pending Reports" value="3" />
      </SimpleGrid>
    </Box>
  );
}
