import { Box, Text } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const UserPendingPage: FunctionComponent = () => (
  <Box>
    <Text fontSize="40px" textAlign="center">
      Your Status:
      {' '}
      <Box as="span" color="pending.400">
        Pending
      </Box>
    </Text>
    <Text fontSize="40px" textAlign="center">
      <Link to="/">Back</Link>
    </Text>
  </Box>
);
