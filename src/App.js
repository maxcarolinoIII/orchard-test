import "./App.css";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function App() {
  return (
    <Flex
      w={"70%"}
      mx={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
      h={"100vh"}
      gap={24}
    >
      <Image
        fit={"cover"}
        h={"604px"}
        src="/assets/body-needs/Image-01.jpg"
        alt="Source organic foods"
      />
      <Flex flexDir={"column"} gap={24} maxH={"604px"}>
        <Image fit={"cover"} src="/assets/body-needs/Image-02.jpg" />
        <Image fit={"cover"} src="/assets/body-needs/Image-03.jpg" />
      </Flex>
      <Box>
        <Heading
          as={"h1"}
          color={"white"}
          textTransform={"uppercase"}
          fontWeight={"300"}
          size={"sm"}
          borderBottom={"1px solid white"}
          paddingBottom={"14px"}
        >
          Answer your body's needs
        </Heading>
        <Text color={"white"} size={"lg"} fontWeight={"300"}>
          The way ingredients are sourced affects the way we nourish our bodies.
          Author Mark Schatzer believes our body naturally develops an appetite
          for the foods and nutrients it needs to be healthy, but that
          artificial flavourings are getting in the way. This can be reversed by
          focusing on high-quality ingredients and being mindful as your
          appetite guides you to consume according to your body's needs.
        </Text>
      </Box>
    </Flex>
  );
}

export default App;
