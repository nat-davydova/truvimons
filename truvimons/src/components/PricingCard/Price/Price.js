import React from 'react';

import classes from './Price.module.scss';

const price = (props) => {

	const { featured, price } = props;

	return (
		<div className={[
				classes.pricingCard_price,
				featured ? classes.pricingCard_price___featured : null
			].join(' ')}>
			<span>{`$${price}`}</span>/mo
		</div>);
};

export default price;
