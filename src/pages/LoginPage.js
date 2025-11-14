import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useToast,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const toast = useToast();
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await signIn({ email, password });
      if (error) throw error;
      history.push('/');
    } catch (error) {
      toast({
        title: 'Error logging in.',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await signUp({ email, password });
      if (error) throw error;
      toast({
        title: 'Account created.',
        description: "We've sent you a confirmation email.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error signing up.',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={8} maxW="md" mx="auto">
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Account
      </Heading>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <form onSubmit={handleLogin}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  width="full"
                  isLoading={loading}
                >
                  Login
                </Button>
              </VStack>
            </form>
          </TabPanel>
          <TabPanel>
            <form onSubmit={handleSignUp}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  width="full"
                  isLoading={loading}
                >
                  Sign Up
                </Button>
              </VStack>
            </form>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default LoginPage;
