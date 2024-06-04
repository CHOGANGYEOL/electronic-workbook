import React from 'react';

interface Data {
	key: string; //  data의 key
	title: string; // ex) 정보처리기사
	questions: Questions[];
}

interface Questions {
	createAt: number; // 2020
	order: number; // 차수 1회차 2회차
	total: number; // 토탈 점수 100
	content: Content[];
}

interface Content {
	question: React.ReactNode; // 질문
	answer: string[]; // 문제 리스트
	correct: number; // 정답 번호 문제리스트의 idx값으로 설정
	score: number; // 배당 점수
}

export type { Data, Questions, Content };
