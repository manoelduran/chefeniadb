import { Spinner } from 'phosphor-react-native';
import React from 'react';
import {
Container
} from './styles';

const Loading = () => {
    return (
        <Container >
            <Spinner color='white'/>
        </Container>
    );
};

export default Loading;