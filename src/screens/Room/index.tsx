import { useNavigation } from '@react-navigation/native';
import { FlatList, VStack, Text, Heading, HStack, IconButton, useTheme } from 'native-base';
import { SignOut } from 'phosphor-react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import MvpCard from '../../components/MvpCard';

import { loadMvpsStart } from '../../store/modules/mvps/actions';
import { MvpsState } from '../../store/modules/mvps/types';
import ApplicationState from '../../store/types/ApplicationState';

const Room: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    const { colors } = useTheme();
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
        <VStack flex={1} justifyContent="center" alignItems="center" pb={6} bg="black">
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
                    Mvps da sala 1
                </Heading>
                <IconButton onPress={goBack}
                    icon={<SignOut size={26} color={colors.gray[400]} />}
                />
            </HStack>

            {mvps ?
                <FlatList
                    style={{ flex: 1 }}
                    data={mvps}
                    keyExtractor={(item) => item.name}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <MvpCard key={index} mvp={item} onPress={() => { }} />
                    )}
                />
                :
                <Text color="danger.500">Erro ao carregar a lista de Mvps, dê um reload em sua aplicação</Text>
            }
        </VStack>
    );
};

export default Room;