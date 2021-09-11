import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import Service from "@/components/Service";
import { services } from "@/components/_servicesData";

const ServicesSection = () => (
  <Box
    as='section'
    background='black'
    width='100vw'
    marginY={16}
    paddingX={{ base: "6", md: "8" }}
  >
    <Flex
      marginX='auto'
      direction='column'
      alignItems='center'
      justifyContent='center'
      maxWidth={{ base: "xl", lg: "6xl" }}
    >
      <SimpleGrid columns={{ base: 2, md: 2 }}>
        {services.map((service, idx) => (
          <Service key={idx} name={service.name} image={service.image} />
        ))}
      </SimpleGrid>
    </Flex>
  </Box>
);

export default ServicesSection;
