/* eslint-disable no-fallthrough */

const stateDefault = {};

const GeneralReducer = (state = stateDefault, action) => {
	switch (action.type) {
		default:
			return { ...state };
	}
};

export default GeneralReducer;
