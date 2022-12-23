import { RootTabScreenProps } from "../types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutDetailsScreen from "./WorkoutDetailsScreen";
import WorkoutListScreen from "./WorkoutListScreen";
import Workout from "../models/Workout";

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<"TabOne">) {
	return <WorkoutScreenNavigator />;
}

interface WorkoutDetailsParams {
	workout: Workout;
}
export type WorkoutStackParamList = {
	WorkoutList: undefined;
	WorkoutDetails: WorkoutDetailsParams;
};

const WorkoutStack = createNativeStackNavigator<WorkoutStackParamList>();

function WorkoutScreenNavigator() {
	return (
		<WorkoutStack.Navigator initialRouteName="WorkoutList">
			<WorkoutStack.Screen name="WorkoutList" component={WorkoutListScreen} />
			<WorkoutStack.Screen
				name="WorkoutDetails"
				component={WorkoutDetailsScreen}
			/>
		</WorkoutStack.Navigator>
	);
}
