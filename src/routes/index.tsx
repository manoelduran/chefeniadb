import { NavigationContainer } from '@react-navigation/native';
import { User } from 'phosphor-react-native';
import SignIn from '../screens/SignIn';
import { AppRoutes } from './app.routes';

const Routes = () => {
    const user = {
        id: 2,
        name: 'Manoel',
        password: '1234',
        email: 'manoel.duran@hotmail.com',
    }
    return (
        <NavigationContainer>
            {user.id ? (
                <AppRoutes />
            )
                :
                (
                    <SignIn />
                )}
        </NavigationContainer>
    );
};

export default Routes;