import styled, {css} from "styled-components/native";
import { Form } from '@unform/mobile';



export const Container = styled.View`
flex: 1;
display: flex;

flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 24px;

background: hsla(240, 35%, 28%, 1);

`;
export const KeyBoardAvoidContainer = styled.KeyboardAvoidingView``;

export const ScrollContainer = styled.ScrollView``;

export const Title = styled.Text`
text-align: center;
margin-top: 120px;
font-family: ${({theme}) => theme.fonts.primary_600};
font-size: 30px;

color: ${({theme}) => theme.colors.success[600]};
`;
export const Banner = styled.Image`
margin-top: 30px;
border-radius: 25px;
`;
export const FormContainer = styled(Form)`
width:  100%;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
align-self: flex-end;
margin-bottom: 20px;
`;

export const ForgotPasswordLabel = styled.Text`
font-size: 16px;
${({ theme }) => css`
font-family: ${theme.fonts.primary_600};
color: ${theme.colors.success[600]};
`};
`;

export const FooterContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;`

export const CreateAccount = styled.TouchableOpacity`
align-self: flex-start;
margin-bottom: 20px;
`;

export const CreateAccountLabel = styled.Text`

font-size: 16px;
${({ theme }) => css`
font-family: ${theme.fonts.primary_600};
color: ${theme.colors.success[600]};
`};
`;