import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
    Container,
    Title,
} from './styles';

interface RoomCardProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
};

const RoomCard: React.FC<RoomCardProps> = ({ title, onPress, ...rest }) => {
    return (
        <Container onPress={onPress} {...rest}>
            <Title>{title}</Title>
        </Container>
    );
};

export default RoomCard;