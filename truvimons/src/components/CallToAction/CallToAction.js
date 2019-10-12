import React from 'react';
import uuid from 'uuid/v1';

import Title from './Title/Title';
import Description from './Description/Description';
import Button from '../UI/Button/Button';
import Image from './Image/Image';

import classes from './CallToAction.module.scss';

const callToAction = (props) => {

	//rendering btns block with buttons if there are any btns in CTA section
	let btnBlock;

	if(props.btns.length > 0) {

		let btns = props.btns.map(elem => {

			let key = uuid();

			return <Button active={elem.active}
				           category={elem.category}
						   key={key}
						   type={elem.type}>{elem.text}</Button>
		});

		btnBlock = <div className={classes.cta_btnBlock}>{btns}</div>
	}

	//rendering image part (if any image defined)
	let imgBlock;

	if(props.children) {
		imgBlock = <Image reversed={props.directionReversed}>{props.children}</Image>
	}

	return(
		<div className={[
				classes.cta,
				props.children ? classes.cta___withImg : classes.cta___noImg,
				props.directionReversed ? classes.cta___reversed : null
			].join(' ')}>

			<div className={classes.cta_content}>

				<Title titleLvl={props.titleLvl}>{props.title}</Title>

				<Description>{props.description}</Description>

				{btnBlock}

			</div>

			{imgBlock}

		</div>
	);

};

export default callToAction;