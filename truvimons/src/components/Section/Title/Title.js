import React from 'react';

import classes from './Title.module.scss';

const title = (props) => {

	const titleClasses = [
		classes.section_title,
		props.lightMode ? classes.section_title___lightMode : null
	].join(' ');

	return <h3 className={titleClasses}>{props.children}</h3>

};

export default title;