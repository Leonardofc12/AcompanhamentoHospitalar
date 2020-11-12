import React, { createContext, useCallback, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface AuthState {
  accessToken: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  senha: string;
}

interface AuthContextData{
  user: object;
  loading: boolean;
  signIn(credentials : SignInCredentials):Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [accessToken, user] = await AsyncStorage.multiGet([
         '@DoYou:token', '@DoYou:user']); 

      if(accessToken[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${accessToken[1]}`
        setData({ accessToken: accessToken[1], user: JSON.parse(user[1])})
      }
      setLoading(false);
    }

     loadStorageData();
   }, [])


   const signIn = useCallback(async ({email, senha}) => {
     const response = await api.post('Usuario/Autenticar',{
       email,
       senha
     });
     console.log(response)

     const { accessToken, user } = response.data;
     console.log(accessToken, user);
      await AsyncStorage.multiSet([
        ['@DoYou:token', accessToken],
        ['@DoYou:user', JSON.stringify(user)]
      ]); 

      setData({ accessToken, user});
   }, []);

   const signOut = useCallback(async () => {
     await AsyncStorage.multiRemove([
       '@DoYou:token',
       '@DoYou:user'
     ]);

     setData({} as AuthState);
   }, [])

   return (
     <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut}}>
       {children} 
     </AuthContext.Provider>
   )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be use within in AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
