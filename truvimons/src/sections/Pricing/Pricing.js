import React from 'react';

import Section from 'components/Section/Section';
import PricingCard from 'components/PricingCard/PricingCard';
import { basicFeatures, optimumFeatures, advancedFeatures } from "./constants";

import classes from './Pricing.module.scss';

const pricingSection = (props) => {

	return(
		<Section badge="Pricing"
				 className={classes.pricing}
				 id="pricing"
				 lightMode={true}
				 paddingLarge={true}
				 title="Our Pricing Plans">

			<div className={classes.pricing_inner}>

				<PricingCard title="Basic"
							 features={basicFeatures}
							 price={9}/>

				<PricingCard title="Optimum"
							 features={optimumFeatures}
							 featured={true}
							 price={17}/>

				<PricingCard title="Advanced"
							 features={advancedFeatures}
							 price={31}/>

			</div>


		</Section>
	)

};

export default pricingSection;
