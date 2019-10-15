import React from 'react';

import Title from './TestimonialCardTitle/TestimonialCardTitle';
import Descr from './TestimonialCardDescr/TestimonialCardDescr';
import Photo from './TestimonialCardPhoto/TestimonialCardPhoto';
import Name from './TestimonialsCardName/TestimonialsCardName';

import classes from './TestimonialCard.module.scss';

const testimonialCard = (props) => {
	return(

		<div className={classes.testimonialCard}>

			<div className={classes.testimonialCard_info}>

				<Title>{props.title}</Title>

				<Descr>{props.descr}</Descr>

				<Name>{props.name}</Name>

			</div>

			<Photo alt={props.name}
			       src={props.src}/>

		</div>

	);
};

export default testimonialCard;