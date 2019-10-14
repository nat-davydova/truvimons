import React from 'react';

import Section from '../../../components/Section/Section';
import PricingCard from '../../../components/PricingCard/PricingCard'

import classes from './Pricing.module.scss';

const pricingSection = (props) => {

	const basicFeatures = [
		{
			name: 'Email reports',
			active: true
		},

		{
			name: 'Goal tracking',
			active: true
		},

		{
			name: 'Data export',
			active: true
		},

		{
			name: '1 Device Supported',
			active: true
		},

		{
			name: 'More data history',
			active: false
		},

		{
			name: 'Video analytics',
			active: false
		},

		{
			name: 'Long term metrics',
			active: false
		},

		{
			name: 'Campaign tracking',
			active: false
		}
	];

	const optimumFeatures = [
		{
			name: 'Email reports',
			active: true
		},

		{
			name: 'Goal tracking',
			active: true
		},

		{
			name: 'Data export',
			active: true
		},

		{
			name: '3 Devices Supported',
			active: true
		},

		{
			name: 'More data history',
			active: true
		},

		{
			name: 'Video analytics',
			active: true
		},

		{
			name: 'Long term metrics',
			active: false
		},

		{
			name: 'Campaign tracking',
			active: false
		}
	];

	const advancedFeatures = [
		{
			name: 'Email reports',
			active: true
		},

		{
			name: 'Goal tracking',
			active: true
		},

		{
			name: 'Data export',
			active: true
		},

		{
			name: '5 Devices Supported',
			active: true
		},

		{
			name: 'More data history',
			active: true
		},

		{
			name: 'Video analytics',
			active: true
		},

		{
			name: 'Long term metrics',
			active: true
		},

		{
			name: 'Campaign tracking',
			active: true
		}
	];

	return(
		<Section badge="Pricing"
				 className={classes.pricing}
				 id="pricing"
				 lightMode={true}
				 title="Our Pricing Plans">


			<PricingCard title="Basic"
						 features={basicFeatures}/>

		</Section>
	)

};

export default pricingSection;