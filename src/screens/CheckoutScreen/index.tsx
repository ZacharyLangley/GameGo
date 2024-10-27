import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CheckoutScreen = React.memo(() => {
  return (
    <View style={styles.container}>
      <Text>CheckoutScreen!</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
