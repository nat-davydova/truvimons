import React from 'react';

import Title from  './FooterColTitle/FooterColTitle';

import classes from './FooterCol.module.scss';

const footerCol = (props) => {

	//render column title
	const footerTitle = props.title ? <Title>{props.title}</Title> : null;

	return(
		<div className={classes.footer_col}>
			{footerTitle}
			{props.children}
		</div> );
};

export default footerCol;