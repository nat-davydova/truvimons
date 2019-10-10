import React from 'react';

import classes from './Button.module.scss';

const button = (props) => {

	const btnClasses = [
		classes.button,
		classes[props.category],
		props.active ? classes.isActive : null
	].join(' ');

	return(
		<button className={btnClasses} type={props.type}>{props.children}</button>
	)
};

export default button;