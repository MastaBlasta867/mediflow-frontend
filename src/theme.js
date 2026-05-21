import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#0D9488",
      600: "#0F766E",
      700: "#115E59",
      800: "#134E4A",
      900: "#0F3F3A",
    },
    slate: {
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
  },

  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },

  styles: {
    global: {
      body: {
        bg: "slate.50",
        color: "slate.900",
      },
    },
  },
});

export default theme;
