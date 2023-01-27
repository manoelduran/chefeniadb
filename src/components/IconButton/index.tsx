import { MaterialIcons, } from '@expo/vector-icons';
import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
    ButtonStyle,
} from './styles';

interface Props extends TouchableOpacityProps {
    icon?: string;
    color?: string;
}

const IconButton: React.FC<Props> = ({ icon, color, ...rest }) => {
    return (
        <ButtonStyle
            {...rest}
        >
            <MaterialIcons
                name={icon}
                color={color}
                size={26}
            />
        </ButtonStyle>
    );
};

export default IconButton;