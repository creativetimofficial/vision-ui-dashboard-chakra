export const buttonStyles = {
  components: {
    Button: {
      variants: {
        "no-hover": {
          _hover: {
            boxShadow: "none",
          },
        },
        "transparent-with-icon": {
          bg: "transparent",
          fontWeight: "bold",
          borderRadius: "inherit",
          cursor: "pointer",
          _hover: "none",
          _active: {
            bg: "transparent",
            transform: "none",
            borderColor: "transparent",
          },
          _focus: {
            boxShadow: "none",
          },
          _hover: {
            boxShadow: "none",
          },
        },
        brand: {
          bg: "brand.200",
          color: "#fff",
          _hover: {
            bg: "brand.300",
          },
          _active: {
            bg: "brand.400",
          },
          _focus: "none",
        },
        outlineWhite: {
          bg: "transparent",
          color: "#fff",
          borderColor: "white",
          borderWidth: "1px",
          _hover: {
            bg: "whiteAlpha.100",
          },
          _active: {
            bg: "whiteAlpha.200",
          },
          _focus: "none",
        },
      },
      baseStyle: {
        borderRadius: "12px",
        _focus: {
          boxShadow: "none",
        },
        _active: "none",
        _focus: "none",
      },
    },
  },
};
