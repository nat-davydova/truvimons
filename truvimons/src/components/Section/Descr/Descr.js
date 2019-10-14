import React from 'react';

import classes from './Descr.module.scss';

const descr = (props) => {

	const descrClasses = [
		classes.section_descr,
		props.lightMode ? classes.section_descr___lightMode : null
	].join(' ');

	return(
		<div className={descrClasses}>
			{props.children}
		</div>
	);

};

export default descr;