import React, { ReactNode } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()}>
      <NavLink>LogIn</NavLink>
    </button>
  );
};

export default LoginButton;
