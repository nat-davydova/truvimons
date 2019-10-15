import React from 'react';

import classes from './TestimonialCardDescr.module.scss';

const testimonialCardDescr = (props) => {
	return (
		<div className={classes.testimonialCard_descr}>
			<p>{props.children}</p>
		</div>);
};

export default testimonialCardDescr;