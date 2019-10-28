import React from 'react';
import classnames from 'classnames';

import classes from './Title.module.scss';

const title = (props) => {

	const { titleLvl } = props;

	//creating custom tag for h1-h6
	const TitleLvlH = `h${titleLvl}`;

	//creating modificator to the classname to style title sizes
	const titlePropsLevel = parseInt(titleLvl);
	let titleClassLvl;

	switch(titlePropsLevel) {

		case (1):
			titleClassLvl = 'xl';
			break;

		case(2):
			titleClassLvl = 'lg';
			break;

		case(3):
			titleClassLvl = 'md';
			break;

		case(titlePropsLevel > 3):
			titleClassLvl = 'sm';
			break;

		default:
			titleClassLvl = 'md';
			break;
	}

	const titleClasses = classnames(
		classes.cta_title,
		classes[`cta_title___${titleClassLvl}`]
	);

	return <TitleLvlH className={titleClasses}>{props.children}</TitleLvlH>;

};

export default title;
