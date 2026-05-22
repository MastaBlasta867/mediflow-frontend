import { Box, VStack, Text } from "@chakra-ui/react";

function Sidebar() {
  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      h="100vh"
      w="240px"
      bg="white"
      borderRight="1px solid rgba(0,0,0,0.1)"
      boxShadow="0 4px 20px rgba(0,0,0,0.05)"
      pt="100px"
      px={6}
      display={{ base: "none", md: "block" }}
    >
      <VStack align="start" spacing={6} fontWeight="medium" color="slate.700">
        <Text _hover={{ color: "brand.600" }} cursor="pointer">
          Dashboard
        </Text>
        <Text _hover={{ color: "brand.600" }} cursor="pointer">
          Appointments
        </Text>
        <Text _hover={{ color: "brand.600" }} cursor="pointer">
          Patients
        </Text>
      </VStack>
    </Box>
  );
}

export default Sidebar;
