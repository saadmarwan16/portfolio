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
import { FiUsers } from "react-icons/fi";
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
      p: {base: '1rem', sm: "2rem"},
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
        gap={{ md: "0", lg: "15%" }}
      >
        <AspectRatio
          w={{ base: "65%", md: "50%", lg: "full" }}
          m={{ base: "0 auto 3rem", md: "2rem auto 4rem", lg: "0" }}
          ratio={1}
          borderRadius="2rem"
          bgGradient="linear(to-br, transparent, primary, transparent)"
          display="grid"
          placeItems="center"
        >
          <Box
            borderRadius="2rem"
            overflow="hidden"
            transform="rotate(10deg)"
            transition="all 400ms ease"
            _hover={{ transform: "rotate(0)" }}
          >
            <Image src="/me-about.jpg" alt="about image" layout="fill" />
          </Box>
        </AspectRatio>

        <Box textAlign="center">
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr 1fr", lg: "repeat(3, 1fr)" }}
            gap="1.5rem"
          >
            <StyledArticle as="article">
              <Icon as={FaAward} />
              <Heading as="h5" size="sm">
                Experience
              </Heading>
              <Box as="small">3+ Years Working</Box>
            </StyledArticle>
            <StyledArticle as="article">
              <Icon as={FiUsers} />
              <Heading as="h5" size="sm">
                Clients
              </Heading>
              <Box as="small">200+ Worldwide</Box>
            </StyledArticle>
            <StyledArticle as="article">
              <Icon as={VscFolderOpened} />
              <Heading as="h5" size="sm">
                Projects
              </Heading>
              <Box as="small">80+ Completed</Box>
            </StyledArticle>
          </Box>

          <Box
            as="p"
            m={{ base: "1.5rem 0", md: "1rem 0 1.5rem", lg: "2rem 0 2.6rem" }}
            color="light"
          >
            Duis deserunt enim commodo ut laboris quis nulla labore proident
            amet et. Labore nulla duis mollit tempor sint ipsum. Labore aliquip
            mollit mollit laboris amet dolore minim reprehenderit minim fugiat.
            Culpa sint est in sunt deserunt.
          </Box>

          <a href="#contact">
            <Button variant="primary">Let's talk</Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
