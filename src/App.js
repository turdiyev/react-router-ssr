import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import homepageStyles from './homepage.scss';
import aboutStyles from './aboutpage.scss';
import { loadQuestions } from './appActions'

class Menu extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to={'/'}>Homepage</Link>
					</li>
					<li>
						<Link to={'/about'}>About</Link>
					</li>
					<li>
						<Link to={'/contact'}>Contact</Link>
					</li>
				</ul>
			</div>
		);
	}
}
class Homepage extends Component {
	render() {
		return (
			<div className={homepageStyles.component}>
				<Helmet
					title="Welcome to our Homepage"
				/>
				<Menu></Menu>
				<h1>Homepage</h1>
			</div>
		);
	}
}

class About extends Component {
	render() {
		return (
			<div className={aboutStyles.component}>
				<Helmet
					title="Welcome to our About"
				/>
				<Menu></Menu>
				<h1>About</h1>
			</div>
		);
	}
}

class Contact extends Component {
	componentDidMount() {
		this.props.loadQuestions()
	}
	render() {
		const {test} = this.props;
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
				<h1>Contact</h1>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return { test: state.test };
}
Contact = connect(mapStateToProps, { loadQuestions })(Contact)


class App extends Component {
	render(){
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
					<Route exact path='/' component={Homepage} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</div>
		);
	}
}
export default App