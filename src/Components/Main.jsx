import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Text,
  Button,
  useColorMode,
  Image,
  Container,
  SimpleGrid,
  Textarea,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import headphone from "../Assets/HeadphoneZone.png";
import bobbi from "../Assets/BobbiBrown.png";
import spark from "../Assets/SparkAmerica.png";
import contactMe from "../Assets/ContactMe.png";
import photo from "../Assets/vrushabh.jpg";
import aboutMe from "../Assets/AboutMe.png";
import resume from "../Assets/VrushabhVeer.pdf";

const Main = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box textStyle="navbar" bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Flex textStyle="logo">VRUSHABH</Flex>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              <Text textStyle="navText">
                <a href="#home">HOME</a>
              </Text>

              <Text textStyle="navText">
                <a href="#about">ABOUT</a>
              </Text>

              <Text textStyle="navText">
                <a href="#projects">PROJECTS</a>
              </Text>

              <Text textStyle="navText">
                <a href="#skill">SKILLS</a>
              </Text>

              <Text textStyle="navText">
                <a href="#contact">CONTACT</a>
              </Text>

              <Text textStyle="navText">
                <a href="https://drive.google.com/file/d/1U0p5UzLAespMbKndlr7wORJJgfNYjzyg/view?usp=sharing">
                  RESUME
                </a>
              </Text>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Text>
              <a href="#home">HOME</a>
            </Text>
            <Text>
              <a href="#about">ABOUT</a>
            </Text>
            <Text>
              <a href="#projects">PROJECTS</a>
            </Text>
            <Text>
              <a href="#skill">SKILLS</a>
            </Text>
            <Text>
              <a href="#contact">CONTACT</a>
            </Text>
            <Text>
              <a href="https://drive.google.com/file/d/1U0p5UzLAespMbKndlr7wORJJgfNYjzyg/view?usp=sharing">
                RESUME
              </a>
            </Text>
          </Box>
        ) : null}
      </Box>

      <Container id="home" maxW="6xl" mt="100">
        <SimpleGrid
          alignItems={"center"}
          columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
          spacing="20px"
          p={[2, 4, 6, 8]}
        >
          <Box textAlign="left">
            <Box>
              <Text textStyle="h3">Hello, My Name is</Text>
              <Text textStyle="h1">Vrushabh Veer</Text>
              <Text textStyle="h3">I am a Full Stack Developer</Text>
            </Box>
            <Button mt="8" variant="solid" colorScheme="blue">
              <a href={resume} download>
                Resume
              </a>
              <span>
                <i className="fa-solid fa-file-arrow-down" />
              </span>
            </Button>
          </Box>
          <Box>
            <Image borderRadius="20" src={photo} alt="vrushabh" />
          </Box>
        </SimpleGrid>
      </Container>

      <Container id="about" maxW="6xl">
        <SimpleGrid
          alignItems={"center"}
          columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
          spacing="20px"
          p={[2, 4, 6, 8]}
        >
          <Box>
            <Image src={aboutMe} alt="vrushabh" />
          </Box>
          <Box>
            <Text textStyle="about">About Me</Text>
            <Text textStyle="p1">
              Self-motivated developer and Creative person who is interested in
              building user-friendly products. Extremely motivated to constantly
              develop technical skills and grow professionally. and looking
              forward to working in a challenging role that leads to the
              organization's overall growth and development.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      <Container maxW="6xl" mt="50" id="projects">
        <Text textStyle="heading">MY PROJECTS</Text>
        <SimpleGrid
          columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
          spacing="20px"
          p={[6, 4, 6, 8]}
        >
          <Box textStyle="projectBox">
            <Box>
              <Image
                src={headphone}
                alt=""
                borderRadius="10"
                border="1px solid rgb(206,206,206)"
              />
            </Box>
            <Text textStyle="h2">Headphone Zone Clone</Text>
            <Text textStyle="p">
              It is India's first exclusive online website for purchasing
              Headphones, earphone and Audio deviceses and the world's finest
              headphones brands are available in different design and style.
            </Text>
            <Flex alignItems="center" gap="3" mt="3">
              <Text textStyle="techStack">Tech Stacks :</Text>
              <Flex gap="2" textStyle="p2">
                <Text>HTML,</Text>
                <Text>CSS,</Text>
                <Text>JavaScrpt</Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-evenly" mt="5">
              <Button variant="outline" colorScheme="blue">
                <a href="https://clever-mooncake-91221a.netlify.app/">
                  See Live
                </a>
                <span>
                  <i className="fa-solid fa-eye" />
                </span>
              </Button>
              <Button variant="outline" colorScheme="blue">
                <a href="https://github.com/SankalpJaiswal/Head-Phone-Zone.git">
                  View Code
                </a>
                <span>
                  <i className="fa-brands fa-github" />
                </span>
              </Button>
            </Flex>
          </Box>

          <Box textStyle="projectBox">
            <Box>
              <Image
                src={bobbi}
                alt=""
                borderRadius="10"
                border="1px solid rgb(206,206,206)"
              />
            </Box>
            <Text textStyle="h2">Bobbi Brown Clone</Text>
            <Text textStyle="p">
              A web application where cosmetics and skin care products are
              available for purchase and there are different functionalties
              available, here you can Filter all the products and this is a my
              first individual project.
            </Text>
            <Flex alignItems="center" gap="3" mt="3">
              <Text textStyle="techStack">Tech Stacks :</Text>
              <Flex gap="2" textStyle="p2">
                <Text>HTML,</Text>
                <Text>CSS,</Text>
                <Text>JavaScrpt</Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-evenly" mt="5">
              <Button variant="outline" colorScheme="blue">
                <a href="https://fantastic-phoenix-51d91e.netlify.app/">
                  See Live
                </a>
                <span>
                  <i className="fa-solid fa-eye" />
                </span>
              </Button>
              <Button variant="outline" colorScheme="blue">
                <a href="https://github.com/VrushabhVeer/Bobbi-Brown.git">
                  View Code
                </a>
                <span>
                  <i className="fa-brands fa-github" />
                </span>
              </Button>
            </Flex>
          </Box>

          <Box textStyle="projectBox">
            <Box>
              <Image
                src={spark}
                alt=""
                borderRadius="10"
                border="1px solid rgb(206,206,206)"
              />
            </Box>
            <Text textStyle="h2">Spark America Clone</Text>
            <Text textStyle="p">
              Its an American Fitness and Health website, There are differents
              types of Healthy foods recipes are available and also there you
              can build community.
            </Text>
            <Flex alignItems="center" gap="3" mt="3">
              <Text textStyle="techStack">Tech Stacks :</Text>
              <Flex gap="2" textStyle="p2">
                <Text>HTML,</Text>
                <Text>CSS,</Text>
                <Text>JavaScrpt,</Text>
                <Text>ES6,</Text>
                <Text>React</Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-evenly" mt="5">
              <Button variant="outline" colorScheme="blue">
                <a href="https://earnest-yeot-d77215.netlify.app/">See Live</a>
                <span>
                  <i className="fa-solid fa-eye" />
                </span>
              </Button>
              <Button variant="outline" colorScheme="blue">
                <a href="https://github.com/VrushabhVeer/barbarous-poison-5190.git">
                  View Code
                </a>
                <span>
                  <i className="fa-brands fa-github" />
                </span>
              </Button>
            </Flex>
          </Box>
        </SimpleGrid>
      </Container>

      <Container maxW="6xl" mt="50" id="skill" mb="50px">
        <Text textStyle="heading">MY TECHNICAL SKILLS</Text>
        <SimpleGrid
          columns={{ sm: 2, md: 4, lg: 6, xl: 6 }}
          spacing="50px"
          p={[4, 4, 6, 8]}
        >
          <Box textStyle="skillBox">
            <Image
              w="20"
              margin="auto"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt=""
            />
          </Box>
          <Box textStyle="skillBox">
            <Image
              w="20"
              margin="auto"
              src="	https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt=""
            />
          </Box>
          <Box textStyle="skillBox">
            <Image
              w="20"
              margin="auto"
              src="	https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt=""
            />
          </Box>
          <Box textStyle="skillBox">
            <Image
              w="20"
              margin="auto"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt=""
            />
          </Box>
          <Box textStyle="skillBox">
            <Image
              w="20"
              margin="auto"
              src="	https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt=""
            />
          </Box>
          <Box textStyle="skillBox">
            <Image
              w="20"
              margin="auto"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt=""
            />
          </Box>
        </SimpleGrid>
      </Container>

      <Container id="contact" maxW="6xl">
        <Text textStyle="heading">GET IN TOUCH</Text>
        <SimpleGrid
          alignItems={"center"}
          columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
          spacing="50px"
          p={[2, 4, 6, 8]}
        >
          <Box>
            <Image src={contactMe} alt="vrushabh" />
          </Box>

          <Box p="20px">
            <Flex w="100%" gap="5" mb="5">
              <Button fontSize="15px" variant="solid" colorScheme="red">
                <a href="veervrushabh@gmail.com">Gmail</a>
                <span>
                  <i className="fa-solid fa-envelope" />
                </span>
              </Button>

              <Button fontSize="15px" variant="solid" colorScheme="linkedin">
                <a href="https://www.linkedin.com/in/vrushabh-veer/">
                  Linkedin
                </a>
                <span>
                  <i className="fa-brands fa-linkedin" />
                </span>
              </Button>

              <Button fontSize="15px" variant="solid" colorScheme="purple">
                <a href="https://github.com/VrushabhVeer">GitHub</a>
                <span>
                  <i className="fa-brands fa-github" />
                </span>
              </Button>
            </Flex>

            <Box>
              <Box>
                <Input placeholder="Enter Name" />
              </Box>
              <br />
              <Box>
                <Input placeholder="Enter Email" />
              </Box>
              <br />
              <Box>
                <Input placeholder="Enter Mobile" />
              </Box>
              <br />
              <Box>
                <Textarea placeholder="Add Your Massage" />
              </Box>
              <br />
              <Button w="100%" variant="solid" colorScheme="blue">
                Send Message
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      <Container textAlign="center">
        <SimpleGrid columns={{ sm: 1, md: 1, lg: 2, xl: 2 }} spacing="10px">
          <Box>
            <Text>
              <span>
                <i className="fa-solid fa-envelope" />
              </span>{" "}
              veervrushabh@gmail.com
            </Text>
          </Box>
          <Box>
            <Text>
              <spn>
                <i className="fa-solid fa-phone" />
              </spn>{" "}
              +91 9767428263
            </Text>
          </Box>
        </SimpleGrid>

        <Text textStyle="footerText">
          Created By vrushabh | 2022 All rights reserved.
        </Text>
      </Container>
    </div>
  );
};

export default Main;
