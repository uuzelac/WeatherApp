import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

const Button = ({ label, action }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={action}>
            <View style={styles.buttonWrapper}>
                <Text style={styles.buttonLabel}>{label}</Text>
                <Text style={styles.buttonArrow}>&#10140;</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;
