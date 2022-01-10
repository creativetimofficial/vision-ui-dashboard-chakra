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

// Chakra imports
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Button,
  DarkMode,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
} from "@chakra-ui/react";

// Images
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import avatar11 from "assets/img/avatars/avatar11.png";
import bgProfile from "assets/img/bgProfile.png";
import ProjectImage1 from "assets/img/ProjectImage1.png";
import ProjectImage2 from "assets/img/ProjectImage2.png";
import ProjectImage3 from "assets/img/ProjectImage3.png";

// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import LineChart from "components/Charts/LineChart";
import * as GradientProgress from "@delowar/react-circle-progressbar";
import IconBox from "components/Icons/IconBox";
import { Separator } from "components/Separator/Separator";

// Icons
import { IoDocumentsSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPencilAlt,
  FaPenFancy,
  FaTwitter,
} from "react-icons/fa";
import { CarIcon, FulgerIcon, FulgerWhiteIcon } from "components/Icons/Icons";

// Data
import {
  lineChartDataProfile1,
  lineChartDataProfile2,
  lineChartOptionsProfile1,
  lineChartOptionsProfile2,
} from "variables/charts";

function Profile() {
  return (
    <Flex direction='column' mt={{ sm: "25px", md: "0px" }}>
      <Box
        mb={{ sm: "24px", md: "50px", xl: "20px" }}
        borderRadius='15px'
        px='0px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        align='center'>
        {/* Header */}
        <Card
          direction={{ sm: "column", md: "row" }}
          mx='auto'
          maxH='330px'
          w={{ sm: "90%", xl: "100%" }}
          justifyContent={{ sm: "center", md: "space-between" }}
          align='center'
          p='24px'
          borderRadius='20px'
          mt='100px'>
          <Flex align='center' direction={{ sm: "column", md: "row" }}>
            <Flex
              align='center'
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}>
              <Avatar
                me={{ md: "22px" }}
                src={avatar11}
                w='80px'
                h='80px'
                borderRadius='15px'>
                <AvatarBadge
                  cursor='pointer'
                  borderRadius='8px'
                  border='transparent'
                  bg='linear-gradient(138.78deg, rgba(6, 11, 40, 0.94) 17.44%, rgba(10, 14, 35, 0.49) 93.55%, rgba(10, 14, 35, 0.69) 93.55%)'
                  boxSize='26px'
                  backdropFilter='blur(120px)'>
                  <Icon h='12px' w='12px' color='#fff' as={FaPencilAlt} />
                </AvatarBadge>
              </Avatar>
              <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color='#fff'
                  fontWeight='bold'
                  ms={{ sm: "8px", md: "0px" }}>
                  Mark Johnson
                </Text>
                <Text fontSize={{ sm: "sm", md: "md" }} color='gray.400'>
                  mark@simmmple.com
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}>
              <Button
                borderRadius='12px'
                bg='brand.200'
                _hover={{ opacity: "0.8" }}
                _active={{ opacity: "0.9" }}
                me={{ base: "none", lg: "20px" }}
                leftIcon={<Icon color='white' as={FaCube} me='6px' />}>
                <Text fontSize='xs' color='#fff' fontWeight='bold'>
                  OVERVIEW
                </Text>
              </Button>
              <Button
                borderRadius='12px'
                bg='transparent'
                _hover={{
                  bg: "brand.200",
                }}
                _active={{
                  bg: "brand.200",
                }}
                me={{ base: "none", lg: "20px" }}
                leftIcon={
                  <Icon color='white' as={IoDocumentsSharp} me='6px' />
                }>
                <Text fontSize='xs' color='#fff' fontWeight='bold'>
                  TEAMS
                </Text>
              </Button>
              <Button
                borderRadius='12px'
                bg='transparent'
                _hover={{
                  bg: "brand.200",
                }}
                _active={{
                  bg: "brand.200",
                }}
                leftIcon={<Icon color='white' as={FaPenFancy} me='6px' />}>
                <Text fontSize='xs' color='#fff' fontWeight='bold'>
                  PROJECTS
                </Text>
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Box>
      <Grid
        templateColumns={{
          sm: "1fr",
          xl: "repeat(2, 1fr)",
          "2xl": "1fr 2fr 1.2fr",
        }}
        gap='22px'
        mb='24px'>
        {/* Welcome Card */}
        <Card
          bgImage={bgProfile}
          bgSize='cover'
          maxW={{ sm: "325px", md: "725px", lg: "980px" }}
          h={{ sm: "270px", lg: "350px", xl: "410px" }}
          gridArea={{ xl: "1 / 1 / 2 / 2", "2xl": "auto" }}>
          <Flex direction='column' h='100%'>
            <Text color='#fff' fontSize='30px' fontWeight='bold' mb='3px'>
              Welcome back!
            </Text>
            <Text color='#fff' fontSize='sm' mb='auto'>
              Nice to see you, Mark Johnson!
            </Text>
            <Button
              alignSelf='flex-start'
              variant='no-hover'
              bg='transparent'
              p='0px'>
              <Text
                fontSize='xs'
                color='#fff'
                me='5px'
                cursor='pointer'
                transition='all .3s ease'
                _hover={{ me: "6px" }}>
                Tab to record
              </Text>
              <Icon
                as={BsArrowRight}
                w='13px'
                h='13px'
                color='#fff'
                transition='all .3s ease'
                cursor='pointer'
                _hover={{ transform: "translateX(20%)" }}
              />
            </Button>
          </Flex>
        </Card>
        {/* Car Informations */}
        <Card
          p='16px'
          maxH={{ lg: "410px" }}
          maxW={{ sm: "325px", md: "725px", lg: "980px", xl: "100%" }}
          gridArea={{ xl: "2 / 1 / 3 / 3", "2xl": "auto" }}>
          <CardHeader p='12px 5px' mb='12px'>
            <Flex direction='column'>
              <Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
                Car Informations
              </Text>
              <Text fontSize='sm' color='gray.400'>
                Hello, Mark Johnson! Your Car is ready.
              </Text>
            </Flex>
          </CardHeader>
          <CardBody w='100%'>
            <Flex w='100%' direction={{ sm: "column", md: "row" }}>
              <Flex
                direction='column'
                align='center'
                me={{ md: "16px", lg: "50px" }}
                mb={{ sm: "12px", md: "0px" }}>
                <GradientProgress
                  percent={70}
                  viewport
                  size={200}
                  isGradient
                  gradient={{
                    angle: 90,
                    startColor: "rgba(5, 205, 153, 0)",
                    stopColor: "#05CD99",
                  }}
                  background='#060B28'
                  emptyColor='#060B28'>
                  <Flex direction='column' justify='center' align='center'>
                    <FulgerIcon w='14px' h='22px' mb='8px' />
                    <Text
                      color='#fff'
                      fontSize='36px'
                      fontWeight='bold'
                      mb='10px'>
                      68%
                    </Text>
                    <Text color='gray.400' fontSize='sm'>
                      Current load
                    </Text>
                  </Flex>
                </GradientProgress>
                <Flex direction='column' mt='18px' align='center'>
                  <Text color='#fff' fontSize='lg' fontWeight='bold' mb='2px'>
                    0h 58 min
                  </Text>
                  <Text color='gray.500' fontSize='sm'>
                    Time to full charge
                  </Text>
                </Flex>
              </Flex>
              <Grid
                templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)" }}
                gap='24px'
                w='100%'
                alignSelf='flex-start'>
                <Flex
                  align='center'
                  p='18px'
                  justify='space-between'
                  bg='linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)'
                  borderRadius='20px'>
                  <Flex direction='column' me='auto'>
                    <Text fontSize='xs' color='gray.400' mb='3px'>
                      Battery Health
                    </Text>
                    <Text color='#fff' fontSize='22px' fontWeight='bold'>
                      76%
                    </Text>
                  </Flex>
                  <IconBox bg='brand.200' w='56px' h='56px' direction='column'>
                    <CarIcon w='28px' h='28px' />
                    <FulgerWhiteIcon
                      w='8px'
                      h='11px'
                      transform='rotate(90deg)'
                    />
                  </IconBox>
                </Flex>
                <Flex
                  align='center'
                  p='18px'
                  pe='0px'
                  justify='space-between'
                  bg='linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)'
                  borderRadius='20px'>
                  <Flex direction='column' me='auto'>
                    <Text fontSize='xs' color='gray.400' mb='3px'>
                      Efficiency
                    </Text>
                    <Text color='#fff' fontSize='22px' fontWeight='bold'>
                      +20%
                    </Text>
                  </Flex>
                  <Box maxH='75px'>
                    <LineChart
                      lineChartData={lineChartDataProfile1}
                      lineChartOptions={lineChartOptionsProfile1}
                    />
                  </Box>
                </Flex>
                <Flex
                  align='center'
                  p='18px'
                  justify='space-between'
                  bg='linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)'
                  borderRadius='20px'>
                  <Flex direction='column' me='auto'>
                    <Text fontSize='xs' color='gray.400' mb='3px'>
                      Consumption
                    </Text>
                    <Text color='#fff' fontSize='22px' fontWeight='bold'>
                      163W/km
                    </Text>
                  </Flex>
                  <IconBox bg='brand.200' w='56px' h='56px'>
                    <FulgerWhiteIcon w='24px' h='24px' color='#fff' />
                  </IconBox>
                </Flex>
                <Flex
                  align='center'
                  p='18px'
                  pe='0px'
                  justify='space-between'
                  bg='linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)'
                  borderRadius='20px'>
                  <Flex direction='column' me='auto'>
                    <Text fontSize='xs' color='gray.400' mb='3px'>
                      This Week
                    </Text>
                    <Text color='#fff' fontSize='22px' fontWeight='bold'>
                      1.342km
                    </Text>
                  </Flex>
                  <Box maxH='75px'>
                    <LineChart
                      lineChartData={lineChartDataProfile2}
                      lineChartOptions={lineChartOptionsProfile2}
                    />
                  </Box>
                </Flex>
              </Grid>
            </Flex>
          </CardBody>
        </Card>
        {/* Profile Information */}
        <Card
          p='16px'
          maxH={{ md: "410px" }}
          maxW={{ sm: "325px", md: "725px", lg: "980px" }}
          gridArea={{ xl: "1 / 2 / 2 / 3", "2xl": "auto" }}>
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color='#fff' fontWeight='bold'>
              Profile Information
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column'>
              <Text fontSize='sm' color={"gray.400"} fontWeight='400' mb='15px'>
                Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer
                is no. If two equally difficult paths, choose the one more
                painful in the short term (pain avoidance is creating an
                illusion of equality).
              </Text>
              <Separator mb='30px' />
              <Flex align='center' mb='18px'>
                <Text fontSize='sm' color={"gray.400"} me='10px'>
                  Full Name:{" "}
                </Text>
                <Text fontSize='sm' color='#fff' fontWeight='400'>
                  Mark Johnson
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Text fontSize='sm' color={"gray.400"} me='10px'>
                  Mobile:{" "}
                </Text>
                <Text fontSize='sm' color='#fff' fontWeight='400'>
                  (44) 123 1234 123
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Text fontSize='sm' color={"gray.400"} me='10px'>
                  Email:{" "}
                </Text>
                <Text fontSize='sm' color='#fff' fontWeight='400'>
                  mark@simmmple.com
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Text fontSize='sm' color={"gray.400"} me='10px'>
                  Location:{" "}
                </Text>
                <Text fontSize='sm' color='#fff' fontWeight='400'>
                  United States
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Text fontSize='sm' color={"gray.400"} me='10px'>
                  Social Media:{" "}
                </Text>
                <Flex>
                  <Link
                    href='#'
                    color='teal.300'
                    fontSize='lg'
                    me='10px'
                    _hover={{ color: "teal.300" }}>
                    <Icon color='white' as={FaFacebook} w='12px' h='12px' />
                  </Link>
                  <Link
                    href='#'
                    color='teal.300'
                    fontSize='lg'
                    me='10px'
                    _hover={{ color: "teal.300" }}>
                    <Icon color='white' as={FaInstagram} w='12px' h='12px' />
                  </Link>
                  <Link
                    href='#'
                    color='teal.300'
                    fontSize='lg'
                    me='10px'
                    _hover={{ color: "teal.300" }}>
                    <Icon color='white' as={FaTwitter} w='12px' h='12px' />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
      <Grid templateColumns={{ sm: "1fr", xl: "1fr 3fr" }} gap='20px'>
        <DarkMode>
          {/* Platform Settings */}
          <Card p='16px' gridArea={{ xl: "1 / 1 / 2 / 2" }}>
            <CardHeader p='12px 5px' mb='12px'>
              <Text fontSize='lg' color='#fff' fontWeight='bold'>
                Platform Settings
              </Text>
            </CardHeader>
            <CardBody px='5px'>
              <Flex direction='column'>
                <Text fontSize='10px' color={"gray.400"} mb='20px'>
                  ACCOUNT
                </Text>
                <Flex align='center' mb='20px'>
                  <Switch
                    variant='brand'
                    colorScheme='brand'
                    me='10px'
                    defaultChecked
                  />
                  <Text
                    noOfLines={1}
                    fontSize='sm'
                    color={"gray.400"}
                    fontWeight='400'>
                    Email me when someone follows me
                  </Text>
                </Flex>
                <Flex align='center' mb='20px'>
                  <Switch colorScheme='brand' me='10px' />
                  <Text
                    noOfLines={1}
                    fontSize='sm'
                    color={"gray.400"}
                    fontWeight='400'>
                    Email me when someone answers on my post
                  </Text>
                </Flex>
                <Flex align='center' mb='20px'>
                  <Switch colorScheme='brand' me='10px' defaultChecked />
                  <Text
                    noOfLines={1}
                    fontSize='sm'
                    color={"gray.400"}
                    fontWeight='400'>
                    Email me when someone mentions me
                  </Text>
                </Flex>
                <Text fontSize='10px' color={"gray.400"} m='6px 0px 20px 0px'>
                  APPLICATION
                </Text>
                <Flex align='center' mb='20px'>
                  <Switch colorScheme='brand' me='10px' />
                  <Text
                    noOfLines={1}
                    fontSize='sm'
                    color={"gray.400"}
                    fontWeight='400'>
                    New launches and projects
                  </Text>
                </Flex>
                <Flex align='center' mb='20px'>
                  <Switch colorScheme='brand' me='10px' defaultChecked />
                  <Text
                    noOfLines={1}
                    fontSize='sm'
                    color={"gray.400"}
                    fontWeight='400'>
                    Monthly product changes
                  </Text>
                </Flex>
                <Flex align='center' mb='20px'>
                  <Switch colorScheme='brand' me='10px' />
                  <Text
                    noOfLines={1}
                    fontSize='sm'
                    color={"gray.400"}
                    fontWeight='400'>
                    Subscribe to newsletter
                  </Text>
                </Flex>
                <Flex align='center' mb='20px'>
                  <Switch colorScheme='brand' me='10px' defaultChecked />
                  <Text
                    noOfLines={1}
                    fontSize='sm'
                    color={"gray.400"}
                    fontWeight='400'>
                    Receive mails weekly
                  </Text>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </DarkMode>
        {/* Projects */}
        <Card gridArea={{ xl: "1 /2 /2/ 5" }} p='16px'>
          <CardHeader p='12px 5px' mb='12px'>
            <Flex direction='column'>
              <Text fontSize='lg' color='#fff' fontWeight='bold'>
                Projects
              </Text>
              <Text fontSize='sm' color={"gray.400"} fontWeight='400'>
                Architects design houses
              </Text>
            </Flex>
          </CardHeader>
          <CardBody px='5px'>
            <Grid
              templateColumns={{
                sm: "1fr",
                md: "1fr 1fr",
                xl: "repeat(3, 1fr)",
              }}
              templateRows={{
                sm: "1fr 1fr 1fr auto",
                md: "1fr 1fr",
                xl: "1fr",
              }}
              gap='24px'>
              <Flex direction='column'>
                <Box mb='20px' position='relative' borderRadius='20px'>
                  <Image src={ProjectImage1} borderRadius='20px' />
                </Box>
                <Flex direction='column'>
                  <Text fontSize='10px' color={"gray.400"} mb='10px'>
                    Project #1
                  </Text>
                  <Text fontSize='xl' color='#fff' fontWeight='bold' mb='10px'>
                    Modern
                  </Text>
                  <Text
                    fontSize='sm'
                    color={"gray.400"}
                    fontWeight='400'
                    mb='20px'>
                    As Uber works through a huge amount of internal management
                    turmoil.
                  </Text>
                  <Flex justifyContent='space-between' mt='auto'>
                    <Button
                      variant='outlineWhite'
                      minW='110px'
                      h='36px'
                      fontSize='10px'
                      px='1.5rem'>
                      VIEW ALL
                    </Button>
                    <AvatarGroup size='xs'>
                      <Avatar
                        borderColor='#121241'
                        name='Ryan Florence'
                        src={avatar6}
                      />
                      <Avatar
                        borderColor='#121241'
                        name='Segun Adebayo'
                        src={avatar2}
                      />
                      <Avatar
                        borderColor='#121241'
                        name='Kent Dodds'
                        src={avatar3}
                      />
                      <Avatar
                        borderColor='#121241'
                        name='Prosper Otemuyiwa'
                        src={avatar4}
                      />
                    </AvatarGroup>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction='column'>
                <Box mb='20px' position='relative' borderRadius='20px'>
                  <Image src={ProjectImage2} borderRadius='20px' />
                </Box>
                <Flex direction='column'>
                  <Text fontSize='10px' color={"gray.400"} mb='10px'>
                    Project #2
                  </Text>
                  <Text fontSize='xl' color='#fff' fontWeight='bold' mb='10px'>
                    Scandinavian
                  </Text>
                  <Text fontSize='sm' color={"gray.400"} mb='20px'>
                    Music is something that every person has his or her own
                    specific opinion about.
                  </Text>
                  <Flex justifyContent='space-between' mt='auto'>
                    <Button
                      variant='outlineWhite'
                      minW='110px'
                      h='36px'
                      fontSize='10px'
                      px='1.5rem'>
                      VIEW ALL
                    </Button>
                    <AvatarGroup size='xs'>
                      <Avatar
                        borderColor='#121241'
                        name='Ryan Florence'
                        src={avatar6}
                      />
                      <Avatar
                        borderColor='#121241'
                        name='Segun Adebayo'
                        src={avatar2}
                      />
                      <Avatar
                        borderColor='#121241'
                        name='Kent Dodds'
                        src={avatar3}
                      />
                      <Avatar
                        borderColor='#121241'
                        name='Prosper Otemuyiwa'
                        src={avatar4}
                      />
                    </AvatarGroup>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction='column' h='100%'>
                <Box mb='20px' position='relative' borderRadius='20px'>
                  <Image src={ProjectImage3} borderRadius='20px' />
                </Box>
                <Flex direction='column'>
                  <Text fontSize='10px' color={"gray.400"} mb='10px'>
                    Project #3
                  </Text>
                  <Text fontSize='xl' color='#fff' fontWeight='bold' mb='10px'>
                    Minimalist
                  </Text>
                  <Text
                    fontSize='sm'
                    color={"gray.400"}
                    fontWeight='400'
                    mb='20px'>
                    Different people have different taste, especially various
                    types of music.
                  </Text>
                  <Flex justifyContent='space-between' mt='auto'>
                    <Button
                      variant='outlineWhite'
                      minW='110px'
                      h='36px'
                      fontSize='10px'
                      px='1.5rem'>
                      VIEW ALL
                    </Button>
                    <AvatarGroup size='xs'>
                      <Avatar
                        borderColor='#121241'
                        name='Ryan Florence'
                        src={avatar6}
                      />
                      <Avatar
                        borderColor='#121241'
                        name='Segun Adebayo'
                        src={avatar2}
                      />
                      <Avatar
                        borderColor='#121241'
                        name='Kent Dodds'
                        src={avatar3}
                      />
                      <Avatar
                        borderColor='#121241'
                        name='Prosper Otemuyiwa'
                        src={avatar4}
                      />
                    </AvatarGroup>
                  </Flex>
                </Flex>
              </Flex>
            </Grid>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Profile;
