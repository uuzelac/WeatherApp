import React, { Component } from 'react';
import { Text, SafeAreaView, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { colors } from '../../styles/base';
import { styles } from './style';
import Button from '../../components/button/Button';
import HourlyViewCard from '../../components/hourlyviewcard/HourlyViewCard';
import {
    getWeatherDescription,
    getWeatherImage,
    returnAmPm
} from '../../utils/utils';
import { SIZE_SMALL, NUMBER_OF_COLUMNS } from '../../constants/types';

class HourlyView extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title || this.props.navigation.getParam('title'),
        headerStyle: {
            backgroundColor: colors.headerBackground,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    });

    constructor(props) {
        super(props);
        this.state = {
            hours: this.prepareHourlyData(),
            showMoreButtonVisible: true,
        };
    }

    prepareHourlyData = () => {
        const keysAM = Object.keys(this.props.selectedDay.hourly.AM);
        const keysPM = Object.keys(this.props.selectedDay.hourly.PM);
        const currentDate = new Date();
        const pmHours = [];
        let hours = [];
        // If current time belongs to AM range
        if (returnAmPm(currentDate) === 'AM') {
            // Check all AM hours
            for (const key of keysAM) {
                if (moment(`${key} AM`, ['h A']).isAfter(currentDate)) {
                    hours.push({ ...this.props.selectedDay.hourly.AM[key], time: `${key} AM` });
                }
            }
            // Add all PM hours
            for (const key of keysPM) {
                pmHours.push({ ...this.props.selectedDay.hourly.PM[key], time: `${key} PM` });
            }
            // Move last PM time to the beggining om pnHours
            pmHours.unshift(pmHours.pop());
            // Combine two arrays
            hours = [...hours, ...pmHours];
        } else {
            for (const key of keysPM) {
                if (moment(`${key} PM`, ['h A']).isAfter(currentDate)) {
                    hours.push({ ...this.props.selectedDay.hourly.PM[key], time: `${key} PM` });
                }
            }
        }

        // Adding new invisible hour elements to support grid layout formatting
        const numberOfFullRows = Math.floor(hours.length / NUMBER_OF_COLUMNS);
        let numberOfElementsLastRow = hours.length - (numberOfFullRows * NUMBER_OF_COLUMNS);

        while (numberOfElementsLastRow !== NUMBER_OF_COLUMNS && numberOfElementsLastRow !== 0) {
            hours.push({ invisible: true });
            numberOfElementsLastRow++;
        }

        return hours;
    }

    returnNumberOfValidElements = () => {
        return this.state.hours.filter(hour => !hour.invisible).length;
    }

    returnWeatherData = () => {
        if (this.state.showMoreButtonVisible && this.returnNumberOfValidElements() > 8) {
            return this.state.hours.slice(0, 8);
        }
        return this.state.hours;
    }

    renderButton = () => {
        if (this.state.showMoreButtonVisible && this.returnNumberOfValidElements() > 8) {
            return (
                <Button
                    label={`Show next ${this.returnNumberOfValidElements() - 8} hours`}
                    action={() => this.setState({ showMoreButtonVisible: false })}
                />
            );
        }
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Hourly View</Text>
                    <FlatList
                        data={this.returnWeatherData()}
                        numColumns={NUMBER_OF_COLUMNS}
                        renderItem={({ item, index }) => {
                            if (item.invisible === true) {
                                return <View style={styles.invisibleHourCard} />;
                            }
                            return (
                                <HourlyViewCard
                                    index={index}
                                    time={item.time}
                                    image={getWeatherImage(item.description_flag, SIZE_SMALL)}
                                    description={getWeatherDescription(item.description_flag)}
                                    temp={item.temperature}
                                    wind={item.wind}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    {this.renderButton()}
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    const { selectedDay } = state.weather;
    return { selectedDay };
};

export default connect(mapStateToProps)(HourlyView);
