import React from 'react';

import classes from './Image.module.scss';

const image = (props) => {

	return(
		<div className={classes.cta_img}>
			{props.children}
		</div>
	);

};

export default image;