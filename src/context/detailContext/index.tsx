import { Dispatch, createContext, useContext, useMemo, useReducer } from 'react';

import { RESET_STATE, SET_STATE, resetState, setState } from './action';
import { ALL_DATA } from '../../assets/data';
import { Content, Data, Question } from '../../assets/data/types';
import { Children } from '../../components/Common/types';

interface DetailContextValue {
	data?: Data;
	question?: Question;
	content?: Content;
}

export interface State {
	key: string | null;
	questionId: number | null;
}
const initialState: State = {
	key: null,
	questionId: null,
};

type Action = ReturnType<typeof setState> | ReturnType<typeof resetState>;
type DispatchAction = Dispatch<Action>;
const reducer = (_: State, action: Action): State => {
	switch (action.type) {
		case SET_STATE:
			return (action as ReturnType<typeof setState>).state;
		case RESET_STATE:
			return initialState;
		default:
			throw new Error('Unhandled action');
	}
};

const DetailStateContext = createContext<DetailContextValue | null>(null);
const DetailDispatchContext = createContext<DispatchAction | null>(null);

export const DetailProvider = ({ children }: Children) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { key, questionId } = state;
	const data = useMemo(() => ALL_DATA.find((el) => el.key === key), [key]);

	const question = useMemo(
		() => data?.questions.find((el) => el.questionId === Number(questionId)),
		[data, questionId],
	);

	return (
		<DetailStateContext.Provider value={{ data, question }}>
			<DetailDispatchContext.Provider value={dispatch}>{children}</DetailDispatchContext.Provider>
		</DetailStateContext.Provider>
	);
};

const useState = () => {
	const state = useContext(DetailStateContext);
	if (!state) {
		throw new Error('Cannot find DetailProvider');
	}
	return state;
};

const useDispatch = () => {
	const dispatch = useContext(DetailDispatchContext);
	if (!dispatch) {
		throw new Error('Cannot find DetailProvider');
	}
	return dispatch;
};

export default { useState, useDispatch };
