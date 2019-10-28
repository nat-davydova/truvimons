import React from 'react';

import Section from '../../components/Section/Section';
import CallToAction from '../../components/CallToAction/CallToAction';

import {ReactComponent as AnalyticsImage} from "../../assets/img/setup-analytics.svg";

const businessSection = (props) => {
	return(
		<Section id="business">
			<CallToAction directionReversed={true}
						  title="Make your business grow with us, we help you"
						  titleLvl="3"
						  description="Proin maximus varius libero, dictum placerat erat pretium vitae. Praesent sed quam quis metus elementum consequat. Morbi commodo mattis leo"
						  btns = {
						  	[
								{
									active: true,
									category: 'gradient',
									text: 'Start Now',
									type: 'button'
								}
							]
						  }
			>
				<AnalyticsImage/>
			</CallToAction>
		</Section>
	);
};

export default businessSection;
