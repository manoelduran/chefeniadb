import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from '../screens/SignIn';
import { saveUserStart, saveUserSuccess } from '../store/modules/user/actions';
import { UserState } from '../store/modules/user/types';
import ApplicationState from '../store/types/ApplicationState';
import { AppRoutes } from './app.routes';

const Routes = () => {
    const data = useSelector<ApplicationState, UserState>(applicationState => applicationState.user);
    const dispatch = useDispatch();
    const checkIfUserExist = async () => {
        await AsyncStorage.getItem('CHEFENIADB@user', (_err, result) => {
            console.log('result', result)
            if (result) {
                const user = JSON.parse(result)
                console.log('user 2222222222222222', user.data.data.refreshToken)
                dispatch(saveUserSuccess(user.data.data))

            }
        })
    }
    useEffect(() => {
        checkIfUserExist()
    }, [])
    return (
        <NavigationContainer>
            {!!data.refreshToken ? (
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