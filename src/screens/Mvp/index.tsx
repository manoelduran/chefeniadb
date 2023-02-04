import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { MvpNavigationProps } from '../../@types/navigation';
import IconButton from '../../components/IconButton';
import { Container, GoBackContainer, ImageContainer, Separator, LogoutContainer, MvpImage, PropertiesContainer, ScrollContainer, Title, PropertiesText, WeaknessesContainer, LabelWeaknesses, DataContainer, ElementContainer } from './styles';
const Mvp = () => {
    const route = useRoute();
    const { mvp } = route.params as MvpNavigationProps;
    console.log('mvp', mvp)
    const navigation = useNavigation();
    const theme = useTheme();
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <Container>
            <ScrollContainer>
                <LogoutContainer>
                    <GoBackContainer>
                        <IconButton onPress={goBack} color={theme.colors.gray[400]} icon='arrow-back' />
                    </GoBackContainer>
                </LogoutContainer>
                <ImageContainer>
                    <MvpImage source={{ uri: mvp.mvp_url }} resizeMode="cover" alt="Room Map" />
                    <Title>{mvp.name}</Title>
                </ImageContainer>
                <PropertiesContainer>
                    <DataContainer>
                        <PropertiesText>QUANTITY</PropertiesText>
                        <PropertiesText>LEVEL</PropertiesText>
                        <PropertiesText>BREED</PropertiesText>
                        <PropertiesText>PROPERTY</PropertiesText>
                    </DataContainer>
                    <Separator />
                    <DataContainer>
                    <PropertiesText>{mvp.quantity}</PropertiesText>
                        <PropertiesText>{mvp.level}</PropertiesText>
                        <PropertiesText>{mvp.breed}</PropertiesText>
                        <PropertiesText>{mvp.property}</PropertiesText>
                    </DataContainer>
                </PropertiesContainer>
                <LabelWeaknesses>WEAKNESSES</LabelWeaknesses>
                <WeaknessesContainer>
                    <ElementContainer color='#C44D41' >
                        <PropertiesText >FIRE</PropertiesText>
                        <PropertiesText>{mvp.fire}</PropertiesText>
                    </ElementContainer>
                    <ElementContainer color='#CCB25B'>
                        <PropertiesText>EARTH</PropertiesText>
                        <PropertiesText>{mvp.earth}</PropertiesText>
                    </ElementContainer>
                    <ElementContainer color='#3B9698'>
                        <PropertiesText>WIND</PropertiesText>
                        <PropertiesText>{mvp.wind}</PropertiesText>
                    </ElementContainer>
                    <ElementContainer color='#265990'>
                        <PropertiesText>WATER</PropertiesText>
                        <PropertiesText>{mvp.water}</PropertiesText>
                    </ElementContainer>
                    <ElementContainer color='#38A649'>
                        <PropertiesText>POISON</PropertiesText>
                        <PropertiesText>{mvp.poison}</PropertiesText>
                    </ElementContainer>
                    <ElementContainer color='#6B48C7'>
                        <PropertiesText>DARK</PropertiesText>
                        <PropertiesText>{mvp.dark}</PropertiesText>
                    </ElementContainer>
                    <ElementContainer color='#B3B3BD'>
                        <PropertiesText>NEUTRAL</PropertiesText>
                        <PropertiesText>{mvp.neutral}</PropertiesText>
                    </ElementContainer>
                    <ElementContainer color='#E4E3E8'>
                        <PropertiesText>HOLY</PropertiesText>
                        <PropertiesText>{mvp.holy}</PropertiesText>
                    </ElementContainer>
                    <ElementContainer color='#C2A1D8'>
                        <PropertiesText>GHOST</PropertiesText>
                        <PropertiesText>{mvp.ghost}</PropertiesText>
                    </ElementContainer>
                    <ElementContainer color='#272733'>
                        <PropertiesText>UNDEAD</PropertiesText>
                        <PropertiesText>{mvp.undead}</PropertiesText>
                    </ElementContainer>
                </WeaknessesContainer>
            </ScrollContainer>
        </Container>
    );
}

export default Mvp;