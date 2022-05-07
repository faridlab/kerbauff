import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import useUserAuthenticated from '../hooks/useUserAuthenticated';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useEffect } from 'react';

export default function SplashScreen({ }) {
  const navigation = useNavigation();
  const { isLoggedIn } = useUserAuthenticated()

  useEffect(() => {
    if(isLoggedIn) {
      console.log('SUCCESS LOGED IN');
    } else {
      navigation.dispatch(StackActions.replace('Login'));
    }
  }, [isLoggedIn]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Splash</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
