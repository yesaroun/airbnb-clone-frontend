import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";

const Room = () => {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <>
      <VStack alignItems={"flex-start"}>
        <Box position="relative" overflow={"hidden"} mb={3} rounded="2xl">
          <Image
            h="280"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-926638381418918258/original/d2cb9e14-50e5-481a-87d0-23b72bb0964b.jpeg?im_w=1200"
          />
          <Button
            variant={"unstyled"}
            position="absolute"
            top={0}
            right={0}
            color="white"
          >
            <FaRegHeart size="20px" />
          </Button>
        </Box>
        <Box>
          <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text display={"block"} as="b" noOfLines={1} fontSize="md">
              한국 서울
            </Text>
            <HStack spacing={1}>
              <FaStar size={15} />
              <Text>5.0</Text>
            </HStack>
          </Grid>
          <Text fontSize={"sm"} color={gray}>
            Seoul, S. Korea
          </Text>
        </Box>
        <Text fontSize={"sm"} color={gray}>
          <Text as="b">$72</Text> / night
        </Text>
      </VStack>
    </>
  );
};

export default Room;
