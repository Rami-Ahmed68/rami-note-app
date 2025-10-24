import { Flex, HStack, Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeToggle from "./ColorThemeToggle";
import ClearAllNotes from "./ClearAllNotes";

const links = [
  { title: "Home", path: "/" },
  { title: "Add Note", path: "/addnote" },
];

function Nav() {
  return (
    <Flex
      w="100%"
      h="60px"
      borderRadius="10px"
      as="nav"
      px="8px"
      py="4px"
      bg="bg-secondary">
      <HStack
        w="100%"
        h="100%"
        display={"flex"}
        justifyContent={"space-between"}>
        <Box>
          {links.map((link, index) => (
            <ChakraLink
              m="0px 10px"
              key={index}
              as={Link}
              to={link.path}
              p={"10px"}
              borderRadius={"5px"}
              transition={"0.5s"}
              bg="purple"
              _hover={{
                bg: "purple",
              }}>
              {link.title}
            </ChakraLink>
          ))}
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}>
          <ClearAllNotes />
          <ColorModeToggle />
        </Box>
      </HStack>
    </Flex>
  );
}

export default Nav;
