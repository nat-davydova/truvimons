import React from 'react';

import CardIcon from './CardIcon/CardIcon';

import classes from './Card.module.scss';

const card = (props) => {

	return(

		<div className={classes.card}>

			<CardIcon icon={props.icon}/>

			<h5 className={classes.card_title}>{props.title}</h5>

			<div className={classes.card_descr}>
				<p>{props.descr}</p>
			</div>

		</div>

	);
};

export default card;