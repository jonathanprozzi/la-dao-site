import { Box, SimpleGrid } from "@chakra-ui/react";
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
    <Box marginX='auto'>
      <SimpleGrid columns={{ base: 2, md: 2 }}>
        {services.map((service, idx) => (
          <Service key={idx} name={service.name} image={service.image} />
        ))}
      </SimpleGrid>
    </Box>
  </Box>
);

export default ServicesSection;
