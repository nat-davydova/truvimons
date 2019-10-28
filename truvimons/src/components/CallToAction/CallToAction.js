import React, { Fragment } from 'react';

import Title from './Title/Title';
import Description from './Description/Description';
import Image from './Image/Image';
import BtnBlock from './BtnBlock/BtnBlock';

import classes from './CallToAction.module.scss';

const callToAction = (props) => {

	const { directionReversed, title, titleLvl, description, btns } = props;

	return(
		<div className={[
				classes.cta,
				props.children ? classes.cta___withImg : classes.cta___noImg,
				directionReversed ? classes.cta___reversed : null
			].join(' ')}>

			<div className={classes.cta_content}>

				<Title titleLvl={titleLvl}>{title}</Title>

				<Description>{description}</Description>

				{(btns && btns.length > 0) ? <BtnBlock btns={btns}/> : null}

			</div>

			{props.children ? <Image reversed={directionReversed}>{props.children}</Image> : null}

		</div>
	);

};

export default callToAction;
