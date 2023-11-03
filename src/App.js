import "./App.css";
import { Flex } from "@chakra-ui/react";
import BodyNeeds from "./sections/BodyNeeds";

function App() {
  return (
    <Flex
      w={"65%"}
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
