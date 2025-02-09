import React from 'react'
import { StyleSheet, View } from 'react-native'
import { responsiveHeight, responsiveSpacingHeight, responsiveSpacingWidth, responsiveWidth } from '../../utils/theme/ResponsiveTheme'

export const CustomDivider = ({ customWidth, customHeight, customPaddingHorizontal, customPaddingVertical, customColor }) => {
   return (
      <View style={{
         width: responsiveWidth(customWidth),
         height: responsiveHeight(customHeight),
         backgroundColor: customColor,
         paddingHorizontal: responsiveSpacingWidth(customPaddingHorizontal),
         paddingVertical: responsiveSpacingHeight(customPaddingVertical)
      }}></View>
   )
}
