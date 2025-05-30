import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TextInput,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { RootStackParamList } from "../Navigation/RootNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Platform } from "react-native";
import { Inter_400Regular as Inter } from "@expo-google-fonts/inter";
type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const designColor: any = {
  darkbackground: "#1A1A1A",
  color: "#FFFFFF",
  inputField: "#2A2A2A",
  textSt: "white",
  secondaryText: "B0B0B0",
  font: "inter",
  secondaryCOl: "#1652F0",
};
export default function Login({ navigation }: Props) {
  const { height, width } = useWindowDimensions();
  const [email, setEMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isfocused, setIsfocused] = useState<boolean>(false);

  const [fontLoaded] = useFonts({
    Inter,
  });

  if (!fontLoaded) {
    return <Text> see me here </Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={styles.container}>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.container2}>
              <Text style={styles.textStyle}> Login {width} </Text>

              <TextInput
                onChangeText={() => setEMail("")}
                numberOfLines={2}
                placeholder="email"
                style={[
                  styles.input,
                  { borderColor: isfocused ? "#2a2a2a" : "#B0B0B0" },
                ]}
                placeholderTextColor={"grey"}
                onFocus={() => setIsfocused(true)}
                onBlur={() => setIsfocused(false)}
              />
              <TextInput
                onChangeText={() => setPassword("")}
                placeholder="password..."
                style={[
                  styles.input,
                  { borderColor: isfocused ? "#2a2a2a" : "#B0B0B0" },
                  { shadowColor: isfocused ? "black" : "white" },
                ]}
                placeholderTextColor={"grey"}
                onFocus={() => setIsfocused(true)}
                onBlur={() => setIsfocused(false)}
              />

              <Pressable style={styles.btnstyle}>
                <Text style={styles.textStyle}> Login </Text>
              </Pressable>

              <TouchableOpacity activeOpacity={10} style={styles.touchAble}>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontFamily: "Inter",
                  }}
                >
                  {" "}
                  forgot password
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.con4}>
              <Pressable style={styles.item} onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.t1}> dont have an account </Text>
                <Text style={styles.t2}> sign in </Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: "column",
    rowGap: 25,
    backgroundColor: 'ghostwhite'
  },
  container2: {
    padding: 10,
    gap: 2,
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingTop: 42,
    columnGap: 20,
  },
  container3: {
    flex: 1,
    height: 40,
    backgroundColor: "red",
    padding: 10,
  },
  text: {
    color: "white",
  },
  input: {
    height: 50,
    borderWidth: 1.5,
    margin: 12,
    padding: 10,
    borderColor: '#bobobo',
    borderRadius: 10,
    color: "white",
  },
  inputFocused: {
    borderColor: "blue",
  },
  inputBlur: {
    borderColor: "gray",
  },
  logo: {
    resizeMode: "contain",
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 100,
    textAlign: "center",
    color: "white",
    fontFamily: Platform.select({
      android: "Inter",
      ios: "Inter",
    }),
  },
  btnstyle: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "#1652f0",
    margin: 15,
  
  },
  touchAble: {
    height: 50,
    width: "50%",
    alignItems: "center",
    padding: 5,
    justifyContent: "center",
    backgroundColor: "#222222",
    alignSelf: "center",
    borderRadius: 25,
    marginTop: 10,
  },
  con4: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent:'center'
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom:10,
  },
  t1: {
    color: "black",
    fontFamily: "Inter",
  },
  t2: {
    color: "gold",
    fontFamily: 'Inter'
  },
});
