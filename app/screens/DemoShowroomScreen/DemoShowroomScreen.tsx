import { Link, RouteProp, useRoute } from "@react-navigation/native"
import React, { FC, ReactElement, useEffect, useRef, useState } from "react"
import {
  Dimensions,
  FlatList,
  Image,
  ImageStyle,
  Platform,
  SectionList,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { DrawerLayout, DrawerState } from "react-native-gesture-handler"
import { useSharedValue, withTiming } from "react-native-reanimated"
import { ListItem, Screen, Text } from "../../components"
import { isRTL } from "../../i18n"
import { DemoTabParamList, DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import * as Demos from "./demos"
import { DrawerIconButton } from "./DrawerIconButton"

const logo = require("../../../assets/images/logo.png")

export interface Demo {
  name?: string
  description?: string
  data: ReactElement[]
}

interface DemoListItem {
  item: { name: string; useCases: string[] }
  sectionIndex: number
  handleScroll?: (sectionIndex: number, itemIndex?: number) => void
}

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")

const WebListItem: FC<DemoListItem> = ({ item, sectionIndex }) => {
  const sectionSlug = item.name.toLowerCase()

  return (
    <View>
      <Link to={`/showroom/${sectionSlug}`} style={$menuContainer}>
        <Text preset="bold">{item.name}</Text>
      </Link>
      {item.useCases.map((u) => {
        const itemSlug = slugify(u)

        return (
          <Link key={`section${sectionIndex}-${u}`} to={`/showroom/${sectionSlug}/${itemSlug}`}>
            <Text>{u}</Text>
          </Link>
        )
      })}
    </View>
  )
}

const NativeListItem: FC<DemoListItem> = ({ item, sectionIndex, handleScroll }) => {
  return (
    <View>
      <Text onPress={() => handleScroll(sectionIndex)} preset="bold" style={$menuContainer}>
        {item.name}
      </Text>
      {item.useCases.map((u, index) => (
        <ListItem
          key={`section${sectionIndex}-${u}`}
          onPress={() => handleScroll(sectionIndex, index + 1)}
          text={u}
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
        />
      ))}
    </View>
  )
}

const ShowroomListItem = Platform.select({ web: WebListItem, default: NativeListItem })

export const DemoShowroomScreen: FC<DemoTabScreenProps<"DemoShowroom">> =
  function DemoShowroomScreen(_props) {
    const [open, setOpen] = useState(false)
    const timeout = useRef<ReturnType<typeof setTimeout>>()
    const drawerRef = useRef<DrawerLayout>()
    const listRef = useRef<SectionList>()
    const menuRef = useRef<FlatList>()
    const progress = useSharedValue(0)
    const route = useRoute<RouteProp<DemoTabParamList, "DemoShowroom">>()
    const params = route.params

    // handle Web links
    React.useEffect(() => {
      if (route.params) {
        const demoValues = Object.values(Demos)
        const findSectionIndex = demoValues.findIndex(
          (x) => x.name.toLowerCase() === params.queryIndex,
        )
        let findItemIndex = 0
        if (params.itemIndex) {
          try {
            findItemIndex =
              demoValues[findSectionIndex].data.findIndex(
                (u) => slugify(u.props.name) === params.itemIndex,
              ) + 1
          } catch (err) {
            console.error(err)
          }
        }
        handleScroll(findSectionIndex, findItemIndex)
      }
    }, [route])

    const toggleDrawer = () => {
      if (!open) {
        setOpen(true)
        drawerRef.current?.openDrawer({ speed: 2 })
      } else {
        setOpen(false)
        drawerRef.current?.closeDrawer({ speed: 2 })
      }
    }

    const handleScroll = (sectionIndex: number, itemIndex = 0) => {
      listRef.current.scrollToLocation({
        animated: true,
        itemIndex,
        sectionIndex,
      })
      toggleDrawer()
    }

    const scrollToIndexFailed = (info: {
      index: number
      highestMeasuredFrameIndex: number
      averageItemLength: number
    }) => {
      listRef.current?.getScrollResponder()?.scrollToEnd()
      timeout.current = setTimeout(
        () =>
          listRef.current?.scrollToLocation({
            animated: true,
            itemIndex: info.index,
            sectionIndex: 0,
          }),
        50,
      )
    }

    useEffect(() => {
      return () => timeout.current && clearTimeout(timeout.current)
    }, [])

    const $drawerInsets = useSafeAreaInsetsStyle(["top"])

    return (
        <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
          <View style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/images/perryHeader2.png')} style={{ width: 250, height: 250, resizeMode: 'contain', marginTop: 75 }} />
            <Text preset="heading" text="Welcome To The Official Perry App" style={{ textAlign: 'center' }} />
          </View>
        </Screen>

    )
  }

const $screenContainer: ViewStyle = {
  flex: 1,
}

const $drawer: ViewStyle = {
  flex: 1,
}

const $flatListContentContainer: ViewStyle = {
  paddingHorizontal: spacing.large,
}

const $sectionListContentContainer: ViewStyle = {
  paddingHorizontal: spacing.large,
}

const $heading: ViewStyle = {
  marginBottom: spacing.massive,
}

const $logoImage: ImageStyle = {
  // height: 42,
  // width: 77,
}

const $logoContainer: ViewStyle = {
  alignSelf: "flex-start",
  // height: 56,
  paddingHorizontal: spacing.large,
}

const $menuContainer: ViewStyle = {
  paddingBottom: spacing.extraSmall,
  paddingTop: spacing.large,
}

const $demoItemName: TextStyle = {
  fontSize: 24,
  // marginBottom: spacing.medium,
}

const $demoItemDescription: TextStyle = {
  // marginBottom: spacing.huge,
}

const $demoUseCasesSpacer: ViewStyle = {
  // paddingBottom: spacing.huge,
}

// @demo remove-file
