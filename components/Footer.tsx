import { Avatar, Box, List, ListItem } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

const Footer: FunctionComponent = () => {
  return (
    <Box
      as="footer"
      id="footer"
      bg="primary"
      p="3rem 0"
      textAlign="center"
      fontSize="0.9rem"
      mt="7rem"
      sx={{
        a: {
          color: "background",
        },
        ".footer__logo": {
          fontSize: "2rem",
          fontWeight: "500",
          mb: "2rem",
          display: "inline-block",
          _hover: {
            transform: "scale(115%)",
          },
        },
        ".permalinks": {
          display: "flex",
          flexDirection: { base: "column", md: "row" },
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          m: "0 auto 3rem",
        },
        ".permalinks > li": {
          _hover: {
            transform: "scale(115%)",
          },
        },
        ".footer__socials": {
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          mb: { base: "2.6rem", lg: "4rem" },
        },
        ".footer__socials a": {
          bg: "background",
          color: "white",
          p: "0.8rem",
          borderRadius: "0.7rem",
          display: "flex",
          border: "1px",
          borderColor: "transparent",
          _hover: {
            transform: "scale(115%)",
          },
        },
        ".footer__copyright": {
          mb: "4rem",
          color: "background",
        },
      }}
    >
      <a href="#" className="footer__logo">
        <Avatar src="/me-about.jpg" name="me" size="xl" />
      </a>

      <List className="permalinks">
        <ListItem>
          <a href="#">Home</a>
        </ListItem>
        <ListItem>
          <a href="#about">About</a>
        </ListItem>
        <ListItem>
          <a href="#experience">Experience</a>
        </ListItem>
        <ListItem>
          <a href="#services">Services</a>
        </ListItem>
        <ListItem>
          <a href="#portfolio">Portfolio</a>
        </ListItem>
        <ListItem>
          <a href="#testimonials">Testimonials</a>
        </ListItem>
        <ListItem>
          <a href="#contact">Contact</a>
        </ListItem>
      </List>

      <Box className="footer__socials">
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
      </Box>

      <Box className="footer__copyright">
        <Box as="small">&copy; Marwan Sa-ad. All rights reserved</Box>
      </Box>
    </Box>
  );
};

export default Footer;
