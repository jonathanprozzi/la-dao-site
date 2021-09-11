import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";

export default function Home() {
  return (
    <Box minWidth='100vw' minHeight='100vh'>
      <Hero />
      <SubHero />
      {/* <AboutSection />
      <WhatWeDoSection />
      <ServicesSection />
      <ProjectsSection />
      <JoinSection /> */}
    </Box>
  );
}
