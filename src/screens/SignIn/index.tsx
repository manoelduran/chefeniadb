import React, { useCallback, useRef, useState } from 'react';
import { Envelope, Icon, Key } from 'phosphor-react-native';
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
  Banner,
  Title,
  ForgotPasswordButton,
  ForgotPasswordLabel,
  FooterContainer,
  CreateAccount,
  CreateAccountLabel,
} from './styles';
import { Alert, Platform } from 'react-native';
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
          <Title>Chefenia DB</Title>
          <Banner source={chefeniaSvg} resizeMode="cover" />
          <FormContainer ref={formRef} onSubmit={handleSignIn}>
            <Input
              name="email"
              placeholder="E-mail"
              keyboardType='email-address'
            />
            <Input
              name="password"
              placeholder="Senha"
              secureTextEntry
              style={{ marginBottom: 15 }}
              icon='key'

            />
            <FooterContainer>
              <CreateAccount onPress={() => { }} >
                <CreateAccountLabel>Create account</CreateAccountLabel>
              </CreateAccount>
              <ForgotPasswordButton onPress={() => { }}>
                <ForgotPasswordLabel>Forgot password</ForgotPasswordLabel>
              </ForgotPasswordButton>
            </FooterContainer>
            <Button
              title='Entrar'
              onPress={() => formRef.current?.submitForm()}
            />

          </FormContainer>
        </ScrollContainer>
      </KeyBoardAvoidContainer>
    </Container>
  );
}

export default SignIn;