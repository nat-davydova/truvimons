import React from 'react';

import classes from './CardTitle.module.scss';

const cardTitle = (props) => {

	return <h5 className={classes.card_title}>{props.children}</h5>;
};

export default cardTitle;