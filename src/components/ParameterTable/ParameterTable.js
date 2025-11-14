import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, useColorModeValue } from '@chakra-ui/react';

const ParameterTable = ({ whiteBalance, pictureProfile }) => {
  const textColor = useColorModeValue('gray.700', 'white');
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" bg={bg}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Parameter</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight="bold" color={textColor}>White Balance</Td>
              <Td></Td>
            </Tr>
            {whiteBalance && Object.entries(whiteBalance).map(([key, value]) => (
              <Tr key={key}>
                <Td pl="8">{key}</Td>
                <Td color={textColor}>{value.toString()}</Td>
              </Tr>
            ))}
            <Tr>
              <Td fontWeight="bold" color={textColor}>Picture Profile</Td>
              <Td></Td>
            </Tr>
            {pictureProfile && Object.entries(pictureProfile).map(([key, value]) => (
              <Tr key={key}>
                <Td pl="8">{key}</Td>
                <Td color={textColor}>{value.toString()}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ParameterTable;
