import React from 'react';

import classes from './Button.module.scss';

const button = (props) => {

	const { category, active, className, type } = props;

	const btnClasses = [
		classes.button,
		classes[`button___${category}`],
		active ? classes.isActive : null,
		className ? className : null
	].join(' ');

	return(
		<button
			className={btnClasses}
			title={props.children}
			type={type}>{props.children}</button>
	)
};

export default button;
