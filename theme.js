// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        // 5. We can add responsive variants
        sm: {
          bg: "#292929",
          fontSize: "md",
        },
        default: {
          bg: "#292929",
          px: 14,
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: "lg", // default is md
        variant: "sm", // default is solid
        colorScheme: "green", // default is gray
      },
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "url(/assets/Background_Bottom.png), url(/assets/Cloud.png), url(/assets/Background.png)",
        backgroundPosition: "center,center",
        backgroundRepeat: "no-repeat,no-repeat",
        backgroundSize: "cover,cover",
        overflowX: "hidden",
        color: "white",
      },
    },
  },
  colors: {
    themeColor: {
      //   100: "#725e46",
      200: "#dc5700",
      900: "#725e46",
    },
    buttonColor: "#292929",
    borderColor: {
      900: "#50381d",
    },
  },
});

export default theme;
