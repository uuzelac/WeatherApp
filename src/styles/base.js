import { Dimensions } from 'react-native';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
};

export const colors = {
    headerBackground: '#255DF4',
    headerTitle: '#FF6738',
    buttonBackground: '#FF6738',
    greyLight: '#EDECED',
    greyDark: '#8E8E8E'
};

export const fontSize = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
    xxxl: 32,
    xxxxl: 36,
    maxTemp: 64,
    minTemp: 36
};

export const margin = {
    xxs: 3,
    xs: 5,
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
    xxl: 50,
    xxxl: 60
};

export const padding = {
    xxs: 3,
    xs: 5,
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
    xxl: 50,
    xxxl: 60,
    largeButton: 15,
};
