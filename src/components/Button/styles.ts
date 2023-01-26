import styled, {css} from "styled-components/native";


export const ButtonStyle = styled.TouchableOpacity`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
background-color: ${({theme}) => theme.colors.success[600]};
margin-top: 15px;
padding: 10px;
cursor: pointer;
border-radius: 7px;
`;

export const ButtonText = styled.Text`
text-align: center;
${({ theme }) => css`
color:  ${theme.colors.white};
font-size:  ${theme.fontSizes.sm};
font-family: ${theme.fonts.primary_600};

`};

`;