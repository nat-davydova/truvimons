import React from 'react';

import classes from './Icon.module.scss';

const icon = (props) => {

	return(

		<div className={classes.card_icon}>
			{props.children}
		</div>

	);
};

export default icon;
