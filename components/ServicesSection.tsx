import { Box, SimpleGrid } from "@chakra-ui/react";

// import Service from "./Service";

const ServicesSection = () => (
  <Box
    as='section'
    background='black'
    width='100vw'
    marginY={16}
    paddingX={{ base: "6", md: "8" }}
  >
    <Box marginX='auto' maxWidth='5xl' paddingX={{ base: "6", md: "8" }}>
      <SimpleGrid
        columns={{ base: 2, md: 2 }}
        spacingX='10'
        spacingY={{ base: "8", md: "14" }}
      >
        <Box height='200' width='200' bg='gray.800' />
        <Box height='200' width='200' bg='gray.800' />
        <Box height='200' width='200' bg='gray.800' />
        <Box height='200' width='200' bg='gray.800' />
      </SimpleGrid>
    </Box>
  </Box>
);

export default ServicesSection;
