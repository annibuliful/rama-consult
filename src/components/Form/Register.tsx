import { Box, Button } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { IUser } from "../../@types/IUser";
import { FormInput } from "../Input/FormInput";
import { auth, firestore } from "../../firebase";

export const Register = () => {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [fullname, setFullname] = useState("");
  const router = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();

  // event
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangeFullname = (e: ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeHospitalName = (e: ChangeEvent<HTMLInputElement>) => {
    setHospitalName(e.target.value);
  };

  const onRegister = async (data: IUser) => {
    const credential = await auth.createUserWithEmailAndPassword(
      data.email,
      data.password
    );

    await firestore
      .collection("users")
      .doc(credential.user?.uid)
      .set({
        hospitalName: data.hospitalName,
        doctorIdNumber: data.doctorIdNumber ?? "",
        fullName: data.fullname,
      });
    router.push("/login");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onRegister)}>
        <FormInput
          value={email}
          label="Email"
          onChange={onChangeEmail}
          formRef={register({ required: true })}
          name="email"
          isRequired={true}
        />
        <FormInput
          value={password}
          label="Password"
          onChange={onChangePassword}
          name="password"
          formRef={register({ required: true, minLength: 8 })}
          isPassword={true}
          isRequired={true}
        />
        <FormInput
          value={fullname}
          label="Fullname"
          onChange={onChangeFullname}
          formRef={register({ required: true })}
          name="fullname"
          isRequired={true}
        />
        <FormInput
          value={hospitalName}
          label="Hosipital Name"
          onChange={onChangeHospitalName}
          formRef={register}
          name="hospitalName"
        />
        <Button
          type="submit"
          variant="primary"
          my={8}
          display="block"
          mx="auto"
        >
          Register
        </Button>
      </form>
    </Box>
  );
};
