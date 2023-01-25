import React, { useCallback, useRef, useState } from 'react';
import { AppWindow, Envelope, Key } from 'phosphor-react-native';
import chefeniaSvg from '../../assets/chefenia.png';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import {
  FormContainer,
  Container,
  KeyBoardAvoidContainer,
  ScrollContainer,
  Banner
} from './styles';
import {  Platform  } from 'react-native';
import { useTheme } from 'styled-components/native';



const SignIn: React.FC = () => {
  const theme = useTheme();
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
    <Container  >
      <KeyBoardAvoidContainer behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollContainer>
        <Banner source={chefeniaSvg} resizeMode="cover"  />
        </ScrollContainer>
 
      </KeyBoardAvoidContainer>
    </Container>
  );
}

export default SignIn;




/*

        <  >
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
      */