import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUserAuthenticated = () => {
  const [user, setUser] = useState<object|null>(null)
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    const fetchUser = async () => {
      let userData = await AsyncStorage.getItem('user_authenticated')
      if(userData) {
        userData = userData? JSON.parse(userData) : null
        setUser(userData)
        setLoggedIn(true)
      }
    }
    fetchUser()
  }, [user]);

  return { user, isLoggedIn }
}

export default useUserAuthenticated