import React from 'react'
import { StyleSheet, View } from 'react-native'
import { responsiveHeight, responsiveWidth } from '../../utils/theme/ResponsiveTheme'

export const CustomDivider = ({ customWidth, customHeight, customPaddingLeft, customPaddingRight, customColor }) => {
   return (
      <View style={[
         styles.divider,
         customWidth !== undefined && { width: responsiveWidth(customWidth) },
         customHeight !== undefined && { height: responsiveHeight(customHeight) },
         customColor && { backgroundColor: customColor },
         customPaddingLeft !== undefined && { marginLeft: customPaddingLeft },
         customPaddingRight !== undefined && { marginRight: customPaddingRight }
      ]} />
   )
}

const styles = StyleSheet.create({
   divider: {
      width: '100%', // Default full width if not overridden
      height: 1, // Default height if not overridden
      backgroundColor: 'darkgrey', // Default color if not overridden
   }
})
