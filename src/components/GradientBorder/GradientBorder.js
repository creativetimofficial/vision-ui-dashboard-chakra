import React from "react";
import { Flex } from "@chakra-ui/react";

export default function GradientBorder(props) {
  const { variant, children, ...rest } = props;
  return (
    <Flex
      p="2px"
      justify="center"
      align="center"
      bg="radial-gradient(69.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(60% 51.57% at 50% 50%, #582CFF 0%, rgba(88, 44, 255, 0) 100%),
      radial-gradient(54.8% 53% at 50% 50%, #151515 0%, rgba(21, 21, 21, 0) 100%)"
      {...rest}
    >
      {children}
    </Flex>
  );
}
