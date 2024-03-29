import { useNavigation, useRoute } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MvpsInJson from '../../assets/json/mvps.json';
import { useTheme } from 'styled-components/native';
import { RoomNavigationProps } from '../../@types/navigation';
import IconButton from '../../components/IconButton';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import MvpCard from '../../components/MvpCard';
import { loadMvpsStart } from '../../store/modules/mvps/actions';
import { MvpsState } from '../../store/modules/mvps/types';
import ApplicationState from '../../store/types/ApplicationState';
import {
    Container,
    FormContainer,
    LogoutContainer,
    RoomsContainer,
    MvpsData,
    Title,
    IconContainer
} from './styles';

const Room: React.FC = () => {
    const parsedMvps = MvpsInJson as Mvp[]
    const dispatch = useDispatch();
    const route = useRoute();
    const formRef = useRef<FormHandles>(null);
    const { room } = route.params as RoomNavigationProps;
    const [selectedMvpData, setSelectedMvpData] = useState<Mvp[] | undefined>(undefined);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation();
    const theme = useTheme();
    const goBack = () => {
        navigation.goBack();
    };
    /*    const { mvps, isLoading, error } = useSelector<ApplicationState, MvpsState>(applicationState => applicationState.mvps);
        useEffect(() => {
            dispatch(loadMvpsStart(String(room?.id), mvps))
        }, []);*/

    const filteredMvp = useCallback((search: string) => {
        try {
            const mvp = parsedMvps.filter(mvp => mvp.name.includes(search)) as Mvp[]
            setSelectedMvpData(mvp)
            setSearch(search)
        } catch (error) {
            console.log('error', error)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, [])

    const selectedMvp = useCallback((mvp: Mvp) => {
        navigation.navigate('mvp', {
            mvp
        })
    }, [])
/*
     if (loading) {
         return (
             <Loading />
         );
     };*/

    return (
        <Container >
            <LogoutContainer>
                <IconContainer>
                    <IconButton onPress={goBack} color={theme.colors.gray[400]} icon='arrow-back' />
                </IconContainer>
                <Title>{room.name}</Title>
            </LogoutContainer>
            <FormContainer ref={formRef} onSubmit={() => { }}>
                <Input
                    name="search"
                    onChangeText={(search) => filteredMvp(search)}
                    placeholder="digite um mvp"
                />
            </FormContainer>

            {selectedMvpData && search !== '' ? (
                <RoomsContainer  >
                    <MvpsData
                        style={{ flex: 1 }}
                        data={selectedMvpData}
                        keyExtractor={(item: Mvp) => item.name}
                        initialNumToRender={3}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        renderItem={({ item, index }) => (
                            <MvpCard key={index} mvp={item} onPress={() => selectedMvp(item)} />
                        )}
                    />
                </RoomsContainer>
            ) : (

                <MvpsData
                    style={{ flex: 1 }}
                    data={parsedMvps}
                    keyExtractor={(item: Mvp) => item.name}
                    initialNumToRender={3}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    renderItem={({ item, index }) => (
                        <MvpCard key={index} mvp={item} onPress={() => selectedMvp(item)} />
                    )}
                />
            )}

        </Container >
    );
};

export default Room;