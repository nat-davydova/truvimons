import React from 'react';

import CardIcon from './Icon/Icon';
import CardTitle from './Title/Title';
import CardDescr from './Descr/Descr';

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