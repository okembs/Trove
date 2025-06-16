import React from "react";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/RootNavigator";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Inter_400Regular as Inter } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { Platform } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "SignIn">;
export default function SignIn({ navigation }: Props) {
  const [input, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [fontLoaded] = useFonts({
    Inter,
  });

  if (!fontLoaded) {
    return <Text>loading </Text>;
  }

  const handleChange = (text: any, input: any) => {
    setInputs((prev) => ({ ...prev, [input]: text }));
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "ghostwhite" }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.container2}>
              <TextInput
                placeholder="email here .. "
                style={styles.input}
                onChange={(e) => handleChange(e, "email")}
              />
              <TextInput
                placeholder="username"
                style={styles.input}
                onChange={(e) => handleChange(e, "username")}
              />
              <TextInput
                placeholder="password"
                style={styles.input}
                onChange={(e) => handleChange(e, "password")}
                secureTextEntry={true}
              />
            </View>
            <View style={{ flex: 0.4, padding: 20 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("Tab")}
              >
                <Text style={styles.txt1}> sign up </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
  },
  container2: {
    flex: 0.5,
    flexDirection: "column",
    columnGap: 10,
    padding: 15,
    backgroundColor: "ghostWhite",
  },
  input: {
    height: 50,
    borderWidth: 1.5,
    margin: 12,
    padding: 10,
    borderColor: "#DDDDDD",
    borderRadius: 10,
    color: "black",
    fontFamily: "Inter",
  },
  txt1: {
    fontFamily: Platform.select({
      ios: "Inter",
      android: "Inter",
    }),
    fontSize: 19,
    color: "white",
    textAlign: "center",
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#1652F0",
    justifyContent: "center",
    borderRadius: 40,
  },
});
