import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CartScreen = React.memo(() => {
  return (
    <View style={styles.container}>
      <Text>CartScreen!</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
