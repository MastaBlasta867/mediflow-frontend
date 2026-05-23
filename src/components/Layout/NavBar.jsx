import React from "react";
import { Box, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";
import { MdDashboard, MdEventNote, MdPeople } from "react-icons/md";

function NavBar({ onOpen }) {
  const location = useLocation();

  const links = [
    {
      label: "Dashboard",
      to: "/",
      icon: <MdDashboard size={20} />,
    },
    {
      label: "Appointments",
      to: "/appointments",
      icon: <MdEventNote size={20} />,
    },
    {
      label: "Patients",
      to: "/patients",
      icon: <MdPeople size={20} />,
    },
  ];

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
          {links.map((link) => {
            const isActive = location.pathname === link.to;

            return (
              <NavLink key={link.to} to={link.to} style={{ textDecoration: "none" }}>
                <Flex
                  align="center"
                  gap={2}
                  fontWeight={isActive ? "bold" : "medium"}
                  color={isActive ? "brand.600" : "slate.700"}
                  borderBottom={isActive ? "2px solid #3182ce" : "2px solid transparent"}
                  pb="2px"
                  transition="all 0.25s ease"
                  _hover={{
                    color: "brand.600",
                    borderBottom: "2px solid #63b3ed",
                  }}
                  cursor="pointer"
                >
                  {link.icon}
                  {link.label}
                </Flex>
              </NavLink>
            );
          })}
        </HStack>
      </Flex>
    </Box>
  );
}

export default NavBar;
