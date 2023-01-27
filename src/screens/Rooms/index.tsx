import React, { useCallback, useEffect, useMemo, useState } from 'react';
import RoomCard from '../../components/RoomCard';
import {
  Container,
  KeyBoardAvoidContainer,
  LogoutContainer,
  Title,
  RoomsData
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { Platform } from 'react-native';
import IconButton from '../../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import ApplicationState from '../../store/types/ApplicationState';
import { RoomsState } from '../../store/modules/rooms/types';
import { loadRoomsStart } from '../../store/modules/rooms/actions';
import Loading from '../../components/Loading';

const Rooms = () => {
  const theme = useTheme()
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const { rooms, isLoading } = useSelector<ApplicationState, RoomsState>(applicationState => applicationState.rooms);

  useEffect(() => {
    dispatch(loadRoomsStart(rooms))
  }, []);
  const selectedRoom = useCallback((room_id: string) => {
    console.log('room_id', room_id)
    if (room_id) {
      navigation.navigate('room', {
        room_id
      })
    }
  }, [])
  const goBack = () => {
    navigation.goBack();
  };
  console.log('rooms', rooms)
  return (
    <Container>
      <KeyBoardAvoidContainer behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <LogoutContainer>
          <Title>Choose your Room</Title>
          <IconButton onPress={goBack} icon='logout' color={theme.colors.success[600]} />
        </LogoutContainer>
        {isLoading ? (
          <Loading />
        ) : (
          <RoomsData
            style={{ flex: 1 }}
            data={rooms}
            keyExtractor={(item: Room) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <RoomCard key={index} title={item.name} onPress={() => selectedRoom(item.id)} />
            )}

          />
        )}
      </KeyBoardAvoidContainer>
    </Container>
  );
};

export default Rooms;