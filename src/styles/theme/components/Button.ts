import { mode, transparentize } from "@chakra-ui/theme-tools";

import { ComponentSingleStyleConfig } from "@chakra-ui/theme";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";

const variantGhost: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  if (c === "gray") {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    };
  }

  if (c === "red") {
    return {
      color: mode(`inherit`, `white`)(props),
      _hover: {
        bg: mode(`red.500`, `whiteAlpha.200`)(props),
        color: mode(`white`, "red.500")(props),
      },
      _active: {
        bg: mode(`red.500`, `whiteAlpha.300`)(props),
        color: mode(`white`, "red.500")(props),
      },
    };
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  };
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  if (c === "red") {
    return {
      border: "1px solid",
      borderColor: "red.500",
      ...variantGhost(props),
    };
  }
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ...variantGhost(props),
  };
};

const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    rounded: "full",
  },
  variants: {
    outline: variantOutline,
  },
};

export default Button;
