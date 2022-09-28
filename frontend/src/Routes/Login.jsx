import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiMicrosoftoffice, SiLivejournal } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Flex,Button, Checkbox,Link, Input, Text, Divider, Stack, Box, Image, Spacer, Select } from '@chakra-ui/react'
import styles from "./Login.module.css"
const Login = () => {
  return <Flex gap="60px">
    <Stack  backgroundColor="#53dffa"  p={10}>
      <Flex align="center" mb="150px" color="white" >
        <Image src="https://www.bitrix24.net/bitrix/templates/new/images/bitrix24-logo-en.svg" />

        <Flex align="bottom">

          <IoIosArrowRoundBack />
          <a className={styles.a}>back to site</a>
        </Flex>
      </Flex>

      <Box m={10}>
        <Text className={styles.tx1}> Your company.</Text>
        <Text mb="25px" className={styles.tx1}> United.</Text>
        <Text mb="120px" className={styles.tx2}> Free. Unlimited. Online.</Text>
      </Box>

      <Flex>
        <Spacer />
        <Select placeholder='Select option'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Flex>
    </Stack>
    <Stack>
      <Text  className={styles.txhd}>Bitrix24 Registration</Text>
      <Divider />
      <Text mt="100px" className={styles.txl1}>Use your social account to register</Text>
      <Flex mb="100px" justify="space-around" gap={10}>
        <BsFacebook size="35px" color="#38659f" />
        <Flex align="center"><FcGoogle size="20px" />Google</Flex>
       <Box backgroundColor="black" size="35px" p={2}  borderRadius="50%" align="center">
       <BsApple size="30px"  color="white" />
       </Box>
        <SiMicrosoftoffice size="35px" color="#eb3c00 " />
        <SiLivejournal color="#1ea1f2" size="35px" />
        <AiFillTwitterCircle size="35px" color="#1ea1f2" />

      </Flex>
      <Flex gap={5} align="center">
        <Divider />
        <Text>or</Text>
        <Divider />
      </Flex>
      <Text mt="50px" className={styles.txlevel}>Enter Email</Text>
      <Input />
      <Text mt="50px" className={styles.txl2}>By registering you confirm that you accept the Terms of Service and the Privacy Policy.</Text>

      <Checkbox defaultChecked className={styles.txl2}>
        I want to receive product updates info and special offers
      </Checkbox>
      <Checkbox defaultChecked className={styles.txl2}>
        I want to receive training materials
      </Checkbox>
      <Divider/>
      <Flex>
        <Button>REGISTER FOR FREE</Button>
        <Button>I HAVE A COUPON</Button>
        </Flex> 
        <Text className={styles.txl2}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</Text>
        <Link>Need help?</Link>
    </Stack>
  </Flex>
};

export default Login;
