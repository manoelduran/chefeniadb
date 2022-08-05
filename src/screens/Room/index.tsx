import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, VStack, Text, Heading, HStack, IconButton, useTheme, ChevronLeftIcon, Box, View, Icon, ScrollView } from 'native-base';
import { CaretLeft, MagnifyingGlass, SignOut } from 'phosphor-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoomNavigationProps } from '../../@types/navigation';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import MvpCard from '../../components/MvpCard';

import { loadMvpsStart } from '../../store/modules/mvps/actions';
import { MvpsState } from '../../store/modules/mvps/types';
import { loadSpecificMvpsStart } from '../../store/modules/specificMvps/actions';
import { SpecificMvpsState } from '../../store/modules/specificMvps/types';
import ApplicationState from '../../store/types/ApplicationState';

const Room: React.FC = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const { room } = route.params as RoomNavigationProps;
    const navigation = useNavigation();
    const { colors } = useTheme();
    const goBack = () => {
        navigation.goBack();
    };

    const { mvps, isLoading, error } = useSelector<ApplicationState, MvpsState>(applicationState => applicationState.mvps);
    const { specificMvps } = useSelector<ApplicationState, SpecificMvpsState>(applicationState => applicationState.specificMvps);
    useEffect(() => {
        dispatch(loadMvpsStart(mvps))
    }, []);
    useEffect(() => {
        dispatch(loadSpecificMvpsStart(room, specificMvps))
    }, [room])
    const selectedMvp = useCallback((mvp: Mvp) => {
        navigation.navigate('mvp', {
            mvp
        })
    }, [])
    if (isLoading) {
        return (
            <Loading />
        );
    };
    return (
        <VStack flex={1} h="full" w="full" justifyContent="center" alignItems="center" bg="black">
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.700"
                h="100px"
                pt={3}
                px={4}
            >
                <IconButton onPress={goBack}
                    icon={<CaretLeft size={26} color={colors.gray[400]} />}
                />
                {room === 'room_1' && <Heading color="success.500" fontSize="2xl" >
                    Mvps da sala 1
                </Heading>}
                {room === 'room_2' && <Heading color="success.500" fontSize="2xl" >
                    Mvps da sala 2
                </Heading>}
                {room === 'room_3' && <Heading color="success.500" fontSize="2xl" >
                    Mvps da sala 3
                </Heading>}
                {room === 'room_4' && <Heading color="success.500" fontSize="2xl" >
                    Mvps da sala 4
                </Heading>}
            </HStack>
            <Box w="full" pt={4} pb={2} px={4}  >
                <Input
                    placeholder="Pesquise seu mvp"


                    _focus={{
                        borderWidth: 1,
                        borderColor: colors.success[500],
                        bg: colors.gray[600]
                    }}
                    onChangeText={() => { }}
                    InputLeftElement={<Icon as={<MagnifyingGlass color={colors.success[500]} />} ml={4} />}
                />
            </Box>

            {mvps &&
                <Box flex={1} pt={4} pb={4} px={4} >
                    <FlatList
                        style={{ flex: 1 }}
                        data={mvps}
                        keyExtractor={(item) => item.name}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        renderItem={({ item, index }) => (
                            <MvpCard key={index} mvp={item} onPress={() => selectedMvp(item)} />
                        )}
                    />
                </Box>
            }
            <Box justifyContent="center" alignItems="center" >
                <Heading
                    color="success.500"
                    fontSize="xl"
                >
                    Mvps específicos
                </Heading>
            </Box>
            {specificMvps &&
                <Box flex={1} pt={4} pb={4} px={4}>
                    <FlatList
                        style={{ flex: 1 }}
                        data={specificMvps}
                        keyExtractor={(item) => item.name}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <MvpCard key={index} mvp={item} onPress={() => selectedMvp(item)} />
                        )}
                    />
                </Box>
            }
        </VStack>
    );
};

export default Room;