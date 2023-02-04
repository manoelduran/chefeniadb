import { Form } from "@unform/mobile";
import styled from "styled-components/native";

interface ElementContainerProps  {
    color?: string;
}

export const Container = styled.View`
flex: 1;
height: 100%;
justify-content: space-between;
display: flex;
flex-direction: column;
padding: 30px;
background: hsla(240, 35%, 28%, 1);

`;

export const LogoutContainer = styled.View`
margin-top: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

`;

export const GoBackContainer = styled.View`
background-color: #213790;
mix-blend-mode: normal;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
padding: 5px;
border-radius: 8px;
`;


export const KeyBoardAvoidContainer = styled.KeyboardAvoidingView`

`;

export const ScrollContainer = styled.ScrollView``;

export const ImageContainer = styled.View`
margin-top: 20px;
padding: 20px 0px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`;

export const Title = styled.Text`
//font-family: 'Archivo Black';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 22px;
text-align: center;

color: #FFFFFF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const MvpImage = styled.Image`
width: 120px;
height: 110px;
`;

export const PropertiesContainer = styled.View`
margin-top: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
background: #213791;
padding: 20px;
mix-blend-mode: normal;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
`;

export const DataContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Separator = styled.View`
width: 4px;
background: #7B8DD7;
`;

export const PropertiesText = styled.Text`
//font-family: 'Archivo Black';
margin-top: 25px;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 22px;
text-align: center;

color: #FFFFFF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const WeaknessesContainer = styled.View`
margin-top: -10px;
border-radius: 25px;
`;

export const LabelWeaknesses = styled.Text`
//font-family: 'Archivo Black';
z-index: 2;
margin-top: 25px;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 22px;
text-align: center;

color: #FFFFFF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ElementContainer = styled.View<ElementContainerProps>`

display: flex;
flex-direction: row;
background: ${({color}) => color ? color : '#213791'};
align-items: center;
text-align: center;
justify-content: space-around;
`;