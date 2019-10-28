import React from 'react';

import classes from './Descr.module.scss';

const descr = (props) => {
	return (
		<div className={classes.testimonialCard_descr}>
			<p>{props.children}</p>
		</div>);
};

export default descr;
