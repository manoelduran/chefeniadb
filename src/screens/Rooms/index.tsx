import React, { useCallback, useState } from 'react';
import { HStack, useTheme, VStack, IconButton, Heading, ScrollView } from 'native-base';
import { SignOut } from 'phosphor-react-native';
import RoomCard from '../../components/RoomCard';
import { useNavigation } from '@react-navigation/native';


const Rooms = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [room, setRoom] = useState<'room_1' | 'room_2' | 'room_3' | 'room_4' | ''>('');
  const selectedRoom = useCallback((room: 'room_1' | 'room_2' | 'room_3' | 'room_4' | '') => {
    if (room !== '') {
      setRoom(room);
      navigation.navigate('room', {
        room
      })
    }
  }, [room])
  const goBack = () => {
    navigation.goBack();
  };
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
        <RoomCard title='Sala 1' onPress={() => selectedRoom('room_1')} />
        <RoomCard title='Sala 2' onPress={() => selectedRoom('room_2')} />
        <RoomCard title='Sala 3' onPress={() => selectedRoom('room_3')} />
        <RoomCard title='Sala 4' onPress={() => selectedRoom('room_4')} />
      </ScrollView>
    </VStack>
  );
};

export default Rooms;