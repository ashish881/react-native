import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './app/screen/OnboardingScreen';
import MobileInputScreen from './app/screen/MobileInputScreen';
import BloodGroupScreen from './app/screen/BloodGroup';

export default function App() {
  return (
    <View>
     <BloodGroupScreen></BloodGroupScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
