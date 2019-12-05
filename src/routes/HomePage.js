import React from 'react';
import styles from '../assets/style/HomePage.css';
import Article from '../components/Article';

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
					<div className={`${styles.navBox} collapse navbar-collapse`} id="bs-example-navbar-collapse-1">
						<ul className={`${styles.navMenu} nav navbar-nav`}>
							<li>首页</li>
							<li>文章</li>
							<li>日志</li>
							<li>GitHub</li>
						</ul>
					</div>
				</div>
				<div className={styles.category}>
					html
				</div>
			</nav>
			<main className={styles.body}>
				<Article/>
			</main>
			<footer className={styles.footer}>
				©zhangxv 2019-2020
			</footer>
		</div>
	)
};

export default HomePage;
