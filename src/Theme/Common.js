/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from "react-native";

import buttonStyles from "./Buttons";
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        minHeight: 56,
        color: Colors.text,
        textAlignVertical: "center",
      },
      emptyText: {
        color: Colors.black,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "500",
      },
      emptyText1: {
        color: Colors.gray1,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
      },
    }),
  };
}
