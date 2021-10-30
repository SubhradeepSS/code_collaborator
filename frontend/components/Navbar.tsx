import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import NextLink from "next/link";

const Links = [
  ["Home", "/"],
  ["Create Room", "/createroom"],
  ["Join Room", "/joinroom"],
];
const NavLinkWithHoverEffect = ({ children }: { children: ReactNode }) => (
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
const NavLink = ({ children }: { children: ReactNode }) => (
  <NextLink href={children[1]}>{children[0]}</NextLink>
);

export default function withAction() {
  let { isOpen, onOpen, onClose } = useDisclosure();
  const { user, isAuthenticated } = useAuth0();

  return (
    <Flex>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        style={{ width: "100%" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <i>
              <Box>
                <strong>Chat-Collaborator</strong>
              </Box>
            </i>{" "}
            {Links.map((link) => (
              <NavLink key={link[1]}>{link}</NavLink>
            ))}
          </HStack>

          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {!isAuthenticated ? (
              <LoginButton />
            ) : (
              <>
                <Box>
                  {" "}
                  <strong>
                    {" "}
                    Welcome {user.name.split(" ")[0].toLocaleUpperCase()} !
                  </strong>
                </Box>
                <Box>
                  <NavLinkWithHoverEffect>
                    <ColorModeSwitch />
                  </NavLinkWithHoverEffect>
                </Box>{" "}
                <LogoutButton />
              </>
            )}
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
}
