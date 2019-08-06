import { StyleSheet } from 'react-native';
import { colors, padding, fontSize, margin } from '../../styles/base';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: margin.sm,
        right: margin.sm,
        left: margin.sm,
        padding: padding.largeButton,
        backgroundColor: colors.buttonBackground
      },
      buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
      },
      buttonLabel: {
        fontSize: fontSize.lg,
        marginEnd: margin.sm,
        color: 'white'
      },
      buttonArrow: {
        paddingTop: padding.xxs,
        fontSize: fontSize.md,
        color: 'white'
      }
});
