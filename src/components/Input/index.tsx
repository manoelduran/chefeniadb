import { Input as NativeBaseInput, IInputProps } from 'native-base';

const  Input = ({...rest}: IInputProps) => {
    return (
        <NativeBaseInput
            bg="gray.600"
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