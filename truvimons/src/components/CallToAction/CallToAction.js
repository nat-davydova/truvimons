import React from 'react';
import classnames from 'classnames';

import Title from './Title/Title';
import Description from './Description/Description';
import Image from './Image/Image';
import BtnBlock from './BtnBlock/BtnBlock';

import classes from './CallToAction.module.scss';

const callToAction = (props) => {

	const { directionReversed, title, titleLvl, description, btns } = props;

	const ctaClasses = classnames(

		classes.cta,

		{
			[classes.cta___withImg]: props.children,
			[classes.cta___noImg]: !props.children,
			[classes.cta___reversed]: directionReversed
		}
	);

	return(
		<div className={ctaClasses}>

			<div className={classes.cta_content}>

				<Title titleLvl={titleLvl}>{title}</Title>

				<Description>{description}</Description>

				{btns && btns.length > 0 && <BtnBlock btns={btns}/>}

			</div>

			{props.children && <Image reversed={directionReversed}>{props.children}</Image>}

		</div>
	);

};

export default callToAction;
