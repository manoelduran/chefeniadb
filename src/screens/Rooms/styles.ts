import styled from "styled-components/native";



export const Container = styled.View`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: hsla(240, 35%, 28%, 1);

`;

export const LogoutContainer = styled.View`
margin-top: 30px;
padding: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const IconContainer = styled.View`
background-color: #213790;
mix-blend-mode: normal;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
padding: 5px;
border-radius: 8px;
`;

export const KeyBoardAvoidContainer = styled.KeyboardAvoidingView``;

export const RoomsContainer = styled.View`
flex: 1;
padding: 30px;
`;

export const Title = styled.Text`
//font-family: 'Archivo Black';
font-style: normal;
font-size: 25px;
text-align: center;

color: #FFFFFF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const BackgroundImage = styled.Image`
`;