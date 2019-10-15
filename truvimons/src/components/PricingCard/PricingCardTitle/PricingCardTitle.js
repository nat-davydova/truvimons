import React from 'react';

import classes from './PricingCardTitle.module.scss';

const pricingCardTitle = (props) => {
	return <h4 className={[
			classes.pricingCard_title,
			props.featured ? classes.pricingCard_title___featured : null
		].join(' ')}>{props.children}</h4>
};

export default pricingCardTitle;