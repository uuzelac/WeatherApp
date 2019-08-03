import React from 'react';
import { View } from 'react-native';
import { style } from './style';

const Separator = ({ styles = {} }) => {
    return <View style={{ ...style.separator, ...styles }} />;
};

export default Separator;
