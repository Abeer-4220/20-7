import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <View style={styles.image}>
      <Image width='8px' height='8px' style={styles.image} source={require("./assets/fb.png")} />
      </View>
      <StatusBar style="auto" />
      <View style={styles.loginInput}>
        <TextInput
          style={styles.loginText}
          placeholder="Email or Phone"
          placeholderTextColor="#9eabc6"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.loginInput}>
        <TextInput
          style={styles.loginText}
          placeholder="Password"
          placeholderTextColor="#9eabc6"
          
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>
      <View style={styles.forgot_button}>
        <TouchableOpacity>
        <Text style={styles.forgot_text}>Sign Up for Facebook</Text>
      </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.forgot_text}>Forgot Password?</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b5998",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginTop: -50,
    marginBottom: 30
  },
 
  loginInput: {
    borderBottomColor: "#7387b4",
    borderBottomWidth: 3,
    width: "80%",
    height: 50,
    marginVertical: 10,
  },
 
  loginText: {
    height: 50,
    fontSize: 20,
    fontWeight: '650',
    textAlign:'left',
    padding: 10,
  },
  forgot_button: {
    marginVertical: 50
  },
  forgot_text: {
    height: 30,
    margin: 10,
    color: 'white',
    fontSize: 18,
    alignItems: 'center',
    alignSelf:'center'
  },
 
  loginButton: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#566fa5",
  },
  loginButtonText: {
    color: '#9eabc6',
    fontWeight: '900',
    fontSize: 17
  }
});














// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   TouchableOpacity,
//   Button,
//   Image,
//   Text,
//   View,
//   TouchableNativeFeedback,
// } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View>
//       <StatusBar style="auto" />
//       </View>
//       <View>
//         <Image width='100' height='100' source={require('./assets/favicon.png')}/>
//       </View>
//         <View style={styles.logIn}>
//           <TouchableOpacity>
//             <Text>LOG IN</Text>
//           </TouchableOpacity>
//         </View>
//       <View style={styles.bottomLines}>
//         <Text style={styles.bottom}>Sign Up for Facebook</Text>
//         <Text></Text>
//         <Text style={styles.bottom}>Forgot Password?</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#3b5998",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   margin: {
//     margin: 50,
//   },
//   logIn: {
//     borderRadius: 10,
//     borderColor: "white",
//     maxHeight: '50',
//     alignSelf: "center",
//   },
//   bottom: {
//     color: "white",
//     fontSize: 17,
//   },
//   bottomLines: {
//     position: "absolute",
//     bottom: 80,
//     alignItems: "center",
//   },
// });
