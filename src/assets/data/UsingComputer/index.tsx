import { MOCK_QUESTION } from './MOCK_DATA';
import { UC_2020_01 } from './UC_2020_01';
import { UC_2020_02 } from './UC_2020_02';
import { Data } from '../types';

export const USING_COMPUTER: Data = {
	title: '컴퓨터 활용 1급 필기',
	key: 'USING_COMPUTER',
	questions: [UC_2020_01, UC_2020_02, MOCK_QUESTION],
};