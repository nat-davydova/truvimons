import React from 'react';

import classes from './CardIcon.module.scss';

const cardIcon = (props) => {

	return(

		<div className={classes.card_icon}>
			{props.children}
		</div>

	);
};

export default cardIcon;