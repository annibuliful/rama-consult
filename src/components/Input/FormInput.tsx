import { Box, Input, SpacerProps, Text } from "@chakra-ui/react";
import React, { ChangeEvent, FunctionComponent } from "react";

export interface IFormInputProps {
  value: string;
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  mt?: SpacerProps["mt"];
  mb?: SpacerProps["mt"];
  ml?: SpacerProps["ml"];
  mr?: SpacerProps["mr"];
  formRef?: any;
  name: string;
  isPassword?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
}

export const FormInput: FunctionComponent<IFormInputProps> = ({
  label,
  value,
  onChange,
  onBlur,
  formRef,
  name,
  isPassword = false,
  isInvalid = false,
  isRequired = false,
  mt,
  mb,
  ml,
  mr,
}) => (
  <Box mt={mt ?? 6} mb={mb} ml={ml ?? 4} mr={mr ?? 4}>
    <Text color="gray.600" fontSize={[14, 16, 18]}>
      {label}
      {isRequired && <span style={{ color: "red", marginLeft: "5px" }}>*</span>}
    </Text>
    <Input
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      size="md"
      placeholder={label}
      name={name}
      type={isPassword ? "password" : "text"}
      isInvalid={isInvalid}
      ref={formRef}
    />
  </Box>
);
