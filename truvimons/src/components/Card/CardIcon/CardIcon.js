import React from 'react';

import classes from './CardIcon.scss';

const cardIcon = (props) => {

	return(

		<div className={classes.card_icon}
			 icon={props.icon}
		></div>

	);
};

export default cardIcon;