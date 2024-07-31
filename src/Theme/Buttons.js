import { StyleSheet } from "react-native";

import Gutters from "./Gutters";
import Layout from "./Layout";

export default function ({ Colors }) {
  const base = {
    backgroundColor: Colors.primary,
    maxHeight: 40,
  };
  const rounded = {
    ...base,
    paddingVertical: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  };

  return StyleSheet.create({
    base,
    rounded,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      borderWidth: 1,
      borderRadius: 100,
      borderColor: Colors.primary,
      backgroundColor: Colors.white,
    },
  });
}
