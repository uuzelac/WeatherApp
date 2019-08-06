import { StyleSheet } from 'react-native';
import { colors, fontSize, margin, padding } from '../../styles/base';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.greyLight,
        height: '100%',
        paddingTop: padding.sm,
        paddingStart: padding.sm
    },
    titleText: {
        fontSize: fontSize.lg,
        marginStart: margin.xs,
        marginTop: margin.xs,
        marginBottom: margin.md
    },
    invisibleHourCard: {
        flex: 1,
        marginEnd: margin.sm,
        marginBottom: margin.sm,
        backgroundColor: 'transparent'
    }
});
