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
  TouchableNativeFeedback,
} from "react-native";
import { KeyboardAvoidingView } from "react-native-web";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <View style={styles.image_position}>
        
      <Image style={styles.image} source={require("./assets/fb.png")} />
      
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
      <View style={styles.loginButton}>
      <TouchableOpacity>
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity>
        <Text style={styles.loginButtonText}>SIGN UP</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.forgot_button}>
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
    width:50,
    height:50,
    resizeMode: 'contain'
  },
  image_position: {
    marginTop: -50,
    marginBottom: 30,
    resizeMode:'contain'
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
    color:'white'
  },
  forgot_button: {
    position: 'absolute',
    alignContent:'flex-end',
    justifyContent:'flex-end',
    bottom: 70
  },
  forgot_text: {
    height: 30,
    color: 'white',
    fontSize: 17,
    alignItems: 'center',
    alignSelf:'center'
  },
 
  loginButton: {
    width: "80%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#566fa5",
  },
  loginButtonText: {
    color: '#9eabc6',
    fontWeight: '700',
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
