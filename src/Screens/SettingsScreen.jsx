import { View, Text, SafeAreaView, Switch } from "react-native";
import React from "react";
import { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "../Context/ThemeContext";
import { AntDesign } from "@expo/vector-icons";

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkTheme ? "#121212" : "#fff",
      }}
    >
      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: isDarkTheme ? "#333" : "#fff",
        }}
      >
        {/* header */}
        <View style={{ marginTop: 40, alignItems: "center" }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: isDarkTheme ? "#fff" : "#000",
            }}
          >
            Settings
          </Text>
        </View>
        {/** list  */}
        <View style={{ marginTop: 80 }}>
          {/** language */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              padding: 10,
            }}
          >
            {/** text */}
            <View style={{}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: isDarkTheme ? "#fff" : "#000",
                }}
              >
                {" "}
                Language
              </Text>
            </View>
            {/** icon */}
            <View>
              <AntDesign name="right" size={24} color={"#7e848d"} />
            </View>
          </View>
        </View>

        {/** language */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            padding: 10,
            marginTop: 30,
          }}
        >
          {/** text */}
          <View style={{}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: isDarkTheme ? "#fff" : "#000",
              }}
            >
              {" "}
              My Profile
            </Text>
          </View>
          {/** icon */}
          <View>
            <AntDesign name="right" size={24} color={"#7e848d"} />
          </View>
        </View>

        {/** language */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            padding: 10,
            marginTop: 30,
          }}
        >
          {/** text */}
          <View style={{}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: isDarkTheme ? "#fff" : "#000",
              }}
            >
              Contact Us
            </Text>
          </View>
          {/** icon */}
          <View>
            <AntDesign name="right" size={24} color={"#7e848d"} />
          </View>
        </View>

        {/** language */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            padding: 10,
            marginTop: 30,
          }}
        >
          {/** text */}
          <View style={{}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: isDarkTheme ? "#fff" : "#000",
              }}
            >
              Change Passwords
            </Text>
          </View>
          {/** icon */}
          <View>
            <AntDesign name="right" size={24} color={"#7e848d"} />
          </View>
        </View>

        {/** language */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            padding: 10,
            marginTop: 30,
            color: isDarkTheme ? "#fff" : "#000",
          }}
        >
          {/** text */}
          <View style={{}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: isDarkTheme ? "#fff" : "#000",
              }}
            >
              Privacy Policy
            </Text>
          </View>
          {/** icon */}
          <View style={{ color: isDarkTheme ? "#fff" : "#000" }}>
            <AntDesign name="right" size={24} color={"#7e848d"} />
          </View>
        </View>

        {/* Text */}
        <View style={{ marginTop: 55 }}>{/* ... */}</View>
        {/* theme  */}
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          {/* Text  */}
          <View>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: isDarkTheme ? "#fff" : "#000",
              }}
            >
              Theme
            </Text>
          </View>
          {/* Switch  */}
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#32CD32" }}
              thumbColor={isDarkTheme ? "#fff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleTheme}
              value={isDarkTheme}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
