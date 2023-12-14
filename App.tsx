/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Nav from './Navigators';
const App = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Nav />
    </SafeAreaView>
  );
};

export default App;
