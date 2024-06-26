import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import React, { useContext } from "react";
import listData from "../Components/listData";
import { ThemeContext } from "../Context/ThemeContext";

const HomeScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkTheme ? "#333" : "#fff",
      }}
    >
      <View>
        {/* header Section */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 7,
            backgroundColor: isDarkTheme ? "#333" : "#fff",
          }}
        >
          {/* profile pic */}
          <View style={{ marginLeft: 20 }}>
            <Image source={require("../../assets/profile.png")} />
          </View>
          {/* Text Section */}
          <View style={{ marginRight: 144 }}>
            <Text
              style={{
                color: isDarkTheme ? "#fff" : "#000",
              }}
            >
              Welcome back,
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: isDarkTheme ? "#fff" : "#000",
              }}
            >
              Erica Atsu
            </Text>
          </View>
          {/* icon section*/}
          <View
            style={{
              backgroundColor: isDarkTheme ? "#333" : "#F2F2F2",
              marginRight: 20,
              borderRadius: 17,
              padding: 10,
            }}
          >
            <Image source={require("../../assets/search.png")} />
          </View>
        </View>
        {/* Card  */}
        <View
          style={{
            alignItems: "center",
            marginTop: 27,
          }}
        >
          <Image source={require("../../assets/Card.jpeg")} />
        </View>
        {/*Circles section  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
            marginTop: 35,
            marginLeft: 15,
            marginRight: 15,
            backgroundColors: isDarkTheme ? "#fff" : "#000",
          }}
        >
          {/*send */}
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: isDarkTheme ? "silver" : "#F2F2F5",
                padding: 30,
                borderRadius: 40,
              }}
            >
              <Image source={require("../../assets/send.png")} />
            </View>
            <View style={{ marginTop: 3 }}>
              <Text
                style={{
                  color: isDarkTheme ? "#fff" : "#000",
                }}
              >
                Sent
              </Text>
            </View>
          </View>

          {/* recieve */}
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: isDarkTheme ? "silver" : "#F2F2F2",
                padding: 30,
                borderRadius: 40,
              }}
            >
              <Image source={require("../../assets/recieve.png")} />
            </View>
            <View style={{ marginTop: 3 }}>
              <Text
                style={{
                  color: isDarkTheme ? "#fff" : "#000",
                }}
              >
                Recieve
              </Text>
            </View>
          </View>
          {/*loan */}
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: isDarkTheme ? "silver" : "#F2F2F2",
                padding: 30,
                borderRadius: 40,
              }}
            >
              <Image source={require("../../assets/loan.png")} />
            </View>
            <View style={{ marginTop: 3 }}>
              <Text
                style={{
                  color: isDarkTheme ? "#fff" : "#000",
                }}
              >
                Loan
              </Text>
            </View>
          </View>
          {/* TopUp */}
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: isDarkTheme ? "silver" : "#F2F2F2",
                padding: 30,
                borderRadius: 40,
              }}
            >
              <Image source={require("../../assets/topUp.png")} />
            </View>
            <View style={{ marginTop: 3 }}>
              <Text
                style={{
                  color: isDarkTheme ? "#fff" : "#000",
                }}
              >
                TopUp
              </Text>
            </View>
          </View>
        </View>

        {/* Transaction Section */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            {/* Transaction  */}
            <View>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 600,
                  color: isDarkTheme ? "#fff" : "#000",
                }}
              >
                {" "}
                Transaction
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#3F6DF6",
                }}
              >
                Sell All
              </Text>
            </View>
          </View>
          {/* Flatlist view */}
          <FlatList
            data={listData}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                  backgroundColor: isDarkTheme ? "#333" : "#fff",
                }}
              >
                {/* Image */}
                <View
                  style={{
                    backgroundColor: isDarkTheme ? "#333" : "#F2F2F2",
                    marginLeft: 19,
                    padding: 20,
                    borderRadius: 40,
                  }}
                >
                  <Image source={item.image} />
                </View>
                {/*text */}
                <View style={{ marginRight: 63 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      color: isDarkTheme ? "#fff" : "#000",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: "#636777",
                      fontSize: 14,
                      color: isDarkTheme ? "#fff" : "#000",
                    }}
                  >
                    {item.type} Entertainment
                  </Text>
                </View>
                <View style={{ marginLeft: 16 }}>
                  <Text
                    style={{
                      marginRight: 16,
                      color: isDarkTheme ? "#fff" : "#000",
                    }}
                  >
                    {item.price}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
