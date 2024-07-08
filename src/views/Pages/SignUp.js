import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Switch,
  Text,
  Icon,
  DarkMode,
} from "@chakra-ui/react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";
import TradingCollectiveLogoBlk from "assets/img/TradingCollectiveLogoBlk.png";

function SignUp() {
  const titleColor = "white";
  const textColor = "gray.400";
  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const route = process.env.REACT_APP_API_URL;

  const handleSignInClick = () => {
    history.push("/auth/signin");
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${route}/auth/signup`, {
        name,
        email,
        password,
      });
      handleSignInClick();
      console.log('Signup response:', response.data);
    } catch (error) {
    console.error('Error signing up:', error.response ? error.response.data : error.message);
    }
  };



  return (
    <Flex position="relative" overflow={{ lg: "hidden" }}>
      <Box
        position="absolute"
        top="0"
        left="0"
        w="50%"
        h="100%"
        bg="black"
      ></Box>
      <Flex
        flexDirection="column"
        h={{ sm: "initial", md: "unset" }}
        w={{ base: "90%" }}
        marginTop="50px"
        mx="auto"
        justifyContent="space-between"
        pt={{ sm: "100px", md: "0px" }}
        me={{ base: "auto", lg: "50px", xl: "auto" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          flexDirection="column"
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb="50px"
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            textAlign="center"
            justifyContent="center"
            align="center"
            mt={{ base: "7px", md: "7px", lg: "7px" }}
            mb="20px"
          >
            <Text
              fontSize="4xl"
              lineHeight="39px"
              color="white"
              fontWeight="bold"
            >
              Welcome!
            </Text>
            <Text
              fontSize="md"
              color="white"
              fontWeight="normal"
              mt="10px"
              w={{ base: "100%", md: "90%", lg: "90%", xl: "80%" }}
            >
              Use these awesome forms to login or create new account in your
              project for free.
            </Text>
          </Flex>
          <GradientBorder p="2px" me={{ base: "none", lg: "30px", xl: "none" }}>
            <Flex
              background="transparent"
              borderRadius="30px"
              direction="column"
              p="40px"
              minW={{ base: "unset", md: "430px", xl: "450px" }}
              w="100%"
              mx={{ base: "0px" }}
              bg={{
                base: "rgb(19,21,56)",
              }}
            >
              <Text
                fontSize="xl"
                color={textColor}
                fontWeight="bold"
                textAlign="center"
                mb="22px"
              >
                Register With
              </Text>
              <HStack spacing="15px" justify="center" mb="22px">
                <GradientBorder borderRadius="15px">
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition="all .25s ease"
                    cursor="pointer"
                    justify="center"
                    align="center"
                    bg="rgb(19,21,54)"
                    w="71px"
                    h="71px"
                    borderRadius="15px"
                  >
                    <Link href="#">
                      <Icon
                        color={titleColor}
                        as={FaFacebook}
                        w="30px"
                        h="30px"
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder>
                <GradientBorder borderRadius="15px">
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition="all .25s ease"
                    cursor="pointer"
                    justify="center"
                    align="center"
                    bg="rgb(19,21,54)"
                    w="71px"
                    h="71px"
                    borderRadius="15px"
                  >
                    <Link href="#">
                      <Icon
                        color={titleColor}
                        as={FaApple}
                        w="30px"
                        h="30px"
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder>
                <GradientBorder borderRadius="15px">
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition="all .25s ease"
                    cursor="pointer"
                    justify="center"
                    align="center"
                    bg="rgb(19,21,54)"
                    w="71px"
                    h="71px"
                    borderRadius="15px"
                  >
                    <Link href="#">
                      <Icon
                        color={titleColor}
                        as={FaGoogle}
                        w="30px"
                        h="30px"
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder>
              </HStack>
              <Text
                fontSize="lg"
                color="gray.400"
                fontWeight="bold"
                textAlign="center"
                mb="22px"
              >
                or
              </Text>
              <form onSubmit={handleSignUp}>
                <FormControl>
                  <FormLabel
                    color={titleColor}
                    ms="4px"
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Name
                  </FormLabel>
                  <GradientBorder
                    mb="24px"
                    h="50px"
                    w={{ base: "100%", lg: "fit-content" }}
                    borderRadius="20px"
                  >
                    <Input
                      color={titleColor}
                      bg={{
                        base: "rgb(19,21,54)",
                      }}
                      border="transparent"
                      borderRadius="20px"
                      fontSize="sm"
                      size="lg"
                      w={{ base: "100%", md: "346px" }}
                      maxW="100%"
                      h="46px"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </GradientBorder>
                  <FormLabel
                    color={titleColor}
                    ms="4px"
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Email
                  </FormLabel>
                  <GradientBorder
                    mb="24px"
                    h="50px"
                    w={{ base: "100%", lg: "fit-content" }}
                    borderRadius="20px"
                  >
                    <Input
                      color={titleColor}
                      bg={{
                        base: "rgb(19,21,54)",
                      }}
                      border="transparent"
                      borderRadius="20px"
                      fontSize="sm"
                      size="lg"
                      w={{ base: "100%", md: "346px" }}
                      maxW="100%"
                      h="46px"
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </GradientBorder>
                  <FormLabel
                    color={titleColor}
                    ms="4px"
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Password
                  </FormLabel>
                  <GradientBorder
                    mb="24px"
                    h="50px"
                    w={{ base: "100%", lg: "fit-content" }}
                    borderRadius="20px"
                  >
                    <Input
                      color={titleColor}
                      bg={{
                        base: "rgb(19,21,54)",
                      }}
                      border="transparent"
                      borderRadius="20px"
                      fontSize="sm"
                      size="lg"
                      w={{ base: "100%", md: "346px" }}
                      maxW="100%"
                      h="46px"
                      type="password"
                      placeholder="Your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </GradientBorder>
                  <FormControl display="flex" alignItems="center" mb="24px">
                    <DarkMode>
                      <Switch id="remember-login" colorScheme="brand" me="10px" />
                    </DarkMode>

                    <FormLabel
                      color={titleColor}
                      htmlFor="remember-login"
                      mb="0"
                      fontWeight="normal"
                    >
                      Remember me
                    </FormLabel>
                  </FormControl>
                  <Button
                    variant="brand"
                    fontSize="10px"
                    type="submit"
                    w="100%"
                    maxW="350px"
                    h="45"
                    mb="20px"
                    mt="20px"
                  >
                    SIGN UP
                  </Button>
                </FormControl>
              </form>
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                maxW="100%"
                mt="0px"
              >
                <Text color={textColor} fontWeight="medium">
                  Already have an account?
                  <Link
                    color={titleColor}
                    as="span"
                    ms="5px"
                    href="#"
                    fontWeight="bold"
                    onClick={handleSignInClick}
                  >
                    Sign In
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </GradientBorder>
        </Flex>
        <Box
          display={{ base: "none", lg: "flex" }}
          overflowX="hidden"
          justifyContent="center"
          h="1300px"
          maxW={{ md: "50vw", lg: "48vw" }}
          w="960px"
          position="absolute"
          left="0px"
          bg="black"
        >
          <Box
            bgImage={TradingCollectiveLogoBlk}
            w="100%"
            h="845px"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="absolute"
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignUp;
