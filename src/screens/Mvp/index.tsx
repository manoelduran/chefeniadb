import { useNavigation, useRoute } from '@react-navigation/native';
import { VStack, Text, IconButton, HStack, useTheme, Heading } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';
import React from 'react';
import { MvpNavigationProps } from '../../@types/navigation';

const Mvp = () => {
    const route = useRoute();
    const { mvp } = route.params as MvpNavigationProps;
    const navigation = useNavigation();
    const { colors } = useTheme();
    const goBack = () => {
        navigation.goBack();
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
                <Heading color="success.500" fontSize="2xl" >
                    {mvp.name}
                </Heading>

            </HStack>

        </VStack>
    );
}

export default Mvp;