import React from 'react';
import uuid from 'uuid/v1';

import Section from '../../components/Section/Section';
import FAQCard from '../../components/FAQCard/FAQCard';
import Button from '../../components/UI/Button/Button';

import classes from './FAQ.module.scss';

const faqSection = (props) => {
	return(
		<Section badge="faq"
				 className={classes.faq}
				 id="faq"
				 paddingLarge={true}
				 title="New user? Let’s get started with these basics">

			<div className={classes.faq_inner}>

				<FAQCard answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet."
						 key={uuid()}
						 question="How long are analytics stored?"/>

				<FAQCard answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet."
						 key={uuid()}
						 question="Can I share a report with multiple people at the same time?"/>

				<FAQCard answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet."
						 key={uuid()}
						 question="How often is data refreshed?"/>

				<FAQCard answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet."
						 key={uuid()}
						 question="What happens to my data if my social account is disconnected?"/>

				<FAQCard answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet."
						 key={uuid()}
						 question="Why don’t I see any data for my Facebook Page?"/>

				<FAQCard answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet."
						 key={uuid()}
						 question="When does data begin being collected?"/>

			</div>

			<div className={classes.faq_btn}>
				<Button category="gradient"
						type="button">
					Explore More
				</Button>
			</div>

		</Section>
	)
};

export default faqSection;