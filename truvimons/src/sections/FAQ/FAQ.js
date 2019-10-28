import React from 'react';

import Section from '../../components/Section/Section';
import FAQCard from '../../components/FAQCard/FAQCard';
import Button from '../../components/UI/Button/Button';

import classes from './FAQ.module.scss';

const faqSection = (props) => {

	const { activeTab, faqActiveClick } = props;

	const faqArr = [
		{
			question: 'How long are analytics stored?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.'
		},

		{
			question: 'Can I share a report with multiple people at the same time?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.'
		},

		{
			question: 'How often is data refreshed?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.'
		},

		{
			question: 'What happens to my data if my social account is disconnected?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.'
		},

		{
			question: 'Why don’t I see any data for my Facebook Page?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.'
		},

		{
			question: 'When does data begin being collected?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.'
		}
	];

	//rendering FAQ cards
	const faqCards = faqArr.map((elem, index) => {

		let activeTabBlock = false;

		if (activeTab === index) {
			activeTabBlock = true;
		}

		return(
			<FAQCard activeTab={activeTabBlock}
					 answer={elem.answer}
					 key={index}
					 clicked={() => faqActiveClick(index)}
					 question={elem.question}/>
		);

	});

	return(
		<Section badge="faq"
				 className={classes.faq}
				 id="faq"
				 paddingLarge={true}
				 title="New user? Let’s get started with these basics">

			<div className={classes.faq_inner}>

				{faqCards}

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
