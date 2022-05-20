import { ComponentSingleStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Divider: ComponentSingleStyleConfig = {
  baseStyle: (props) => {
    const { colorScheme: c } = props;

    return {
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
    };
  },
};

export default Divider;
