
import React, { useState } from 'react';
import { Sword, Skull } from 'phosphor-react-native';
import FallbackImage from '../../assets/logo.png';
import { useTheme } from 'styled-components/native';
import {
    Container,
    Content,
    MvpImage,
    MvpInfo,
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
    console.log('mvp', mvp.mvp_url)
    return (
        <Container onPress={onPress} {...rest}>

            <Content >
                <MvpImage source={mvp.mvp_url} resizeMode="cover"  alt={mvp.image}  />
                <MvpInfoContainer   >
                    <NameContainer >
                        <Skull
                            size={20} color={theme.colors.success[600]}
                        />
                        <MvpInfo>{mvp.name}</MvpInfo>
                    </NameContainer>
                    <NameContainer style={{ marginTop: 10 }}>
                        <Sword
                            size={20} color={theme.colors.success[600]}
                        />
                        <MvpInfo>{mvp.breed}</MvpInfo>
                    </NameContainer>
                </MvpInfoContainer>
            </Content>
        </Container>
    );
};

export default MvpCard;