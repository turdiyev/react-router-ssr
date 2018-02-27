import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import homepageStyles from './homepage.scss';
import aboutStyles from './aboutpage.scss';
import { loadQuestions } from './appActions'
import Menu from './Menu'

class AboutContainer extends Component {
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
					title="Welcome to our About"
				/>
				 <Menu></Menu> 
				<h1>About</h1>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return { test: state.test };
}
export default connect(mapStateToProps, { loadQuestions })(About);