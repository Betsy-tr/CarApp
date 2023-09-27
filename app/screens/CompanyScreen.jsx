import { 
  Image,
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from "react-native";
import React from "react";
import SPACING from "../config/SPACING";
import colors from "../config/colors";
import series from "../data/series"
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import HomeScreen from "./HomeScreen";

const logo = require("../../assets/logos/tesla.png")

const CompanyScreen = ({ navigation}) => {

  const home = () => { 

    navigation.navigate('Home')

  }

  return (
     <SafeAreaView style={{backgroundColor : colors.black}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: SPACING * 2
          }}
        >
          <Image
            style={{
              height: SPACING * 7,
              width: SPACING * 20
            }}
            source={logo}
          />
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 4,
              fontWeight: "700"
            }}
          >
            Tesla
          </Text>
          <Text
            style={{
              color: colors.light,
              marginTop: SPACING / 3
            }}
          >
            5 Séries
          </Text>
        </View>
        {series.map((item)=>(
          <LinearGradient
            key={item.id}
            colors={[colors["dark-gray"], colors.black]}
            style={{
              height: 240,
              borderRadius: SPACING * 2,
              padding: SPACING * 2,
              marginBottom: SPACING * 2
            }}
          >
            <Image 
              style={{
                width: "100%",
                height: 160
              }} 
              resizeMode="contain"
              source={item.image}
            />
            <Text 
              style={{
                color: colors.light,
                fontSize: SPACING * 1.7,
                fontWeight: "700",
                marginBottom: SPACING
              }}
            >
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text style={{color: colors.light}}> À partir du prix {item.starting_price} €</Text>
              <TouchableOpacity
                style={{
                  overflow: "hidden",
                  borderRadius: SPACING / 2
                }}
              >
                <LinearGradient 
                  style={{
                    paddingHorizontal: SPACING,
                    paddingVertical: SPACING / 2
                  }}
                  colors={[colors["dark-gray"], colors.dark]}
                >
                  <Ionicons
                    name="arrow-forward"
                    color={colors.light}
                    size={SPACING * 2}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>

          </LinearGradient>
        ))}
      </ScrollView>

      <TouchableOpacity>
        <LinearGradient 
          style={{
            padding: SPACING / 5,
            borderRadius: SPACING * 2
          }} 
          colors={[colors.light , colors.dark]}
        >
          <LinearGradient 
            style={{
              padding: SPACING * 1.6,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: SPACING * 2
            }} 
            colors={[colors["dark-gray"], colors.dark]}
          >
            <Button onPress={home}
              labelStyle={{
                color: colors.light,
                fontWeight: "800",
                fontSize: SPACING * 2
              }}
            >
              Tout voir
            </Button>
          </LinearGradient>
        </LinearGradient>
      </TouchableOpacity>
     </SafeAreaView>
  );
};

export default CompanyScreen;

const styles = StyleSheet.create({});
