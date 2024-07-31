/**
 * This file contains all application's style relative to fonts
 */
import {StyleSheet} from 'react-native';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({FontSize, Colors}) {
  return StyleSheet.create({
    textSmall: {
      fontSize: FontSize.small, //10
      color: Colors.text,
    },
    textMedium: {
      fontSize: FontSize.medium, //12
      color: Colors.text,
    },
    textRegular: {
      fontSize: FontSize.regular, //14
      color: Colors.text,
    },
    textLarge: {
      fontSize: FontSize.extraSmall * 2, //16
      color: Colors.text,
    },
    textExtraLarge: {
      fontSize: FontSize.extraSmall * 2 + 2, //18
    },
    titleSmall: {
      fontSize: FontSize.small * 2, //20
    },
    titleRegular: {
      fontSize: FontSize.medium * 2, //24
      lineHeight: 28,
    },
    titleLarge: {
      fontSize: FontSize.large * 2, //32
      lineHeight: 37,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textShadow: {
      textShadowColor: Colors.black,
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 2,
    },
  });
}
