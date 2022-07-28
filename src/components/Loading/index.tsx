import React from 'react';
import { Center, Spinner } from 'native-base';

const Loading = () => {
    return (
        <Center flex={1} bg='black'>
            <Spinner color='white'/>
        </Center>
    );
};

export default Loading;