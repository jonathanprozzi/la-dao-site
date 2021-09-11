import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <Box minWidth='100vw' minHeight='100vh'>
      <Hero />
      <SubHero />
      <ServicesSection />
      {/* <AboutSection />
      <WhatWeDoSection />
      <ServicesSection />
      <ProjectsSection />
      <JoinSection /> */}
    </Box>
  );
}
