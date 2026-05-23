import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <Flex minH="100vh" bg="gray.50">
      
      {/* Sidebar */}
      <Box
        display={{ base: "none", md: "block" }}
        w="240px"
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

      {/* Main content */}
      <Box
        flex="1"
        ml={{ base: 0, md: "240px" }}
        mt="80px"
        px={8}
        py={6}
      >
        <NavBar />
        {children}
      </Box>
    </Flex>
  );
}
