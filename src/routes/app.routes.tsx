import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mvp from '../screens/Mvp';
import Room from '../screens/Room';
import Rooms from '../screens/Rooms';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator initialRouteName='rooms' screenOptions={{ headerShown: false }}>
            <Screen
                name="rooms"
                component={Rooms}
            />
            <Screen
                name="room"
                component={Room}
            />
            <Screen
                name="mvp"
                component={Mvp}
            />
        </Navigator>
    )

}