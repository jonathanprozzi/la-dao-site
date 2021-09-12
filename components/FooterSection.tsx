import {
  Box,
  Flex,
  VisuallyHidden,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Image from "next/image";

const FooterSection = () => (
  <Flex
    direction='column'
    alignItems='center'
    justifyContent='space-between'
    minWidth='100vw'
    minHeight={{ base: "50vh", lg: "80vh" }}
    backgroundImage={{
      base: "url('/la-bg-2.png')",
      lg: "url('/bg-gradient-bottom-scaled.png')",
    }}
    backgroundPosition={{ base: "bottom", lg: "top" }}
    backgroundSize='cover'
    backgroundRepeat='no-repeat'
  >
    <Box
      width='100vw'
      minHeight='10vh'
      background='linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0.01%, rgba(255, 255, 255, 0) 0.02%, #000000 100%)'
      opacity='100%'
      blendMode='multiply'
    />
    <Flex direction='column' alignItems='center'>
      <VisuallyHidden>
        <Text as='span'>Built by Raid Guild</Text>
      </VisuallyHidden>
    </Flex>
    <ChakraLink href='https://raidguild.org' isExternal>
      <Box position='relative' alignItems='center'>
        <Image
          alt={`Built by Raid Guild`}
          width={200}
          height={80}
          objectFit='contain'
          placeholder='blur'
          blurDataURL='/built-by-rg.jpg'
          src='/built-by-rg.jpg'
        />
      </Box>
    </ChakraLink>
  </Flex>
);

export default FooterSection;
