import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      passwordAgain:"",
    };
  }
  render() {
    return (
      <ScrollView style={style.container}>
        <View style={style.containerDiv}>
          <View style={style.signUp1}>
            <Text style={style.signUp1Text}>Sign up</Text>
            <TextInput
              style={[style.textInputArea, { marginBottom: 50 }]}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="username"
              value={this.state.username}
              onChangeText={(username) => {
                this.setState({ username });
                console.log(this.state.username);
              }}
            />
            <TextInput
              style={[style.textInputArea, { marginBottom: 50 }]}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="email"
              value={this.state.email}
              onChangeText={(email) => {
                this.setState({email});
                console.log(this.state.email);
              }}
            />
            <TextInput
              style={[style.textInputArea, { marginBottom: 50 }]}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="password"
              value={this.state.password}
              onChangeText={(password) => {
                this.setState({ password });
                console.log(this.state.password);
              }}
            />
            <TextInput
              style={style.textInputArea}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="password again"
              value={this.state.passwordAgain}
              onChangeText={(passwordAgain) => {
                this.setState({ passwordAgain });
                console.log(this.state.passwordAgain);
              }}
            />
            <TouchableOpacity style={style.signButtonTO}>
              <Text style={style.signUpButton}>Sign up</Text>
            </TouchableOpacity>
            <View style={style.EndText}>
              <Text style={{ fontSize: 17 }}>Already have an account?</Text>
              <TouchableOpacity>
                <Text style={style.signUpText}> Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDiv: {
    marginTop: 100,
    margin: 40,
    borderColor: "lightgrey",
    borderWidth: 4,
    borderRadius: 20,
    height: 730,
  },
  signUp1: {
    padding: 20,
  },
  signUp1Text: {
    marginVertical: 50,
    fontSize: 40,
    color: "indigo",
    fontWeight: "bold",
  },
  textInputArea: {
    borderBottomColor: "indigo",
    borderBottomWidth: 2,
    paddingBottom: 10,
    fontSize: 20,
    marginBottom: 20,
  },
  signButtonTO: {
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: "indigo",
    borderRadius: 20,
    marginBottom: 20,
  },
  signUpButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  EndText: {
    flexDirection: "row",
    alignSelf: "center",
  },
  signUpText: {
    fontSize: 17,
    color: "indigo",
  },
});
