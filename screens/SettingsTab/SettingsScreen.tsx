import { RootTabScreenProps } from '../../types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsListScreen from './SettingsListScreen'
import Setting from '../../models/Setting';
import AppIconScreen from './Settings/AppIconScreen';

export default function SettingsScreen({
  navigation,
}: RootTabScreenProps<'Settings'>) {
  return <SettingsScreenNavigator />;
}

// Settings interface needs a smarter approach
interface SettingsDetailsParam {
  setting: Setting,
}

export type SettingsStackParamList = {
  SettingsList: undefined;
  // Sub Screens
  AppIcon: Setting;
};

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

function SettingsScreenNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='SettingsList' component={SettingsListScreen}></SettingsStack.Screen>
      {/* Sub Pages */}
      <SettingsStack.Screen name='AppIcon' component={AppIconScreen}></SettingsStack.Screen>
    </SettingsStack.Navigator>
  );
}
