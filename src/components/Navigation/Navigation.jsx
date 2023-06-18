import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<div className={styles.item}><NavLink to='/profile' activeClassName={styles.active} className={styles.itemLink}>Profile</NavLink></div>
			<div className={styles.item}><NavLink to='/dialogs' activeClassName={styles.active} className={styles.itemLink}>Messages</NavLink></div>
			<div className={styles.item}><NavLink to='/news' activeClassName={styles.active} className={styles.itemLink}>News</NavLink></div>
			<div className={styles.item}><NavLink to='/music' activeClassName={styles.active} className={styles.itemLink}>Music</NavLink></div>
			<div className={styles.item}><NavLink to='/settings' activeClassName={styles.active} className={styles.itemLink}>Settings</NavLink></div>
		</nav>
	)
}

export default Navigation