import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Ajay!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#000"
  >
      {/* The UI for the landing section */}
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar src="https://i.pinimg.com/originals/08/7a/ed/087aed56c9cfd315cee6aa306d1a8156.jpg" size="2xl" name="Ajay" />
        <Heading as="h4" size="md" noOfLines={1}>{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h2" size="5xl" noOfLines={1}>{bio1} {bio2}</Heading>
        {/* <Heading as="h4" size="5xl" noOfLines={1}>{bio2}</Heading> */}
      </VStack>
    </VStack>
    {/* The UI for the landing section */}
  </FullScreenSection>
);

export default LandingSection;
