import { Box, Tooltip, useColorMode } from "@chakra-ui/react";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip
      label={
        colorMode === "light" ? "Turn on dark theme" : "Turn on light theme"
      }>
      <Box
        p="10px"
        bg="purple"
        aria-label="Change the current theme"
        onClick={toggleColorMode}
        borderRadius="5px"
        variant="ghost"
        size="lg"
        cursor={"pointer"}
        _hover={{
          transform: "scale(1.05)",
        }}
        transition="all 0.2s">
        {colorMode === "light" ? "🌙" : "☀️"}
      </Box>
    </Tooltip>
  );
};

export default ColorModeToggle;
