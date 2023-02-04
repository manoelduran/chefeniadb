import styled, {css} from "styled-components/native";


export const InputStyle = styled.TextInput`
background: #213791;
font-size: ${({theme}) => theme.fontSizes.md};
border-width: 0;
font-style: normal;
line-height: 22px;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding: 10px;
border-radius: 7px;
margin-top: 15px;
margin-bottom: 5px;
`;