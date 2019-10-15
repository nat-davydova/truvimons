import React from 'react';

import classes from './TestimonialCardPhoto.module.scss';

const testimonialCardPhoto = (props) => {
	return(
		<div className={classes.testimonialCard_img}>
			<img src={props.src} alt={props.alt} />
		</div>
	);
};

export default testimonialCardPhoto;