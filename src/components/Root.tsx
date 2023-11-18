import { Link, Outlet } from "react-router-dom";
import {
  Box,
  Button,
  HStack,
  IconButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  InputLeftElement,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { FaAirbnb, FaLock, FaMoon, FaUserNinja } from "react-icons/fa";

export default function Root() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <HStack
        justifyContent={"space-between"}
        py={5}
        px={10}
        borderBottomWidth={1}
      >
        <Box color="red.500">
          <Link to={"/"}>
            <FaAirbnb size={"48"} />
          </Link>
        </Box>
        <HStack spacing={2}>
          <IconButton
            aria-label="Toggle dark mode"
            variant={"ghost"}
            icon={<FaMoon />}
          />
          <Button onClick={onOpen}>Log in</Button>
          <Button colorScheme={"red"}>Sign up</Button>
        </HStack>
        <Modal onClose={onClose} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log in</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <InputGroup size={"md"}>
                  <InputLeftElement
                    children={
                      <Box color="gray.500">
                        <FaUserNinja />
                      </Box>
                    }
                  />
                  <Input variant={"filled"} placeholder="Username" />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color="gray.500">
                        <FaLock />
                      </Box>
                    }
                  />
                  <Input variant={"filled"} placeholder="Password" />
                </InputGroup>
              </VStack>
              <Button mt={4} colorScheme={"red"} w="100%">
                Log in
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
      <Outlet></Outlet>
    </Box>
  );
}
