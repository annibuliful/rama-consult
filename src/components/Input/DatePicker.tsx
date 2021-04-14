import { Box, SpacerProps, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import DatePicker from "react-datepicker";

interface IDatePickerProps {
  label: string;
  isRequired?: boolean;
  value: string;
  onChange: (newDate: Date) => void;
  mt?: SpacerProps["mt"];
  mb?: SpacerProps["mt"];
  ml?: SpacerProps["ml"];
  mr?: SpacerProps["mr"];
  formRef?: any;
  name: string;
}

export const DatePickerInput: FunctionComponent<IDatePickerProps> = ({
  label,
  isRequired = false,
  value,
  onChange,
  mb,
  ml,
  mr,
  mt,
}) => {
  return (
    <Box mt={mt ?? 6} mb={mb} ml={ml ?? 4} mr={mr ?? 4}>
      <Text color="gray.600" fontSize={[14, 16, 18]}>
        {label}
        {isRequired && (
          <span style={{ color: "red", marginLeft: "5px" }}>*</span>
        )}
      </Text>
      <DatePicker value={value} onChange={onChange} placeholderText={label} />
    </Box>
  );
};
