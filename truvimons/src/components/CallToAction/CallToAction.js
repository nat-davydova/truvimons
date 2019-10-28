import React from 'react';
import uuid from 'uuid/v1';

import Title from './Title/Title';
import Description from './Description/Description';
import Button from '../UI/Button/Button';
import Image from './Image/Image';

import classes from './CallToAction.module.scss';

const callToAction = (props) => {

	const { directionReversed, title, titleLvl, description, btns } = props;

	//rendering btns block with buttons if there are any btns in CTA section
	let btnBlock;

	if(btns && btns.length > 0) {

		let btnsArr = btns.map(({active, category, type, text}) => {

			return <Button active={active}
				           category={category}
						   key={uuid()}
						   type={type}>{text}</Button>
		});

		btnBlock = <div className={classes.cta_btnBlock}>{btnsArr}</div>
	}

	//rendering image part (if any image defined)
	let imgBlock;

	if(props.children) {
		imgBlock = <Image reversed={directionReversed}>{props.children}</Image>
	}

	return(
		<div className={[
				classes.cta,
				props.children ? classes.cta___withImg : classes.cta___noImg,
				directionReversed ? classes.cta___reversed : null
			].join(' ')}>

			<div className={classes.cta_content}>

				<Title titleLvl={titleLvl}>{title}</Title>

				<Description>{description}</Description>

				{btnBlock}

			</div>

			{imgBlock}

		</div>
	);

};

export default callToAction;
