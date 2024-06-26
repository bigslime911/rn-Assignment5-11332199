import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./src/Screens/SettingsScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { ThemeContext, ThemeProvider } from "./src/Context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Transaction") {
            iconName = focused ? "card" : "card-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Statistics") {
            iconName = focused ? "stats-chart" : "stats-chart-outline";
          }

          // Return the Ionicons component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: isDarkTheme ? "#333" : "#fff",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
