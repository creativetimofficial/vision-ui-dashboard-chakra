import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function BillingRow(props) {
  const { name, company, email, number } = props;

  return (
    <Box
      p="24px"
      bg="linear-gradient(127.09deg, rgba(24, 29, 60, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
      my="22px"
      borderRadius="20px"
    >
      <Flex justify="space-between" w="100%" align="flex-start">
        <Flex direction="column" maxW="70%">
          <Text color="#fff" fontSize="sm" mb="10px">
            {name}
          </Text>
          <Text color="gray.400" fontSize="xs">
            Company Name: {window.innerWidth < 768 ? <br /> : null}
            <Text as="span" color="gray.500">
              {company}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="xs">
            Email Address:{" "}
            <Text as="span" color="gray.500">
              {email}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="xs">
            VAT Number:{" "}
            <Text as="span" color="gray.500">
              {number}
            </Text>
          </Text>
        </Flex>
        <Flex direction={{ sm: "column", md: "row" }} align="flex-start">
          <Button
            p="0px"
            variant="no-hover"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
          >
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaTrashAlt} me="4px" w="16px" h="16px" />
              <Text fontSize="xs">DELETE</Text>
            </Flex>
          </Button>
          <Button p="0px" variant="no-hover">
            <Flex color="#fff" cursor="pointer" align="center" p="12px">
              <Icon as={FaPencilAlt} me="4px" w="14px" h="14px" />
              <Text fontSize="xs" color="gray.400">
                EDIT
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default BillingRow;
