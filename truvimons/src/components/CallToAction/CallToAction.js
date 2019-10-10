import React from 'react';

import Title from './Title/Title';
import Description from './Description/Description';

import classes from './CallToAction.module.scss';

const callToAction = (props) => {

	return(
		<div className={classes.CTA}>

			<Title titleLvl={props.titleLvl}>{props.title}</Title>

			<Description>{props.description}</Description>

		</div>
	);

};

export default callToAction;