import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`

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
height: 150px;
background-color: black;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding-left: 10px;
//padding: 20px;
border-color: ${({ theme }) => theme.colors.success[600]};
`;

export const MvpInfoContainer = styled.View`
flex: 1;
`;

export const MvpImage = styled.Image`
width: 120px;
height: 110px;

`;

export const NameContainer = styled.View`

padding-left: 10px;
align-items: center;
justify-items: center;
`;

export const MvpInfo = styled.Text`
color: ${({ theme }) => theme.colors.success[600]};

`;