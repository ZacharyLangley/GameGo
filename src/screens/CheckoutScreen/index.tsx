import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { defaultHeaderConfig } from '../../../shared/constants/headerConfigs';
import { Receipt } from './components/Receipt';
import { Location } from './components/Location';
import { PersonalInfo } from './components/PersonalInfo';
import { CardInfo } from './components/CardInfo';
import { Button } from '@rneui/themed';

export const CheckoutHeaderConfig: NativeStackNavigationOptions = {
  title: 'Checkout',
  ...defaultHeaderConfig,
};

export const CheckoutScreen = React.memo(() => {
  return (
    <ScrollView style={styles.container}>
      <Receipt />
      <PersonalInfo />
      <Location />
      <CardInfo />
      <Button title={'Submit'} style={styles.button}/>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1 },
  button: { marginHorizontal: 20, marginTop: 20, marginBottom: 50 }
});
