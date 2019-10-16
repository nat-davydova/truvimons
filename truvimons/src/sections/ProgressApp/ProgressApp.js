import React from 'react';

import Section from '../../../components/Section/Section';
import CallToAction from '../../../components/CallToAction/CallToAction';

import {ReactComponent as ReportImage} from "../../../assets/img/report.svg";

const progressAppSection = (preps) => {

	return(
		<Section id="courses">

			<CallToAction directionReversed={true}
						  title="We have an app that show you the progress"
						  titleLvl="3"
						  description="Donec tempor tincidunt lacus, nec tristique nunc elementum et. Integer ac mattis massa, placerat gravida arcu."
						  btns = {
							  [
								  {
									  active: true,
									  category: 'gradient',
									  text: 'Learn More',
									  type: 'button'
								  },

								  {
									  active: false,
									  category: 'gradient',
									  text: 'Load App',
									  type: 'button'
								  }
							  ]
						  }
			>
				<ReportImage/>
			</CallToAction>

		</Section>
	);

};

export default progressAppSection;