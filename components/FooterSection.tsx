import { Box, Flex, VisuallyHidden, Text } from "@chakra-ui/react";
import Image from "next/image";

const FooterSection = () => (
  <Flex
    direction='column'
    alignItems='center'
    justifyContent='space-between'
    minWidth='100vw'
    minHeight={{ base: "50vh", lg: "50vh" }}
    backgroundImage="url('/la-bg-2.png')"
    backgroundSize='cover'
    backgroundRepeat='no-repeat'
  >
    <Flex direction='column' alignItems='center'>
      <VisuallyHidden>
        <Text as='span'>Built by Raid Guild</Text>
      </VisuallyHidden>
    </Flex>
    <Box position='relative' alignItems='center'>
      <Image
        alt={`Built by Raid Guild`}
        width={200}
        height={80}
        objectFit='contain'
        placeholder='blur'
        blurDataURL='/built-by-rg.png'
        src='/built-by-rg.png'
      />
    </Box>
  </Flex>
);

export default FooterSection;
