import React from 'react';
import uuid from 'uuid/v1';

import Title from './Title/Title';
import Feature from './Feature/Feature';
import Price from './Price/Price';
import Button from '../UI/Button/Button';

import classes from './PricingCard.module.scss';

const pricingCard = (props) => {

	const { features, featured, title, price } = props;

	//rendering features
	const featureArr = features.map(({active, name}) => {
		return <Feature active={active}
						key={uuid()}>{name}</Feature>
	});

	return(

		<div className={classes.pricingCard}>

			<Title featured={featured}>{title}</Title>

			<ul className={classes.pricingCard_featuresList}>
				{featureArr}
			</ul>

			<Price featured={featured}
				   price={price}/>

			<div className={classes.pricingCard_btnBlock}>
				<Button active={featured}
						classname={classes.pricingCard_btn}
						category="accent"
						type="button">Buy Now</Button>
			</div>


		</div>

	);
};

export default pricingCard;
