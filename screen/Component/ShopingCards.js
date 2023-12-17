import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const ShopingCards = () => {
  return (
    <View>
      <AntDesign name="shoppingcart" size={24} color="black" style={{ marginRight: 10 }}/>
    </View>
  );
};

export default ShopingCards;

const styles = StyleSheet.create({});
