import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import ServicesSection from "@/components/ServicesSection";
import SocialSection from "@/components/SocialSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <Box minWidth='100vw' minHeight='100vh'>
      <Hero />
      <Box
        width='100vw'
        background='linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0.01%, rgba(255, 255, 255, 0) 0.02%, #000000 100%)'
        minHeight='10vh'
      />
      <SubHero />
      <ServicesSection />
      <SocialSection />
      <Box
        width='100vw'
        background='linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0.01%, rgba(255, 255, 255, 0) 0.02%, #000000 100%)'
        minHeight='10vh'
      />
      <FooterSection />
    </Box>
  );
}
