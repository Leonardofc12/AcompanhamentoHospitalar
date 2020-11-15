import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: true,
      cardStyle: { backgroundColor: "#FAFAFA"},
    }}
  >
    <Auth.Screen name="Login" component={Login} />
  </Auth.Navigator>
);

export default AuthRoutes;
