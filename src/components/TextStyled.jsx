import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../../themes/theme';

const styles = StyleSheet.create({
        text: {
            fontSize: theme.fontSizes.body,
            color: theme.colors.texPrimary
        },
        bold: {
            fontWeight: theme.fontWeights.bold
        },
        big: {
            fontSize: theme.fontSizes.big
        },
        small: {
            fontSize: theme.fontSizes.subHead
        },
        gray: {
            color: theme.colors.textStandard
        },
        green: {
            color: theme.colors.textSuccess
        }
})


const TextStyled = ({
    bold,
    big,
    small,
    gray,
    green,
    children
}) => {

    const textStyles = [
        styles.text,
        bold && styles.bold,
        big && styles.big,
        gray && styles.gray,
        small && styles.small,
        green && styles.green
    ]

  return (

    <Text style={textStyles}>{children}</Text>

  )

}

export default TextStyled