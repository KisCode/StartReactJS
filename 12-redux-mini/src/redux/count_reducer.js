let initState = 0;
export default function countReducer(previousState = initState, action) {
	console.log(previousState, action);
	const { type, data } = action;

	switch (type) {
		case 'add':
			return previousState + data;
		case 'subtract':
			return previousState - data;
		case 'addIfOdd':
			return previousState + data;
		case 'asycAdd':
			return previousState + data;
		default:
			return previousState;
	}
}
