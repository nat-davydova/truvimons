import React from 'react';

import classes from './Name.module.scss';

const testimonialCardName = (props) => {
	return <div className={classes.testimonialCard_name}>{props.children}</div>
};

export default testimonialCardName;
