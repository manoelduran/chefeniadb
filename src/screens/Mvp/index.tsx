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
                    <Heading color="white" fontSize="2xl" >
                        Quantidade
                    </Heading>
                    <Heading color="white" fontSize="2xl" >
                        {mvp.quantity}
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="white" fontSize="2xl" >
                        Level
                    </Heading>
                    <Heading color="white" fontSize="2xl" >
                        {mvp.level}
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="white" fontSize="2xl" >
                        Raça
                    </Heading>
                    <Heading color="white" fontSize="2xl" >
                        {mvp.breed}
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="white" fontSize="2xl" >
                        Propriedade
                    </Heading>
                    <Heading color="white" fontSize="2xl" >
                        {mvp.property}
                    </Heading>
                </HStack>
                <Center mt={4} mb={4}>
                    <Heading color="success.500" fontSize="2xl">Fraquezas</Heading>
                </Center>
                <HStack w="full"
                    px={4}
                    py={4}
                    bg="#e9ecef"
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="black" fontSize="2xl" >
                        Neutro
                    </Heading>
                    <Heading color="black" fontSize="2xl" >
                        {mvp.neutral}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    py={4}
                    bg='#7ba7e1'
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="white" fontSize="2xl" >
                        Água
                    </Heading>
                    <Heading color="white" fontSize="2xl" >
                        {mvp.water}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    py={4}
                    bg="#daaf85"
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="black" fontSize="2xl" >
                        Terra
                    </Heading>
                    <Heading color="black" fontSize="2xl" >
                        {mvp.earth}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    py={4}
                    bg="#ff7575"
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="white" fontSize="2xl" >
                        Fogo
                    </Heading>
                    <Heading color="white" fontSize="2xl" >
                        {mvp.fire}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    py={4}
                    bg="#cafeb8"
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="black" fontSize="2xl" >
                        Vento
                    </Heading>
                    <Heading color="black" fontSize="2xl" >
                        {mvp.wind}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    py={4}
                    bg="#4bfe78"
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="black" fontSize="2xl" >
                        Veneno
                    </Heading>
                    <Heading color="black" fontSize="2xl" >
                        {mvp.poison}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    py={4}
                    bg="#ffffaa"
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="black" fontSize="2xl" >
                        Sagrado
                    </Heading>
                    <Heading color="black" fontSize="2xl" >
                        {mvp.holy}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    py={4}
                    bg="#a55feb"
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="white" fontSize="2xl" >
                        Sombrio
                    </Heading>
                    <Heading color="white" fontSize="2xl" >
                        {mvp.dark}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    py={4}
                    bg="#aaaaaa"
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="black" fontSize="2xl" >
                        Fantasma
                    </Heading>
                    <Heading color="black" fontSize="2xl" >
                        {mvp.ghost}%
                    </Heading>
                </HStack>
                <HStack w="full"
                    px={4}
                    py={4}
                    bg="black"
                    justifyContent="space-between"
                    alignItems="center">
                    <Heading color="white" fontSize="2xl" >
                        Morto-Vivo
                    </Heading>
                    <Heading color="white" fontSize="2xl" >
                        {mvp.undead}%
                    </Heading>
                </HStack>
            </ScrollView>
        </VStack>
    );
}

export default Mvp;