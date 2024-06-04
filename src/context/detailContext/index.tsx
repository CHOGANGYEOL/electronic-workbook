import { createContext, useContext, useMemo } from 'react';

import { useParams } from 'react-router-dom';

import { ALL_DATA } from '../../assets/data';
import { Content, Data, Question } from '../../assets/data/types';
import { Children } from '../../components/Common/types';

interface DetailContextValue {
	data?: Data;
	question?: Question;
	content?: Content;
}

const DetailContext = createContext<DetailContextValue | null>(null);

export const DetailProvider = ({ children }: Children) => {
	const { key, questionId } = useParams();

	const data = useMemo(() => ALL_DATA.find((el) => el.key === key), [key]);
	const question = useMemo(
		() => data?.questions.find((el) => el.questionId === Number(questionId)),
		[data, questionId],
	);

	return <DetailContext.Provider value={{ data, question }}>{children}</DetailContext.Provider>;
};

const useState = () => {
	const state = useContext(DetailContext);
	if (!state) {
		throw new Error('Cannot find DetailProvider');
	}
	return state;
};

export default { useState };
