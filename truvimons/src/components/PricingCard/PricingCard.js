import React from 'react';

import Title from './PricingCardTitle/PricingCardTitle';

import classes from './PricingCard.module.scss';

const pricingCard = (props) => {

	const pricingClasses = [
		classes.pricingCard,
		props.featured ? classes.pricingCard___featured : null
	].join(' ');

	return(

		<div className={pricingClasses}>

			<Title>{props.title}</Title>

		</div>

	);
};

export default pricingCard;