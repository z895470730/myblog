import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Entry from './routes/Entry';
import HomePage from './routes/HomePage';

const RouterConfig = ({ history }) => {
	return (
		<Router history={history}>
			<div style={{height:'100%'}}>
				<Route path="/" exact component={Entry}/>
				<Route path="/home" exact component={HomePage}/>
			</div>
		</Router>
	);
};

export default RouterConfig;