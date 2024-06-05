import { State } from '.';

export const SET_STATE = 'SET_STATE';
export const RESET_STATE = 'RESET_PK';

export const setState = (state: State) => ({
	type: SET_STATE,
	state,
});

export const resetState = () => ({
	type: RESET_STATE,
});
