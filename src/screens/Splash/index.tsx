import React, { useEffect } from 'react';
import { Container, Text } from "./styles";
import Chefenia from '../../assets/chefenia.svg';
import { useNavigation } from "@react-navigation/native";
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";



const Splash: React.FC = () => {
    const navigation = useNavigation();
    const splashAnimation = useSharedValue(0);

    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [0, -50],
                        Extrapolate.CLAMP
                    )
                }
            ],
        }
    })
    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [-50, 0],
                        Extrapolate.CLAMP
                    )
                }
            ]
        }
    })

    function startApp() {
        navigation.navigate('rooms');
    };

/*    useEffect(() => {
        splashAnimation.value = withTiming(
            50,
            { duration: 1000 },
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        );
    }, []);*/

    return (
        <Container>
            <Text>TESTANDO</Text>

        </Container>
    );
}

export default Splash