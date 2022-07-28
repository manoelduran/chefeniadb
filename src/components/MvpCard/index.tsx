import { VStack, Image, Text, View, Heading, Pressable, HStack, useTheme } from 'native-base';
import React, { useState } from 'react';
import { Sword, Skull } from 'phosphor-react-native';
import FallbackImage from '../../assets/logo.png';
interface MvpCardProps {
    mvp: Mvp;
    onPress: () => void;
}

const MvpCard: React.FC<MvpCardProps> = ({ mvp, onPress }) => {
    const { colors } = useTheme();
    return (
        <VStack flex={1} bg="transparent" mt={10} >
            <Pressable onPress={onPress}  >
                {({
                    isPressed
                }) => {
                    return (
                        <HStack alignItems="center" width="full" height="3xs" bg="lightBlue.200" overflow="hidden" borderColor={isPressed ? "red.600" : "success.600"} borderWidth="2" borderStyle="solid" >
                            <Image width="125px" height="200px" alt={mvp.name} source={{
                                uri: mvp.image
                            }} fallbackSource={{
                                uri: FallbackImage
                            }} />
                            <VStack h="full" justifyContent="center"   >
                                <HStack w="full" paddingLeft={5}>
                                    <Skull
                                        size={20} color={colors.success[500]}
                                    />
                                    <Heading fontSize="md" color={isPressed ? "red.600" : "success.600"}>{mvp.name}</Heading>
                                </HStack>
                                <HStack w="full" mt="10" paddingLeft={5}>
                                    <Sword
                                        size={20} color={colors.success[500]}
                                    />
                                    <Heading fontSize="md" color={isPressed ? "red.600" : "success.600"}>{mvp.breed}</Heading>
                                </HStack>
                            </VStack>
                        </HStack>
                    )

                }}
            </Pressable>
        </VStack>
    );
};

export default MvpCard;