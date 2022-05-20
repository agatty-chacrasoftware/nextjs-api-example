import {
  Container,
  ContainerProps,
  Heading,
  HeadingProps,
  forwardRef,
} from "@chakra-ui/react";

import React from "react";

export interface SectionProps extends ContainerProps {
  headingText?: string;
  headingMarginBottom?: HeadingProps["marginBottom"];
}

const Section = forwardRef<SectionProps, "div">(
  ({ children, headingText, headingMarginBottom, ...props }, ref) => {
    return (
      <Container as="section" ref={ref} py="16" {...props}>
        {headingText && (
          <Heading
            textAlign="center"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            mb={headingMarginBottom ?? "16"}
          >
            {headingText}
          </Heading>
        )}
        {children}
      </Container>
    );
  }
);

export default Section;
