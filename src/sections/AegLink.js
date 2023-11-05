import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";

function AegLink(props) {
  const { heading, description, link, imageSrc, imageSrcSet } = props;

  return (
    <Link
      w={"100%"}
      href={link}
      _hover={{ textDecoration: "none" }}
      onClick={(event) => console.log(event.target)}
    >
      <Box data-group>
        <Image
          src={imageSrc}
          srcSet={imageSrcSet}
          borderBottom={"4px solid transparent"}
          transition={"border-bottom 800ms"}
          _groupHover={{ borderBottom: "4px solid #D9183B" }}
          mb={6}
          alt={heading}
        />
        <Heading
          lineHeight={"1.4"}
          as={"h2"}
          size={"md"}
          fontWeight={400}
          mb={4}
          noOfLines={1}
        >
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
          transition={"border-bottom 800ms"}
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
