import { Flex, HStack, Text } from "@chakra-ui/react";
import SocialLinks from "@/components/SocialLinks";

const SocialSection = () => (
  <Flex
    direction='column'
    alignItems='center'
    minWidth='100vw'
    minHeight={{ base: "10vh", lg: "50vh" }}
    backgroundImage="url('/abstract-gradient.png'),linear-gradient(rgba(0, 0, 0, 0) @ 0%
    rgba(0, 0, 0, 0) @ 0.01%
    rgba(255, 255, 255, 0) @ 0.02%
    #000000 @ 100%)"
    backgroundPosition={{ base: "0% 50%" }}
    backgroundSize='cover'
    backgroundRepeat='no-repeat'
  >
    <Flex direction='column' alignItems='center'>
      <Text
        color='white'
        fontSize={{ base: "xl", lg: "3xl" }}
        lineHeight={7}
        paddingTop={8}
        fontFamily='Chapter-Regular'
      >
        join the conversation
      </Text>
      <Flex
        width='100%'
        direction='row'
        alignItems='center'
        justifyContent='center'
        paddingY={20}
      >
        <SocialLinks />
      </Flex>
    </Flex>
  </Flex>
);

export default SocialSection;
