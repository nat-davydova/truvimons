import React from 'react';

import classes from './Photo.module.scss';

const photo = (props) => {

	const { src, alt } = props;

	return(
		<div className={classes.testimonialCard_img}>
			<img src={src} alt={alt} />
		</div>
	);
};

export default photo;
