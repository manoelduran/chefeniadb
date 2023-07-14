import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { MvpNavigationProps } from '../../@types/navigation';
import IconButton from '../../components/IconButton';
import { Container, GoBackContainer, ImageContainer, Separator, LogoutContainer, MvpImage, PropertiesContainer, ScrollContainer, Title, PropertiesText, WeaknessesContainer, LabelWeaknesses, DataContainer, ElementContainer, PropertiesValue, ValueContainer } from './styles';
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
                    <GoBackContainer>
                        <IconButton onPress={goBack} color={theme.colors.gray[400]} icon='arrow-back' />
                    </GoBackContainer>
                </LogoutContainer>
                <ImageContainer>
                    <MvpImage source={{ uri: `https://chefeniadb-api.s3.sa-east-1.amazonaws.com/${mvp.name.replace(/ /g, '+')}.gif` }} resizeMode="cover" alt="Room Map" />
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
                <ElementContainer color='#B3B3BD' style={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                        <PropertiesText>NEUTRAL</PropertiesText>
                        <ValueContainer>
                            <PropertiesValue>{mvp.neutral} %</PropertiesValue>
                        </ValueContainer>
                    </ElementContainer>
                    <ElementContainer color='#265990'>
                        <PropertiesText>WATER</PropertiesText>
                        <ValueContainer>
                            <PropertiesValue>{mvp.water} %</PropertiesValue>
                        </ValueContainer>

                    </ElementContainer>
                    <ElementContainer color='#daaf85'>
                        <PropertiesText>EARTH</PropertiesText>
                        <ValueContainer>
                            <PropertiesValue>{mvp.earth} %</PropertiesValue>
                        </ValueContainer>

                    </ElementContainer>
                    <ElementContainer color='#C44D41' >
                        <PropertiesText >FIRE</PropertiesText>
                        <ValueContainer>
                            <PropertiesValue>{mvp.fire} %</PropertiesValue>
                        </ValueContainer>
                    </ElementContainer>
                
                    <ElementContainer color='#3B9698'>
                        <PropertiesText>WIND</PropertiesText>
                        <ValueContainer>
                            <PropertiesValue>{mvp.wind} %</PropertiesValue>
                        </ValueContainer>

                    </ElementContainer>
                 
                    <ElementContainer color='#38A649'>
                        <PropertiesText>POISON</PropertiesText>
                        <ValueContainer>
                            <PropertiesValue>{mvp.poison} %</PropertiesValue>
                        </ValueContainer>

                    </ElementContainer>
                    <ElementContainer color='#ffbaaa'>
                        <PropertiesText>HOLY</PropertiesText>
                        <ValueContainer>
                            <PropertiesValue>{mvp.holy} %</PropertiesValue>
                        </ValueContainer>

                    </ElementContainer>
                    <ElementContainer color='#6B48C7'>
                        <PropertiesText>DARK</PropertiesText>
                        <ValueContainer >
                            <PropertiesValue>{mvp.dark} %</PropertiesValue>
                        </ValueContainer>

                    </ElementContainer>
              
                    
                    <ElementContainer color='#C2A1D8'>
                        <PropertiesText>GHOST</PropertiesText>
                        <ValueContainer>
                            <PropertiesValue>{mvp.ghost} %</PropertiesValue>
                        </ValueContainer>

                    </ElementContainer>
                    <ElementContainer color='#272733' >
                        <PropertiesText>UNDEAD</PropertiesText>
                        <ValueContainer>
                            <PropertiesValue>{mvp.undead} %</PropertiesValue>
                        </ValueContainer>
                    </ElementContainer>
                </WeaknessesContainer>
            </ScrollContainer>
        </Container>
    );
}

export default Mvp;