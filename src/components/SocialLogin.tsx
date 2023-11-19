import { FaComment, FaGithub } from "react-icons/fa";
import { Button, Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SocialLogin = () => {
  return (
    <Box>
      <HStack>
        <Divider />
        <Text textTransform={"uppercase"} color="gray.500" fontSize="xs" as="b">
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button w="100%" leftIcon={<FaGithub />} colorScheme={"telegram"}>
          Continue with Github
        </Button>
        <Button w="100%" leftIcon={<FaComment />} colorScheme={"yellow"}>
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
};

export default SocialLogin;
