import React from 'react';
import { Link } from "react-scroll";

import classes from './NavigationLink.module.scss';

const navigationLink = (props) => {

	return(
		<li className={classes.nav_item}>

			<Link activeClass={classes.nav_link___isActive}
				  className={classes.nav_link}
				  offset={-70}
				  title={props.title}
				  smooth={true}
				  spy={true}
				  to={props.href}>
				{props.title}
			</Link>
		</li>
	);
};

export default navigationLink;
