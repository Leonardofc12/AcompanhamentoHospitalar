import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dicionario from '../pages/Dicionario';
import Prontuario from '../pages/Prontuario';
import Perfil from '../pages/Perfil';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = createStackNavigator(); 
const Tab = createBottomTabNavigator();


function Tabs() {
  return ( 
      <Tab.Navigator 
      screenOptions={({ route }) => ({ 
         tabBarIcon: ({ focused, color, size }) => {
           let iconName = '';

           if (route.name === 'Perfil') {
             iconName = focused
               ? 'user'
               : 'user';
           }
           else if (route.name === 'Dicionario') {
             iconName = focused ? 'book' : 'book';
           }
           else if (route.name === 'Prontuario') {
             iconName = focused ? 'inbox' : 'inbox';
           }
           
           return <Icon name={iconName} size={size} color={color} />;
         }, 
       })}
       tabBarOptions={{
         activeTintColor: '#4787ff',
         inactiveTintColor: 'gray', 
       }}>
        <Tab.Screen name="Prontuario" component={Prontuario} />
        <Tab.Screen name="Dicionario" component={Dicionario} />
        <Tab.Screen name="Perfil" component={Perfil}/>
      </Tab.Navigator> 
  )
}

const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={({ route, navigation }) => ({
   })}>
    <App.Screen
      name="Dashboard" options={{headerShown: false, //headerTitle: 'Feed',
        cardStyle: { backgroundColor: "#FAFAFA"}}} component={Tabs} />
    
  </App.Navigator>
);

export default AppRoutes;