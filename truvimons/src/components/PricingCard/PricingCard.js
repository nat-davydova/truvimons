import React from 'react';
import uuid from 'uuid/v1';

import Title from './PricingCardTitle/PricingCardTitle';
import Feature from './PricingCardFeature/PricingCardFeature';
import Price from './PricingCardPrice/PricingCardPrice';
import Button from '../UI/Button/Button';

import classes from './PricingCard.module.scss';

const pricingCard = (props) => {

	//rendering features
	const featureArr = props.features.map(elem => {
		return <Feature active={props.active}
						key={uuid()}>{elem.name}</Feature>
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

			<Price price={props.price}/>

			<Button active={props.active}
					classname={classes.pricingCard_btn}
					category="accent"
					type="button">Buy Now</Button>

		</div>

	);
};

export default pricingCard;