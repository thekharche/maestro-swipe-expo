import { Feather } from '@expo/vector-icons';
import React, { RefObject } from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import Animated, {
    SharedValue,
    useAnimatedStyle,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

import { theme } from '../constants/theme';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ButtonProps = {
    flatListRef: RefObject<FlatList>;
    flatListIndex: SharedValue<number>;
    dataLength: number;
};

export function Button({ dataLength, flatListIndex, flatListRef }: ButtonProps) {
    const buttonAnimationStyle = useAnimatedStyle(() => {
        const isLastScreen = flatListIndex.value === dataLength - 1;
        return {
            width: isLastScreen ? withSpring(140) : withSpring(60),
            height: 60,
        };
    });

    const textAnimationStyle = useAnimatedStyle(() => {
        const isLastScreen = flatListIndex.value === dataLength - 1;
        return {
            opacity: isLastScreen ? withTiming(1, { duration: 700 }) : withTiming(0, { duration: 700 }),
            transform: [
                {
                    translateX: isLastScreen
                        ? withSpring(0, { damping: 7, stiffness: 60, mass: 0.6, delay: 100 })
                        : withSpring(-70, { damping: 7, stiffness: 60, mass: 0.6, delay: 100 }),
                },
            ],
        };
    });

    const handleNextScreen = () => {
        const isLastScreen = flatListIndex.value === dataLength - 1;
        if (!isLastScreen) {
            flatListRef.current?.scrollToIndex({ index: flatListIndex.value + 1 });
        }
    };

    return (
        <AnimatedPressable
            onPress={handleNextScreen}
            style={[styles.container, buttonAnimationStyle]}
        >
            <Animated.Text style={[styles.text, textAnimationStyle]}>
                Maestro
            </Animated.Text>
        </AnimatedPressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.backgroundHighlightColor,
        padding: 10,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    text: {
        position: 'absolute',
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.textHighlightColor,
    },
});
