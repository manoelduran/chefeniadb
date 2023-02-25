import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`

display: flex;
flex-direction: column;

border-color: ${({ theme }) => theme.colors.success[600]};
border-radius: 25px;
background: transparent;
margin-top: 20px;
margin-bottom: 5px;
`;
export const Content = styled.View`
height: 150px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
mix-blend-mode: normal;
background: #213791;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
padding-left: 30px;
padding-top: 50px;
padding-bottom: 50px;
`;

export const MvpInfoContainer = styled.View`
flex: 1;
`;

export const MvpImage = styled.Image`
width: 90px;
height: 150px;

`;

export const NameContainer = styled.View`

padding-left: 10px;
align-items: center;
justify-items: center;
`;

export const MvpInfo = styled.Text`
//font-family: 'Archivo Black';
font-style: normal;
font-weight: 400;
margin-top: 5px;
font-size: 20px;
line-height: 22px;
text-align: center;

color: #FFFFFF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;