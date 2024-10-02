import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import {Screens} from '../constants/Screens';
import {
  Home,
  SearchNormal1,
  Gift,
  Profile,
  TextalignLeft,
} from 'iconsax-react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const Router = () => {
  const CustomTabBarButton = ({children}: {children: React.ReactNode}) => {
    return (
      <TouchableOpacity style={styles.button}>
        <TextalignLeft size={33} color="#ffd00c" variant="Bold" />
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Screens.Home}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#5c3ebc',
          tabBarInactiveTintColor: '#959595',
          tabBarStyle: {height: 80},
        }}>
        <Tab.Screen
          name="HomeTab"
          component={HomeNavigation}
          options={{
            tabBarIcon: ({color}) => (
              <Home size={28} color={color} variant="Bold" />
            ),
          }}
        />
        <Tab.Screen
          name="SearchTab"
          component={HomeNavigation}
          options={{
            tabBarIcon: ({color}) => <SearchNormal1 size={28} color={color} />,
          }}
        />
        <Tab.Screen
          name="List"
          component={HomeNavigation}
          options={{
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeNavigation}
          options={{
            tabBarIcon: ({color}) => (
              <Profile size={28} color={color} variant="Bold" />
            ),
          }}
        />
        <Tab.Screen
          name="Gift"
          component={HomeNavigation}
          options={{
            tabBarIcon: ({color}) => (
              <Gift size={28} color={color} variant="Bold" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  button: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#5c3ebc',
    marginTop: -8,
    borderWidth: 3,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
