import {
  AspectRatio,
  Box,
  Button,
  chakra,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { FaAward } from "react-icons/fa";
import { GiSoapExperiment } from "react-icons/gi";
import { VscFolderOpened } from "react-icons/vsc";
import Image from "next/image";
import { useMainWidth } from "../lib/hooks";

const About: FunctionComponent = () => {
  const mainWidth = useMainWidth();

  const StyledArticle = chakra(Box, {
    baseStyle: {
      bg: "backgroundVariant",
      border: "1px",
      borderColor: "transparent",
      borderRadius: "1rem",
      p: { base: "0.75rem", sm: "2rem" },
      textAlign: "center",
      transition: "all 400ms ease",
      _hover: { bg: "transparent", borderColor: "primaryVariant" },
      sx: {
        h5: {
          fontSize: "0.95rem",
        },
        small: {
          fontSize: "0.7rem",
          color: "light",
        },
        svg: {
          color: "primary",
          fontSize: "1.4rem",
          mb: "1rem",
        },
      },
    },
  });

  return (
    <Box as="section" id="about" pt="7rem">
      <Heading as="h5" size="sm">
        Get To Know
      </Heading>
      <Heading size="xl">About Me</Heading>

      <Box
        w={mainWidth}
        mx="auto"
        display="grid"
        gridTemplateColumns={{ md: "1fr", lg: "35% 50%" }}
        gap={{ md: "0", lg: "12%" }}
      >
        <AspectRatio
          w={{ base: "65%", md: "50%", lg: "full" }}
          m={{ base: "0 auto 3rem", md: "2rem auto 4rem", lg: "0" }}
          ratio={1}
          borderRadius="2rem"
          bgGradient="linear(to-br, transparent, primary, transparent)"
          display="grid"
          placeItems="center"
          pt="4rem"
        >
          <Box
            borderRadius="2rem"
            overflow="hidden"
            transform="rotate(10deg)"
            transition="all 400ms ease"
            _hover={{ transform: "rotate(0)" }}
          >
            <Image
              src="/me-about.jpg"
              alt="about image"
              layout="fill"
              priority
            />
          </Box>
        </AspectRatio>

        <Box textAlign="center">
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr 1fr", lg: "repeat(3, 1fr)" }}
            gap={{ base: "0.5rem", sm: "1.5rem" }}
          >
            <StyledArticle as="article">
              <Icon as={GiSoapExperiment} />
              <Heading as="h5" size="sm">
                Experience
              </Heading>
              <Box as="small">3+ Years Working</Box>
            </StyledArticle>
            <StyledArticle as="article">
              <Icon as={VscFolderOpened} />
              <Heading as="h5" size="sm">
                Projects
              </Heading>
              <Box as="small">30+ Completed</Box>
            </StyledArticle>
            <StyledArticle as="article">
              <Icon as={FaAward} />
              <Heading as="h5" size="sm">
                Certifications
              </Heading>
              <Box as="small">10+ Certificates Achieved</Box>
            </StyledArticle>
          </Box>

          <Box
            as="p"
            m={{ base: "1.5rem 0", md: "1rem 0 1.5rem", lg: "2rem 0 2.6rem" }}
            color="light"
          >
            Hi there, I am a full stack flutter mobile app and web app
            developer. I have been building small and medium sized mobile and
            web apps for over 3 years now. I can help you build your mobile or
            web apps from a simple to-do list app to a whole e-commerce store.
          </Box>
          <a href="#contact">
            <Button variant="primary">Let&apos;s talk</Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
