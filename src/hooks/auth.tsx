import React, { createContext, useCallback, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  CodProntuario: Number;
  Senha: string;
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
      const [token, user] = await AsyncStorage.multiGet([
         '@MeuProntuario:token', '@MeuProntuario:user']); 

      if(token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`
        setData({ token: token[1], user: JSON.parse(user[1])})
      }
      setLoading(false);
    }

     loadStorageData();
   }, [])


   const signIn = useCallback(async ({CodProntuario, Senha }) => {
     
     const response = await api.post('Usuario/login', { CodProntuario: parseInt(CodProntuario), Senha: Senha });
     
     const { token, user } = response.data;

      await AsyncStorage.multiSet([
        ['@MeuProntuario:token', token],
        ['@MeuProntuario:user', JSON.stringify(user)]
      ]); 

      setData({ token, user});
   }, []);

   const signOut = useCallback(async () => {
     await AsyncStorage.multiRemove([
       '@MeuProntuario:token',
       '@MeuProntuario:user'
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
