import React from 'react';
import styles from "../assets/style/Entry.css";
import warehouse from '../assets/img/warehouse.png';
import blog from '../assets/img/blog.png';

const Entry = () => {



	return(
		<div className={styles.Entry}>
			<div className={styles.title}>Zhang&nbsp;Xv</div>
			<div className={`${styles.left} col-xs-12 col-md-6 col-lg-6`}>
				<div className={styles.infoBox}>
					<img className={styles.github} src={warehouse} alt='github'/>
				</div>
			</div>
			<div className={`${styles.right} col-xs-12 col-md-6 col-lg-6`}>
				<div className={styles.infoBox}>
					<img className={styles.github} src={blog} alt='blog'/>
				</div>
			</div>
		</div>
	)
};

export default Entry;
