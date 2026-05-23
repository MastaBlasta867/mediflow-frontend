import { BrowserRouter } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Box>
        {/* Top Navigation */}
        <NavBar />

        <Flex>
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <Box
            flex="1"
            ml={{ base: 0, md: "240px" }}
            mt="100px"
            p={8}
            bg="gray.50"
            minH="100vh"
          >
            <AppRoutes />
          </Box>
        </Flex>
      </Box>
    </BrowserRouter>
  );
}

export default App;
