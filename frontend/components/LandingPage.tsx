/* eslint-disable react/no-unescaped-entities */
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function LandingPage(): JSX.Element {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <img
          style={{ padding: 0, marginTop: -250, marginBottom: -100 }}
          src={"/pair2.png"}
        />
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Pair Programming{" "}
          <Text as={"span"} color={"blue.400"}>
            Made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"} fontSize="xl" px="5">
          Need to pair code? We got you covered with our code collaborator with
          real time pair programming, chat and code sharing through whatsapp
          with one click
          <br />
          Connect On{" "}
          <span style={{ color: "blue", display: "inline" }}>
            Chat-Collaborator
          </span>
          .
        </Text>
        <Stack spacing={6} direction={"row"}>
          <NextLink href="/joinroom">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
            >
              Join New Room
            </Button>
          </NextLink>
          <NextLink href="/createroom">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
            >
              Create Room
            </Button>
          </NextLink>
        </Stack>
      </Stack>
    </Container>
  );
}
