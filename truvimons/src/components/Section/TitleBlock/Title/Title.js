import React from 'react';
import classnames from 'classnames';

import classes from './Title.module.scss';

const title = (props) => {

	const { lightMode } = props;

	const titleClasses = classnames(
		classes.section_title,
		{
			[classes.section_title___lightMode]: lightMode
		}
	);

	return <h3 className={titleClasses}>{props.children}</h3>

};

export default title;
