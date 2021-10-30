import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { format } from "timeago.js";
import { SERVER_URL } from "../../utils/constants";
import { SOCKET_IO } from "../../utils/constants";

interface ChatUtilityProps {
  currentRoomId: string;
  newMessageSubmitted: any;
}

export const ChatUtility: React.FC<ChatUtilityProps> = ({
  currentRoomId,
  newMessageSubmitted,
}) => {
  const [roomState, setRoomState] = useState([]);
  const [messages, setMessages] = useState([]);

  const scrollRef = useRef();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user")).UserId
      : "randomId";

    const getConversations = async () => {
      const url = SERVER_URL + "/room/" + user;
      const res = await axios.get(url);

      // console.log(res);
      setRoomState(res.data);
    };
    getConversations();
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(SERVER_URL + "/messages/" + currentRoomId);
        // console.log(res);
        setMessages(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getMessages();
  }, [roomState, currentRoomId]);

  useEffect(() => {
    SOCKET_IO.on("message", (message: any) => {
      if (!(message.text == undefined)) {
        setMessages([...messages, message]);
      }
    });
  });

  useEffect(() => {
    SOCKET_IO.emit("chatMessage", newMessageSubmitted);
  }, [newMessageSubmitted]);

  useEffect(() => {
    // @ts-ignore
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      {messages.map((msg, i) => {
        return (
          <Box
            bg="facebook.200"
            w="100%"
            p={4}
            color="white"
            rounded="base"
            mb="4"
            key={msg._id}
          >
            <Flex>
              {console.log(msg)}
              <Box color="facebook.800">{msg.senderName}</Box>
              <Box color="facebook.800" ml={4}>
                {format(msg.createdAt)}
              </Box>
            </Flex>
            <Box color="blackAlpha.800">{msg.text}</Box>
          </Box>
        );
      })}
      <div ref={scrollRef}></div>
    </div>
  );
};
