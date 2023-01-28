import { Pressable, Switch, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Colors from '../../../constants/Colors';

export default function WeightUnitScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [bodyIsKG, setBodyIsKG] = useState(true);
  const [exerciseIsKG, setExerciseIsKG] = useState(true);

  const toggleSwitch = () =>
    setIsEnabled((previousState: boolean) => !previousState);

  const toggleExerciseWeight = () => {};
  const toggleBodyWeight = () => {};

  return (
    <>
      {/* TODO: Make me a component when we introduce state management*/}
      {/* Section 1 -------------------------------------------------------- */}
      <View style={styles.section}>
        <Text style={styles.headerText}>Body Weight</Text>

        <Pressable
          style={styles.containerTop}
          onPress={() => setBodyIsKG(true)}
        >
          <View style={styles.verticalFlex}>
            <Text style={styles.mainText}>Kilograms</Text>
          </View>
          <View style={styles.switchWrapper}>
            <Text>{bodyIsKG ? '✓' : ''}</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.containerBottom}
          onPress={() => setBodyIsKG(false)}
        >
          <View style={styles.verticalFlex}>
            <Text style={styles.mainText}>Pounds</Text>
          </View>
          <View style={styles.switchWrapper}>
            <Text>{!bodyIsKG ? '✓' : ''}</Text>
          </View>
        </Pressable>
      </View>

      {/* Section 2 -------------------------------------------------------- */}
      <View style={styles.section}>
        <Text style={styles.headerText}>Exercise Weight</Text>
        <Pressable
          style={styles.containerTop}
          onPress={() => setExerciseIsKG(true)}
        >
          <View style={styles.verticalFlex}>
            <Text style={styles.mainText}>Kilograms</Text>
          </View>
          <View style={styles.switchWrapper}>
            <Text>{exerciseIsKG ? '✓' : ''}</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.containerBottom}
          onPress={() => setExerciseIsKG(false)}
        >
          <View style={styles.verticalFlex}>
            <Text style={styles.mainText}>Pounds</Text>
          </View>
          <View style={styles.switchWrapper}>
            <Text>{!exerciseIsKG ? '✓' : ''}</Text>
          </View>
        </Pressable>
      </View>

      {/* Section 3 -------------------------------------------------------- */}
      <View style={styles.section}>
        <Pressable style={styles.containerRound}>
          <View style={styles.verticalFlex}>
            <Text style={styles.mainText}>Body Weight</Text>
            <Text style={styles.subText}>
              Show body weight in workout screen
            </Text>
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
  containerRound: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    // Border Radius
    borderRadius: 10,
    // Border
    borderBottomWidth: 1,
    borderBottomColor: Colors.superLightGrey,
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
  headerText: {
    // paddingHorizontal: 10,
    marginHorizontal: 15,
    fontSize: 16,
  },
  mainText: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: Colors.subtextGrey,
  },
});
