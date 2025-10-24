import { Box, Heading, Text, IconButton, HStack } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, TimeIcon, StarIcon } from "@chakra-ui/icons";
import { useNotification } from "./hooks/useNotification";
import { useState, useContext } from "react";
import { NoteContext } from "./hooks/noteContext";
import { useNavigate } from "react-router-dom";

export default function NoteCard({ note }) {
  const [btnIsLoading, setBtnIsLoading] = useState(false);
  const [StisLoading, StSetIsLoading] = useState(false);
  const { showSuccess, showError } = useNotification();
  const navigate = useNavigate();

  const { DeleteNote, ChangeStatus } = useContext(NoteContext);

  const handleDelete = async () => {
    setBtnIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      DeleteNote(note.id);

      showSuccess("Note deleted successfully 🎉");
    } catch (error) {
      console.log(error);
      showError("Sorry, we can note delete the note now! 😔");
    }

    setBtnIsLoading(false);
  };

  const ChangeStatusMethod = async () => {
    StSetIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      ChangeStatus(note.id);

      showSuccess("Note's status changed successfully 🎉");
    } catch (error) {
      console.log(error);
      showError("Sorry, we can note delete the note now! 😔");
    }

    StSetIsLoading(false);
  };

  return (
    <Box
      w="100%"
      minH="100px"
      borderRadius="10px"
      bg={note.status === "normal" ? "bg-card" : "bg-card-status"}
      p={3}
      borderLeft={note.status === "normal" ? "4px solid" : "10px solid"}
      transition={"0.5s"}
      borderColor={note.status === "normal" ? "green.500" : "orange"}
      boxShadow={"0px 0px 10px black"}
      display="flex"
      justifyContent="space-between"
      alignItems="center">
      <Box flex="1" mr={3}>
        <Heading size="md" mb={2} noOfLines={1} color="text-primary">
          {note.title}
        </Heading>
        <Text fontSize="sm" noOfLines={2} color="text-secondary">
          {note.description}
        </Text>

        <HStack spacing={2} color="text-muted" fontSize="xs">
          <TimeIcon boxSize={3} />
          <Text>{note.created_at}</Text>
        </HStack>
      </Box>

      <HStack spacing={1}>
        <IconButton
          onClick={() => navigate(`/update/${note.id}`)}
          aria-label="Edit note"
          icon={<EditIcon />}
          size="sm"
          colorScheme="blue"
          variant="ghost"
          _hover={{ bg: "blue.50" }}
        />
        <IconButton
          aria-label="Delete note"
          icon={<DeleteIcon />}
          size="sm"
          colorScheme="red"
          variant="ghost"
          onClick={handleDelete}
          _hover={{ bg: "red.50" }}
          isLoading={btnIsLoading}
        />
        <IconButton
          onClick={ChangeStatusMethod}
          aria-label="Change note's status"
          icon={<StarIcon />}
          size="sm"
          variant="ghost"
          isLoading={StisLoading}
          color="yellow"
        />
      </HStack>
    </Box>
  );
}
