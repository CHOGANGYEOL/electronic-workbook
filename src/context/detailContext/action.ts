export const SET_KEY = 'SET_KEY';
export const SET_QUESTION_ID = 'SET_QUESTION_ID';
export const RESET_PK = 'RESET_PK';

export const setKey = (key: string) => ({
	type: SET_KEY,
	key,
});

export const setQuestionId = (questionId: number) => ({
	type: SET_QUESTION_ID,
	questionId,
});

export const resetPK = () => ({
	type: RESET_PK,
});
