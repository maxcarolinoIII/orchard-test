import { Box, Image } from "@chakra-ui/react";

function ImageThumbnail(props) {
  const {
    src,
    alt,
    isActive,
    onMouseEnter = () => {},
    onMouseLeave = () => {},
    onClick = () => {}
  } = props;

  return (
    <Box overflow={"hidden"} w={"100%"} cursor={"pointer"}>
      <Image
        fit={"cover"}
        src={src}
        alt={alt}
        w={"100%"}
        h={"100%"}
        transition={"all 1s ease"}
        transform={isActive ? "scale(1.3)" : ""}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
    </Box>
  );
}

export default ImageThumbnail;
