import JoinRoom from "../components/room/JoinRoom";
import Navbar from "../components/Navbar";
import LoadingPage from "../components/LoadingPage";

import { useAuth0 } from "@auth0/auth0-react";

const Joinroom = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) return <LoadingPage />;

  if (!isAuthenticated) {
    loginWithRedirect({
      redirectUri: "http://localhost:3000/createroom",
    });

    return <LoadingPage />;
  }

  return (
    <>
      <Navbar />
      <JoinRoom />
    </>
  );
};

export default Joinroom;
