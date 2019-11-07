import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Entry from './routes/Entry';

const RouterConfig = ({ history }) => {
	return (
		<HashRouter history={history}>
			<Switch>
				<Route path="/" exact component={Entry}/>
			</Switch>
		</HashRouter>
	);
};

export default RouterConfig;