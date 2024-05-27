import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  // A hook from Chakra UI that provides access to the color mode
  //  (light or dark) and a function to toggle it.
//   colorMode: A string that indicates the current color mode, either 'light' or 'dark'.
// toggleColorMode: A function that toggles the color mode between light and dark.

  return (
    <div>
      <Button onClick={toggleColorMode} position="absolute" top="1rem" right="1rem" >
          Toggle {colorMode === 'light' ? 'Dark' : "Light"}
      </Button>
      
    </div>
  )
}

export default DarkModeToggle
