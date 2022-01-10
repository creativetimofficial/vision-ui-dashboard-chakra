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

// chakra imports
import { Avatar, Flex, Text } from "@chakra-ui/react";
import { ClockIcon } from "components/Icons/Icons";
import React from "react";

export function ItemContent(props) {
  const navbarIcon = "gray.400";
  const notificationColor = "white";
  const spacing = " ";
  return (
    <>
      <Avatar
        name={props.aName}
        src={props.aSrc}
        borderRadius='12px'
        me='16px'
      />
      <Flex flexDirection='column'>
        <Text fontSize='14px' mb='5px' color={notificationColor}>
          <Text fontWeight='bold' fontSize='14px' as='span'>
            {props.boldInfo}
            {spacing}
          </Text>
          {props.info}
        </Text>
        <Flex alignItems='center'>
          <ClockIcon color={navbarIcon} w='13px' h='13px' me='3px' />
          <Text fontSize='xs' lineHeight='100%' color={navbarIcon}>
            {props.time}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
