import {
  Box,
  Spacer,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import ModeContext from "../context/colorModeContext";

const UpperBar = () => {
  const { darkMode, changeDarkMode } = useContext(ModeContext);
  const { toggleColorMode } = useColorMode();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = () => setScreenWidth(window.innerWidth);
  });

  return (
    <Flex
      align="center"
      justify="space-between"
      padding="10px"
      margin="0"
      boxShadow={
        darkMode
          ? "rgba(0, 0, 0, 0.3) 0px 8px 24px"
          : "rgba(149, 157, 165, 0.2) 0px 8px 24px"
      }
      width={screenWidth}
    >
      <Box p="4" fontSize="18px" fontWeight="bold">
        Where in the world?
      </Box>
      <Spacer />
      <Box
        p="4"
        cursor="pointer"
        onClick={() => {
          toggleColorMode();
          changeDarkMode(!darkMode);
        }}
      >
        <HStack spacing={3}>
          <Text paddingTop={3}>Dark Mode</Text>
        </HStack>
      </Box>
    </Flex>
  );
};

export default UpperBar;
