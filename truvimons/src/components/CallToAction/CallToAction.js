import React from 'react';

import Title from './Title/Title';

import classes from './CallToAction.module.scss';

const callToAction = (props) => {

	return(
		<div className={classes.CTA}>
			<Title titleLvl={props.titleLvl}>{props.title}</Title>
		</div>
	);

};

export default callToAction;