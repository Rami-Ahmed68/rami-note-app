import {
  Input,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNotification } from "../components/hooks/useNotification";

function AddNote() {
  const [titleLength, setTitleLength] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [notes, SetNotes] = useState(
    window.localStorage.getItem("rami-note-app")
      ? JSON.parse(window.localStorage.getItem("rami-note-app"))
      : []
  );

  const { showSuccess, showError } = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // To get the values direct from the DOM
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");

    const titleValue = titleInput.value;
    const descriptionValue = descriptionInput.value;

    //! show error message
    if (!titleValue.trim() || !descriptionValue.trim()) {
      showError("Please fill in both title and description!");
      return;
    }

    //! show error message
    if (titleValue.length < 3) {
      showError("Title must be at least 3 characters long!");
      return;
    }

    //! show error message
    if (descriptionValue.length < 10) {
      showError("Description must be at least 10 characters long!");
      return;
    }

    // To start the loading icon in button
    setIsLoading(true);

    try {
      // API Simulators
      await new Promise((resolve) => setTimeout(resolve, 1000));

      //* show success
      showSuccess("Note created successfully! 🎉");

      // create a new note
      const newNote = {
        title: titleValue,
        description: descriptionValue,
        created_at: new Date(),
      };
      SetNotes([newNote, ...notes]);

      window.localStorage.setItem(
        "rami-note-app",
        JSON.stringify([newNote, ...notes])
      );

      // Reset empty values
      titleInput.value = "";
      descriptionInput.value = "";
      setTitleLength(0);
      setDescriptionLength(0);
    } catch (error) {
      showError("Failed to create note. Please try again! 😔");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Heading borderBottom={"1px solid"} borderColor={"border-secondary"}>
        Add New Note 📝
      </Heading>

      <FormControl m="10px 0px">
        <FormLabel
          htmlFor="title"
          fontWeight="medium"
          color="text-primary"
          borderBottom={"1px solid"}
          borderColor={"border-primary"}
          display={"flex"}
          justifyContent={"space-between"}>
          Title
          <Box
            p="3px"
            fontSize={"small"}
            borderRadius="5px"
            bg="purple"
            color="white">
            {titleLength}
          </Box>
        </FormLabel>
        <Input
          id="title"
          placeholder="Type title here ..."
          type="text"
          size="lg"
          focusBorderColor="blue.500"
          bg="bg-input"
          color="text-primary"
          border={"1px solid"}
          borderColor={"border-secondary"}
          onChange={(e) => setTitleLength(e.target.value.length)}
        />
      </FormControl>

      <FormControl m="10px 0px">
        <FormLabel
          htmlFor="description"
          fontWeight="medium"
          color="text-primary"
          borderBottom={"1px solid"}
          borderColor={"border-primary"}
          display={"flex"}
          justifyContent={"space-between"}>
          Description
          <Box
            p="3px"
            borderRadius="5px"
            fontSize={"small"}
            bg="purple"
            color="white">
            {descriptionLength}
          </Box>
        </FormLabel>
        <Textarea
          id="description"
          placeholder="Type description here ..."
          size="lg"
          minH="250px"
          resize="vertical"
          focusBorderColor="blue.500"
          bg="bg-input"
          color="text-primary"
          border={"1px solid"}
          borderColor={"border-secondary"}
          onChange={(e) => setDescriptionLength(e.target.value.length)}
        />
      </FormControl>

      <Button
        onClick={handleSubmit}
        bg="purple"
        color="white"
        size="lg"
        mt={4}
        w="100%"
        isLoading={isLoading}
        loadingText="Creating Note..."
        _hover={{
          transform: "translateY(-1px)",
          boxShadow: "lg",
          bg: "purple.600",
        }}
        transition="all 0.2s">
        Add Note
      </Button>
    </>
  );
}

export default AddNote;
