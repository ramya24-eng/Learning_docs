import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Make an Order</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue",
    height: 60,
    marginTop: 50,
    padding: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
  },
});
