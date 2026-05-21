import { Box, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function NavBar({ onOpen }) {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      px={8}
      py={4}
      backdropFilter="blur(12px)"
      bg="rgba(255, 255, 255, 0.6)"
      borderBottom="1px solid rgba(255,255,255,0.3)"
      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
    >
      <Flex align="center" justify="space-between">
        
        {/* Brand Logo */}
        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          letterSpacing="-0.5px"
          bgGradient="linear(to-r, brand.600, brand.400)"
          bgClip="text"
          filter="drop-shadow(0 1px 1px rgba(0,0,0,0.15))"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))",
          }}
          transition="all 0.25s ease"
          cursor="pointer"
        >
          MediFlow
        </Text>

        {/* Mobile menu */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={onOpen}
          aria-label="Open Menu"
          variant="ghost"
          color="brand.700"
          _hover={{ bg: "brand.100" }}
        />

        {/* Desktop links */}
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
          fontWeight="medium"
          color="slate.700"
        >
          <Text _hover={{ color: "brand.600" }} cursor="pointer">
            Dashboard
          </Text>
          <Text _hover={{ color: "brand.600" }} cursor="pointer">
            Appointments
          </Text>
          <Text _hover={{ color: "brand.600" }} cursor="pointer">
            Patients
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
}

export default NavBar;
