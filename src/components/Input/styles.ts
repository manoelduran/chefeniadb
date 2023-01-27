import styled, {css} from "styled-components/native";


export const InputStyle = styled.TextInput`
background-color: ${({theme}) => theme.colors.gray[600]};
font-size: ${({theme}) => theme.fontSizes.sm};
border-width: 0;
font-family: ${({theme}) => theme.fonts.primary_500};
color: ${({theme}) => theme.colors.white};
padding: 10px;
border-radius: 7px;
margin-top: 15px;
margin-bottom: 5px;
`;