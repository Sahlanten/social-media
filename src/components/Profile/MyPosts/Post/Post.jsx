import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
	return (
		<div className={styles.item}>
			<img alt='cat' src='https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/international-black-cat-awareness-month-e1575287719521.jpg' />
			{props.message}<br />
			likes:{props.likesCount}
		</div>
	)
}

export default Post