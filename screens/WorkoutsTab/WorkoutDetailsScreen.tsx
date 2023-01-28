import React from "react";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { WorkoutStackParamList } from "./WorkoutsScreen";
import Exercise from "../../models/Exercise";

type WorkoutDetailsProps = NativeStackScreenProps<
	WorkoutStackParamList,
	"WorkoutDetails"
>;

export default function WorkoutDetailsScreen({
	navigation,
	route,
}: WorkoutDetailsProps) {
	const { workout } = route.params;

	const renderItem: ListRenderItem<Exercise> = ({ item }) => {
		return <ExercisePreview exercise={item} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={workout.exercises}
				renderItem={renderItem}
				ListFooterComponent={ListFooter}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 25,
	},
});

interface ExercisePreviewProps {
	exercise: Exercise;
}

function ExercisePreview({ exercise }: ExercisePreviewProps) {
	const getSets = (sets: number, reps: number) => {
		const tiles = [];
		for (let i = 0; i < sets; i++) {
			tiles.push(
				<View style={exerciseStyles.tile}>
					<Text style={exerciseStyles.setText}>{reps}</Text>
				</View>
			);
		}
		return tiles;
	};

	return (
		<View style={exerciseStyles.exercise}>
			<View style={exerciseStyles.textContainer}>
				<Text style={exerciseStyles.exerciseText}>{exercise.name}</Text>
				<Text
					style={exerciseStyles.exerciseText}
				>{`${exercise.sets} x ${exercise.reps} ${exercise.weight}`}</Text>
			</View>
			<View style={exerciseStyles.sets}>
				{getSets(exercise.sets, exercise.reps)}
				<View style={[exerciseStyles.tile, exerciseStyles.addTile]}>
					<Text style={[exerciseStyles.setText, exerciseStyles.addText]}>
						+
					</Text>
				</View>
			</View>
		</View>
	);
}

const exerciseStyles = StyleSheet.create({
	exercise: {
		width: "100%",
		marginTop: 15,
	},
	textContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	exerciseText: {
		color: "white",
		fontSize: 15,
	},
	sets: {
		width: "100%",
		marginTop: 15,
		flexDirection: "row",
	},
	tile: {
		height: 50,
		width: 50,
		borderRadius: 25,
		backgroundColor: "#47484B",
		alignItems: "center",
		justifyContent: "center",
		marginRight: 25,
	},
	setText: {
		color: "#9B9DA4",
		fontSize: 15,
	},
	addTile: {
		backgroundColor: "#232425",
	},
	addText: {
		fontSize: 24,
	},
});

function ListFooter() {
	return (
		<View style={footerStyle.container}>
			<Text style={footerStyle.text}>Body Weight</Text>
			<Text style={footerStyle.text}>134.5lbs</Text>
		</View>
	);
}

const footerStyle = StyleSheet.create({
	container: {
		backgroundColor: "#47484B",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: 36,
		borderRadius: 7,
		paddingHorizontal: 12,
		marginTop: 35,
	},
	text: {
		color: "white",
		fontSize: 15,
	},
});
