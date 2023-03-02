/* eslint-disable react/jsx-key */
import React from "react"
import { ImageStyle, TextStyle, View, ViewStyle, Image, Dimensions } from "react-native"
import { Icon, iconRegistry, IconTypes, Text } from "../../../components"
import { colors, spacing } from "../../../theme"
import { Demo } from "../DemoShowroomScreen"
import { DemoUseCase } from "../DemoUseCase"

const $demoIconContainer: ViewStyle = {
  padding: spacing.extraSmall,
}

const $iconTile: ViewStyle = {
  width: "33.333%",
  alignItems: "center",
  paddingVertical: spacing.extraSmall,
}

const $iconTileLabel: TextStyle = {
  marginTop: spacing.tiny,
  color: colors.textDim,
}

const $customIconContainer: ViewStyle = {
  padding: spacing.medium,
  backgroundColor: colors.palette.angry500,
}

const $customIcon: ImageStyle = {
  tintColor: colors.palette.neutral100,
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const DemoIcon: Demo = {
  data: [
    <>
      <View style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Image source={require('../../../../assets/images/perryHeader2.png')} style={{ width: 250, height: 250, resizeMode: 'contain' }} />
        <Text preset="heading" text="Welcome To The Official Perry App" style={{ textAlign: 'center' }} />
      </View>
    </>,
  ],
}

// @demo remove-file
