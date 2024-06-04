import { Container, Box, Heading, Text, VStack, HStack, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h1" size="xl" mb={2}>Welcome to Financial Times</Heading>
          <Text fontSize="lg">
            Stay updated with the latest news, analysis, and insights from the world of finance and business.
          </Text>
        </Box>
        <HStack spacing={4} align="start">
          <Box flex="3" bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading as="h2" size="lg" mb={2}>Main Article</Heading>
            <Text>
              This is the main content area where the latest articles will be displayed. Stay tuned for updates.
            </Text>
          </Box>
          <Spacer />
          <Box flex="1" bg="gray.50" p={4} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="md" mb={2}>Sidebar</Heading>
            <Text>
              Additional content such as links, advertisements, or other information can be placed here.
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;