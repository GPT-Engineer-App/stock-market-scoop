import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Heading as="h1" mb={4}>About Us</Heading>
    <Text fontSize="lg">
      Financial Times is a leading global business publication, providing essential news, commentary, data, and analysis for the global business community.
    </Text>
  </Box>
);

export default About;