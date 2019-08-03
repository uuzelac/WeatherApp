import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/base';
import { styles } from './style';
import images from '../../assets/images';
import Separator from '../../components/separator/Separator';

class WeatherForecastHome extends Component {
    static navigationOptions = {
        title: 'Weather Forecast',
        headerStyle: {
            backgroundColor: colors.headerBackground,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    openHourlyViewScreen = () => {
        this.props.navigation.navigate('Details', {
            content: this.props
        });
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.selectedContainerDetails}>
                        <View style={styles.selectedContainerPartOne}>
                            <Text style={styles.selectedContainerTitleText}>TODAY,AUGUST 9</Text>
                            <View style={styles.selectedContainerDetailsInfo}>
                                <View style={styles.selectedContainerDetailsInfoLeft}>
                                    <View style={styles.selectedContainerTemp}>
                                        <Text style={styles.selectedContainerTempMaxText}>32°</Text>
                                        <Text style={styles.selectedContainerTempMinText}>/ 19°</Text>
                                    </View>
                                    <Text style={styles.selectedContainerInfoText}>Partly sunny, hot and humid</Text>
                                </View>
                                <Image style={styles.selectedContainerDetailsInfoRight} source={images.partly_sunny_lg} />
                            </View>
                        </View>
                        <Separator />
                        <View style={styles.selectedContainerPartTwo}>
                            <View style={styles.selectedContainerDescription}>
                                <View style={styles.selectedContainerDescriptionLeft}>
                                    <Text style={styles.selectedContainerDescriptionText}>RealFeel: 34°</Text>
                                    <Text style={styles.selectedContainerDescriptionText}>Precipitation: 1%</Text>
                                    <Text style={styles.selectedContainerDescriptionText}>Max UV Index: 8</Text>
                                    <Text style={styles.selectedContainerDescriptionText}>Rain: 0mm</Text>
                                </View>
                                <View style={styles.selectedContainerDescriptionRight}>
                                    <Text style={styles.selectedContainerDescriptionGreyedText}>Sunrise:
                                        <Text style={styles.selectedContainerDescriptionText}> 5:34 AM</Text>
                                    </Text>
                                    <Text style={styles.selectedContainerDescriptionGreyedText}>Sunset:
                                        <Text style={styles.selectedContainerDescriptionText}> 7:53 PM</Text>
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Separator />
                        <View style={styles.selectedContainerPartThree}>
                            <TouchableOpacity onPress={this.openHourlyViewScreen}>
                                <View style={styles.selectedContainerButtonWrapper}>
                                    <Text style={styles.selectedContainerButton}>SEE HOURLY</Text>
                                    <Text style={styles.selectedContainerButtonArrow}>&#10140;</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={styles.selectedContainerCardsView}>
                        <Text style={styles.selectedContainerTitleText}>DAY CARDS</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default WeatherForecastHome;
