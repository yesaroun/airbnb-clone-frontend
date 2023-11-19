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
import Header from "./Header";

export default function Root() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Header />
      <Outlet></Outlet>
    </Box>
  );
}
