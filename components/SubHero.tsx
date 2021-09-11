import { Box, Flex, Text, Heading } from "@chakra-ui/react";

const SubHero = () => (
  <Flex
    direction='column'
    alignItems='center'
    minWidth='100vw'
    backgroundSize='cover'
    backgroundRepeat='no-repeat'
  >
    <Flex direction='column' alignItems='center'>
      <Heading
        as='h2'
        color='white'
        fontSize='xl'
        lineHeight={7}
        paddingTop={8}
        fontFamily='serif'
      >
        curating creative experiences
      </Heading>
    </Flex>
  </Flex>
);

export default SubHero;
