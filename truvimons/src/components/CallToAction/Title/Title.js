import React from 'react';

import classes from './Title.module.scss';

const title = (props) => {

	//creating custom tag for h1-h6
	const TitleLvl = `h${props.titleLvl}`;

	//creating modificator to the classname to style title sizes
	const titlePropsLevel = parseInt(props.titleLvl);
	let titleClassLvl;

	if (titlePropsLevel === 1) {
		titleClassLvl = 'xl'
	} else if (titlePropsLevel === 2) {
		titleClassLvl = 'lg'
	} else if (titlePropsLevel === 3) {
		titleClassLvl = 'md'
	} else if (titlePropsLevel > 3) {
		titleClassLvl = 'sm'
	}

	const titleClasses = [classes.cta_title, classes[`cta_title___${titleClassLvl}`]].join(' ');

	return(
		<TitleLvl className={titleClasses}>{props.children}</TitleLvl>
	);

};

export default title;