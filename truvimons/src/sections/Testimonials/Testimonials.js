import React from 'react';

import Section from '../../components/Section/Section';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

import TestImg1 from '../../assets/img/photos/test1.jpg';
import TestImg2 from '../../assets/img/photos/test2.jpg';
import TestImg3 from '../../assets/img/photos/test3.jpg';
import TestImg4 from '../../assets/img/photos/test4.jpg';

import classes from './Testimonials.module.scss';

const testimonialsSection = (props) => {
	return(
		<Section badge="testimonials"
				 className={classes.testimonials}
				 id="testimonials"
				 paddingLarge={true}
				 title="We don't hide our clients' opinion">

			<div className={classes.testimonials_inner}>

				<TestimonialCard descr="Maecenas a risus metus. Vivamus mollis nibh eu tellus"
								 name="Jane Doe"
								 src={TestImg1}
								 title="Best Experience!"/>

				<TestimonialCard descr="Nulla vitae aliquam odio, ut suscipit magna. Maecenas a risus metus."
								 name="Michael Lang"
								 src={TestImg2}
								 title="Nice work"/>

				<TestimonialCard descr="Duis enim nulla, maximus at metus vitae, faucibus. Maecenas a risus metus. Vivamus."
								 name="Linda Walker"
								 src={TestImg3}
								 title="I say just WOW!"/>

				<TestimonialCard descr="Maecenas a risus metus. Vivamus mollis nibh eu tellus"
								 name="Jonas Hays"
								 src={TestImg4}
								 title="Amazing result"/>

			</div>

		</Section>
	);
};

export default testimonialsSection;
