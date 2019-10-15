import React from 'react';

import classes from './PricingCardPrice.module.scss';

const pricingCardPrice = (props) => {
	
	return (
		<div className={[
				classes.pricingCard_price,
				props.featured ? classes.pricingCard_price___featured : null
			].join(' ')}>
			<span>{`$${props.price}`}</span>/mo
		</div>);
};

export default pricingCardPrice;