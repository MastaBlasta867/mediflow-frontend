import { Box, Drawer, DrawerContent, Text, useDisclosure } from "@chakra-ui/react";
import NavBar from "./components/Layout/NavBar";
import Sidebar from "./components/Layout/Sidebar";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* Top Navigation Bar */}
      <NavBar onOpen={onOpen} />

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Drawer Menu */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        motionPreset="slideInLeft"
      >
        <DrawerContent
          p={6}
          bg="white"
          boxShadow="xl"
          borderRight="1px solid rgba(0,0,0,0.1)"
        >
          <Box fontSize="lg" fontWeight="bold" mb={6}>
            Menu
          </Box>

          <Box display="flex" flexDirection="column" gap={4}>
            <Text cursor="pointer">Dashboard</Text>
            <Text cursor="pointer">Appointments</Text>
            <Text cursor="pointer">Patients</Text>
          </Box>
        </DrawerContent>
      </Drawer>

      {/* Main Page Content */}
      <Box
        pt="100px"
        pl={{ base: "0", md: "260px" }}
        p={10}
      >
        <h1>Welcome to MediFlow</h1>
      </Box>
    </Box>
  );
}

export default App;
