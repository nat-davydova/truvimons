import React from 'react';

import Title from './PricingCardTitle/PricingCardTitle';
import Feature from './PricingCardFeature/PricingCardFeature';

import classes from './PricingCard.module.scss';

const pricingCard = (props) => {

	//rendering features
	const featureArr = props.features.map(elem => {
		return <Feature active={props.active}>{elem.name}</Feature>
	});

	//rendering pricing classes
	const pricingClasses = [
		classes.pricingCard,
		props.featured ? classes.pricingCard___featured : null
	].join(' ');

	return(

		<div className={pricingClasses}>

			<Title>{props.title}</Title>

			<ul className={classes.pricingCard_featuresList}>
				{featureArr}
			</ul>

		</div>

	);
};

export default pricingCard;