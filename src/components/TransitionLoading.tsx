import { Box, Text } from "@chakra-ui/react";
import React, { CSSProperties, FunctionComponent } from "react";
import { LoadingSpinner } from "./Spinner";

interface ITransitionLoading {
  label?: string;
  fontsize?: string;
  isCenterPage?: boolean;
}
export const TransitionLoading: FunctionComponent<ITransitionLoading> = ({
  label = "Rama Consult",
  fontsize,
  isCenterPage = true,
}) => {
  const centerPage = isCenterPage
    ? {
        position: "absolute" as CSSProperties["position"],
        top: "45vh",
        left: "45vw",
      }
    : undefined;

  return (
    <Box mx="auto" style={centerPage}>
      <LoadingSpinner />
      <Text fontSize={fontsize ?? 18} textAlign="center" fontWeight="bold">
        {label}
      </Text>
    </Box>
  );
};
