/* eslint-disable no-fallthrough */
import { LIGHT_MODE } from '../../util/Constant';
import { CHANGE_APPEARANCE } from '../types/GeneralType';

const stateDefault = {
	appearance: LIGHT_MODE,
};

const GeneralReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case CHANGE_APPEARANCE: {
			state.appearance = action.appearance;
			return { ...state };
		}

		default:
			return { ...state };
	}
};

export default GeneralReducer;
