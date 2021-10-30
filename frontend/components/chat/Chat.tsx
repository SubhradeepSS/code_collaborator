import { ChatIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../utils/constants";
import { ChatUtility } from "./ChatUtility";
import { useAuth0 } from "@auth0/auth0-react";

export const ChatButton = () => {
  const { onOpen } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        variant="outline"
      >
        {/* Open */}
        <ChatIcon />
      </Button>
    </>
  );
};

export const Chat: React.FC<{ roomId: string }> = ({ roomId }) => {
  const { user } = useAuth0();

  const [inputState, setInputState] = useState("");
  const [newMessageSubmitted, setNewMessageSubmitted] = useState({});

  const submitMessageFn = async (msg: string, roomId: string) => {
    const message = {
      roomId: roomId,
      senderId: user.email,
      senderName: user.name.split(" ")[0],
      text: msg,
    };

    try {
      const res = await axios.post(SERVER_URL + "/messages/", message);
      setNewMessageSubmitted(res.data);
      setInputState("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box>
      <Grid templateColumns="repeat(2.5, 1fr)" gap={4}>
        <GridItem colStart={2} colEnd={4} h="10">
          Chat
        </GridItem>
      </Grid>

      <ChatUtility
        currentRoomId={roomId}
        newMessageSubmitted={newMessageSubmitted}
      />

      <Flex position="fixed" bottom="10">
        <Input
          placeholder="Type here..."
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
        <Button
          colorScheme="blue"
          ml="2"
          onClick={() => submitMessageFn(inputState, roomId)}
        >
          send
        </Button>
      </Flex>
    </Box>
  );
};
