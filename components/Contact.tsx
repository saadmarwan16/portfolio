import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact: FunctionComponent = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
  const userId = process.env.NEXT_PUBLIC_USER_ID as string;

  const sendEmail = (e: any) => {
    e.preventDefault();
    const current = form?.current;

    if (current === null) {
      return;
    }

    emailjs.sendForm(serviceId, templateId, current, userId).then(
      (_) => {
        e.target.reset();
      },
      (_) => {}
    );
  };

  return (
    <Box as="section" id="contact" pt="7rem">
      <Heading as="h5" size="sm">
        Get In Touch
      </Heading>
      <Heading size="xl">Get In Touch</Heading>

      <Box
        className="container contact__container"
        w={{ base: "90%", lg: "58%" }}
        mx="auto"
        display="grid"
        gridTemplateColumns={{ md: "1fr", lg: "30% 58%" }}
        gap={{ base: "2rem", lg: "12%" }}
      >
        <Box
          className="contact__options"
          display="flex"
          flexDirection="column"
          gap="1.2rem"
          sx={{
            ".contact__option": {
              bg: "backgroundVariant",
              p: "1.2rem",
              borderRadius: "1.2rem",
              textAlign: "center",
              border: "1px",
              borderColor: "transparent",
              transition: "all 400ms ease",
              _hover: {
                bg: "transparent",
                borderColor: "primaryVariant",
              },
            },
            svg: {
              fontSize: "1.5rem",
              mb: "0.5rem",
            },
            ".contact__option a": {
              mt: "0.7rem",
              display: "inline-block",
              fontSize: "0.8rem",
            },
          }}
        >
          <Box as="article" className="contact__option">
            <Icon as={MdOutlineEmail} />
            <Heading as="h4" size="md">
              Email
            </Heading>
            <a
              href="mailto:marwansaad1957@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </Box>
          <Box as="article" className="contact__option">
            <Icon as={RiMessengerLine} />
            <Heading as="h4" size="md">
              Messenger
            </Heading>
            <a
              href="https://m.me/saad.marwan.142"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </Box>
          <Box as="article" className="contact__option">
            <Icon as={BsWhatsapp} />
            <Heading as="h4" size="md">
              WhatsApp
            </Heading>
            <a
              href="https://api.whatsapp.com/send?.phone=+905389316741"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </Box>
        </Box>
        <form ref={form} onSubmit={sendEmail}>
          <Stack spacing="1.2rem">
            <Input
              placeholder="Your Full Name"
              size="lg"
              border="2px"
              borderColor="primaryVariant"
              name="name"
              required
            />
            <Input
              placeholder="Your Email"
              size="lg"
              border="2px"
              borderColor="primaryVariant"
              name="email"
              required
            />
            <Textarea
              placeholder="Your Message"
              resize="none"
              rows={8}
              border="2px"
              borderColor="primaryVariant"
              name="message"
              required
            />
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
