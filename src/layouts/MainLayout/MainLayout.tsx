import { Box, BoxProps, forwardRef } from '@chakra-ui/react'

import React from 'react'
import { useMainLayoutStore } from '.'

export interface MainLayoutProps extends BoxProps {}

const MainLayout = forwardRef<MainLayoutProps, 'div'>(
  ({ children, ...props }, ref) => {
    const backgroundColor = useMainLayoutStore((state) => state.backgroundColor)
    return (
      <>
        <Box
          as="main"
          ref={ref}
          backgroundColor={backgroundColor}
          transitionProperty="background-color"
          transitionDuration="0.5s"
          {...props}
        >
          {children}
        </Box>
      </>
    )
  }
)

export default MainLayout
