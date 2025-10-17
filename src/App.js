import { Flex, Stack, SlideFade } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NoteDetails from "./pages/NoteDetails";
import AddNote from "./pages/AddNote.jsx";
import Nav from "./components/global/Nav";

function App() {
  const location = useLocation();

  return (
    <Flex className="App" direction="column" maxH="100vh" w="98%" m="0px 1%" p="3px">
      <Nav />
      <Stack 
        flex="1" 
        w="100%"
        bg="bg-secondary" 
        borderRadius="10px"
        p={4}
        spacing={4}
        m={"10px 0px"}
        position="relative"
        overflow="hidden"
      >
        <SlideFade key={location.pathname} in={true} offsetY="20px">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noteDetails" element={<NoteDetails />} />
            <Route path="/addnote" element={<AddNote />} />
          </Routes>
        </SlideFade>
      </Stack>
    </Flex>
  );
}

export default App;