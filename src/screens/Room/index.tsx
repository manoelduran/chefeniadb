import { useNavigation, useRoute } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';
import { RoomNavigationProps } from '../../@types/navigation';
import IconButton from '../../components/IconButton';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import MvpCard from '../../components/MvpCard';
import { loadFilterMvpStart } from '../../store/modules/filterMvp/actions';
import { FilterMvpState } from '../../store/modules/filterMvp/types';
import { loadMvpsStart } from '../../store/modules/mvps/actions';
import { MvpsState } from '../../store/modules/mvps/types';
import { loadSpecificMvpsStart } from '../../store/modules/specificMvps/actions';
import { SpecificMvpsState } from '../../store/modules/specificMvps/types';
import ApplicationState from '../../store/types/ApplicationState';

import {
    Container,
    FormContainer,
    LogoutContainer,
    RoomsContainer,
    MvpsData,
    Title
} from './styles';

const Room: React.FC = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const formRef = useRef<FormHandles>(null);
    const { room } = route.params as RoomNavigationProps;
    console.log('room', room)
    const [selectedMvpData, setSelectedMvpData] = useState<Mvp | undefined>(undefined);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Comuns' },
        { key: 'second', title: 'Específicos' },
    ]);

    const navigation = useNavigation();
    const theme = useTheme();
    const goBack = () => {
        navigation.goBack();
    };
    const { mvps, isLoading, error } = useSelector<ApplicationState, MvpsState>(applicationState => applicationState.mvps);
   //const { mvp } = useSelector<ApplicationState, FilterMvpState>(applicationState => applicationState.filterMvp);
    console.log('mvps', mvps)

    const onFilterChange = (name: string) => {
        /* 
       if (room === "room_1") {
           const selected = mvps.find(mvp => mvp.name === name)
           const selectedspecificMvps = specificMvps.find(mvp => mvp.name === name)
           setSelectedMvpData(selected || selectedspecificMvps);
           dispatch(loadFilterMvpStart(name, mvp));
           return
       }
       if (room === "room_2") {
           const selected = mvps.find(mvp => mvp.name === name)
           const selectedspecificMvps = specificMvps.find(mvp => mvp.name === name)
           setSelectedMvpData(selected || selectedspecificMvps);
           dispatch(loadFilterMvpStart(name, mvp));
           return
       }
       if (room === "room_3") {
           const selected = mvps.find(mvp => mvp.name === name)
           const selectedspecificMvps = specificMvps.find(mvp => mvp.name === name)
           setSelectedMvpData(selected || selectedspecificMvps);
           dispatch(loadFilterMvpStart(name, mvp));
           return
       }
       if (room === "room_4") {
           const selected = mvps.find(mvp => mvp.name === name)
           const selectedspecificMvps = specificMvps.find(mvp => mvp.name === name)
           setSelectedMvpData(selected || selectedspecificMvps);
           dispatch(loadFilterMvpStart(name, mvp));
           return
       }
        */
    };

    useEffect(() => {
        dispatch(loadMvpsStart(String(room?.id), mvps))
    }, []);
    /* 
    useEffect(() => {
        dispatch(loadSpecificMvpsStart(room, specificMvps))
    }, [room])
    */ 

    /* const selectedMvp = useCallback((mvp: Mvp) => {
         navigation.navigate('mvp', {
             mvp
         })
     }, [])
     if (isLoading) {
         return (
             <Loading />
         );
     };
     */
    return (
        <Container >
            <LogoutContainer>
                <Title>Mvps from {room.name}</Title>
                <IconButton onPress={goBack} color={theme.colors.gray[400]} icon='logout' />
            </LogoutContainer>
            <FormContainer ref={formRef} onSubmit={() => { }}>
                <Input
                    name="search"
                    placeholder="Search a Mvp"

                />
            </FormContainer>
            {/* 
            {selectedMvpData ? (
                <RoomsContainer  >
                    <MvpCard key={selectedMvpData.name} mvp={selectedMvpData} onPress={() => { }} />
                </RoomsContainer>
            ) : (
            */}
                <MvpsData
                    style={{ flex: 1 }}
                    data={mvps}
                    keyExtractor={(item: Mvp) => item.name}
                    initialNumToRender={3}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    renderItem={({ item, index }) => (
                        <MvpCard key={index} mvp={item} onPress={() => { }} />
                    )}
                />
           {/*
         )
            }   
        */}


        </Container >
    );
};

export default Room;