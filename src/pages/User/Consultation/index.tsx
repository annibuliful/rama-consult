import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { IBasicInfoData } from "../../../@types/IConsultation";
import { useStore } from "../../../store";
import { BasicInfoForm } from "./Basic-info";

export const ConultationForm = () => {
  const { dispatch, basicInfo } = useStore("basicInfo");
  const mockData: IBasicInfoData = {
    institutionName: "insti-name",
    physicianName: "phy-name",
    telephone: "09228912313",
    email: "lagman@gmail.com",
    todayDate: new Date().toDateString(),
  };

  const onSave = (data: IBasicInfoData) => {
    dispatch("saveBasicInfo", data);
  };
  return (
    <Box>
      <Text>Consultation Form</Text>
      <BasicInfoForm {...mockData} onSave={onSave} />
    </Box>
  );
};
