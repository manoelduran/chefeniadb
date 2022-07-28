import React, { useCallback, useState } from 'react';
import { Heading, Icon, VStack, useTheme, Image } from 'native-base';
import { AppWindow, Envelope, Key } from 'phosphor-react-native';
import Input from '../../components/Input';
import chefeniaPng from '../../assets/chefenia.png';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import * as api from '../../services/api';



const SignIn: React.FC = () => {
  const { colors } = useTheme();
  const navigate = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = useCallback(async (data: FormUser) => {
    try {
      // await api.createUser(data);
    } catch (error: any) {
      return error.message;
    }
  }, [])
  return (
    <VStack flex={1} alignItems="center" bg="black" px={8} pt={24}>
      <Image source={chefeniaPng} width={300} height={180} alt="Chefenia Banner" />
      <Heading color="success.500" fontSize="2xl" mt={20} mb={6}>
        Chefenia DB
      </Heading>
      <Input
        placeholder="E-mail"
        mb={4}
        _focus={{
          borderWidth: 1,
          borderColor: "success.500",
          bg: "gray.600"
        }}
        onChangeText={setEmail}
        InputLeftElement={<Icon as={<Envelope color={colors.success[500]} />} ml={4} />}
      />
      <Input
        placeholder="Senha"
        mb={8}
        onChangeText={setPassword}
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
        onPress={() => handleSignIn({ email, password })}
      />
    </VStack>
  );
}

export default SignIn;