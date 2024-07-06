import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function TimelineRow(props) {
  const { logo, title, date, color, index, arrLength } = props;
  const textColor = useColorModeValue("gray.700", "white.300");
  const bgIconColor = useColorModeValue("white.300", "gray.700");

  return (
    <Flex alignItems="center" minH="78px" justifyContent="start" mb="5px">
      <Flex direction="column" h="100%" align="center">
        <Icon
          as={logo}
          bg={bgIconColor}
          color={color}
          h={"20px"}
          w={"20px"}
          me="16px"
          right={document.documentElement.dir === "rtl" ? "-8px" : ""}
          left={document.documentElement.dir === "rtl" ? "" : "-8px"}
        />
      </Flex>
      <Flex direction="column" justifyContent="flex-start" h="100%">
        <Text fontSize="sm" color="#fff" fontWeight="normal" mb="3px">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="normal">
          {date}
        </Text>
      </Flex>
    </Flex>
  );
}

export default TimelineRow;
