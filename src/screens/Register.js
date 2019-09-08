import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import FloatingLabel from "react-native-floating-labels";

class Register extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        elevation: 0
      }
    };
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 20 }}>
          <View style={{ width: "50%", height: 60, marginTop: 30 }}>
            <Image
              source={require("../assets/img/boost-play.jpg")}
              style={{ width: "120%", height: 50 }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ fontSize: 16, paddingTop: 20 }}>
            Masukkan nomor telepon kamu dan verifikasi menggunakan mode OTP yang
            dikirimkan ke nomor kamu.
          </Text>
          <View style={{ marginTop: 20 }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              value="+62"
              onBlur={this.onBlur}
            >
              Masukkan nomor telepon kamu
            </FloatingLabel>
            <TouchableOpacity
              style={{
                position: "absolute",
                top: -5,
                right: 2,
                borderWidth: 1,
                borderColor: "#EF3026",
                padding: 5,
                marginTop: 30,
                width: 65,
                alignSelf: "flex-end"
              }}
            >
              <Text
                style={{ fontSize: 12, color: "#EF3026", fontWeight: "700" }}
              >
                Kirim OTP
              </Text>
            </TouchableOpacity>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              value=""
              onBlur={this.onBlur}
            >
              OTP
            </FloatingLabel>
            <TouchableOpacity
              style={{ backgroundColor: "#9C9A9C", padding: 10 }}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                VERIFIKASI
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                paddingTop: 15,
                color: "#9C9A9C",
                textAlign: "center",
                paddingHorizontal: 10
              }}
            >
              By registering, I agree to the{" "}
              <Text style={{ color: "#217F86" }}>Terms & Condition</Text> and{" "}
              <Text style={{ color: "#217F86" }}>Privacy Policy</Text> of Axiata
              Digital
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  formInput: {
    marginBottom: 30,
    position: "relative"
  },
  labelInput: {
    fontSize: 15
  }
});
export default Register;
