import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";

function AegLink(props) {
  const { heading, description, link, imageSrc, imageSrcSet } = props;

  return (
    <Link
      href={link}
      _hover={{ textDecoration: "none" }}
      onClick={(event) => console.log(event.target)}
    >
      <Box w={"100%"} data-group>
        <Image
          src={imageSrc}
          srcSet={imageSrcSet}
          borderBottom={"4px solid transparent"}
          _groupHover={{ borderBottom: "4px solid #D9183B" }}
          mb={6}
        />
        <Heading as={"h2"} size={"md"} fontWeight={400} mb={4}>
          {heading}
        </Heading>
        <Text
          color={"whiteAlpha.600"}
          lineHeight={"1.6"}
          fontWeight={100}
          fontSize={"lg"}
          noOfLines={3}
          mb={8}
        >
          {description}
        </Text>
        <Text
          fontWeight={400}
          textTransform={"uppercase"}
          borderBottom={"2px solid transparent"}
          _groupHover={{ borderBottom: "2px solid #D9183B" }}
          w={"fit-content"}
          pb={2}
        >
          Read More
        </Text>
      </Box>
    </Link>
  );
}

export default AegLink;
