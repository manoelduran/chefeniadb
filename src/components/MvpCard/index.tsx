
import React, { useEffect, useState } from 'react';
import { Sword, Skull } from 'phosphor-react-native';
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
    return (
        <Container onPress={onPress} {...rest}>

            <Content >
                <MvpImage source={{ uri: `https://chefeniadb-api.s3.sa-east-1.amazonaws.com/${mvp.name.replace(/ /g, '+')}.gif` }} resizeMode="cover" alt={mvp.name} />
                <MvpInfoContainer   >
                    <NameContainer >
                        <Skull
                            size={20} color={theme.colors.white}
                        />
                        <MvpInfo>{mvp.name}</MvpInfo>
                    </NameContainer>
                    <NameContainer style={{ marginTop: 10 }}>
                        <Sword
                            size={20} color={theme.colors.white}
                        />
                        <MvpInfo>{mvp.breed}</MvpInfo>
                    </NameContainer>
                </MvpInfoContainer>
            </Content>
        </Container>
    );
};

export default MvpCard;