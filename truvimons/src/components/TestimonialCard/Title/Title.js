import React from 'react';

import classes from './Title.module.scss';

const title = (props) => <h4 className={classes.testimonialCard_title}>{props.children}</h4>;

export default title;
