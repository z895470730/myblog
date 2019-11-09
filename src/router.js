import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Entry from './routes/Entry';
import HomePage from './routes/HomePage';

const RouterConfig = ({ history }) => {
	return (
		<HashRouter history={history}>
			<Switch>
				<Route path="/" exact component={Entry}/>
				<Route path="/home" exact component={HomePage}/>
			</Switch>
		</HashRouter>
	);
};

export default RouterConfig;