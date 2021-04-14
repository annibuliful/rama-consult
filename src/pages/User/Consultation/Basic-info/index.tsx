import { Box, Text } from "@chakra-ui/layout";
import React, { ChangeEvent, FunctionComponent, useReducer } from "react";
import { IBasicInfoData } from "../../../../@types/IConsultation";
import { DatePickerInput } from "../../../../components/Input/DatePicker";
import { FormInput } from "../../../../components/Input/FormInput";
import { useStore } from "../../../../store";

export interface IBasicInfo extends IBasicInfoData {
  onSave: (data: IBasicInfoData) => void;
}

const initialValues: IBasicInfoData = {
  physicianName: "",
  institutionName: "",
  telephone: "",
  email: "",
  todayDate: "",
};

type Action =
  | { type: "physicianName"; data: string }
  | { type: "institutionName"; data: string }
  | { type: "telephone"; data: string }
  | {
      type: "email";
      data: string;
    }
  | {
      type: "todayDate";
      data: string;
    };

const reducer = (state: IBasicInfoData, action: Action) => ({
  ...state,
  [action.type]: action.data,
});

export const BasicInfoForm: FunctionComponent<IBasicInfo> = () => {
  const [basicData, dispatch] = useReducer(reducer, initialValues);
  const { dispatch: storeDispatch } = useStore("basicInfo");
  const onChangeInstitutionName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "institutionName", data: e.target.value });
    // storeDispatch("saveBasicInfo", {
    //   ...basicData,
    //   institutionName: e.target.value,
    // });
  };

  const onChangePhysicianName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "physicianName", data: e.target.value });
  };

  const onChangeTelephone = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "telephone", data: e.target.value });
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "email", data: e.target.value });
  };

  const onChangeTodayDate = (date: Date) => {
    dispatch({ type: "todayDate", data: date.toDateString() });
  };

  return (
    <Box>
      <Text size="xl">Basic Info</Text>
      <FormInput
        label="Institution name"
        value={basicData.institutionName}
        name="institution-name"
        onChange={onChangeInstitutionName}
        isRequired={true}
      />
      <FormInput
        label="Physician name"
        value={basicData.physicianName}
        name="physician-name"
        onChange={onChangePhysicianName}
        isRequired={true}
      />
      <FormInput
        label="Telephone"
        value={basicData.institutionName}
        name="telephone"
        onChange={onChangeTelephone}
        isRequired={true}
      />
      <FormInput
        label="Email"
        value={basicData.email}
        name="email"
        onChange={onChangeEmail}
        isRequired={true}
      />
      <DatePickerInput
        label="Today's Date"
        name="today-date"
        value={basicData.todayDate}
        onChange={onChangeTodayDate}
      />
    </Box>
  );
};
