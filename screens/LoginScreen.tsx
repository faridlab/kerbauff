import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
// import { Text, View, SafeAreaView, StyleSheet, TextInput } from "react-native"

// export default function LoginScreen({ }) {
//   const [ user, setUser ] = useState({
//     email: null,
//     password: null
//   })

//   return (
//     <SafeAreaView>
//       <TextInput
//         placeholder="Email"
//         onChangeText={(value) => console.log(value)}
//       />
//       <TextInput
//         onChangeText={(value) => console.log(value)}
//         placeholder="Password"
//         style={{ marginTop: 20 }}
//         secureTextEntry={true}
//       />
//     </SafeAreaView>
//   );
// }

export default function LoginScreen({ }) {
  const [ user, setUser ] = useState({
    email: '',
    password: ''
  })

  // useEffect(() => {
  //   console.log(111)
  // }, [user])

  const onChangeTextEmail = (value: string) => {
    const newUser = { ...user, email: value }
    setUser(newUser)
  }

  const onChangeTextPassword = (value: string) => {
    const newUser = { ...user, password: value }
    setUser(newUser)
  }

  return (
    <SafeAreaView>
      <TextInput
        value={user.email}
        placeholder="Email"
        onChangeText={onChangeTextEmail}
        style={styles.input}
        />
      <TextInput
        value={user.password}
        placeholder="Password"
        onChangeText={onChangeTextPassword}
        secureTextEntry={true}
        style={styles.input}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
