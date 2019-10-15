import React from 'react';

import Section from '../../../components/Section/Section';
import TestimonialCard from '../../../components/TestimonialCard/TestimonialCard';

import TestImg1 from '../../../assets/img/photos/test1.jpg';

const testimonialsSection = (props) => {
	return(
		<Section badge="testimonials"
				 id="testimonials"
				 title="We don't hide our clients' opinion">

			<TestimonialCard descr="Maecenas a risus metus. Vivamus mollis nibh eu tellus"
							 src={TestImg1}
							 title="Best Experience!"/>
		</Section>
	);
};

export default testimonialsSection;