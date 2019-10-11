import React from 'react';

import classes from './CardDescr.module.scss';

const cardDescr = (props) => {

	return (
		<div className={classes.card_descr}>
			<p>{props.children}</p>
		</div>
	);
};

export default cardDescr;