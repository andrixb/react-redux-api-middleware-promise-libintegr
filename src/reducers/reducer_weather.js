import FETCH_WEATHER from '../actions/index';

// check why fetch weather label doesn't work
export default function(state = null, action) {
	switch(action.type) {
		case 'FETCH_WEATHER':
			// return state.concat([action.payload.data]); 
			// it's the same 
			return [action.payload.data, ...state];
	}
	return state;
}