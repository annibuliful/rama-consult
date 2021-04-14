import { Button } from '@chakra-ui/react';
import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IUser, IUserRole, IUserStatus } from '../../@types/IUser';
import { FormInput } from '../Input/FormInput';
import { auth, firestore } from '../../firebase';

interface IRegisterProps {
  onCompleteRegister: (type: string) => void;
}
export const Register: FunctionComponent<IRegisterProps> = ({
  onCompleteRegister,
}) => {
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [fullname, setFullname] = useState('');
  const { register, handleSubmit, errors } = useForm();

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
      data.password,
    );

    await firestore
      .collection('users')
      .doc(credential.user?.uid)
      .set({
        hospitalName: data.hospitalName,
        doctorIdNumber: data.doctorIdNumber ?? '',
        fullName: data.fullname,
        role: IUserRole.DOCTOR,
        userStatus: IUserStatus.PENDING,
      });
    onCompleteRegister('login');
  };

  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <FormInput
        value={email}
        label="Email"
        onChange={onChangeEmail}
        formRef={register({ required: true })}
        name="email"
        isRequired
        isInvalid={errors.email}
      />
      <FormInput
        value={password}
        label="Password"
        onChange={onChangePassword}
        name="password"
        formRef={register({ required: true, minLength: 8 })}
        isPassword
        isRequired
        isInvalid={errors.password}
      />
      <FormInput
        value={fullname}
        label="Fullname"
        onChange={onChangeFullname}
        formRef={register({ required: true })}
        name="fullname"
        isRequired
        isInvalid={errors.fullname}
      />
      <FormInput
        value={hospitalName}
        label="Hosipital Name"
        onChange={onChangeHospitalName}
        formRef={register}
        name="hospitalName"
      />
      <Button type="submit" variant="primary" my={8} display="block" mx="auto">
        Register
      </Button>
    </form>
  );
};
