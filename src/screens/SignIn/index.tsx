import React, { useCallback, useRef, useState } from 'react';
import { Heading, Icon, VStack, useTheme, Image, KeyboardAvoidingView, ScrollView } from 'native-base';
import { AppWindow, Envelope, Key } from 'phosphor-react-native';
import chefeniaPng from '../../assets/chefenia.png';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import * as api from '../../services/api';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import { FormContainer } from './styles';
import { Platform } from 'react-native';



const SignIn: React.FC = () => {
  const { colors } = useTheme();
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigation();
  const [loading, setLoading] = useState(false);
  const handleSignIn = useCallback(async (data: FormUser) => {
    try {
      setLoading(true);
      console.log('data', data)
      // await api.createUser(data);
    } catch (error: any) {
      return error.message;
    } finally {
      setLoading(false);
    }
  }, [])
  return (

    <VStack flex={1} w="full" alignItems="center" bg="black" px={8} pt={24}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView  >
          <Image source={chefeniaPng} width={300} height={180} alt="Chefenia Banner" />
          <Heading color="success.500" fontSize="2xl" mt={20} mb={6} textAlign="center">
            Chefenia DB
          </Heading>
          <FormContainer ref={formRef} onSubmit={handleSignIn}>
            <Input
              name="email"
              placeholder="E-mail"
              mb={4}
              _focus={{
                borderWidth: 1,
                borderColor: "success.500",
                bg: "gray.600"
              }}
              InputLeftElement={<Icon as={<Envelope color={colors.success[500]} />} ml={4} />}
            />
            <Input
              name="password"
              placeholder="Senha"
              mb={8}
              _focus={{
                borderWidth: 1,
                borderColor: "success.500",
                bg: "gray.600"
              }}
              InputLeftElement={<Icon as={<Key color={colors.success[500]} />} ml={4} />}
              secureTextEntry
            />
            <Button
              title='Entrar'
              w="full"
              onPress={() => formRef.current?.submitForm()}
            />

          </FormContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>

  );
}

export default SignIn;