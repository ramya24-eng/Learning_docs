import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from "react-native";


export default function Addtodo({ submitHandler }) {
  const [value, setValue] = useState();

  const changeHandler = (val) => {
    setValue(val);
  };
  return (
    <View style={styles.content}>
      <TextInput
        style={styles.input}
        placeholder="Type a text.."
        onChangeText={changeHandler}
      />
      <Button text="ADD" onPress={submitHandler} color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    //flex: 1,
    display: "flex",
  },
  input: {
    borderBottomWidth: 2,
    borderColor: "#bbb",
    paddingBottom: 10,
    marginTop: 10,
    padding: 10,
  },
});
