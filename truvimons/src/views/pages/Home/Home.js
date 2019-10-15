import React, { Fragment } from 'react';

import ServicesSection from '../../sections/Services/Services';
import BusinessSection from '../../sections/Business/Business';
import FeaturesSection from '../../sections/Features/Features';
import CoursesSection from '../../sections/Courses/Courses';
import ProgressAppSection from '../../sections/ProgressApp/ProgressApp';
import PricingSection from '../../sections/Pricing/Pricing';
import TestimonialsSection from '../../sections/Testimonials/Testimonials';

const home = (props) => {

	return(

		<Fragment>

			<ServicesSection/>

			<BusinessSection/>

			<FeaturesSection/>

			<CoursesSection/>

			<ProgressAppSection/>

			<PricingSection/>

			<TestimonialsSection/>

		</Fragment>

	);

};

export default home;