import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { NavLink as Link } from "react-router-dom"
import { connect } from "react-redux"
import Helmet from "react-helmet"
import styleClasses from "./homepage.scss"
import * as appAction from "../../redux/actions/appActions"
import Menu from "../../components/layout/MenuComponent"

class HomeContainer extends Component {
  static fetchData({ store }) {
    return store.dispatch(appAction.loadQuestions())
  }

  componentDidMount() {
    this.props.loadQuestions()
  }
  render() {
    const { app } = this.props
    let render = "test"
    if (app && app.res) {
      // app.res.map((v, k) => {
      // 	render += ' ' + v;
      // })
    }
    return (
      <div className={styleClasses.component}>
        <Helmet title="Welcome to our Home Page" />
        <Menu />
        {render}

        <h1>Home</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { app: state.app }
}
export default connect(mapStateToProps, {
  loadQuestions: appAction.loadQuestions
})(HomeContainer)
