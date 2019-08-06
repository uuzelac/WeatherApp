import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';

const HourlyViewCard = ({ time, image, description, temp, wind }) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardContainerTimeText}>{time}</Text>
            <View style={styles.cardContainerImageContainer}>
                <Image style={styles.cardContainerImage} source={image} />
            </View>
            <View style={styles.cardContainerDescription}>
                <Text style={styles.cardContainerDescriptionText}>{description}</Text>
            </View>
            <Text style={styles.cardContainerTempText}>{temp}°</Text>
            <Text style={styles.cardContainerWindText}>{wind}km/h</Text>
        </View>
    );
};

export default HourlyViewCard;
