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
          <Text style={styles.headerRightStyle}>
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
        <View style={styles.loginLabelWrapper}>
          <Text style={styles.loginLabel}>MASUK</Text>
        </View>
        <View style={styles.formWrapper}>
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
          <Text style={styles.forgotPasswordLabel}>
            Lupa password kamu?
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonLabel}>MASUK</Text>
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
    fontSize: 15,
    fontFamily: 'Raleway-Regular'
  },
  headerRightStyle: {
    paddingRight: 20, 
    fontSize: 16, 
    color: "#aaa", 
    fontFamily: 'Raleway-Regular'
  },
  loginLabelWrapper: {
    marginTop: 40, 
    alignItems: "center"
  },
  loginLabel: {
    fontSize: 23, 
    fontFamily: 'Raleway-SemiBold'
  },
  formWrapper: {
    marginHorizontal: 20, 
    marginTop: 40
  },
  forgotPasswordLabel: {
    textAlign: "right", 
    color: "#aaa", 
    fontFamily: 'Raleway-Regular'
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: "#EF3026",
    padding: 10,
    marginTop: 30
  },
  buttonLabel: {
    color: "#EF3026", 
    textAlign: "center", 
    fontFamily: 'Raleway-SemiBold'
  }
});

export default Login;
