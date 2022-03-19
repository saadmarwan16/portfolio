import { Box, Heading, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { BiCheck } from "react-icons/bi";
import { useMainWidth } from "../lib/hooks";

const Services: FunctionComponent = () => {
  const mainWidth = useMainWidth();

  return (
    <Box as="section" id="services" pt="7rem">
      <Heading as="h5" size="sm">
        What I Offer
      </Heading>
      <Heading size="xl">Services</Heading>

      <Box
        className="services__container"
        w={mainWidth}
        m="0 auto"
        display="grid"
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: "1rem", md: "2rem", lg: "3rem" }}
        sx={{
          ".services": {
            bg: "backgroundVariant",
            borderRadius: "0 0 2rem 2rem",
            border: "1px",
            borderColor: "primary",
            height: { md: "auto", lg: "fit-content" },
            transition: "all 400ms ease",
            _hover: {
              bg: "transparent",
              borderColor: "primaryVariant",
            },
          },
          ".service__head": {
            bg: "primary",
            p: "2rem",
            borderRadius: "0 0 2rem 2rem",
            boxShadow: "0 2rem 1rem rgba(0, 0, 0, 0.1)",
          },
          ".service__head h3": {
            color: "background",
            fontSize: "1rem",
            textAlign: "center",
          },
          ".service__list": {
            p: "2rem",
          },
          ".service__list li": {
            display: "flex",
            gap: "1rem",
            mb: "0.8rem",
          },
          ".service__list-icon": {
            color: "primary",
            mt: "2px",
          },
          ".service__list p": {
            fontSize: "0.9rem",
          },
        }}
      >
        <Box as="article" className="services">
          <Box className="service__head">
            <Heading as="h3">Mobile App</Heading>
          </Box>

          <List className="service__list">
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Build a production level flutter app from scratch</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Improve a flutter app already in production</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>
                Write unit, widget and integration tests for flutter apps
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Add various monetization options in a flutter app</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>
                Deploy flutter apps to Google Play Store and Apple App Store
              </Text>
            </ListItem>
          </List>
        </Box>
        <Box as="article" className="services">
          <Box className="service__head">
            <Heading as="h3">Frontend</Heading>
          </Box>

          <List className="service__list">
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Build a production level web app from scratch</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Improve a web app already in production</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Convert a web app to a progressive web app</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Optimize a website for SEO and Accessibility</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Deploy web apps securely to production</Text>
            </ListItem>
          </List>
        </Box>
        <Box as="article" className="services">
          <Box className="service__head">
            <Heading as="h3">Backend</Heading>
          </Box>

          <List className="service__list">
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Build and deploy an api with Django or Flask</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Create secure and scalable backends with Firebase</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Manage basic relational databases with PostgreSQL</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Manage basic no sql databases with MongoDB</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BiCheck} className="service__list-icon" />
              <Text>Automate repetitive tasks with Python</Text>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
