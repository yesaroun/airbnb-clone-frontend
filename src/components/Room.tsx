import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface IRoomProps {
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
  pk: number;
}

const Room = ({
  pk,
  imageUrl,
  name,
  rating,
  city,
  country,
  price,
}: IRoomProps) => {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <>
      <Link to={`/rooms/${pk}`}>
        <VStack alignItems={"flex-start"}>
          <Box
            position="relative"
            overflow={"hidden"}
            mb={3}
            rounded="2xl"
            w="100%"
          >
            {imageUrl ? (
              <Image src={imageUrl} minH="280" />
            ) : (
              <Box minH="280px" h="100%" w="100%" p={10} bg="green.400" />
            )}
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
                {name}
              </Text>
              <HStack spacing={1}>
                <FaStar size={15} />
                <Text>{rating}</Text>
              </HStack>
            </Grid>
            <Text fontSize={"sm"} color={gray}>
              {city}, {country}
            </Text>
          </Box>
          <Text fontSize={"sm"} color={gray}>
            <Text as="b">${price}</Text> / night
          </Text>
        </VStack>
      </Link>
    </>
  );
};

export default Room;
