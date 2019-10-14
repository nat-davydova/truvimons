import React from 'react';

import classes from './PricingCardFeature.module.scss';

const pricingCardFeature = (props) => {

	const featureClasses = [
		classes.pricingCard_feature,
		props.active ? classes.pricingCard_feature___active : classes.pricingCard_feature___notActive
	].join(' ');

	return <li className={featureClasses}>{props.children}</li>
};

export default pricingCardFeature;