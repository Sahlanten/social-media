import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div >
			<div>
				<img alt='#' src='https://hips.hearstapps.com/hmg-prod/images/beach-quotes-1559667853.jpg?crop=1.00xw:0.753xh;0,0.201xh&resize=1200:*'></img>
			</div>

			<div className={styles.descriptionBlock}>
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo