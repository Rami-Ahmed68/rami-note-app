import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },

  // 1. أولاً: تعريف الألوان الأساسية
  colors: {
    primary: {
      50: "#e6f3ff",
      100: "#cce7ff",
      200: "#99ceff",
      300: "#66b5ff",
      400: "#339cff",
      500: "#007bff", // اللون الأساسي
      600: "#0062cc",
      700: "#004a99",
      800: "#003166",
      900: "#001933",
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
  },

  // 2. ثانياً: الرموز الدلالية (Semantic Tokens)
  semanticTokens: {
    colors: {
      // ألوان الخلفية
      "bg-body": {
        default: "white",
        _dark: "black",
      },
      "bg-primary": {
        default: "primary.500",
        _dark: "primary.600",
      },
      "bg-secondary": {
        default: "gray.200",
        _dark: "#33333399",
      },
      "bg-card": {
        default: "#efefefec",
        _dark: "#2c2b2bff",
      },
      "bg-input": {
        default: "white",
        _dark: "#333",
      },
      "bg-link": {
        default: "#dddddd7a",
        _dark: "#3333334d",
      },
      purple: {
        default: "#9959e7ff",
        _dark: "#7810cdff",
      },

      // ألوان النص
      "text-primary": {
        default: "gray.900",
        _dark: "white",
      },
      "text-secondary": {
        default: "gray.600",
        _dark: "gray.300",
      },
      "text-muted": {
        default: "gray.500",
        _dark: "gray.400",
      },

      // ألوان الحدود
      "border-primary": {
        default: "#b0b0b0ff",
        _dark: "#a9a9a9ff",
      },
      "border-secondary": {
        default: "#a9a9a932",
        _dark: "#a9a9a932",
      },

      // ألوان الحالات
      success: {
        default: "#44ae5cff",
        _dark: "#2bb346ff",
      },
      error: {
        default: "red.500",
        _dark: "red.400",
      },
      warning: {
        default: "orange.500",
        _dark: "orange.400",
      },
      info: {
        default: "blue.500",
        _dark: "blue.400",
      },
    },
  },

  // 3. ثالثاً: الخطوط
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },

  // 4. رابعاً: الأنماط العامة
  styles: {
    global: (props) => ({
      body: {
        bg: "bg-body",
        color: "text-primary",
        lineHeight: "base",
      },
    }),
  },
});
