import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

export default function LoadingPage() {
  return (
    <>
      <Navbar />
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Box
            px={10}
            style={{
              width: "100%",
              fontSize: "20px",
              margin: "20px",
              padding: "0",
            }}
          >
            Loading . . .
          </Box>
        </Stack>
      </Container>
    </>
  );
}
