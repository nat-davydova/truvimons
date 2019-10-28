import React from 'react';

import classes from './Title.module.scss';

const title = (props) => {

	const { featured } = props;

	return <h4 className={[
			classes.pricingCard_title,
			featured ? classes.pricingCard_title___featured : null
		].join(' ')}>{props.children}</h4>
};

export default title;
