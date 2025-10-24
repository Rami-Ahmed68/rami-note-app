import NoteCard from "../components/NoteCard";
import { Box, VStack, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { NoteContext } from "../components/hooks/noteContext";

export default function Home() {
  const { notes } = useContext(NoteContext);
  console.log(notes);

  return (
    <Box w="100%" h="90vh">
      <Heading
        mb={4}
        display={"flex"}
        justifyContent={"space-between"}
        alignContent={"center"}
        borderBottom={"1px solid"}
        borderColor={"border-secondary"}>
        My Notes 📝
        <Box
          fontSize="sm"
          w="40px"
          h="40px"
          bg="purple"
          borderRadius={"5px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}>
          {" "}
          {notes.length}{" "}
        </Box>
      </Heading>
      <VStack
        spacing={4}
        overflowY="auto"
        h="80%"
        p={4}
        sx={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            width: "8px",
            background: "bg-body",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "purple",
            borderRadius: "8px",
          },
        }}>
        {notes.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </VStack>
    </Box>
  );
}
