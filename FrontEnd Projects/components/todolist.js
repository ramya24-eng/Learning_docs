import React from "react";
import {
  Text,
  View,
  Stylesheet,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Todolist({ item, pressHandler }) {
  console.log(item);
  return (
    <TouchableOpacity
      onPress={() => {
        pressHandler(item.key);
      }}
    >
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.text}>{item.list} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "dashed",
    padding: 16,
    marginTop: 16,
    flexDirection:'row'
  },
  text:{
    marginLeft:10,
  }
});
