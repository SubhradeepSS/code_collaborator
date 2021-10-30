import "../styles/globals.css";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { Auth0Provider } from "@auth0/auth0-react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Chat-Collaborator</title>
			</Head>
			<Auth0Provider
				domain="dev-qhuj8gzm.us.auth0.com"
				clientId="sD56Sagz3xKzHwU1wWHz0dKi2gvBw4t5"
				redirectUri="http://localhost:3000">
				<ChakraProvider theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</Auth0Provider>{" "}
		</>
	);
}

export default MyApp;
