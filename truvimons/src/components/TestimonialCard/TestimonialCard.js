import React from 'react';

import Title from './TestimonialCardTitle/TestimonialCardTitle';
import Descr from './TestimonialCardDescr/TestimonialCardDescr';

import classes from './TestimonialCard.module.scss';

const testimonialCard = (props) => {
	return(

		<div className={classes.testimonialCard}>

			<Title>{props.title}</Title>

			<Descr>{props.descr}</Descr>

		</div>

	);
};

export default testimonialCard;