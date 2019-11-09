import React from 'react';
import styles from '../assets/style/HomePage.css'

const HomePage = () => {

	return(
		<div >
			<nav className={`${styles.nav} navbar navbar-default`}>
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
										data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<span className="navbar-brand">Brand</span>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							111
						</ul>
						<ul className="nav navbar-nav">
							111
						</ul>
					</div>
				</div>

			</nav>
		</div>
	)
};

export default HomePage;
