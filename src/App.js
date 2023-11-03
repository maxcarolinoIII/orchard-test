import "./App.css";
import { Flex } from "@chakra-ui/react";
import BodyNeeds from "./sections/BodyNeeds";

function App() {
  return (
    <Flex
      w={{ base: "90%", lg: "85%", xl: "70%", }}
      mx={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
      h={"100vh"}
    >
      <BodyNeeds />
    </Flex>
  );
}

export default App;
