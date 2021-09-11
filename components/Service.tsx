import { Box, Stack, VisuallyHidden, Heading } from "@chakra-ui/react";
import Image from "next/image";

interface ServiceProps {
  name: string;
  image: string;
}

const Service = ({ name, image }: ServiceProps) => {
  return (
    <Stack
      spacing={{ base: "3", md: "6" }}
      direction={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "flex-start" }}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Box position='relative'>
        <Image
          alt={`Service: ${name}`}
          width={500}
          height={500}
          objectFit='cover'
          placeholder='blur'
          blurDataURL={image}
          src={image}
        />
      </Box>
      <Stack
        spacing='1'
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <VisuallyHidden>
          <Heading as='h3'>{name}</Heading>
        </VisuallyHidden>
      </Stack>
    </Stack>
  );
};

export default Service;
