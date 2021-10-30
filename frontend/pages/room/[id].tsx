import React, { useEffect, useState } from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { Chat, ChatButton } from "../../components/chat/Chat";
import Navbar from "../../components/Navbar";
import CompilerController from "../../components/editor/CompilerController";
import { useRouter } from "next/router";
import LoadingPage from "../../components/LoadingPage";

import { SOCKET_IO } from "../../utils/constants";

const Room = (props) => {
	const [isChatOpen, setIsChatOpen] = useState(true);
	const [editorSize, setEditorSize] = useState(8);
	const [chatSize, setChatSize] = useState(2);

	const router = useRouter();
	const { id } = router.query;

	const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
	const { user } = useAuth0();

	useEffect(() => {
		if (!isLoading && id) SOCKET_IO.emit("joinRoom", id, user.email);
	}, [isLoading, id, user]);

	useEffect(() => {
		SOCKET_IO.on("userConnected", (roomId: string, user: string) => {
			console.log("user connetced", roomId, user);
		});
	});

	const manageSize = () => {
		if (isChatOpen) {
			setEditorSize(10);
			setChatSize(0);
		} else {
			setEditorSize(8);
			setChatSize(2);
		}
		setIsChatOpen(!isChatOpen);
	};

	if (isLoading || id === undefined) return <LoadingPage />;

	if (!isAuthenticated) {
		loginWithRedirect({
			appState: {
				target: "http://localhost:3000/room/" + (id as string),
			},
		});
		return <LoadingPage />;
	}

	return (
		<div>
			<Navbar />
			<Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(10, 1fr)">
				<GridItem colSpan={chatSize} colStart={11} bg="tsizeomato">
					<div onClick={manageSize}>
						<ChatButton></ChatButton>
					</div>
				</GridItem>
			</Grid>

			<Grid
				h="80vh"
				templateRows="repeat(1, 1fr)"
				templateColumns="repeat(10, 1fr)">
				<GridItem colSpan={editorSize}>
					<CompilerController roomId={id as string} />
				</GridItem>

				<GridItem colSpan={chatSize}>
					{isChatOpen ? (
						<Box
							h="85vh"
							borderLeft="4px"
							borderLeftColor="whiteAlpha.400"
							p="20px"
							backgroundColor="whiteAlpha.400"
							style={{
								maxHeight: "65vh",
								overflow: "scroll",
								overflowX: "hidden",
							}}>
							<div suppressHydrationWarning={true}>
								{process.browser && <Chat roomId={id as string} />}
							</div>
						</Box>
					) : null}
				</GridItem>
			</Grid>
		</div>
	);
};

export default Room;
