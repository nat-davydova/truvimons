import React from 'react';
import classnames from 'classnames';

import classes from './Price.module.scss';

const price = (props) => {

	const { featured, price } = props;

	const priceClasses = classnames(
		classes.pricingCard_price,
		{
			[classes.pricingCard_price___featured]: featured,
		}
	);

	return (
		<div className={priceClasses}>
			<span>{`$${price}`}</span>/mo
		</div>
	);
};

export default price;
