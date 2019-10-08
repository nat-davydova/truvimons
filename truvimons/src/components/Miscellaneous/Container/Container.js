import React from 'react';

import classes from './Container.module.scss';

const container = (props) => {

	return (
		<div className={classes.Container}>
			{props.children}
		</div>
	);

};

export default container;