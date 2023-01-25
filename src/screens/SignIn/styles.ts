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

export const Banner = styled.Image`
margin-top: 200px;
border-radius: 25px;
`;
export const FormContainer = styled(Form)`
width:  100%;
`;