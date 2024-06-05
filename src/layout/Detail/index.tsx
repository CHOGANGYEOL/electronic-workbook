import React, { useEffect } from 'react';

import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import context from '../../context';
import { setState } from '../../context/detailContext/action';
import Header from '../Header';

const Detail = () => {
	const { key, questionId } = useParams();
	const dispatch = context.detail.useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (key) {
			dispatch(setState({ key, questionId: Number(questionId) }));
		} else {
			toast.error('잘못된 URL입니다.');
			navigate(-1);
		}
	}, [key, questionId]);

	return (
		<React.Fragment>
			<Header />
			<Outlet />
		</React.Fragment>
	);
};

export default Detail;
