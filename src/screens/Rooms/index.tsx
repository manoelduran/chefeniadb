import React from 'react';
import { HStack, useTheme, VStack, IconButton, Heading, ScrollView } from 'native-base';
import { SignOut } from 'phosphor-react-native';
import RoomCard from '../../components/RoomCard';
import { useNavigation } from '@react-navigation/native';


const Rooms = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  } ;
  return (
    <VStack flex={1} pb={6} bg="black">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.700"
        pt={12}
        pb={5}
        px={6}
      >
        <Heading color="success.500" fontSize="2xl" >
          Escolha sua sala
        </Heading>
        <IconButton onPress={goBack}
          icon={<SignOut size={26} color={colors.gray[400]} />}
        />
      </HStack>
      <ScrollView >
        <RoomCard title='Sala 1' onPress={() => console.log("ALOHA 1")} />
        <RoomCard title='Sala 2' onPress={() => console.log("ALOHA 2")} />
        <RoomCard title='Sala 3' onPress={() => console.log("ALOHA 3")} />
        <RoomCard title='Sala 4' onPress={() => console.log("ALOHA 4")} />
      </ScrollView>
    </VStack>
  );
};

export default Rooms;