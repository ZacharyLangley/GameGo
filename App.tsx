/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Navigation } from './src/navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = React.memo(() => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
});

export default App;
