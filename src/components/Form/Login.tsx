import { Button } from "@chakra-ui/react";
import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { IUser, IUserInfo } from "../../@types/IUser";
import { auth, firestore } from "../../firebase";
import { FormInput } from "../Input/FormInput";

type ILogin = Pick<IUser, "email" | "password">;
interface ILoginProps {
  onCompleteLogin: (data: IUserInfo) => void;
}
export const Login: FunctionComponent<ILoginProps> = ({ onCompleteLogin }) => {
  const { register, errors, handleSubmit } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLogin = async (data: ILogin) => {
    const credential = await auth.signInWithEmailAndPassword(
      data.email,
      data.password
    );

    const info = (
      await firestore.collection("users").doc(credential.user?.uid).get()
    ).data() as IUser;

    onCompleteLogin(info);
  };

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <FormInput
        value={email}
        label="Email"
        onChange={onChangeEmail}
        formRef={register({ required: true })}
        name="email"
        isRequired={true}
        isInvalid={errors["email"]}
      />
      <FormInput
        value={password}
        label="Password"
        onChange={onChangePassword}
        name="password"
        formRef={register({ required: true, minLength: 8 })}
        isPassword={true}
        isRequired={true}
        isInvalid={errors["password"]}
      />
      <Button type="submit" variant="primary" my={8} display="block" mx="auto">
        Login
      </Button>
    </form>
  );
};
