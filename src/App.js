import { ChakraProvider, Box } from "@chakra-ui/react";
import Sidebar from "./components/Layout/Sidebar";
import NavBar from "./components/Layout/NavBar";
import theme from "./theme";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box display="flex">
        <Sidebar />

        <Box flex="1" bg="slate.50" minH="100vh">
          <NavBar />

          <Box pt="100px" pl={{ base: "0", md: "260px" }} p={10}>
            <AdminDashboard />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
