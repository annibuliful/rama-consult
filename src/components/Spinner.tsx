import { SpinnerProps } from "@chakra-ui/react";
import { Flex, FlexProps, Spinner } from "@chakra-ui/react";
import React from "react";

export interface ILoadingIndicatorProps {
  thickness?: string;
  width?: string;
  speed?: string;
  size?: SpinnerProps["size"];
  justify?: FlexProps["justifyContent"];
  align?: FlexProps["align"];
  color?: string;
}
export const LoadingSpinner = ({
  thickness = "4px",
  width = "100%",
  speed = "0.75s",
  size = "xl",
  justify = "center",
  align = "center",
  color = "brand.400",
}: ILoadingIndicatorProps) => (
  <Flex align={align} justify={justify} width={width}>
    <Spinner
      thickness={thickness}
      speed={speed}
      emptyColor="gray.200"
      color={color}
      size={size}
    />
  </Flex>
);
