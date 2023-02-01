import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
flex: 1;
display: flex;
flex-direction: column;
border: 1px;
border-color: ${({ theme }) => theme.colors.success[600]};
border-radius: 5px;
background: transparent;
margin-top: 20px;
margin-bottom: 5px;
`;
export const Content = styled.View`
flex: 1;
background-color: transparent;
border-width: 1px;
padding: 10px;
border-color: ${({ theme }) => theme.colors.success[600]};
`;

export const MvpInfoContainer = styled.View`

`;

export const MvpImage = styled.Image`

`;

export const NameContainer = styled.View`
flex: 1;
padding-left: 10px;
align-items: flex-end;
`;

export const MvpInfo = styled.Text`
`;