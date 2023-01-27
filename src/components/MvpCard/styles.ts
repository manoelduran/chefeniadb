import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
flex: 1;
display: flex;
flex-direction: column;
border: 2px;
border-color: ${({ theme }) => theme.colors.success[600]};
border-radius: 7px;
background: transparent;
margin-bottom: 5px;
`;
export const Content = styled.View`
align-items: center;
width: 100%;
height: 40px;
background-color: transparent;
border-width: 2px;
border-style: solid;
border-color: ${({theme}) => theme.colors.success[600]};
`;

export const MvpInfoContainer = styled.View`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
overflow: hidden;
`;

export const MvpImage = styled.Image`
`;

export const NameContainer = styled.View`
width: 100%;
padding-left: 10px;
align-items: center;
`;

export const MvpInfo = styled.Text`

`;