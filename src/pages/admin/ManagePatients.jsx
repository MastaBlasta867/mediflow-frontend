import { Box, Heading, Text } from "@chakra-ui/react";

function ManagePatients() {
  return (
    <Box>
      <Heading size="lg" mb={4}>
        Manage Patients
      </Heading>

      <Text fontSize="md" color="gray.600">
        This is a placeholder page for managing patients. Your routing is working
        correctly.
      </Text>
    </Box>
  );
}

export default ManagePatients;
