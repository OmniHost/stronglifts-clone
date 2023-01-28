import { FlatList, ListRenderItem, StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import Workout from "../../models/Workout";
import WorkoutComponent from "../../components/Workout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WorkoutStackParamList } from "./WorkoutsScreen";

const mockWorkouts: Workout[] = [
	{
		name: "Workout B",
		exercises: [
			{ name: "Deadlift", sets: 3, reps: 5, weight: 125 },
			{ name: "DB OHP", sets: 3, reps: 5, weight: 30 },
			{ name: "Chinups", sets: 3, reps: 5, weight: "BW" },
		],
		scheduled: new Date(),
	},
	{
		name: "Workout A",
		exercises: [
			{ name: "Squat", sets: 3, reps: 8, weight: 95 },
			{ name: "Bench", sets: 3, reps: 5, weight: 50 }, // this guys weak af
			{ name: "BB Row", sets: 3, reps: 5, weight: 65 },
		],
		scheduled: new Date(),
	},
	{
		name: "Workout B",
		exercises: [
			{ name: "Deadlift", sets: 3, reps: 5, weight: 125 },
			{ name: "DB OHP", sets: 3, reps: 5, weight: 30 },
			{ name: "Chinups", sets: 3, reps: 5, weight: "BW" },
		],
		scheduled: new Date(),
	},
	{
		name: "Workout A",
		exercises: [
			{ name: "Squat", sets: 3, reps: 8, weight: 95 },
			{ name: "Bench", sets: 3, reps: 5, weight: 50 },
			{ name: "BB Row", sets: 3, reps: 5, weight: 65 },
		],
		scheduled: new Date(),
	},
];

type WorkoutListScreenProps = NativeStackScreenProps<WorkoutStackParamList>;

export default function WorkoutListScreen({
	navigation,
}: WorkoutListScreenProps) {
	
	const renderItem: ListRenderItem<Workout> = ({ item }) => {
		return (
			<WorkoutComponent
				workout={item}
				onClick={() => {
					navigation.navigate("WorkoutDetails", { workout: item });
				}}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.list}
				data={mockWorkouts}
				renderItem={renderItem}
				ItemSeparatorComponent={() => {
					return <View style={styles.separator} />;
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 15,
		paddingHorizontal: 20,
	},
	textHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	workoutContainer: {
		backgroundColor: "red",
		width: "100%",
	},
	list: {
		width: "100%",
	},
	separator: {
		opacity: 0,
		height: 20,
	},
});
