import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e3f9f9",
      100: "#c8eff0",
      200: "#a0e5e6",
      300: "#6fd9db",
      400: "#3ecdd0",
      500: "#1fb3b6",
      600: "#148c8f",
      700: "#0b6669",
      800: "#034041",
      900: "#001a1b",
    },
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

export default theme;
