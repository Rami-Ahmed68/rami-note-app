import NoteCard from "../components/NoteCard";
import { Box, VStack, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem("rami-note-app");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);
  return (
    <Box
      w="100%"
      h="90vh"
      //  bg="green"
    >
      <Heading
        mb={4}
        borderBottom={"1px solid"}
        borderColor={"border-secondary"}>
        My Notes
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
        {notes.map((note, index) => (
          <NoteCard props={note} key={index} />
        ))}
      </VStack>
    </Box>
  );
}
