import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
flex: 1;
display: flex;
border: 2px;
border-color: ${({ theme }) => theme.colors.success[600]};
border-radius: 7px;
background: transparent;
margin-bottom: 5px;
`;

export const Title = styled.Text`
text-align: center;
font-family: ${({ theme }) => theme.fonts.primary_600};
font-size: 20px;
color: ${({ theme }) => theme.colors.success[600]};
`;
