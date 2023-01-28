import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';
import Colors from '../../../constants/Colors';

function SwitchContainer() {}

export default function TimerSettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState: boolean) => !previousState);

  return (
    <>
      {/* TODO: Make me a component when we introduce state management*/}
      <View style={styles.section}>
        <Pressable style={styles.containerTop}>
          <View style={styles.verticalFlex}>
            <Text style={styles.mainText}>Timer</Text>
            <Text style={styles.subText}>Show rest timer between sets.</Text>
          </View>
          <View style={styles.switchWrapper}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            ></Switch>
          </View>
        </Pressable>
        {/* End of component */}

        {/* Notifications */}
        <Pressable style={styles.container}>
          <View style={styles.verticalFlex}>
            <Text style={styles.mainText}>Notifications</Text>
            <Text style={styles.subText}>Show rest timer between sets.</Text>
          </View>
          <View style={styles.switchWrapper}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            ></Switch>
          </View>
        </Pressable>

        {/* Individual Timers */}
        <Pressable style={styles.containerBottom}>
          <View style={styles.verticalFlex}>
            <Text style={styles.mainText}>Individual Timers</Text>
            <Text style={styles.subText}>Show rest timer between sets.</Text>
          </View>
          <View style={styles.switchWrapper}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            ></Switch>
          </View>
        </Pressable>
      </View>

      {/* Section 2 */}
      <View style={styles.section}>
        <Pressable style={styles.containerTop}>
          <View style={styles.verticalFlex}>
            <Text style={styles.mainText}>Timer Success</Text>
            <Text style={styles.subText}>Rest period after sucessful sets</Text>
          </View>
        </Pressable>

        <Pressable style={styles.containerBottom}>
          <View style={styles.verticalFlex}>
            <Text style={styles.mainText}>Timer Failure</Text>
            <Text style={styles.subText}>Rest period after failed sets</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
    // backgroundColor: '#5ee',
  },
  containerTop: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    // Border
    borderBottomWidth: 1,
    borderBottomColor: Colors.superLightGrey,
    // Border Radius
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    // Border
    borderBottomWidth: 1,
    borderBottomColor: Colors.superLightGrey,
  },
  containerBottom: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    // Border
    borderBottomWidth: 1,
    borderBottomColor: Colors.superLightGrey,
    // Border Radius
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  verticalFlex: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
    // backgroundColor: '#582ef2',
  },
  switchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: '#582',
  },
  mainText: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: Colors.subtextGrey,
  },
});
