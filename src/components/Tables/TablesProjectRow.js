import React from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

function DashboardTableRow(props) {
  const { logo, name, status, budget, progression, lastItem } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        ps="0px"
        borderBottomColor="#56577A"
        border={lastItem ? "none" : null}
      >
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Icon as={logo} h={"20px"} w={"20px"} me="18px" />
          <Text fontSize="sm" color="#fff" minWidth="100%">
            {name}
          </Text>
        </Flex>
      </Td>
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Text fontSize="sm" color="#fff" fontWeight="bold" pb=".5rem">
          {budget}
        </Text>
      </Td>
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Text fontSize="sm" color="#fff" fontWeight="bold" pb=".5rem">
          {status}
        </Text>
      </Td>
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Flex direction="column">
          <Text
            fontSize="sm"
            color="#fff"
            fontWeight="bold"
            pb=".2rem"
          >{`${progression}%`}</Text>
          <Progress
            colorScheme="brand"
            maxW="125px"
            h="3px"
            bg="#2D2E5F"
            value={progression}
            borderRadius="15px"
          />
        </Flex>
      </Td>
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Button p="0px" bg="transparent" _hover="none" _active="none">
          <Icon as={FaEllipsisV} color="gray.400" cursor="pointer" />
        </Button>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
