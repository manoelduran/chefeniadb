import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import * as api from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import ApplicationState from '../../store/types/ApplicationState';
import { UserState } from '../../store/modules/user/types';
import { saveUserStart, saveUserSuccess } from '../../store/modules/user/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SignIn: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const data = useSelector<ApplicationState, UserState>(applicationState => applicationState.user);

  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(async (formData: FormUser) => {
    try {
      setLoading(true);
      dispatch(saveUserStart(formData, data))
      await AsyncStorage.setItem('CHEFENIADB@user', JSON.stringify(data))
 
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
              placeholder="Password"
              secureTextEntry
              style={{ marginBottom: 15 }}
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
              title='Login'
              onPress={() => formRef.current?.submitForm()}
            />

          </FormContainer>
        </ScrollContainer>
      </KeyBoardAvoidContainer>
    </Container>
  );
}

export default SignIn;