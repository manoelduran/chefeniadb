import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, VStack, Text, Heading, HStack, IconButton, useTheme, ChevronLeftIcon, Box, View, Icon } from 'native-base';
import { CaretLeft, MagnifyingGlass, SignOut } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoomNavigationProps } from '../../@types/navigation';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import MvpCard from '../../components/MvpCard';

import { loadMvpsStart } from '../../store/modules/mvps/actions';
import { MvpsState } from '../../store/modules/mvps/types';
import ApplicationState from '../../store/types/ApplicationState';

const Room: React.FC = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const { room } = route.params as RoomNavigationProps;
    console.log('room', room);
    const navigation = useNavigation();
    const { colors } = useTheme();
    const [search, setSearch] = useState('');
    const goBack = () => {
        navigation.goBack();
    };

    const { mvps, isLoading, error } = useSelector<ApplicationState, MvpsState>(applicationState => applicationState.mvps);
    useEffect(() => {
        dispatch(loadMvpsStart(mvps))
    }, []);
    if (isLoading) {
        return (
            <Loading />
        );
    };
    return (
        <VStack flex={1} justifyContent="center" alignItems="center" bg="black">
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.700"
                pt={12}
                pb={5}
                px={6}
            >
                <IconButton onPress={goBack}
                    icon={<CaretLeft size={26} color={colors.gray[400]} />}
                />
                <Heading color="success.500" fontSize="2xl" >
                    Mvps da sala 1
                </Heading>
            </HStack>
            <VStack h="310px" mb={6} px={4}  >
                <Input
                    placeholder="Pesquise seu mvp"
                    mt={4}
                    mb={4}
                    _focus={{
                        borderWidth: 1,
                        borderColor: colors.success[500],
                        bg: colors.gray[600]
                    }}
                    onChangeText={setSearch}
                    InputLeftElement={<Icon as={<MagnifyingGlass color={colors.success[500]} />} ml={4} />}
                />
                {mvps ?
                    <FlatList
                        style={{ flex: 1 }}
                        data={mvps}
                        keyExtractor={(item) => item.name}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        renderItem={({ item, index }) => (
                            <MvpCard key={index} mvp={item} onPress={() => { }} />
                        )}
                    />
                    :
                    <Text color="danger.500">Erro ao carregar a lista de Mvps, dê um reload em sua aplicação</Text>
                }
            </VStack>
            <VStack w="full" mt="10px" px={4} justifyContent="center" alignItems="center" bg="transparent">
                <Heading
                    color="success.500"
                    fontSize="xl"
                >
                    Mvps específicos
                </Heading>
            </VStack>
            <VStack flex={1} mt="15px" px={4}>

                <Input
                    placeholder="Pesquise seu mvp"
                    mt={4}
                    mb={4}
                    _focus={{
                        borderWidth: 1,
                        borderColor: colors.success[500],
                        bg: colors.gray[600]
                    }}
                    onChangeText={setSearch}
                    InputLeftElement={<Icon as={<MagnifyingGlass color={colors.success[500]} />} ml={4} />}
                />

                {mvps ?
                    <FlatList
                        style={{ flex: 1 }}
                        data={mvps}
                        keyExtractor={(item) => item.name}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <MvpCard key={index} mvp={item} onPress={() => { }} />
                        )}
                    />
                    :
                    <Text color="danger.500">Erro ao carregar a lista de Mvps, dê um reload em sua aplicação</Text>
                }
            </VStack>
        </VStack>
    );
};

export default Room;