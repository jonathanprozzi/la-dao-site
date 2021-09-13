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
      <SubHero />
      <ServicesSection />
      <SocialSection />
      <FooterSection />
    </Box>
  );
}
