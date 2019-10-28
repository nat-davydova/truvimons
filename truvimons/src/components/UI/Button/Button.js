import React from 'react';

import classes from './Button.module.scss';

const button = (props) => {

	const btnClasses = [
		classes.button,
		classes[`button___${props.category}`],
		props.active ? classes.isActive : null,
		props.className ? props.className : null
	].join(' ');

	return(
		<button
			className={btnClasses}
			title={props.children}
			type={props.type}>{props.children}</button>
	)
};

export default button;
