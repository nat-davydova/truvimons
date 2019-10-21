import React from 'react';

import classes from './Photo.module.scss';

const photo = (props) => {
	return(
		<div className={classes.testimonialCard_img}>
			<img src={props.src} alt={props.alt} />
		</div>
	);
};

export default photo;