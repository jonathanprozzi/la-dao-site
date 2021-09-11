import { Box, Flex, Text } from "@chakra-ui/react";

const SubHero = () => (
  <Flex
    direction='column'
    alignItems='center'
    minWidth='100vw'
    minHeight={{ base: "20vh", lg: "50vh" }}
    backgroundImage="url('/abstract-gradient.png'),linear-gradient(rgba(0, 0, 0, 0) @ 0%
    rgba(0, 0, 0, 0) @ 0.01%
    rgba(255, 255, 255, 0) @ 0.02%
    #000000 @ 100%)"
    backgroundPosition={{ base: "0% 50%" }}
    backgroundSize='cover'
    backgroundRepeat='no-repeat'
    // blendMode='multiply'
  >
    <Flex direction='column' alignItems='center'>
      <Text
        color='white'
        fontSize='xl'
        lineHeight={7}
        paddingTop={8}
        fontFamily='serif'
      >
        curating creative experiences
      </Text>
    </Flex>
  </Flex>
);

export default SubHero;
