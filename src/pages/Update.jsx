import {
  Input,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { NoteContext } from "../components/hooks/noteContext";
import { useParams } from "react-router-dom";
import { useNotification } from "../components/hooks/useNotification";
import { useNavigate } from "react-router-dom";

export function Update() {
  const [titleLength, setTitleLength] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [createdAtValue, setCreatedAtValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { GetNote, UpdateNote } = useContext(NoteContext);
  const { id } = useParams();
  const note = GetNote(id);
  const { showSuccess, showError } = useNotification();
  const navigate = useNavigate();

  useEffect(() => {
    if (note) {
      setTitleValue(note.title || "");
      setDescriptionValue(note.description || "");
      setCreatedAtValue(note.created_at || "");
      setTitleLength(note.title?.length || 0);
      setDescriptionLength(note.description?.length || 0);
    }
  }, [note]);

  const handelUpdate = async () => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      //* show success
      showSuccess("Note Updated successfully! 🎉");

      UpdateNote(note.id, {
        title: titleValue,
        description: descriptionValue,
        created_at: createdAtValue,
      });

      setIsLoading(false);

      navigate(`/`);
    } catch (error) {
      showError("Failed to update note. Please try again! 😔");
      setIsLoading(false);
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"wrap"}>
      <Heading
        borderBottom={"1px solid"}
        borderColor={"border-secondary"}
        w="100%">
        Update note 📝
      </Heading>

      <FormControl m="10px 0px" w="49%">
        <FormLabel
          htmlFor="title"
          fontWeight="medium"
          color="text-primary"
          borderBottom={"1px solid"}
          borderColor={"border-primary"}
          display={"flex"}
          justifyContent={"space-between"}>
          Title 🏷️
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
          value={titleValue}
          borderColor={"border-secondary"}
          onChange={(e) => {
            setTitleValue(e.target.value);
            setTitleLength(e.target.value.length);
          }}
        />
      </FormControl>

      <FormControl m="10px 0px" w="49%">
        <FormLabel
          htmlFor="date"
          fontWeight="medium"
          color="text-primary"
          borderBottom={"1px solid"}
          borderColor={"border-primary"}
          display={"flex"}
          justifyContent={"space-between"}>
          Date of created ⏰
        </FormLabel>

        <Input
          id="date"
          placeholder="Type date here ..."
          type="text"
          size="lg"
          focusBorderColor="blue.500"
          bg="bg-input"
          color="text-primary"
          border={"1px solid"}
          value={createdAtValue}
          borderColor={"border-secondary"}
          onChange={(e) => setCreatedAtValue(e.target.value)}
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
          Description 📃
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
          value={descriptionValue}
          borderColor={"border-secondary"}
          onChange={(e) => {
            setDescriptionValue(e.target.value);
            setDescriptionLength(e.target.value.length);
          }}
        />
      </FormControl>

      <Button
        onClick={handelUpdate}
        isLoading={isLoading}
        bg="purple"
        color="white"
        size="lg"
        mt={4}
        w="100%"
        loadingText="Updating Note..."
        _hover={{
          transform: "translateY(-1px)",
          boxShadow: "lg",
          bg: "purple.600",
        }}
        transition="all 0.2s">
        Update Note
      </Button>
    </Box>
  );
}
