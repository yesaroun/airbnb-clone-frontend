import { Box, Skeleton, HStack } from "@chakra-ui/react";
import React from "react";

const RoomSkeleton = () => {
  return (
    <>
      <Box>
        <Skeleton rounded="2xl" height={"280px"} mb={7} />
        <HStack>
          <Skeleton rounded="lg" width="60%" height={5} mb={1} />
          <Skeleton rounded="lg" width="15%" height={5} />
        </HStack>
        <Skeleton rounded="lg" width="40%" height={5} mb={1} />
        <Skeleton rounded="lg" width="30%" height={5} mb={3} />
        <Skeleton rounded="lg" width="25%" height={5} />
      </Box>
    </>
  );
};

export default RoomSkeleton;
