import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './App/src/navigation/AppNavigator';

export default function App() {
  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}