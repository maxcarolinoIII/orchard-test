import "./App.css";
import { Flex } from "@chakra-ui/react";
import BodyNeeds from "./sections/BodyNeeds";
import AegLatest from "./sections/AegLatest";

function App() {
  const sections = [
    { name: "BodyNeeds", component: <BodyNeeds /> },
    { name: "AegLatest", component: <AegLatest /> },
  ];

  return (
    <Flex
      py={{ base: 12, md: 20, lg: 0 }}
      gap={{ base: 20, lg: 0 }}
      flexDir={"column"}
    >
      {sections.map((section, index) => (
        <Flex
          key={index}
          w={{ base: "90%", md: "80%", lg: "85%", xl: "70%" }}
          mx={"auto"}
          alignItems={"center"}
          justifyContent={"center"}
          h={{ base: "auto", lg: "100vh" }}
        >
          {section.component}
        </Flex>
      ))}
    </Flex>
  );
}

export default App;
