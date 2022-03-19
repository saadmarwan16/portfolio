import { Box, Heading, Icon } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { useMainWidth } from "../lib/hooks";

const Experience: FunctionComponent = () => {
  const mainWidth = useMainWidth();

  return (
    <Box as="section" id="experience" pt="7rem">
      <Heading as="h5" size="sm">
        The Skills I Have
      </Heading>
      <Heading size="xl">My Experience</Heading>

      <Box
        w={mainWidth}
        mx="auto"
        display="grid"
        gridTemplateColumns={{ md: "1fr", lg: "1fr 1fr" }}
        gap={{ base: "1rem", lg: "2rem" }}
        sx={{
          "> div": {
            width: { base: "100%", md: "80%", lg: "100%" },
            bg: "backgroundVariant",
            padding: { base: "2rem 0.25rem", md: "2rem", lg: "2.4rem 3rem" },
            margin: { md: "0 auto" },
            borderRadius: "2rem",
            border: "1px solid transparent",
            _hover: {
              bg: "transparent",
              borderColor: "primaryVariant",
              color: "default",
            },
          },
          "> div h3": {
            textAlign: "center",
            mb: "2rem",
            color: "primary",
          },
          ".experience-content": {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            rowGap: "2rem",
            padding: { md: "1rem" },
          },
          ".experience-details": {
            display: "flex",
            gap: {base: "0.5rem", sm: "1rem"},
          },
        }}
      >
        <Box>
          <Heading as="h3" size="lg">
            Frontend
          </Heading>
          <Box className="experience-content">
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  HTML
                </Heading>
                <Box as="small" color="light">
                  Experienced
                </Box>
              </Box>
            </Box>
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  CSS3
                </Heading>
                <Box as="small" color="light">
                  Intermediate
                </Box>
              </Box>
            </Box>
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  JavaScript
                </Heading>
                <Box as="small" color="light">
                  Intermediate
                </Box>
              </Box>
            </Box>
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  React
                </Heading>
                <Box as="small" color="light">
                  Experienced
                </Box>
              </Box>
            </Box>
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  Tailwind
                </Heading>
                <Box as="small" color="light">
                  Intermediate
                </Box>
              </Box>
            </Box>
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  Flutter
                </Heading>
                <Box as="small" color="light">
                  Intermediate
                </Box>
              </Box>
            </Box>
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  Next.js
                </Heading>
                <Box as="small" color="light">
                  Intermediate
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Backend
          </Heading>
          <Box className="experience-content">
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  Python
                </Heading>
                <Box as="small" color="light">
                  Intermediate
                </Box>
              </Box>
            </Box>
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  Firebase
                </Heading>
                <Box as="small" color="light">
                  Experienced
                </Box>
              </Box>
            </Box>
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  Flask
                </Heading>
                <Box as="small" color="light">
                  Intermediate
                </Box>
              </Box>
            </Box>
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  PostgreSQL
                </Heading>
                <Box as="small" color="light">
                  Basic
                </Box>
              </Box>
            </Box>
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  Django
                </Heading>
                <Box as="small" color="light">
                  Intermediate
                </Box>
              </Box>
            </Box>
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  MongoDB
                </Heading>
                <Box as="small" color="light">
                  Basic
                </Box>
              </Box>
            </Box>
            <Box as="article" className="experience-details">
              <Icon as={BsPatchCheckFill} mt="6px" color="primary" />
              <Box>
                <Heading as="h4" size="md">
                  Docker
                </Heading>
                <Box as="small" color="light">
                  Basic
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
