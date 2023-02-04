import React, { useCallback, useEffect } from 'react';
import RoomCard from '../../components/RoomCard';
import ChefeniaMapPng from '../../assets/chefeniamap.png';
import {
  Container,
  KeyBoardAvoidContainer,
  LogoutContainer,
  Title,
  RoomsContainer,
  BackgroundImage,
  IconContainer
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
import { FlatGrid } from 'react-native-super-grid';

const Rooms = () => {
  const theme = useTheme()
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { rooms, isLoading } = useSelector<ApplicationState, RoomsState>(applicationState => applicationState.rooms);

  useEffect(() => {
    dispatch(loadRoomsStart(rooms))
  }, []);
  const selectedRoom = useCallback((room: Room) => {
    console.log('item', room)
    if (room) {
      navigation.navigate('room', {
        room
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
          <IconContainer>
        <IconButton onPress={goBack} icon='logout' color={theme.colors.gray[400]} />
        </IconContainer>
          <Title>Choose your Room</Title>
        </LogoutContainer>
        <BackgroundImage source={ChefeniaMapPng} resizeMode="cover" alt="Room Map" />
        <RoomsContainer>
          {isLoading ? (
            <Loading />
          ) : (
            <FlatGrid
              style={{ flex: 1 }}
              data={rooms}
              itemDimension={130}
              renderItem={({ item, index }) => (
                <RoomCard key={index} title={item.name} onPress={() => selectedRoom(item)} />
              )}
            />
          )
          }
        </RoomsContainer>
      </KeyBoardAvoidContainer>
    </Container>
  );
};

export default Rooms;