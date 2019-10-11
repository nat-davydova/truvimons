import React from 'react';

import classes from './Title.module.scss';

const title = (props) => {

	return <h3 className={classes.section_title}>{props.children}</h3>

};

export default title;