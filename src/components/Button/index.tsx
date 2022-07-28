import { Button as NativeBaseButton, IButtonProps, Heading } from 'native-base';

interface Props extends IButtonProps {
    title: string;
}

const Button = ({ title, ...rest }: Props) => {
    return (
        <NativeBaseButton
            bg="success.600"
            h={14}
            fontSize="sm"
            rounded="sm"
            _pressed={{ bg: "green.500" }}
            {...rest}
        >
            <Heading color="white" fontSize="sm">{title}</Heading>
        </NativeBaseButton>
    );
};

export default Button;