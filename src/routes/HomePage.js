import React from 'react';
import styles from '../assets/style/HomePage.css';

const HomePage = () => {
	return(
		<div className={styles.HomePage}>
			<nav className={`${styles.header} navbar navbar-default`}>
				<div className={styles.title}>HTML</div>
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
										data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className={`${styles.line} icon-bar`}> </span>
							<span className={`${styles.line} icon-bar`}> </span>
							<span className={`${styles.line} icon-bar`}> </span>
						</button>
						<span className={`${styles.logo} navbar-brand`}>zhang xv</span>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li>111</li>
							<li>111</li>
							<li>111</li>
							<li>111</li>
						</ul>
						<ul className="nav navbar-nav">
							111
						</ul>
					</div>
				</div>
			</nav>
			<mian className={styles.body}>
				这里是文章列表
			</mian>
			<footer className={styles.footer}>
				©zhangxv 2019-2020
			</footer>
		</div>
	)
};

export default HomePage;
