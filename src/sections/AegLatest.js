import { Box, Flex, Heading } from "@chakra-ui/react";
import AegLink from "./AegLink";

function AegLatest() {
  const links = [
    {
      heading: "Summer Lunch Menu By Mark Best",
      description:
        "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
      link: "#",
      imageSrc: "/assets/aeg-latest/Image-01.jpg",
      imageSrcSet:
        "/assets/aeg-latest/Image-01.jpg 384w, /assets/aeg-latest/Image-01@2x.jpg 768w",
    },
    {
      heading: "A Traditonal Christmas Eve, Mark Best Style",
      description:
        "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guest.",
      link: "#",
      imageSrc: "/assets/aeg-latest/Image-02.jpg",
      imageSrcSet:
        "/assets/aeg-latest/Image-02.jpg 384w, /assets/aeg-latest/Image-02@2x.jpg 768w",
    },
    {
      heading: "Taking Taste Further",
      description:
        "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most of our products - and the best out of your food.",
      link: "#",
      imageSrc: "/assets/aeg-latest/Image-03.jpg",
      imageSrcSet:
        "/assets/aeg-latest/Image-03.jpg 384w, /assets/aeg-latest/Image-03@2x.jpg 768w",
    },
  ];

  return (
    <Box>
      <Heading
        as={"h1"}
        textTransform={"uppercase"}
        size={{ base: "lg", md: "xl", lg: "2xl" }}
        fontWeight={100}
        textAlign={"center"}
        mb={{ base: 8, md: 12, lg: 16 }}
      >
        All the latest from AEG
      </Heading>
      <Flex gap={6} flexDir={{ base: "column", lg: "row" }}>
        {links.map((link, index) => (
          <AegLink key={index} {...link} />
        ))}
      </Flex>
    </Box>
  );
}

export default AegLatest;
