import React from 'react';
import uuid from 'uuid/v1';

import Section from '../../components/Section/Section';

import classes from './FAQ.module.scss';

const faqSection = (props) => {
	return(
		<Section className={classes.faq}
				 id="faq">

		</Section>
	)
};

export default faqSection;