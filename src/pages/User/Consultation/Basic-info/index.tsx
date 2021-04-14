import { Box, Text } from "@chakra-ui/layout";
import { omit } from "lodash";
import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useReducer,
} from "react";
import { IBasicInfoData } from "../../../../@types/IConsultation";
import { DatePickerInput } from "../../../../components/Input/DatePicker";
import { FormInput } from "../../../../components/Input/FormInput";
import { useStore } from "../../../../store";

export type IBasicInfo = IBasicInfoData;

const initialValues: IBasicInfoData = {
  physicianName: "",
  institutionName: "",
  telephone: "",
  email: "",
  todayDate: new Date(),
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

export const BasicInfoForm: FunctionComponent<IBasicInfo> = (props) => {
  const defaultValues: IBasicInfo = omit(props, "children");
  const [basicData, dispatch] = useReducer(reducer, defaultValues);
  const { dispatch: storeDispatch } = useStore("basicInfo");

  const onSaveData = (key: keyof IBasicInfoData, data: string | Date) => {
    const newData = { ...basicData, [key]: data };
    storeDispatch("consultation/saveBasicInfo", newData);
  };

  const onChangeInput = (
    key: keyof IBasicInfoData,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const data = e.target.value;
    dispatch({ type: key, data });
  };

  const onChangeTodayDate = (date: Date) => {
    dispatch({ type: "todayDate", data: date.toString() });
    onSaveData("todayDate", date);
  };

  return (
    <Box>
      <Text size="xl">Basic Info</Text>
      <FormInput
        label="Institution name"
        value={basicData.institutionName}
        name="institution-name"
        onChange={(e) => onChangeInput("institutionName", e)}
        onBlur={(e) => onSaveData("institutionName", e.target.value)}
        isRequired={true}
      />
      <FormInput
        label="Physician name"
        value={basicData.physicianName}
        name="physician-name"
        onChange={(e) => onChangeInput("physicianName", e)}
        onBlur={(e) => onSaveData("physicianName", e.target.value)}
        isRequired={true}
      />
      <FormInput
        label="Telephone"
        value={basicData.telephone}
        name="telephone"
        onChange={(e) => onChangeInput("telephone", e)}
        onBlur={(e) => onSaveData("telephone", e.target.value)}
        isRequired={true}
      />
      <FormInput
        label="Email"
        value={basicData.email}
        name="email"
        onChange={(e) => onChangeInput("email", e)}
        onBlur={(e) => onSaveData("email", e.target.value)}
        isRequired={true}
      />
      <DatePickerInput
        label="Today's Date"
        name="today-date"
        value={basicData.todayDate.toString()}
        onChange={onChangeTodayDate}
      />
    </Box>
  );
};
