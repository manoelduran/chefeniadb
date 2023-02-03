import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { MvpNavigationProps } from '../../@types/navigation';
import IconButton from '../../components/IconButton';
import { Container, LogoutContainer, ScrollContainer, Title } from './styles';
const Mvp = () => {
    const route = useRoute();
    const { mvp } = route.params as MvpNavigationProps;
    const navigation = useNavigation();
    const theme = useTheme();
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <Container>
            <ScrollContainer>
            <LogoutContainer>
                <Title>{mvp.name}</Title>
                <IconButton onPress={goBack} color={theme.colors.gray[400]} icon='arrow-back' />
            </LogoutContainer>
                </ScrollContainer>
                </Container>
    );
}

export default Mvp;