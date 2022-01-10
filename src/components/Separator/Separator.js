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

export function Separator(props) {
  const { variant, children, ...rest } = props;
  return (
    <Flex
      h='1px'
      w='100%'
      bg='linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 47.22%, rgba(224, 225, 226, 0.15625) 94.44%)'
      {...rest}>
      {children}
    </Flex>
  );
}
