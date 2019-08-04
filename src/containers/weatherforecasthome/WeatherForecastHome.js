import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { getWeatherData } from '../../actions/WeatherAction';
import { colors } from '../../styles/base';
import { styles } from './style';
import Separator from '../../components/separator/Separator';
import { getWeatherDescription, getWeatherImage } from '../../utils/utils';
import {
    SIZE_SMALL,
    SIZE_MEDIUM,
    SIZE_LARGE,
} from '../../constants/types';
import WeatherForecastHomeCard from '../../components/wetherforecasthomecard/WeatherForecastHomeCard';

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
    }

    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date()
        };
    }

    componentDidMount() {
        this.getWeatherData(
            moment().format('YYYY-MM-DD'),
            moment().add(4, 'd').format('YYYY-MM-DD')
        );
    }

    getWeatherData = (startDate, endDate) => {
        this.props.getWeatherData(startDate, endDate);
    }

    openHourlyViewScreen = () => {
        this.props.navigation.navigate('Details', {
            content: this.props
        });
    }

    returnCurrentHour = (date, hour12) => {
        return moment(date).format(hour12 ? 'h' : 'H');
    }

    isAmPm = () => {
        return this.returnCurrentHour(this.state.currentDate, false) >= 12 ? 'PM' : 'AM';
    }

    isToday = (date) => {
        return date.getDate() === this.state.currentDate.getDate() &&
            date.getMonth() === this.state.currentDate.getMonth() &&
            date.getFullYear() === this.state.currentDate.getFullYear();
    }

    returnDescriptionFlag = (day) => {
        return day.hourly[this.isAmPm()][this.returnCurrentHour(this.state.currentDate, true)].description_flag;
    }

    renderData = () => {
        const {
            date,
            temperature,
            morning_temperature,
            real_feel,
            precipitation,
            max_uv_index,
            rain,
            sunrise_time,
            sunset_time
        } = this.props.selectedDay;
        return (
            <View style={styles.container}>
                <View style={styles.selectedContainerDetails}>
                    <View style={styles.selectedContainerPartOne}>
                        <Text style={styles.selectedContainerTitleText}>
                            {this.isToday(new Date(date)) ?
                                `Today, ${moment(date).format('MMMM D')}`.toUpperCase() :
                                `${moment(date).format('dddd, MMMM D')}`.toUpperCase()
                            }
                        </Text>
                        <View style={styles.selectedContainerDetailsInfo}>
                            <View style={styles.selectedContainerDetailsInfoLeft}>
                                <View style={styles.selectedContainerTemp}>
                                    <Text style={styles.selectedContainerTempMaxText}>{temperature}°</Text>
                                    <Text style={styles.selectedContainerTempMinText}>/ {morning_temperature}°</Text>
                                </View>
                                <Text style={styles.selectedContainerInfoText}>
                                    {getWeatherDescription(this.returnDescriptionFlag(this.props.selectedDay))}
                                </Text>
                            </View>
                            <Image
                                style={styles.selectedContainerDetailsInfoRight}
                                source={getWeatherImage(this.returnDescriptionFlag(this.props.selectedDay), SIZE_LARGE)}
                            />
                        </View>
                    </View>
                    <Separator />
                    <View style={styles.selectedContainerPartTwo}>
                        <View style={styles.selectedContainerDescription}>
                            <View style={styles.selectedContainerDescriptionLeft}>
                                <Text style={styles.selectedContainerDescriptionText}>RealFeel: {real_feel}°</Text>
                                <Text style={styles.selectedContainerDescriptionText}>Precipitation: {precipitation}%</Text>
                                <Text style={styles.selectedContainerDescriptionText}>Max UV Index: {max_uv_index}</Text>
                                <Text style={styles.selectedContainerDescriptionText}>Rain: {rain}mm</Text>
                            </View>
                            <View style={styles.selectedContainerDescriptionRight}>
                                <Text style={styles.selectedContainerDescriptionGreyedText}>Sunrise:{' '}
                                    <Text style={styles.selectedContainerDescriptionText}>
                                        {moment(`${date} ${sunrise_time}`).format('LT')}
                                    </Text>
                                </Text>
                                <Text style={styles.selectedContainerDescriptionGreyedText}>Sunset:{' '}
                                    <Text style={styles.selectedContainerDescriptionText}>
                                        {moment(`${date} ${sunset_time}`).format('LT')}
                                    </Text>
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
                <View style={styles.cardContainerCardsView}>
                    {this.props.weatherData.map((day, index) => {
                        return (
                            <WeatherForecastHomeCard
                                date={`${moment(day.date).format('ddd, MMM D')}`.toUpperCase()}
                                image={getWeatherImage(this.returnDescriptionFlag(day), SIZE_MEDIUM)}
                                temp={day.temperature}
                                morningTemp={day.morning_temperature}
                                realFeel={day.real_feel}
                                action={() => this.getWeatherData(day.date, moment(day.date).add(4, 'd').format('YYYY-MM-DD'))}
                                key={index.toString()}
                            />
                        );
                    })}
                </View>
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView>
                {this.props.weatherData.length !== 0 && this.renderData()}
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    const { selectedDay, weatherData } = state.weather;
    return { selectedDay, weatherData };
};

export default connect(mapStateToProps, { getWeatherData })(WeatherForecastHome);
