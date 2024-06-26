import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Transaction = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkTheme ? "#333" : "#fff",
      }}
    >
      <View style={{ alignItems: "center", marginTop: 60 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          oohps No Transaction
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Transaction;