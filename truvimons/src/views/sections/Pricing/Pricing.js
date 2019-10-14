import React from 'react';

import Section from '../../../components/Section/Section';

import classes from './Pricing.module.scss';

const pricingSection = (props) => {

	return(
		<Section badge="Pricing"
				 className={classes.pricing}
				 id="pricing"
				 lightMode={true}
				 title="Our Pricing Plans">

		</Section>
	)

};

export default pricingSection;