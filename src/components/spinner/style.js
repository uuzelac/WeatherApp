import { StyleSheet } from 'react-native';
import { colors } from '../../styles/base';

export const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.spinnerBackgroundColor
      },
      activityIndicatorWrapper: {
        backgroundColor: 'white',
        height: 100,
        width: 100,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
