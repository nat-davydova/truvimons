import React from 'react';
import classnames from 'classnames';

import classes from './Descr.module.scss';

const descr = (props) => {

	const { lightMode } = props;

	const descrClasses = classnames(
		classes.section_descr,
		{
			[classes.section_descr___lightMode]: lightMode,
		}
	);

	return(
		<div className={descrClasses}>
			{props.children}
		</div>
	);

};

export default descr;
