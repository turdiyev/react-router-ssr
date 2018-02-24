import React, { Component } from 'react';
import { Switch, Route, NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import homepageStyles from './homepage.scss';
import aboutStyles from './aboutpage.scss';
import { loadQuestions } from './appActions'
import routes from './routes'

class App extends Component {
	render() {
		const routeList = routes.map(({ path, component, exact }) =>
			<Route
				exact={exact}
				path={path}
				component={component}
				key={Math.random() + 'Route_'}
			/>
		);
		return (
			<div>
				<Helmet
					htmlAttributes={{ lang: "en", amp: undefined }} // amp takes no value
					titleTemplate="%s | React App"
					titleAttributes={{ itemprop: "name", lang: "en" }}
					meta={[
						{ name: "description", content: "Server side rendering example" },
						{ name: "viewport", content: "width=device-width, initial-scale=1" },
					]}
				/>
				<Switch>
					{routeList}
				</Switch>
			</div>
		);
	}
}
export default App