import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator();
const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const Settings = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

const Notifications = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
    </View>
  );
};
const User = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>User</Text>
    </View>
  );
};
function Nav(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.label,
          tabBarItemStyle: {width: 120},
          tabBarScrollEnabled: true,
        }}>
        <Tab.Screen name="Tab1" component={Home} />
        <Tab.Screen name="Tab2" component={Settings} />
        <Tab.Screen name="Tab3" component={Notifications} />
        <Tab.Screen name="Tab4" component={User} />
        <Tab.Screen name="Tab5" component={Notifications} />
        <Tab.Screen name="Tab6" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: 'grey',
  },
});
export default Nav;
