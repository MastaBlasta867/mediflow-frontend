import { Flex, Text, Box } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";

export default function NavBar() {
  const { user } = useAuth();

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      height="80px"
      bg="white"
      borderBottom="1px solid #e5e7eb"
      align="center"
      justify="space-between"
      px={8}
      zIndex="1000"
    >
      <Text fontSize="xl" fontWeight="bold">
        MediFlow
      </Text>

      <Box textAlign="right">
        <Text fontSize="md" fontWeight="medium">
          {user.role} Portal
        </Text>
        <Text fontSize="sm" color="gray.500">
          Logged in as: {user.role.toLowerCase()}@mediflow
        </Text>
      </Box>
    </Flex>
  );
}
