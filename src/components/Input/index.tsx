import { Input as NativeBaseInput, IInputProps } from 'native-base';
import { useField } from '@unform/core'
import { useEffect, useRef } from 'react';

const Input = ({ ...rest }: IInputProps) => {
    const inputRef = useRef();
    //useEffect(() => { }, [])
    return (
        <NativeBaseInput
            bg="gray.600"
            ref={inputRef}
            h={14}
            size="md"
            borderWidth={0}
            fontSize="md"
            fontFamily="body"
            color="white"
            placeholderTextColor="gray.400"
            {...rest}
        />
    );
};

export default Input;