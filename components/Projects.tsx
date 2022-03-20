import { AspectRatio, Box, Button, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Image from "next/image";
import { useMainWidth } from "../lib/hooks";
import { projects } from "../lib/data";

const Projects: FunctionComponent = () => {
  const mainWidth = useMainWidth();

  return (
    <Box as="section" id="projects" pt="7rem">
      <Heading as="h5" size="sm">
        My Recent Works
      </Heading>
      <Heading size="xl">Portfolio</Heading>

      <Box
        className="portfolio__container"
        w={mainWidth}
        mx="auto"
        display="grid"
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: "1rem", md: "1.2rem", lg: "2.5rem" }}
        sx={{
          ".portfolio__item": {
            bg: "backgroundVariant",
            padding: "1rem",
            borderRadius: "2rem",
            border: "1px",
            borderColor: "transparent",
            transition: "all 400ms ease",
            _hover: {
              borderColor: "primaryVariant",
              bg: "transparent",
            },
          },
          ".portfolio__item-image": {
            borderRadius: "1.5rem",
            overflow: "hidden",
            w: "full",
            h: "full",
          },
          ".portfolio__item h3": {
            m: "1.2rem 0 2rem",
          },
          ".portfolio__item-cta": {
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
          },
        }}
      >
        {projects.map(({ image, title, github, demo }, index) => (
          <Box as="article" key={index} className="portfolio__item">
            <AspectRatio ratio={2}>
              <Box className="portfolio__item-image">
                <Image
                  src={image}
                  alt={title}
                    layout="fill"
                />
              </Box>
            </AspectRatio>
            <Heading as="h3" size="md">
              {title}
            </Heading>
            <Box className="portfolio__item-cta">
              <a href={github} target="_blank" rel="noreferrer">
                <Button variant="secondary">Github</Button>
              </a>
              <a href={demo} target="_blank" rel="noreferrer">
                <Button variant="primary">Live Demo</Button>
              </a>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
