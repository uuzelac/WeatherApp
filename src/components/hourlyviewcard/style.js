import { StyleSheet } from 'react-native';
import { colors, fontSize, margin, padding } from '../../styles/base';

export const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        marginEnd: margin.sm,
        marginBottom: margin.sm,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    cardContainerTimeText: {
        flex: 1,
        paddingTop: padding.xs,
        fontSize: fontSize.md,
        fontWeight: 'bold'
    },
    cardContainerImageContainer: {
        flex: 2,
        paddingTop: padding.xs,
    },
    cardContainerImage: {
        width: 60,
        height: 60
    },
    cardContainerDescription: {
        height: 60,
        justifyContent: 'center'
    },
    cardContainerDescriptionText: {
        color: colors.greyDark,
        fontSize: fontSize.md,
        textAlign: 'center'
    },
    cardContainerTempText: {
        flex: 1,
        fontSize: fontSize.xxxxl
    },
    cardContainerWindText: {
        alignItems: 'center',
        paddingBottom: padding.xs,
        flex: 1,
        fontSize: fontSize.md,
        fontWeight: 'bold'
    }
});
