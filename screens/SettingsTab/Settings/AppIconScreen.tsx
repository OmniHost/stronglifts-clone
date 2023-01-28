import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Setting from '../../../models/Setting'

interface SetitngsProps {
  setting: Setting;
  onClick?: () => void;
}


export default function AppIconScreen({ setting }: SetitngsProps) {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>App Icon Screen{'\n\n'}</Text>
      <Text>This may be implemented later when we deploy</Text>
    </View>
  );
}

const styles = StyleSheet.create({})