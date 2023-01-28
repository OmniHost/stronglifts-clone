import Exercise from "./Exercise";

export default interface Workout {
	name: String;
	exercises: Exercise[];
	scheduled: Date;
	completed?: Date;
	note?: String;
	id?: number;
}
