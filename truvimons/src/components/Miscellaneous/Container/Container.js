import React from 'react';

import classes from './Container.module.scss';

const container = (props) => (
	<div className={classes.container}>
		{props.children}
	</div>
);

export default container;
