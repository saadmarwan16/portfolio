import { useBreakpointValue } from "@chakra-ui/react";

export const useMainWidth = () => useBreakpointValue({ base: "90%", md: "86%", lg: "75%" })