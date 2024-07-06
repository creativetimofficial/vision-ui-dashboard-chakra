import { Box, Button, Flex, Icon, Spacer, Text } from "@chakra-ui/react";

function InvoicesRow(props) {
  const { date, code, price, format, logo } = props;

  return (
    <Flex mb="24px" alignItems="center">
      <Flex direction="column">
        <Text fontSize="sm" color="#fff" mb="4px">
          {date}
        </Text>
        <Text fontSize="xs" color="gray.400">
          {code}
        </Text>
      </Flex>
      <Spacer />
      <Box me="14px">
        <Text fontSize="xs" color="gray.400">
          {price}
        </Text>
      </Box>
      <Button p="0px" bg="transparent" variant="no-hover">
        <Flex alignItems="center" p="12px">
          <Icon as={logo} w="16px" h="16px" h="auto" me="5px" color="#fff" />
          <Text fontSize="xs" color="gray.400">
            {format}
          </Text>
        </Flex>
      </Button>
    </Flex>
  );
}

export default InvoicesRow;
