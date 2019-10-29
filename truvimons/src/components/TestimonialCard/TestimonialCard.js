import React from 'react';

import Title from './Title/Title';
import Descr from './Descr/Descr';
import Photo from './Photo/Photo';
import Name from './Name/Name';

import classes from './TestimonialCard.module.scss';

const testimonialCard = (props) => {

	const { title, descr, name, src } = props;

	return(

		<div className={classes.testimonialCard}>

			<div className={classes.testimonialCard_info}>

				<Title>{title}</Title>

				<Descr>{descr}</Descr>

				<Name>{name}</Name>

			</div>

			<Photo alt={name}
			       src={src}/>

		</div>

	);
};

export default testimonialCard;
