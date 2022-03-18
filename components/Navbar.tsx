import { HStack } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Navbar: FunctionComponent = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>("#");

  return (
    <HStack
      as="nav"
      background="rgba(0, 0, 0, 0.3)"
      width="max-content"
      padding={{ base: "0.3rem 0.8rem", sm: "0.7rem 1.7rem" }}
      zIndex="2"
      position="fixed"
      left="50%"
      transform="translateX(-50%)"
      bottom="2rem"
      gap={{ base: "0.5rem", sm: "0.8rem" }}
      borderRadius="3rem"
      backdropFilter="blur(65px)"
      sx={{
        a: {
          bg: "transparent",
          padding: '0.5rem',
          borderRadius: "50%",
          display: "flex",
          color: "light",
          fontSize: "1.1rem",
          _hover: {
            bg: "rgba(0, 0, 0, 0.3)",
          },
        },
        "a.active": {
          bg: "background",
          color: "white",
        },
      }}
    >
      <a
        href="#"
        onClick={() => setActiveNavItem("#")}
        className={activeNavItem === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNavItem("#about")}
        className={activeNavItem === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNavItem("#experience")}
        className={activeNavItem === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNavItem("#services")}
        className={activeNavItem === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNavItem("#contact")}
        className={activeNavItem === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </HStack>
  );
};

export default Navbar;
