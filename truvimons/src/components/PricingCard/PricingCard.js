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
		return <Feature active={elem.active}
						key={uuid()}>{elem.name}</Feature>
	});

	return(

		<div className={classes.pricingCard}>

			<Title featured={props.featured}>{props.title}</Title>

			<ul className={classes.pricingCard_featuresList}>
				{featureArr}
			</ul>

			<Price featured={props.featured}
				   price={props.price}/>

			<div className={classes.pricingCard_btnBlock}>
				<Button active={props.featured}
						classname={classes.pricingCard_btn}
						category="accent"
						type="button">Buy Now</Button>
			</div>


		</div>

	);
};

export default pricingCard;