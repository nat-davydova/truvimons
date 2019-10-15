import React from 'react';

import Section from '../../../components/Section/Section';
import Carousel from "../../../containers/Carousel/Carousel";
import TestimonialCard from '../../../components/TestimonialCard/TestimonialCard';

const testimonialsSection = (props) => {
	return(
		<Section badge="testimonials"
				 id="testimonials"
				 title="We don't hide our clients' opinion">

			<Carousel>

				<TestimonialCard/>

			</Carousel>
		</Section>
	);
};

export default testimonialsSection;