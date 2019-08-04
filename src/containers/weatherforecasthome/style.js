import { StyleSheet } from 'react-native';
import { colors, fontSize, margin, padding } from '../../styles/base';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.greyLight,
        height: '100%',
    },
    selectedContainerDetails: {
        flex: 3,
        margin: margin.sm,
        backgroundColor: 'white',
    },
    selectedContainerPartOne: {
        flex: 4,
        justifyContent: 'center',
        paddingTop: padding.sm,
        paddingBottom: padding.sm,
        paddingStart: padding.md,
        paddingEnd: padding.md,
    },
    selectedContainerPartTwo: {
        flex: 3,
        justifyContent: 'center',
        paddingTop: padding.sm,
        paddingBottom: padding.sm,
        paddingStart: padding.md,
        paddingEnd: padding.md,
    },
    selectedContainerPartThree: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: padding.sm,
        paddingBottom: padding.sm,
        paddingStart: padding.md,
        paddingEnd: padding.md,
    },
    selectedContainerTitleText: {
        color: colors.headerTitle,
        fontWeight: 'bold'
    },
    selectedContainerDetailsInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    selectedContainerDetailsInfoLeft: {
    },
    selectedContainerDetailsInfoRight: {
        width: 120,
        height: 120,
    },
    selectedContainerTemp: {
        flexDirection: 'row',
    },
    selectedContainerTempMaxText: {
        color: 'black',
        fontSize: fontSize.maxTemp
    },
    selectedContainerTempMinText: {
        paddingTop: padding.sm,
        color: colors.greyDark,
        fontSize: fontSize.minTemp
    },
    selectedContainerInfoText: {
        color: colors.greyDark,
        fontSize: fontSize.md,
        width: 120
    },
    selectedContainerDescription: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    selectedContainerDescriptionLeft: {
        alignItems: 'flex-start'
    },
    selectedContainerDescriptionRight: {
        alignItems: 'flex-end'
    },
    selectedContainerDescriptionText: {
        marginBottom: margin.xxs,
        fontSize: fontSize.md,
        color: 'black'
    },
    selectedContainerDescriptionGreyedText: {
        fontSize: fontSize.md,
        marginBottom: margin.xxs,
        color: colors.greyDark
    },
    selectedContainerButtonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    selectedContainerButton: {
        fontSize: fontSize.md,
        color: colors.headerBackground,
        fontWeight: 'bold',
        marginEnd: margin.xs
    },
    selectedContainerButtonArrow: {
        color: colors.headerBackground,
    },
    cardContainerCardsView: {
        flex: 2,
        flexDirection: 'row',
        marginBottom: margin.sm,
        paddingStart: padding.sm
    }
});
