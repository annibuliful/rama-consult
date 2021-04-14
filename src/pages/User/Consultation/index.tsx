import { Box, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { IBasicInfoData } from "../../../@types/IConsultation";
import { useStore } from "../../../store";
import { BasicInfoForm } from "./Basic-info";

export const ConultationForm = () => {
  const { basicInfo } = useStore("basicInfo");
  const [loading, setLoading] = useState(true);
  const [mockData, setMockData] = useState<IBasicInfoData>({
    institutionName: "",
    physicianName: "",
    telephone: "",
    email: "",
    todayDate: new Date(),
  });

  useEffect(() => {
    setTimeout(() => {
      setMockData(basicInfo);
      setLoading(false);
    }, 2000);
  }, [basicInfo]);

  return (
    <Box>
      <Text>Consultation Form</Text>
      {!loading && <BasicInfoForm {...mockData} />}
    </Box>
  );
};
