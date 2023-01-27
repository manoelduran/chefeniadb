import styled, {css} from "styled-components/native";


export const Container = styled.TouchableOpacity`
flex: 1;
background: transparent;
`;
export const Content = styled.View`
align-items: center;
justify-content: center;
`;
export const Title = styled.Text`
text-align: center;
//margin-top: 120px;
font-family: ${({theme}) => theme.fonts.primary_600};
font-size: 20px;

color: ${({theme}) => theme.colors.success[600]};
`;
export const BackgroundImage = styled.Image`
`;