import React from 'react';
import classnames from 'classnames';

import classes from './Title.module.scss';

const title = (props) => {

	const { featured } = props;

	const titleClasses = classnames(
		classes.pricingCard_title,
		{
			[classes.pricingCard_title___featured]: featured,
		}
	);

	return <h4 className={titleClasses}>{props.children}</h4>
};

export default title;
