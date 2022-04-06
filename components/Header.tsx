import { FunctionComponent } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import Image from "next/image";
import { useHeadingSize, useMainWidth } from "../lib/hooks";

const Header: FunctionComponent = () => {
  const mainWidth = useMainWidth();
  const headingSize = useHeadingSize();

  return (
    <VStack
      as="header"
      pt={{ base: "4rem", sm: "6rem", md: "7rem" }}
      textAlign="center"
      w={mainWidth}
      marginX="auto"
      alignItems="center"
    >
      <AspectRatio
        maxWidth="400px"
        width={{ base: "90%", sm: "380px" }}
        ratio={1}
      >
        <Box
          borderRadius="50%"
          padding="16px"
          border="4px"
          borderColor="primary"
        >
          <Image src="/me.jpg" alt="me" layout="fill" priority />
        </Box>
      </AspectRatio>
      <VStack gap={{ base: 0, sm: 2 }} pt={{ base: "1.5rem", sm: "2.5rem" }}>
        <Heading as="h1" size={headingSize}>
          Marwan Sa-ad
        </Heading>
        <Heading as="h5" size="sm" color="light">
          Fullstack Developer
        </Heading>
      </VStack>
      <HStack justifyContent="center" gap={4} pt="1rem">
        <a
          href="https://www.linkedin.com/in/marwan-abdul-rahman-sa-ad-ab9a141bb"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={24} />
        </a>
        <a
          href="https://github.com/saadmarwan16"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={24} />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~010f903570ac848355"
          target="_blank"
          rel="noreferrer"
        >
          <SiUpwork size={24} />
        </a>
        <a
          href="https://twitter.com/MarwanA06812308"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter size={24} />
        </a>
      </HStack>
      <HStack justifyContent="center" gap="1.2rem" pt="2.5rem">
        <a href="#about">
          <Button variant="secondary">About me</Button>
        </a>
        <a href="#contact">
          <Button variant="primary">Let&apos;s talk</Button>
        </a>
      </HStack>
    </VStack>
  );
};

export default Header;
