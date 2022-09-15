import { Input as NativeBaseInput, IInputProps } from 'native-base';
import { useField } from '@unform/core'
import { useCallback, useEffect, useRef } from 'react';

interface InputProps extends IInputProps {
    name?: string;
    onChangeText: () => void;
}

const Input = ({ name, onChangeText, ...rest }: InputProps) => {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    useEffect(() => {
        inputRef.current.value = defaultValue;
    }, [defaultValue]);
    useEffect(() => {
        if (inputRef.current) inputRef.current.value = defaultValue;
    }, [defaultValue]);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            getValue() {
                if (inputRef.current) return inputRef.current.value;
                return '';
            },
            setValue(ref, value) {
                if (inputRef.current) {
                    inputRef.current.setNativeProps({ text: value });
                    inputRef.current.value = value;
                }
            },
            clearValue() {
                if (inputRef.current) {
                    inputRef.current.setNativeProps({ text: '' });
                    inputRef.current.value = '';
                }
            },
        });
    }, [fieldName, registerField]);
    const handleChangeText = useCallback(
        text => {
            if (inputRef.current) inputRef.current.value = text;
            if (onChangeText) onChangeText(text);
        },
        [onChangeText],
    );
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