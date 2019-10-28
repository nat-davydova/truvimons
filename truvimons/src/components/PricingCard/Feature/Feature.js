import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import classes from './Feature.module.scss';

const feature = (props) => {

	const featureClasses = [
		classes.pricingCard_feature,
		props.active ? classes.pricingCard_feature___active : null
	].join(' ');

	//rendering icon
	let featureIcon;

	if(props.active) {
		featureIcon = <FontAwesomeIcon icon={faCheck} />
	} else {
		featureIcon = <FontAwesomeIcon icon={faTimes} />
	}

	return(
		<li className={featureClasses}>
			{featureIcon}
			{props.children}
		</li>
	);
};

export default feature;
