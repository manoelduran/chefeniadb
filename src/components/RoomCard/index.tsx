import React from "react";
import ChefeniaMapPng from '../../assets/chefeniamap.png';
import { TouchableOpacityProps } from "react-native";
import {
    Container,
    Content,
    Title,
    BackgroundImage
} from './styles';

interface RoomCardProps {
    title: string;
    onPress: () => void;
};

const RoomCard: React.FC<RoomCardProps> = ({ title, onPress }) => {
    return (
        <Container onPress={onPress}>
            <Content >
                <Title>{title}</Title>
                <BackgroundImage source={ChefeniaMapPng} resizeMode="cover" alt="Room Map" />
            </Content>
        </Container>
    );
};

export default RoomCard;