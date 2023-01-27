import { IconProps } from "phosphor-react-native";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
    ButtonStyle,
    ButtonText
} from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
}

const Button: React.FC<Props>  = ({title, ...rest}) => {
    return (
        <ButtonStyle
            {...rest}
        >
           <ButtonText>{title}</ButtonText> 
        </ButtonStyle>
    );
};

export default Button;