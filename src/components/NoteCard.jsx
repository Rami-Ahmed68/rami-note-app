import { Box, Heading, Text, IconButton, HStack } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, TimeIcon } from "@chakra-ui/icons";

export default function NoteCard(props) {
  console.log(props.props);
  const handleEdit = () => {
    console.log("Edit note");
  };

  const handleDelete = () => {
    console.log("Delete note");
  };

  return (
    <Box
      w="100%"
      minH="100px"
      borderRadius="10px"
      bg="bg-card"
      p={3}
      borderLeft="4px solid"
      borderColor="green.500"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}>
      <Box flex="1" mr={3}>
        <Heading size="md" mb={2} noOfLines={1} color="text-primary">
          {props.props.title}
        </Heading>
        <Text fontSize="sm" noOfLines={2} color="text-secondary">
          {props.props.description}
        </Text>

        <HStack spacing={2} color="text-muted" fontSize="xs">
          <TimeIcon boxSize={3} />
          <Text>{props.props.created_at}</Text>
        </HStack>
      </Box>

      <HStack spacing={1}>
        <IconButton
          aria-label="Edit note"
          icon={<EditIcon />}
          size="sm"
          colorScheme="blue"
          variant="ghost"
          onClick={handleEdit}
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
        />
      </HStack>
    </Box>
  );
}
