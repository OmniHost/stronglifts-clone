import { RootTabScreenProps } from '../../types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsListScreen from './SettingsListScreen';
import Setting from '../../models/Setting';
import AppIconScreen from './Settings/AppIconScreen';
import AppleHealthScreen from './Settings/AppleHealthScreen';
import AppleWatchScreen from './Settings/AppleWatchScreen';
import DataExportScreen from './Settings/DataExportScreen';
import DisplayAutoLockScreen from './Settings/DisplayAutoLockScreen';
import ProfileScreen from './Settings/ProfileScreen';
import ProMembershipScreen from './Settings/ProMembershipScreen';
import TimerSettingsScreen from './Settings/TimerSettingsScreen';
import WeightUnitScreen from './Settings/WeightUnitScreen';

export default function SettingsScreen({
  navigation,
}: RootTabScreenProps<'Settings'>) {
  return <SettingsScreenNavigator />;
}

// Settings interface needs a smarter approach
interface SettingsParam {
  setting: Setting;
}

export type SettingsStackParamList = {
  Settings: undefined;
  // Sub Screens
  AppIcon: SettingsParam;
  AppleHealth: SettingsParam;
  AppleWatch: SettingsParam;
  DataExport: SettingsParam;
  DisplayAutoLock: SettingsParam;
  Profile: SettingsParam;
  ProMembership: SettingsParam;
  Timer: SettingsParam;
  WeightUnit: SettingsParam;
};

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

function SettingsScreenNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsListScreen}
      ></SettingsStack.Screen>
      {/* Sub Pages */}
      <SettingsStack.Screen
        name="AppIcon"
        component={AppIconScreen}
      ></SettingsStack.Screen>
      <SettingsStack.Screen
        name="AppleHealth"
        component={AppleHealthScreen}
      ></SettingsStack.Screen>
      <SettingsStack.Screen
        name="AppleWatch"
        component={AppleWatchScreen}
      ></SettingsStack.Screen>
      <SettingsStack.Screen
        name="DataExport"
        component={DataExportScreen}
      ></SettingsStack.Screen>
      <SettingsStack.Screen
        name="DisplayAutoLock"
        component={DisplayAutoLockScreen}
      ></SettingsStack.Screen>
      <SettingsStack.Screen
        name="Profile"
        component={ProfileScreen}
      ></SettingsStack.Screen>
      <SettingsStack.Screen
        name="ProMembership"
        component={ProMembershipScreen}
      ></SettingsStack.Screen>
      <SettingsStack.Screen
        name="Timer"
        component={TimerSettingsScreen}
      ></SettingsStack.Screen>
      <SettingsStack.Screen
        name="WeightUnit"
        component={WeightUnitScreen}
      ></SettingsStack.Screen>
    </SettingsStack.Navigator>
  );
}
