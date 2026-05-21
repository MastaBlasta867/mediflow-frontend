import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import NavBar from "./components/Layout/NavBar";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <NavBar onOpen={onOpen} />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent p={6}>
          <Box>Menu goes here</Box>
        </DrawerContent>
      </Drawer>

      <Box p={10}>
        <h1>Welcome to MediFlow</h1>
      </Box>
    </Box>
  );
}

export default App;
