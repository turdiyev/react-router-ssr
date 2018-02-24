import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import homepageStyles from './homepage.scss';
import aboutStyles from './aboutpage.scss';
import { loadQuestions } from './appActions';
import * as appAction from './appActions';
import Menu from './Menu'

class Home extends Component {
	static fetchData({ store }) {
		return store.dispatch(appAction.loadQuestions());
	}

	componentDidMount() {
		// this.props.loadQuestions()
	}
	render() {
		const { test } = this.props;
		const render = [];
		if (test && test.list) {
			for (let key in test.list) {
				render.push(test.list[key])
			}
		}
		return (
			<div>
				{render}
				<Helmet
					title="Welcome to our Home Page"
				/>
				<Menu></Menu>
				<h1>Home</h1>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return { test: state.test };
}
export default connect(mapStateToProps, { loadQuestions })(Home)