import React from 'react';

import classes from './Title.module.scss';

const title = (props) => {

	const TitleLvl = `h${props.titleLvl}`;

	return(
		<TitleLvl>{props.children}</TitleLvl>
	);

};

export default title;