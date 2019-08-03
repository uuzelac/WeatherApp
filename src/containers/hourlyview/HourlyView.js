import React, { Component } from 'react';
import { Text } from 'react-native';
import { colors } from '../../styles/base';

class HourlyView extends Component {
    static navigationOptions = {
        title: 'Details',
        headerStyle: {
            backgroundColor: colors.headerBackground,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <Text>HourlyView</Text>
        );
    }
}

export default HourlyView;
