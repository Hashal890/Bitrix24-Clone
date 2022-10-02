import React, { useEffect } from "react";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiMicrosoftoffice, SiLivejournal } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { Flex, Button, Link, Input, Text, Divider, Stack, Box } from '@chakra-ui/react'
import styles from "./Login.module.css"
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../store/auth/auth.actions";
import LeftBox from "./LeftBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const { loading, error, isAuthanticated, token } = useSelector((store) => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(loading, error, token);

  const handleLogIn = () => {
    dispatch(loginAPI({ email: email }))
   
    navigate("/dashboard")
  }

  useEffect(() => {
   if(isAuthanticated){
    navigate("/dashboard")
   }
  },[])

  return <Flex gap="60px">
    <LeftBox />
    <Stack>
      <Text className={styles.txhd}>Bitrix24 Login</Text>
      <Divider />
      <Text mt="50px" className={styles.txlevel}>Enter phone number or email</Text>
      <Input onChange={(e) => setEmail(e.target.value)} />
      <Flex gap={5} align="center">
        <Divider />
        <Text>or</Text>
        <Divider />
      </Flex>
      <Text mt="100px" className={styles.txl1}>Login with</Text>
      <Flex borderRadius="20px" py="10px" px="40px" bg="#f4f7f8" mb="100px" justify="space-around" gap={120}>
        <Flex wrap="wrap" align="center" gap={10}>
          <BsFacebook size="35px" color="#38659f" />
          <Flex align="center"><FcGoogle size="20px" />Google</Flex>
          <Box backgroundColor="black" size="35px" p={2} borderRadius="50%" align="center">
            <BsApple size="30px" color="white" />
          </Box>
          <SiMicrosoftoffice size="35px" color="#eb3c00 " />
          <SiLivejournal color="#1ea1f2" size="35px" />
          <AiFillTwitterCircle size="35px" color="#1ea1f2" />
        </Flex>
        <Divider orientation='vertical' />

        <Box>
          <MdOutlineQrCodeScanner size="70px" />
          <Text>Log in with QR code</Text>
        </Box>

      </Flex>
      <Divider />
      <Flex gap={5}>
        <Button onClick={handleLogIn} borderRadius="20px" px="50px" bg="#9dcf00" color="white">LOG IN</Button>
        <Button variant="unstyled">FORGOT PASSWORD?</Button>
      </Flex>
      <Link>Need help?</Link>
    </Stack>
  </Flex>
};

export default Login;
