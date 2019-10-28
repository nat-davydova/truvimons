import React from 'react';

import Section from '../../components/Section/Section';
import CallToAction from '../../components/CallToAction/CallToAction';

import {ReactComponent as BusinessImage} from "../../assets/img/busines-plan.svg";

const coursesSection = (preps) => {

	return(
		<Section id="courses">

			<CallToAction directionReversed={false}
						  title="We have professional courses in real life"
						  titleLvl="3"
						  description="Proin maximus varius libero, dictum placerat erat pretium vitae. Praesent sed quam quis metus elementum consequat. Morbi commodo mattis leo"
						  btns = {
							  [
								  {
									  active: true,
									  category: 'gradient',
									  text: 'Learn More',
									  type: 'button'
								  }
							  ]
						  }
			>
				<BusinessImage/>
			</CallToAction>

		</Section>
	);

};

export default coursesSection;
