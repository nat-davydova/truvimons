import React from 'react';
import uuid from 'uuid/v1';

import Section from '../../components/Section/Section';
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