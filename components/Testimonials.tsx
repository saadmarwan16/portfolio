import { Box, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { testimonials } from "../lib/data";
import { Pagination, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials: FunctionComponent = () => {
  return (
    <Box as="section" id="testimonials" pt="7rem">
      <Heading as="h5" size="sm">
        Review from clients
      </Heading>
      <Heading size="xl">Testimonials</Heading>

      <Box
        w={{ base: "90%", md: "60%", lg: "40%" }}
        mx="auto"
        className="testimonials__container"
        sx={{
          ".testimonial": {
            bg: "backgroundVariant",
            textAlign: "center",
            p: "2rem",
            borderRadius: "2rem",
            userSelect: "none",
          },
          ".client__review": {
            color: "light",
            fontWeight: "300",
            display: "block",
            width: { base: "90%", sm: "80%" },
            margin: "0.8rem auto 0",
          },
          img: {
            overflow: "hidden",
            borderRadius: "50%",
            m: "0 auto 1rem",
          },
          ".swiper-pagination-clickable span, .swiper-pagination-bullet span": {
            bg: "primary",
          },
          ".swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction":
            {
              bottom: "0px",
            },
        }}
      >
        <Swiper
          modules={[Pagination, Thumbs]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {testimonials.map(({ avatar, name, review }, index) => (
            <SwiperSlide key={index} className="testimonial">
              <Box className="client__avatar">
                <Image src={avatar} alt={name} width={64} height={64} />
              </Box>

              <Heading as="h5" size="sm" className="client__name">
                {name}
              </Heading>
              <Box as="small" className="client__review" mb="6rem">
                {review}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonials;
