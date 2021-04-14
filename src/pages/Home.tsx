import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IFormType } from "../@types/IForm";
import { IUserInfo, IUserStatus } from "../@types/IUser";
import { Login } from "../components/Form/Login";
import { Register } from "../components/Form/Register";
import { TransitionLoading } from "../components/TransitionLoading";
import { auth, firestore } from "../firebase";
import { useStore } from "../store";

export const Home = () => {
  const router = useHistory();
  const { dispatch, userInfo } = useStore("userInfo");
  console.log("userInfo", userInfo);
  const [type, setType] = useState<IFormType>("login");
  const [authLoading, setAuthLoading] = useState(false);
  const onChangeType = (type: IFormType) => {
    setType(type);
  };

  const onLoginComplete = ({ userStatus }: IUserInfo) => {
    if (userStatus === IUserStatus.PENDING) {
      router.push("/pending");
      return;
    }
    if (userStatus === IUserStatus.ACCEPT) {
      router.push("/user/dashboard");
    }
  };

  const onCompleteRegister = (type: string) => {
    onChangeType(type as IFormType);
  };
  useEffect(() => {
    setAuthLoading(true);
    auth.onAuthStateChanged(async (credential) => {
      if (!credential) {
        setAuthLoading(false);
        return;
      }

      const userResult = await firestore
        .collection("users")
        .doc(credential?.uid)
        .get();

      if (!userResult.exists) {
        setAuthLoading(false);
        return;
      }

      const userInfo = userResult.data() as Omit<IUserInfo, "email">;
      const userEmail = credential.email as string;
      dispatch("setUserInfo", { email: userEmail, ...userInfo });
      setAuthLoading(false);
      router.push("/user/dashboard");
      return;
    });
  }, []);

  return (
    <>
      {authLoading && <TransitionLoading />}
      {!authLoading && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }}>
          <Box>
            <Image src="/images/cover.jpg" />
          </Box>
          <Box my={16}>
            <SimpleGrid columns={2} mx={4}>
              <Box
                onClick={() => onChangeType("login")}
                cursor="pointer"
                borderBottom={"2px"}
                p={4}
                borderColor={type === "login" ? "brand.400" : "inherit"}
                textAlign="center"
              >
                Login
              </Box>

              <Box
                onClick={() => onChangeType("register")}
                cursor="pointer"
                borderBottom={"2px"}
                p={4}
                borderColor={type === "register" ? "brand.400" : "inherit"}
                textAlign="center"
              >
                Register
              </Box>
            </SimpleGrid>
            <Box>
              {type === "login" && <Login onLoginComplete={onLoginComplete} />}
              {type === "register" && (
                <Register onCompleteRegister={onCompleteRegister} />
              )}
            </Box>
          </Box>
        </SimpleGrid>
      )}
    </>
  );
};
