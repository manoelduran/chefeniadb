import { useField } from '@unform/core';
import { Input as NativeBaseInput, IInputProps, useTheme } from 'native-base';
import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

interface InputProps extends IInputProps {
  background?: string;
  icon?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({
  background,
  icon,
  name,
  onChangeText,
  defaultValue: value,
  maxLength,
  onBlur,
  onFocus,
  ...rest
}) => {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<any>(null);
  const { fieldName, registerField, defaultValue } = useField(name);


  const handleInputFocus = useCallback((e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const setFocusOnInput = (): void => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

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
      if (inputRef.current) {
        inputRef.current.value = text;
      }
      if (onChangeText) onChangeText(text);
    },

    [onChangeText]
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
      onChangeText={handleChangeText}
      onFocus={handleInputFocus}
      defaultValue={value}
      onBlur={onBlur || handleInputBlur}
      maxLength={maxLength || inputRef?.current?.maxLength}
      {...rest}
    />
  );
};

export default Input;
