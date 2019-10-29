import React from 'react';

import Section from 'components/Section/Section';
import CallToAction from 'components/CallToAction/CallToAction';
import { btns } from "./constants";

import {ReactComponent as ReportImage} from "assets/img/report.svg";

const progressAppSection = (props) => {

	return(
		<Section id="app">

			<CallToAction directionReversed={true}
						  title="We have an app that show you the progress"
						  titleLvl="3"
						  description="Donec tempor tincidunt lacus, nec tristique nunc elementum et. Integer ac mattis massa, placerat gravida arcu."
						  btns = {btns}
			>
				<ReportImage/>
			</CallToAction>

		</Section>
	);

};

export default progressAppSection;
