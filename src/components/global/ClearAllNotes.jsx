import { Tooltip, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { NoteContext } from "../hooks/noteContext";
import { useNotification } from "./../hooks/useNotification";

const ClearAllNotes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showSuccess, showError } = useNotification();

  const { ClearAllNotes, notes } = useContext(NoteContext);

  const clearAll = async () => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      notes.length === 0
        ? showError("Sorry, no any note to delete! 😔")
        : showSuccess("Note deleted successfully 🎉");

      ClearAllNotes();
    } catch (error) {
      console.log(error);
      showError("Sorry, we can note delete the note now! 😔");
    }
    setIsLoading(false);
  };

  return (
    <Tooltip label={"Clear All Notes"}>
      <IconButton
        m="0px 5px"
        onClick={clearAll}
        cursor={"pointer"}
        _hover={{
          transform: "scale(1.05)",
        }}
        isLoading={isLoading}
        transition="all 0.2s"
        aria-label="Change note's status"
        icon={<DeleteIcon />}
        size="md"
        p="5px"
        borderRadius={"5px"}
        variant="ghost"
        bg="error"
      />
    </Tooltip>
  );
};

export default ClearAllNotes;
