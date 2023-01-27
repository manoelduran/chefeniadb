
import React, { useState } from 'react';
import { Sword, Skull } from 'phosphor-react-native';
import FallbackImage from '../../assets/logo.png';
import { useTheme } from 'styled-components/native';
import {
    Container,
    Content,
    MvpImage,
    MvpInfoContainer,
    NameContainer
} from './styles';
import { TouchableOpacityProps } from 'react-native';
interface MvpCardProps extends TouchableOpacityProps {
    mvp: Mvp;
    onPress: () => void;
}

const MvpCard: React.FC<MvpCardProps> = ({ mvp, onPress, ...rest }) => {
    const theme = useTheme()
    return (
        <Container onPress={onPress} {...rest}>

            <Content >
                <MvpImage alt={mvp.name} source={{
                    uri: mvp.image
                }} fallbackSource={{
                    uri: FallbackImage
                }} />
                <MvpInfoContainer   >
                    <NameContainer >
                        <Skull
                            size={20} color={theme.colors.success[500]}
                        />
                        <Text>{mvp.name}</Text>
                    </NameContainer>
                    <NameContainer style={{ marginTop: 10 }}>
                        <Sword
                            size={20} color={theme.colors.success[500]}
                        />
                        <Text>{mvp.breed}</Text>
                    </NameContainer>
                </MvpInfoContainer>
            </Content>
        </Container>
    );
};

export default MvpCard;