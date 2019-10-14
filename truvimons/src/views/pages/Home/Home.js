import React, { Fragment } from 'react';

import ServicesSection from '../../sections/Services/Services';
import BusinessSection from '../../sections/Business/Business';
import FeaturesSection from '../../sections/Features/Features';
import CoursesSection from '../../sections/Courses/Courses';

const home = (props) => {

	return(

		<Fragment>

			<ServicesSection/>

			<BusinessSection/>

			<FeaturesSection/>

			<CoursesSection/>

		</Fragment>

	);

};

export default home;