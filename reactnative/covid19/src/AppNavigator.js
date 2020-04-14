import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/Home';
import Landing from './pages/landing/Landing';
import Stats from './pages/stats/Stats';
import Chatbot from './pages/chatbot/Chatbot';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tabs.Navigator
      initialRouteName="Home"
      shifting={true}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Landing}
        options={{
          tabBarIcon: () => {
            return <Icon name="home" size={20} />;
          }
        }}
      />
      <Tabs.Screen
        name="Statstics"
        component={Stats}
        options={{
          tabBarIcon: () => {
            return <Icon name="timeline" size={20} />;
          }
        }}
      />
      <Tabs.Screen
        name="Chatbot"
        component={Chatbot}
        options={{
          tabBarIcon: () => {
            return <Icon name="chat" size={20} />;
          }
        }}
      />
    </Tabs.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
