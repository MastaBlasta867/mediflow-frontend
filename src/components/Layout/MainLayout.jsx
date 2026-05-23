import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

export default function MainLayout({ children, onOpen }) {
  return (
    <Flex minH="100vh" bg="gray.50">
      
      {/* Sidebar (desktop) */}
      <Box
        display={{ base: "none", md: "block" }}
        w="260px"
        bg="white"
        borderRight="1px solid #e5e7eb"
        position="fixed"
        top="0"
        bottom="0"
        left="0"
        zIndex="900"
      >
        <Sidebar />
      </Box>

      {/* Main content area */}
      <Box
        flex="1"
        ml={{ base: 0, md: "260px" }}
        mt="70px"
        px={8}
        py={6}
      >
        <NavBar onOpen={onOpen} />
        {children}
      </Box>
    </Flex>
  );
}
