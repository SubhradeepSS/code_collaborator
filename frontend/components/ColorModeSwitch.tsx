import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  if (isDark) return <SunIcon onClick={toggleColorMode} />;
  else return <MoonIcon onClick={toggleColorMode} />;
};
