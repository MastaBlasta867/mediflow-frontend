import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        alert("Invalid credentials");
        return;
      }

      const data = await response.json();

      // data MUST contain: token + role
      setUser({
        token: data.token,
        role: data.role
      });

      // redirect based on role
      if (data.role === "ADMIN") navigate("/");
      if (data.role === "DOCTOR") navigate("/doctor");
      if (data.role === "PATIENT") navigate("/patient");

    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt="120px" p={8} bg="white" borderRadius="md" boxShadow="md">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">MediFlow Login</Text>

        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button colorScheme="blue" width="100%" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Box>
  );
}
