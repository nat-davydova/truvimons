import React from 'react';

import classes from './PricingCardPrice.module.scss';

const pricingCardPrice = (props) => {
	return <div className={classes.pricingCard_price}>{`$${props.price}/mo`}</div>
};

export default pricingCardPrice;