/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { Flex } from "@chakra-ui/react";

export default function GradientBorder(props) {
  const { variant, children, ...rest } = props;
  return (
    <Flex
      p='2px'
      justify='center'
      align='center'
      bg='radial-gradient(69.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(60% 51.57% at 50% 50%, #582CFF 0%, rgba(88, 44, 255, 0) 100%),
      radial-gradient(54.8% 53% at 50% 50%, #151515 0%, rgba(21, 21, 21, 0) 100%)'
      {...rest}>
      {children}
    </Flex>
  );
}
