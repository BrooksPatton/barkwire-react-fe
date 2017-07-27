import {createStore} from 'redux';
import {connect} from 'react-redux';

const RESET_DOGS = 'RESET_DOGS';
const ADD_ONE_DOG = 'ADD_ONE_DOG';

const initialState = {dogs: []};

function rootReducer(state=initialState, action) {
	switch (action.type) {
		case RESET_DOGS:
			return resetDogsReducer(state, action);
		case ADD_ONE_DOG:
			return addOneDogReducer(state, action);
		default:
			return state;
	}
}

function resetDogsReducer(state, action) {
	return {dogs: action.dogs};
}

function addOneDogReducer(state, action) {
	const newState = {dogs: JSON.parse(JSON.stringify(state.dogs))};
	newState.dogs.push(action.dog);
	return newState;
}

const store = createStore(rootReducer, initialState);

function mapStateToProps(state) {
	return {
		dogs: state.dogs
	};
}

function mapDispatchToProps(dispatch) {
	return {
		resetDogs: dogs => dispatch({type: RESET_DOGS, dogs}),
		addOneDog: dog => dispatch({type: ADD_ONE_DOG, dog})
	};
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export {
	connector,
	store,
	rootReducer
};
