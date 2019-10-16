import React from 'react';

import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';

import { ReactComponent as AnalisysIcon } from '../../assets/img/icons/market-analysis.svg';
import { ReactComponent as PromotionIcon } from '../../assets/img/icons/app-promotion.svg';
import { ReactComponent as LandingIcon } from '../../assets/img/icons/landing-analysis.svg';

const servicesSection = (props) => {
	return(

		<Section badge="Services"
				 descr="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
Curae Suspendisse ante arcu, consectetur id nisl eget"
				 id="services"
				 title="Services that we provide">

			<Card descr="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
there live the blind texts"
				  title="Market analysis">
				<AnalisysIcon title="Market analysis"/>
			</Card>

			<Card descr="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
ocean."
				  title="App Promotion">
				<PromotionIcon title="App Promotion"/>
			</Card>

			<Card descr="A small river named Duden flows by their place and supplies it with the necessary."
				  title="Landing Analysis">
				<LandingIcon title="Landing Analysis"/>
			</Card>

		</Section>

	);
};

export default servicesSection;