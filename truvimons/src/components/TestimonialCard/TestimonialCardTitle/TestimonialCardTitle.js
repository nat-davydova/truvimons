import React from 'react';

import classes from './TestimonialCardTitle.module.scss';

const testimonialCardTitle = (props) => {
	return <h4 className={classes.testimonialCard_title}>{props.children}</h4>
};

export default testimonialCardTitle;