import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

const WeatherForecastHomeCard = ({ date, image, temp, morningTemp, realFeel, action }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={action}>
            <Text style={styles.cardContainerDateText}>{date}</Text>
            <View style={styles.cardContainerImageContainer}>
                <Image style={styles.cardContainerImage} source={image} />
            </View>
            <View style={styles.cardContainerTemp}>
                <Text style={styles.cardContainerTempMaxText}>{temp}°</Text>
                <Text style={styles.cardContainerTempMinText}>/ {morningTemp}°</Text>
            </View>
            <Text style={styles.cardContainerRealFeelText}>RealFeel: {realFeel}°</Text>
        </TouchableOpacity>
    );
};

export default WeatherForecastHomeCard;
