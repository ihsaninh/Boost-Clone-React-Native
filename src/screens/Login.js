import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import FloatingLabel from "react-native-floating-labels";

class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ paddingRight: 20, fontSize: 16, color: "#aaa" }}>
            DAFTAR
          </Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        elevation: 0.7
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 40, alignItems: "center" }}>
          <Text style={{ fontSize: 23 }}>MASUK</Text>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 40 }}>
          <FloatingLabel
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            value=""
            onBlur={this.onBlur}
          >
            Enter Your Phone Number
          </FloatingLabel>
          <FloatingLabel
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            value=""
            onBlur={this.onBlur}
          >
            Masukkan Password
          </FloatingLabel>
          <Text style={{ textAlign: "right", color: "#aaa" }}>
            Lupa password kamu?
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#EF3026",
              padding: 10,
              marginTop: 30
            }}
          >
            <Text style={{ color: "#EF3026", textAlign: "center" }}>MASUK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  formInput: {
    marginBottom: 30
  },
  labelInput: {
    fontSize: 15
  }
});

export default Login;
