import React from 'react';

import Title from './Title/Title';
import Descr from './Descr/Descr';
import Photo from './Photo/Photo';
import Name from './Name/Name';

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