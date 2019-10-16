import React from 'react';
import uuid from 'uuid/v1';

import Section from '../../components/Section/Section';

import classes from './FAQ.module.scss';

const faqSection = (props) => {
	return(
		<Section badge="faq"
				 className={classes.faq}
				 id="faq"
				 paddingLarge={true}
				 title="New user? Let’s get started with these basics">

		</Section>
	)
};

export default faqSection;