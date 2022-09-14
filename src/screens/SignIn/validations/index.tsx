import * as Yup from 'yup';

export const canCreateUser = async (data: object): Promise<void> => {
    const schema = Yup.object().shape({
        email: Yup.string().required('Email Obrigatório'),
        password: Yup.string().required('Senha Obrigatória'),
    });
    await schema.validate(data, {
        abortEarly: false,
    });
}