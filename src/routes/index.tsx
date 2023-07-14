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
    const { user } = useSelector<ApplicationState, UserState>(applicationState => applicationState.user);
    const dispatch = useDispatch();
    const checkIfUserExist = async () => {
        AsyncStorage.getItem('CHEFENIADB@user', (_err, result) => {
            if (result) {
                const response = JSON.parse(result)
                if (response.user !== null) {
                    dispatch(saveUserSuccess(response))
                }

            }
        })
    }


    useEffect(() => {
        const init = async () => {
            await checkIfUserExist()
        }
        init()
    }, [])
    return (
        <NavigationContainer>
            {user ? (
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