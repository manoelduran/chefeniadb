import { useNavigation, useRoute } from '@react-navigation/native';
import { VStack, Text, IconButton, HStack, useTheme, Heading, Image, Center, ScrollView } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';
import React from 'react';
import { MvpNavigationProps } from '../../@types/navigation';
import FallbackImage from '../../assets/logo.png';
const Mvp = () => {
    const route = useRoute();
    const { mvp } = route.params as MvpNavigationProps;
    const navigation = useNavigation();
    const { colors } = useTheme();
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <VStack flex={1} h="full" w="full" bg="black" >
            <ScrollView>
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
                <Center mt={8} mb={8}>
                    <Image width="130px" height="200px" alt={mvp.name} source={{
                        uri: mvp.image
                    }} fallbackSource={{
                        uri: FallbackImage
                    }} />
                </Center>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Quantidade
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.quantity}
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Level
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.level}
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Raça
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.breed}
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Propriedade
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.property}
                    </Heading>
                </HStack>
                    <Center mt={4} mb={4}>
                        <Heading color="success.500" fontSize="2xl">Fraquezas</Heading>
                    </Center>
                    <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Neutro
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.weakness[0].neutral}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Água
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.weakness[1].water}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Terra
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.weakness[2].earth}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Fogo
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.weakness[3].fire}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Vento
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.weakness[4].wind}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Veneno
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.weakness[5].poison}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Sagrado
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.weakness[6].holy}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Sombrio
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.weakness[7].dark}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Fantasma
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.weakness[8].ghost}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="success.500" fontSize="2xl" >
                        Morto-Vivo
                    </Heading>
                    <Heading color="success.500" fontSize="2xl" >
                        {mvp.weakness[9].undead}%
                    </Heading>
                </HStack>
            </ScrollView>
        </VStack>
    );
}

export default Mvp;