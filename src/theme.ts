import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({
    config,
    breakpoints: {
        base: "30em",
        sm: "35em",
        md: "48em",
        lg: "62em",
        xl: "80em",
    }
});

export default theme;