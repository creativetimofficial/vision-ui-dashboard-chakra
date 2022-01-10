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

import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import IconBox from "components/Icons/IconBox";
import React from "react";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { children, ...rest } = props;
  return (
    <Flex
      borderRadius='15px'
      flexDirection='column'
      bgImage={SidebarHelpImage}
      bgSize='cover'
      bgPosition='center'
      justifyContent='flex-start'
      alignItems='start'
      p='16px'
      minH='170px'
      minW='218px'>
      <IconBox width='35px' h='35px' bg='white' mb='auto'>
        <QuestionIcon color='brand.200' h='18px' w='18px' />
      </IconBox>
      <Text fontSize='sm' color='white' fontWeight='bold'>
        Need help?
      </Text>
      <Text fontSize='xs' color='white' mb='10px'>
        Please check our docs
      </Text>
      <Link
        w='100%'
        href='https://demos.creative-tim.com/docs-vision-ui-dashboard-chakra/'>
        <Button
          fontSize='10px'
          fontWeight='bold'
          w='100%'
          bg='linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)'
          _hover='none'
          _active={{
            bg: "white",
            transform: "none",
            borderColor: "transparent",
          }}
          _active='none'
          _focus={{
            boxShadow: "none",
          }}
          color='white'>
          DOCUMENTATION
        </Button>
      </Link>
    </Flex>
  );
}
