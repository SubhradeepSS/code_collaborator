import { useState } from "react";
import {
	Button,
	FormControl,
	FormLabel,
	Flex,
	Heading,
	Input,
	Stack,
	Text,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";

import { useAuth0 } from "@auth0/auth0-react";
import { ServerApi } from "../../utils/constants";

import { SOCKET_IO } from "../../utils/constants";

export default function CreateRoom(): JSX.Element {
	const { user } = useAuth0();

	const [email, setEmail] = useState(user.email);
	const [roomName, setRoomName] = useState("");
	const [roomPassword, setRoomPassword] = useState("abc");

	const formSubmitEventHandler = () => {
		ServerApi.post("/api/room", { email, roomName, password: roomPassword })
			.then((res) => {
				console.log(res.data);
				//SOCKET_IO.emit("joinRoom", { roomId: res.data.roomId, userId: email });
				location.replace(`/room/${res.data.roomId}`);
			})
			.catch((err) => {
				// handle error
			});
	};

	return (
		<Flex
			minH={"50vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}>
			<Stack
				spacing={4}
				w={"full"}
				maxW={"md"}
				bg={useColorModeValue("white", "gray.700")}
				rounded={"xl"}
				boxShadow={"lg"}
				p={6}
				my={12}>
				<Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
					Create New Room
				</Heading>

				<form>
					<FormControl mt={6}>
						<FormLabel>Roomname</FormLabel>
						<Input
							type="string"
							value={roomName}
							onChange={(e) => setRoomName(e.target.value)}
							placeholder="Enter Roomname"
							_placeholder={{ color: "gray.500" }}
						/>
					</FormControl>

					<FormControl mt={6}>
						<FormLabel>Room Password (Default: abc)</FormLabel>
						<Input
							type="password"
							value={roomPassword}
							onChange={(e) => setRoomPassword(e.target.value)}
							placeholder="* * * * * * *"
							_placeholder={{ color: "gray.500" }}
						/>
					</FormControl>

					<Text
						fontSize={{ base: "sm", sm: "md" }}
						color={useColorModeValue("gray.800", "gray.400")}
						my="5">
						Create your room or{" "}
						<Link color={"blue.400"} href="/joinroom">
							Join another
						</Link>
					</Text>

					<Stack spacing={6}>
						<Button
							onClick={formSubmitEventHandler}
							bg={"blue.400"}
							color={"white"}
							_hover={{
								bg: "blue.500",
							}}>
							Create Room
						</Button>
					</Stack>
				</form>
			</Stack>
		</Flex>
	);
}
