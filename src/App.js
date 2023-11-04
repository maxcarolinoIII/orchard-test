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
    <>
      {sections.map((section, index) => (
        <Flex
          key={index}
          w={{ base: "90%", md: "80%", lg: "85%", xl: "70%" }}
          mx={"auto"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={{ base: 6, md: 12, lg: 0 }}
          h={{ base: "auto", lg: "100vh" }}
        >
          {section.component}
        </Flex>
      ))}
    </>
  );
}

export default App;
