import React from 'react';

import Section from 'components/Section/Section';
import FAQCard from 'components/FAQCard/FAQCard';
import Button from 'components/UI/Button/Button';
import { faqArr } from "./constants";

import classes from './FAQ.module.scss';

const faqSection = (props) => {

	const { activeTab, faqActiveClick } = props;

	//rendering FAQ cards
	const faqCards = faqArr.map(({answer, question}, index) => {

		let activeTabBlock = false;

		if (activeTab === index) {
			activeTabBlock = true;
		}

		return(
			<FAQCard activeTab={activeTabBlock}
					 answer={answer}
					 key={index}
					 clicked={() => faqActiveClick(index)}
					 question={question}/>
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
