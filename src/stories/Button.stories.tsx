import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

// import { Button, ButtonProps } from './Button';
import { Button } from '@chakra-ui/core';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

export const ChakraBtn = () => (
  <>
    <Button>Test</Button>
  </>
);
