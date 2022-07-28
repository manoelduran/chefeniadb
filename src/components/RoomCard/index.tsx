import React from "react";
import { VStack, Image, View, Heading } from "native-base";
import ChefeniaMapPng from '../../assets/chefeniamap.png';
import { Pressable } from "react-native";

interface RoomCardProps {
    title: string;
    onPress: () => void;
};

const RoomCard: React.FC<RoomCardProps> = ({ title, onPress }) => {
    return (
        <VStack flex={1} h="full" w="full" bg="transparent" mt={10} >
            <Pressable onPress={onPress}  >
                {({
                    pressed
                }) => {
                    return <View alignItems="center" justifyContent="center"  >

                        <Heading fontSize="2xl" alignSelf="center" color={pressed ? "red.600" : "success.600"}>{title}</Heading>
                        <Image source={ChefeniaMapPng} rounded="md" alt="Chefenia Mapa" />
                    </View>
                }}
            </Pressable>
        </VStack>
    );
};

export default RoomCard;