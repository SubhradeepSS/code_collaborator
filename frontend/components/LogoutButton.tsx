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

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      <NavLink>LogOut</NavLink>
    </button>
  );
};

export default LogoutButton;
