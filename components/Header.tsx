import { FunctionComponent } from "react";
import { Box, Button, Heading, Hide, HStack, VStack } from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import Image from "next/image";
import { useHeadingSize, useMainWidth } from "../lib/hooks";

const Header: FunctionComponent = () => {
  const mainWidth = useMainWidth();
  const headingSize = useHeadingSize();

  return (
    <Box
      as="header"
      h={{ base: "100vh", md: "86vh", lg: "100vh" }}
      pt="7rem"
      overflow="hidden"
    >
      <Box
        textAlign="center"
        position="relative"
        h="full"
        w={mainWidth}
        marginX="auto"
      >
        <VStack gap={{ base: 0, sm: 2 }}>
          <Heading as="h5" size="sm">
            Hello, I&apos;m
          </Heading>
          <Heading as="h1" size={headingSize}>
            Marwan Sa-ad
          </Heading>
          <Heading as="h5" size="sm" color="light">
            Fullstack Developer
          </Heading>
        </VStack>
        <HStack justifyContent="center" gap="1.2rem" mt="2.5rem">
          <a href="#about">
            <Button variant="secondary">About me</Button>
          </a>
          <a href="#contact">
            <Button variant="primary">Let&apos;s talk</Button>
          </a>
        </HStack>
        <Hide below="sm">
          <VStack
            alignItems="center"
            gap="0.8rem"
            position="absolute"
            left="0"
            bottom="3rem"
            _after={{
              content: `""`,
              width: "1px",
              height: "2rem",
              bg: "primary",
            }}
          >
            <a
              href="https://www.linkedin.com/in/marwan-abdul-rahman-sa-ad-ab9a141bb"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/saadmarwan16"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~010f903570ac848355"
              target="_blank"
              rel="noreferrer"
            >
              <SiUpwork />
            </a>
            <a
              href="https://twitter.com/MarwanA06812308"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
          </VStack>
        </Hide>
        <Box
          bgGradient="linear(to-b, primary, transparent)"
          width={{ base: "16rem", sm: "22rem" }}
          height="30rem"
          position="absolute"
          left={{ base: "calc(50% - 8rem)", sm: "calc(50% - 11rem)" }}
          mt="4rem"
          borderTopRadius="12rem"
          overflow="hidden"
        >
          <Image src="/me.jpg" alt="me" layout="fill" priority />
        </Box>
        <Hide below="sm">
          <Box
            position="absolute"
            right="-2.5rem"
            bottom="5rem"
            transform="rotate(90deg)"
            fontWeight="300"
            fontSize="0.9rem"
          >
            <a href="#footer">Scroll Down</a>
          </Box>
        </Hide>
      </Box>
    </Box>
  );
};

export default Header;
