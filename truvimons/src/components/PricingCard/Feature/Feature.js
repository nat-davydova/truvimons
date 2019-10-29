import React from 'react';
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import classes from './Feature.module.scss';

const feature = (props) => {

	const { active } = props;

	const featureClasses = classnames(
		classes.pricingCard_feature,
		{
			[classes.pricingCard_feature___active]: active
		}
	);

	//rendering icon
	let featureIcon = active ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />;

	return(
		<li className={featureClasses}>
			{featureIcon}
			{props.children}
		</li>
	);
};

export default feature;
