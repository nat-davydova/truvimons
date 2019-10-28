import React, { Component, Fragment } from 'react';

import ServicesSection from '../../sections/Services/Services';
import BusinessSection from '../../sections/Business/Business';
import FeaturesSection from '../../sections/Features/Features';
import CoursesSection from '../../sections/Courses/Courses';
import ProgressAppSection from '../../sections/ProgressApp/ProgressApp';
import PricingSection from '../../sections/Pricing/Pricing';
import TestimonialsSection from '../../sections/Testimonials/Testimonials';
import FAQSection from '../../sections/FAQ/FAQ';

class Home extends Component{

	state = {
		faqActive: null
	};

	faqHandler = (index) => {

		const oldTab = this.state.faqActive;
		let newTab = index;

		if(oldTab === newTab) {
			newTab = null;
		}

		this.setState({
			faqActive: newTab
		});

	};

	render() {

		return(

			<Fragment>

				<ServicesSection/>

				<BusinessSection/>

				<FeaturesSection/>

				<CoursesSection/>

				<ProgressAppSection/>

				<PricingSection/>

				<TestimonialsSection/>

				<FAQSection activeTab={this.state.faqActive}
							faqActiveClick={this.faqHandler}/>

			</Fragment>

		);
	}

};

export default Home;
