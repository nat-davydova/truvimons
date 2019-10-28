import React from 'react';

import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';

import { ReactComponent as LocationIcon } from '../../assets/img/icons/location.svg';
import { ReactComponent as IdeaIcon } from '../../assets/img/icons/idea.svg';
import { ReactComponent as WatchIcon } from '../../assets/img/icons/stopwatch.svg';
import { ReactComponent as ContractIcon } from '../../assets/img/icons/contract.svg';
import { ReactComponent as StrategyIcon } from '../../assets/img/icons/strategy.svg';
import { ReactComponent as EyeIcon } from '../../assets/img/icons/eye.svg';

const featuresSection = (props) => {

	return(

		<Section badge="Features"
				 descr="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Suspendisse ante arcu, consectetur id nisl eget"
				 id="features"
				 title="Our Features"
		>

			<Card descr="Suspendisse fringilla condimentum odio quis posuere. Ut condimentum massa"
				  title="Work throughout the country">
				<LocationIcon/>
			</Card>

			<Card descr="Suspendisse congue elit urna, non hendrerit dolor vehicula ornare."
				  title="Finding the right solution">
				<IdeaIcon/>
			</Card>

			<Card descr="Nunc ligula nibh, pulvinar a."
				  title="Shortest time of work">
				<WatchIcon/>
			</Card>

			<Card descr="Fusce magna eros, tincidunt in sodales vitae, pulvinar sit amet tellus."
				  title="Professional Team">
				<ContractIcon/>
			</Card>

			<Card descr="Nam in odio sollicitudin, lacinia mauris nec, fermentum augue."
				  title="Free consultation">
				<StrategyIcon/>
			</Card>

			<Card descr="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
				  title="Always in priority">
				<EyeIcon/>
			</Card>

		</Section>

	);

};

export default featuresSection;
