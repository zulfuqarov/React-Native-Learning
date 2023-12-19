import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
const HomeScreen = () => {
  const navigation = useNavigation();
  // input password state
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [error, sererror] = useState(null);

  const CheckPassword = (text) => {
    setpassword(text);
    sererror(false);
  };
  const CheckEmail = (text) => {
    setemail(text);
  };

  const ClickSign = () => {
    if (
      password.toLowerCase() === "admin1234" &&
      email.toLowerCase() === "admin@gmail.com"
    ) {
      console.log("giris tamamlandi");
      navigation.navigate("Cards");
      setpassword("");
      setemail("");
      sererror(false);
    } else {
      alert("giris ugursuz");
      console.log("giris ugursuz!!");
      setpassword("");
      setemail("");
      sererror(true);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <ImageBackground
          source={{
            uri: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={styles.bgFon}
        >
          <View style={styles.container}>
            <Text style={styles.text}>Reustorants</Text>
          </View>
          <View style={styles.container2}>
            {/* input text start */}
            <TextInput
              placeholder="Password"
              style={[styles.InputText, error ? styles.errorText : null]}
              onChangeText={CheckPassword}
              value={password}
              secureTextEntry={true}
            />
            <TextInput
              placeholder="Email"
              style={[styles.InputText2, error ? styles.errorText : null]}
              value={email}
              onChangeText={CheckEmail}
              keyboardType="email-address"
            />
            {/* button start */}
            <TouchableOpacity
              title="Page"
              style={styles.btn}
              onPress={ClickSign}
            >
              <Text style={{ fontWeight: 100 }}> Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              title="Edit Page"
              style={styles.btn}
              onPress={() => navigation.navigate("Edit Page")}
            >
              <Text style={{ fontWeight: 100 }}> Register</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 44,
    fontWeight: "bold",
    color: "white",
    fontFamily: "",
  },
  bgFon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "white",
    color: "red",
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 20,
  },
  InputText: {
    width: 200,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    color: "black",
    opacity: 0.8,
    fontWeight: "bold",
  },
  InputText2: {
    width: 200,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    color: "black",
    opacity: 0.8,
    fontWeight: "bold",
    marginTop: 10,
  },
  errorText: {
    borderColor: "red",
    borderWidth: 2,
  },
});
