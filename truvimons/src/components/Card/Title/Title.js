import React from 'react';

import classes from './Title.module.scss';

const title = (props) => {

	return <h5 className={classes.card_title}>{props.children}</h5>;
};

export default title;