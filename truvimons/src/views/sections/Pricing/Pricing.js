import React from 'react';

import Section from '../../../components/Section/Section';
import PricingCard from '../../../components/PricingCard/PricingCard'

import classes from './Pricing.module.scss';

const pricingSection = (props) => {

	return(
		<Section badge="Pricing"
				 className={classes.pricing}
				 id="pricing"
				 lightMode={true}
				 title="Our Pricing Plans">


			<PricingCard title="Hobby"/>

		</Section>
	)

};

export default pricingSection;