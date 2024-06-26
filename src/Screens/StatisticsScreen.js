import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Statistics = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkTheme ? "#333" : "#fff",
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Statistics</Text>
      </View>
    </SafeAreaView>
  );
};

export default Statistics;