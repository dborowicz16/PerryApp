import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { ListItem, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing } from "../theme"
import { openLinkInBrowser } from "../utils/openLinkInBrowser"
import { isRTL } from "../i18n"

const chainReactLogo = require("../../assets/images/cr-logo.png")
const reactNativeLiveLogo = require("../../assets/images/rnl-logo.png")
const reactNativeRadioLogo = require("../../assets/images/rnr-logo.png")
const reactNativeNewsletterLogo = require("../../assets/images/rnn-logo.png")

export const DemoCommunityScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function DemoCommunityScreen(_props) {
    return (
      <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        <Text preset="heading" text="About Perry" style={$title} />
        <Image source={require("../../assets/images/babyPerry2.jpg")} style={{ height: 500, width: '100%', resizeMode: 'contain' }} />
        <Text text="Not much is known about the humble origins of Perry. Perry was found amongst his family of strays back in 2016." style={$tagline} />
        <Text text="From the very beginning, young Perry was a troublemaker. His relationship with the Borowicz' was tumultous at the start as Perry was still in his wild stray mentality." />
        <Image source={require("../../assets/images/babyPerry.jpg")} style={{ height: 500, width: '100%', resizeMode: 'contain' }} />
        <Text text="As a youth, Perry would constantly attack everything that moved. His favorite things to attack were power cords and feet!" style={[$tagline]} />
        <Text text="Even though Perry was no longer a street cat, he constantly would want to go back outside. He was so determined that he actually jumped out the 2nd story window of his home at 6 months old because he was so determined to be outside!" style={$tagline} />
        <Image source={require("../../assets/images/perry.jpeg")} style={[$tagline, { height: 500, width: '100%', resizeMode: 'stretch' }]} />
        <Text text="Overtime Perry's wild stray personality mellowed out some as he said goodbye to being a full time stray and hello to the luxurious house cat life" style={$tagline} />
        <Text text="Now a matured man, Perry has many hobbies that he loves to engage himself in on a daily basis! Some of these hobbies include:" style={$tagline} />
        <Image source={require("../../assets/images/perrySleeping.jpeg")} style={[$tagline, { height: 200, width: '100%', resizeMode: 'contain' }]} />
        <Text text="Sleeping! Perry is a very important man who has lots of priorities to attend to. This makes it absolutely essential that he rests as much as he can!" style={$tagline} />
        <Image source={require("../../assets/images/perryBox.jpg")} style={[$tagline, { height: 500, width: '100%', resizeMode: 'stretch' }]} />
        <Text text="Environmentalism! Perry is extremely committed to creating a more sustainable future for all life forms that he hasn't yet killed in the street. One of his favorite ways to help the earth is to repurpose boxes he finds into hideouts!" style={$tagline} />
        <Image source={require("../../assets/images/perryTowels.jpg")} style={[$tagline, { height: 300, width: '100%', resizeMode: 'stretch' }]} />
        <Text text="Relaxing! Perry is a laid back, chill guy so when he isn't sleeping he loves to unwind by laying on the most soft surfaces that he can find!" style={$tagline} />
        <Image source={require("../../assets/images/perryMajestic.jpeg")} style={[$tagline, { height: 550, width: '100%', resizeMode: 'stretch' }]} />
        <Text text="Modeling! Although Perry won't admit to it, he is quite the attention whore and loves to pose for the cameras. Who can blame him when he is this photogenic?" style={$tagline} />
        <Image source={require("../../assets/images/perryEclipse.jpeg")} style={[$tagline, { height: 500, width: '100%', resizeMode: 'stretch' }]} />
        <Text text="Eclipse viewing! Perry loves a good natural phenomena as much as the next guy! Here is a photo of Perry when he was observing a lunar eclipse!" style={$tagline} />
        <Image source={require("../../assets/images/perrySafety.jpeg")} style={[$tagline, { height: 500, width: '100%', resizeMode: 'stretch' }]} />
        <Text text="Public safety! Perry is very active in the community and wants to make certain that the streets are safe not only for his family, but also the surrounding neighborhood!" style={$tagline} />
        <Text text="As a sign of his dedication, Perry patrols the streets non-stop, killing numerous pests such as birds, rodents, and rabbits! His maximum range is unknown but Perry has frequently been spotted around a mile from home tending to his civic duties!" style={$tagline} />
        <Image source={require("../../assets/images/perrySerious.jpg")} style={[$tagline, { height: 500, width: '100%', resizeMode: 'stretch' }]} />
        <Text text="Overall, Perry is a loving, energetic, fierce, protective, patient, calm and silly young man. He is truly a living legend, an inspiration, and the greatest pet of all time." style={$tagline} />
      </Screen>
    )
  }

const $container: ViewStyle = {
  paddingTop: spacing.large + spacing.extraLarge,
  paddingHorizontal: spacing.large,
}

const $title: TextStyle | ImageStyle = {
  marginBottom: spacing.small,
}

const $tagline: TextStyle = {
  marginBottom: spacing.large,
}

const $description: TextStyle = {
  marginBottom: spacing.large,
}

const $sectionTitle: TextStyle = {
  marginTop: spacing.huge,
}

const $logoContainer: ViewStyle = {
  marginEnd: spacing.medium,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
}

const $logo: ImageStyle = {
  height: 38,
  width: 38,
}

// @demo remove-file
