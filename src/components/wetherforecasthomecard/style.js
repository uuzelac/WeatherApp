import { StyleSheet } from 'react-native';
import { colors, fontSize, margin, padding } from '../../styles/base';

export const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        marginEnd: margin.sm,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    cardContainerDateText: {
        flex: 1,
        paddingTop: padding.sm,
        fontSize: fontSize.sm,
        fontWeight: 'bold'
    },
    cardContainerImageContainer: {
        flex: 2,
    },
    cardContainerImage: {
        width: 80,
        height: 80
    },
    cardContainerTemp: {
        paddingTop: padding.sm,
        flex: 1,
        flexDirection: 'row'
    },
    cardContainerTempMaxText: {
        color: 'black',
        fontSize: fontSize.xxxl
    },
    cardContainerTempMinText: {
        paddingTop: padding.xs,
        color: colors.greyDark,
        fontSize: fontSize.lg
    },
    cardContainerRealFeelText: {
        alignItems: 'center',
        paddingTop: padding.sm,
        flex: 1,
        fontSize: fontSize.md
    }
});
