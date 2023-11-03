import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import ImageThumbnail from "./ImageThumbnail";

function BodyNeeds() {
  const [active, setActive] = useState(null);
  const thumbnails = [
    {
      id: 1,
      column: 1,
      src: "/assets/body-needs/Image-01.jpg",
      alt: "Source foods.",
    },
    {
      id: 2,
      column: 2,
      src: "/assets/body-needs/Image-02.jpg",
      alt: "Fresh Ingredients.",
    },
    {
      id: 3,
      column: 2,
      src: "/assets/body-needs/Image-03.jpg",
      alt: "Healthy organic food",
    },
  ];

  const renderThumbnail = (thumbnail) => {
    return (
      <ImageThumbnail
        src={thumbnail.src}
        alt={thumbnail.alt}
        isActive={active == thumbnail.id}
        onMouseEnter={() => setActive(thumbnail.id)}
        onMouseLeave={() => setActive(null)}
      />
    );
  };

  return (
    <Flex gap={6} overflow={"hidden"}>
      {thumbnails
        .filter((thumbnail) => thumbnail.column == 1)
        .map((thumbnail) => renderThumbnail(thumbnail))}
      <Flex
        flexDir={"column"}
        gap={6}
        h={"100%"}
        w={"100%"}
        overflow={"hidden"}
      >
        {thumbnails
          .filter((thumbnail) => thumbnail.column == 2)
          .map((thumbnail) => renderThumbnail(thumbnail))}
      </Flex>
      <Box w={"100%"}>
        <Heading
          as={"h1"}
          color={"whiteAlpha.800"}
          textTransform={"uppercase"}
          fontWeight={"100"}
          size={"lg"}
          borderBottom={"1px solid white"}
          paddingBottom={"14px"}
          mb={8}
        >
          Answer your body's needs
        </Heading>
        <Text
          color={"whiteAlpha.800"}
          fontSize={"xl"}
          fontWeight={"100"}
          lineHeight={"1.6"}
          mb={14}
        >
          The way ingredients are sourced affects the way we nourish our bodies.
          Author Mark Schatzer believes our body naturally develops an appetite
          for the foods and nutrients it needs to be healthy, but that
          artificial flavourings are getting in the way. This can be reversed by
          focusing on high-quality ingredients and being mindful as your
          appetite guides you to consume according to your body's needs.
        </Text>
        <Heading
          as={"h6"}
          color={"#D9183B"}
          textTransform={"uppercase"}
          fontWeight={"400"}
          size={"sm"}
          mb={6}
        >
          Be Mindful
        </Heading>
        <Text
          color={"whiteAlpha.800"}
          fontSize={"xl"}
          fontWeight={"400"}
          lineHeight={"1.6"}
        >
          Sourcing local or organic food is a good way to start being more
          mindful about what you're cooking and eating.
        </Text>
      </Box>
    </Flex>
  );
}

export default BodyNeeds;
