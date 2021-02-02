import { Box, NumberInput, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

export interface IFormNumberInputProps {
  value: number;
  label: string;
  onChange: (valueString: string, valueNumber: number) => void;
  my?: number | string;
  mx?: number | string;
}

export const FormNumberInput: FunctionComponent<IFormNumberInputProps> = ({
  label,
  value,
  onChange,
  my,
  mx,
}) => (
  <Box my={my ?? 4} mx={mx ?? 4}>
    <Text color="gray.600" fontSize={[14, 16, 18]}>
      {label}
    </Text>
    <NumberInput value={value} onChange={onChange} size="md" />
  </Box>
);
