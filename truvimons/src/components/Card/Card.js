import React from 'react';

import CardIcon from './CardIcon/CardIcon';
import CardTitle from './CardTitle/CardTitle';
import CardDescr from './CardDescr/CardDescr';

import classes from './Card.module.scss';

const card = (props) => {

	return(

		<div className={classes.card}>

			<CardIcon>{props.children}</CardIcon>

			<CardTitle>{props.title}</CardTitle>

			<CardDescr>
				{props.descr}
			</CardDescr>

		</div>

	);
};

export default card;