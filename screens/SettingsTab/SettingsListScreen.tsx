import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { View } from '../../components/Themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SettingsStackParamList } from './SettingsScreen';
import Colours from '../../constants/Colors';

// Models
import Setting from '../../models/Settings';
import SettingsSection from '../../models/SettingsSection';




const userSettings: SettingsSection = {
  title: 'User',
  data: [
    { name: 'Profile' }, 
    { name: 'Pro Membership' }],
};

const appSettings: SettingsSection = {
  title: 'Application Settings',
  data: [
    { name: 'Timer' },
    { name: 'Weight Unit' },
    { name: 'Display Auto Lock' },
    { name: 'Apple Health' },
    { name: 'Apple Watch' },
    { name: 'App Icon' },
  ],
};

const infoSettings: SettingsSection = {
  title: 'Information',
  data: [
    { name: 'Help Center' },
    { name: 'StrongLifts 5x5 Guide' },
    { name: 'Report Issue' },
    { name: 'Request Feature' },
    { name: 'Ask Question' },
    { name: 'Rate This App' },
  ],
};

const dataSettings: SettingsSection = {
  title: 'Data',
  data: [{ name: 'Reset' }, { name: 'Export Data' }],
};

const settings: SettingsSection[] = [
  userSettings,
  appSettings,
  infoSettings,
  dataSettings,
];

type SettingsListScreenProps = NativeStackScreenProps<SettingsStackParamList>;

function assignStyle(data: Setting[], index: number) {
  if (data.length == 1) {
  }

  if (index == 0) {
    return styles.topItem;
  } else if (index + 1 == data.length) {
    return styles.bottomItem;
  } else {
    return styles.item;
  }
}

export default function SettingsListScreen({
  navigation,
}: SettingsListScreenProps) {
  const renderItem: ListRenderItem<SettingsSection> = ({ item }) => {
    // console.log('Item', item.name);
    return (
      <View style={styles.container}>
        {item.data.map((setting, index) => {
          // console.log('## Key', index);
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("SettingsDetails")
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? Colours.superLightGrey : 'white',
                },
                assignStyle(item.data, index),
              ]}
            >
              <Text style={styles.itemText}>{setting.name}</Text>
            </Pressable>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* User Settings */}
      <FlatList data={settings} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperCustom: {
    // padding: 3
    // backgroundColor: 'transparent'
  },
  wrapper: {
    paddingHorizontal: 3,
  },
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    padding: 4,
    marginHorizontal: 8,
    marginVertical: 12,
    backgroundColor: 'transparent',
  },
  item: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: Colours.superLightGrey,
    // borderColor: Colours.subtextGrey,
  },
  topItem: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    padding: 10,
  },
  bottomItem: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 10,
    borderTopWidth: 1,
    borderColor: Colours.superLightGrey,
  },
  itemText: {
    // color: '#fff',
  },
  header: {
    fontSize: 30,
    backgroundColor: '#cd3',
  },
  title: {
    fontSize: 24,
    backgroundColor: '#cd3',
    color: '#fff',
  },
});
function rgb(arg0: number, arg1: number, arg2: number): any | import("react-native").ColorValue | undefined {
  throw new Error('Function not implemented.');
}

