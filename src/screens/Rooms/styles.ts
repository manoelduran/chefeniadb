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

export const KeyBoardAvoidContainer = styled.KeyboardAvoidingView``;

export const RoomsContainer = styled.View`
flex: 1;
padding: 30px;
`;

export const Title = styled.Text`
font-family: ${({theme}) => theme.fonts.primary_600};
font-size: 25px;
color: ${({theme}) => theme.colors.success[600]};
`;

export const BackgroundImage = styled.Image`
`;