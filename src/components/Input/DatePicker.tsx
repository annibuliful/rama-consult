import { Box, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface IDatePickerProps {
  label: string;
  isRequired?: boolean;
  value: string;
  onChange: (newDate: Date) => void;
}
export const DatePickerInput: FunctionComponent<IDatePickerProps> = ({
  label,
  isRequired = false,
  value,
  onChange,
}) => {
  return (
    <Box>
      <Text color="gray.600" fontSize={[14, 16, 18]}>
        {label}
        {isRequired && (
          <span style={{ color: "red", marginLeft: "5px" }}>*</span>
        )}
      </Text>
      <DatePicker value={value} onChange={onChange} />
    </Box>
  );
};
